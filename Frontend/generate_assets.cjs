const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const srcPath = 'C:/Users/krishna kumar A D/.gemini/antigravity-ide/brain/207265f7-9e3a-41ed-b35d-472b23123d20/.user_uploaded/media_1786792785243.jpg';
const publicDir = path.join(__dirname, 'public');

async function makeTransparent(inputBuffer) {
  const { data, info } = await sharp(inputBuffer)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  // Make pure white or near white transparent
  for (let i = 0; i < data.length; i += channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    // Check brightness
    if (r > 248 && g > 248 && b > 248) {
      data[i + 3] = 0; // Transparent
    } else if (r > 230 && g > 230 && b > 230) {
      // Soft edge anti-aliasing
      const alpha = Math.max(0, Math.min(255, (255 - ((r + g + b) / 3)) * 10));
      data[i + 3] = Math.round(alpha);
    }
  }

  return sharp(data, {
    raw: {
      width,
      height,
      channels
    }
  }).png().toBuffer();
}

// Generate ICO header & directory structure for multi-size favicon (16, 32, 48)
function createIco(pngBuffers) {
  const count = pngBuffers.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  const totalDirSize = headerSize + count * dirEntrySize;

  let currentOffset = totalDirSize;
  const dirEntries = [];

  for (const item of pngBuffers) {
    const entry = Buffer.alloc(dirEntrySize);
    entry.writeUInt8(item.width === 256 ? 0 : item.width, 0); // width
    entry.writeUInt8(item.height === 256 ? 0 : item.height, 1); // height
    entry.writeUInt8(0, 2); // color palette
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(item.buffer.length, 8); // size of image data
    entry.writeUInt32LE(currentOffset, 12); // offset
    dirEntries.push(entry);
    currentOffset += item.buffer.length;
  }

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // ICO type (1 for icon)
  header.writeUInt16LE(count, 4); // image count

  return Buffer.concat([header, ...dirEntries, ...pngBuffers.map(p => p.buffer)]);
}

async function run() {
  console.log('Reading source image from:', srcPath);
  const rawInput = fs.readFileSync(srcPath);

  // 1. Process high-res clean logo (both with white background and transparent)
  const trimmed = await sharp(rawInput).trim({ threshold: 10 }).toBuffer();
  
  // Pad slightly to keep square aspect ratio with comfortable margins
  const trimmedMeta = await sharp(trimmed).metadata();
  const maxDim = Math.max(trimmedMeta.width, trimmedMeta.height);
  const paddedSize = Math.round(maxDim * 1.08); // 8% padding for aesthetic breathing room

  const paddedSquareWhite = await sharp(trimmed)
    .resize(paddedSize, paddedSize, {
      fit: 'contain',
      background: { r: 255, g: 255, b: 255, alpha: 1 }
    })
    .png()
    .toBuffer();

  const paddedSquareTransparent = await makeTransparent(paddedSquareWhite);

  // Save full logos
  await sharp(paddedSquareWhite).resize(512, 512).png().toFile(path.join(publicDir, 'logo-white.png'));
  await sharp(paddedSquareTransparent).resize(512, 512).png().toFile(path.join(publicDir, 'logo.png'));
  await sharp(paddedSquareTransparent).resize(512, 512).png().toFile(path.join(publicDir, 'hexoraflow-logo.png'));
  await sharp(paddedSquareWhite).resize(512, 512).png().toFile(path.join(publicDir, 'iconn.png'));

  // Save specific sizes for Google, Apple, PWA
  const sizes = [
    { name: 'icon-48x48.png', size: 48, transparent: false },
    { name: 'icon-96x96.png', size: 96, transparent: false },
    { name: 'icon-144x144.png', size: 144, transparent: false },
    { name: 'icon-192x192.png', size: 192, transparent: false },
    { name: 'icon-512x512.png', size: 512, transparent: false },
    { name: 'apple-touch-icon.png', size: 180, transparent: false },
    { name: 'apple-touch-icon-precomposed.png', size: 180, transparent: false }
  ];

  for (const item of sizes) {
    const src = item.transparent ? paddedSquareTransparent : paddedSquareWhite;
    await sharp(src)
      .resize(item.size, item.size)
      .png()
      .toFile(path.join(publicDir, item.name));
    console.log(`Generated ${item.name} (${item.size}x${item.size})`);
  }

  // Generate multi-resolution favicon.ico (16, 32, 48)
  const ico16 = await sharp(paddedSquareWhite).resize(16, 16).png().toBuffer();
  const ico32 = await sharp(paddedSquareWhite).resize(32, 32).png().toBuffer();
  const ico48 = await sharp(paddedSquareWhite).resize(48, 48).png().toBuffer();
  
  const icoBuffer = createIco([
    { width: 16, height: 16, buffer: ico16 },
    { width: 32, height: 32, buffer: ico32 },
    { width: 48, height: 48, buffer: ico48 }
  ]);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
  console.log('Generated favicon.ico with 16x16, 32x32, 48x48 sizes');

  // Generate OpenGraph Social Card Banner (1200x630)
  const logoForOg = await sharp(paddedSquareWhite).resize(300, 300).png().toBuffer();
  
  const ogSvgOverlay = Buffer.from(`
    <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#080c14"/>
          <stop offset="50%" stop-color="#0f172a"/>
          <stop offset="100%" stop-color="#020617"/>
        </linearGradient>
        <linearGradient id="accentLine" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#f97316"/>
          <stop offset="50%" stop-color="#ea580c"/>
          <stop offset="100%" stop-color="#cbd5e1" stop-opacity="0.2"/>
        </linearGradient>
        <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
          <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(255, 255, 255, 0.06)" stroke-width="1"/>
        </pattern>
      </defs>
      
      <!-- Background -->
      <rect width="1200" height="630" fill="url(#bgGrad)"/>
      <rect width="1200" height="630" fill="url(#grid)"/>

      <!-- Accent Top Bar -->
      <rect x="0" y="0" width="1200" height="5" fill="url(#accentLine)"/>

      <!-- Card container background for logo -->
      <rect x="120" y="150" width="330" height="330" rx="16" fill="#ffffff" stroke="rgba(255, 255, 255, 0.1)" stroke-width="1"/>

      <!-- Brand Badge -->
      <rect x="500" y="150" width="220" height="34" rx="4" fill="rgba(249, 115, 22, 0.15)" stroke="rgba(249, 115, 22, 0.4)" stroke-width="1"/>
      <circle cx="518" cy="167" r="4.5" fill="#f97316"/>
      <text x="532" y="172" font-family="'Space Grotesk', system-ui, sans-serif" font-size="12" font-weight="700" letter-spacing="2" fill="#f97316">DIGITAL STUDIO</text>

      <!-- Main Title -->
      <text x="500" y="255" font-family="'Space Grotesk', system-ui, sans-serif" font-size="68" font-weight="800" fill="#ffffff" letter-spacing="-2">HexoraFlow</text>
      
      <!-- Subtitle -->
      <text x="500" y="315" font-family="'Inter', system-ui, sans-serif" font-size="24" font-weight="500" fill="#94a3b8">Web &amp; Mobile App Development Studio</text>
      
      <!-- Capabilities Tags -->
      <text x="500" y="390" font-family="'Space Grotesk', system-ui, sans-serif" font-size="16" font-weight="600" fill="#cbd5e1" letter-spacing="1">WEB DEV  •  MOBILE APPS  •  UI/UX  •  CUSTOM SOFTWARE</text>
      
      <!-- Domain Footer -->
      <line x1="500" y1="440" x2="1100" y2="440" stroke="rgba(255, 255, 255, 0.12)" stroke-width="1"/>
      <text x="500" y="475" font-family="'Space Grotesk', system-ui, sans-serif" font-size="18" font-weight="700" fill="#f97316">hexoraflow.in</text>
      <text x="650" y="475" font-family="'Inter', system-ui, sans-serif" font-size="16" fill="#64748b">|  High-Performance Digital Products</text>
    </svg>
  `);

  await sharp(ogSvgOverlay)
    .composite([
      {
        input: logoForOg,
        top: 165,
        left: 135
      }
    ])
    .png()
    .toFile(path.join(publicDir, 'hexoraflow-og.png'));

  console.log('Generated hexoraflow-og.png (1200x630)');
  console.log('All image assets created successfully!');
}

run().catch(console.error);
