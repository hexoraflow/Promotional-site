import React from "react";
import { motion } from "framer-motion";
import {
  Globe2,
  Zap,
  ShieldCheck,
  Search,
  Sparkles,
  ArrowUpRight,
  MapPin,
  Cpu,
  Layers,
  Rocket,
} from "lucide-react";

const stats = [
  {
    number: "99+",
    label: "Google PageSpeed",
    desc: "Sub-second load times & top Core Web Vitals score",
  },
  {
    number: "100%",
    label: "Code Ownership",
    desc: "Clean GitHub repository & zero vendor lock-in",
  },
  {
    number: "Madurai & South TN",
    label: "Hub & Global Delivery",
    desc: "Serving Madurai, Tirunelveli, Dindigul, Chennai & Worldwide",
  },
  {
    number: "24/7",
    label: "Dedicated Support",
    desc: "Agile sprints with transparent communication",
  },
];

const pillars = [
  {
    icon: Zap,
    title: "Performance-First Architecture",
    description:
      "We engineer web applications using React, Next.js, and Django with zero unnecessary bloat. Every line of code is optimized for raw speed, security, and effortless scalability.",
    badge: "ENGINEERING",
  },
  {
    icon: Sparkles,
    title: "Conversion-Focused UI/UX",
    description:
      "Design isn't just how it looks; it's how it converts. We build sleek, intuitive digital interfaces with seamless user journeys that turn visitors into long-term clients.",
    badge: "DESIGN",
  },
  {
    icon: Search,
    title: "Google Search & Local SEO",
    description:
      "Engineered from day one to rank on Google Search across Madurai, Tamil Nadu, and global markets with lightning-fast load times, clean semantic markup, and technical SEO.",
    badge: "RANKING",
  },
  {
    icon: Globe2,
    title: "Madurai Hub & Global Reach",
    description:
      "Headquartered in Madurai, delivering cutting-edge digital products across South Tamil Nadu (Tirunelveli, Dindigul, Thoothukudi, Virudhunagar), Chennai, Bangalore, and international clients in the US, UK, and UAE.",
    badge: "REGIONAL & GLOBAL",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Blueprint",
    desc: "We analyze your business goals, target audience, and competitive landscape to architect the ideal technical roadmap.",
    icon: Layers,
  },
  {
    step: "02",
    title: "Precision UI/UX Design",
    desc: "Interactive prototypes and bespoke visual design systems crafted to elevate your brand prestige.",
    icon: Sparkles,
  },
  {
    step: "03",
    title: "Full-Stack Development",
    desc: "Modern, secure code built with React, Next.js, Django, and clean APIs tested across every screen size.",
    icon: Cpu,
  },
  {
    step: "04",
    title: "Search Indexing & Launch",
    desc: "Rigorous performance audits, Schema.org setup, Google Search Console indexing, and production deployment.",
    icon: Rocket,
  },
];

const AboutUs = () => {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-white
        text-slate-950
        border-t
        border-slate-200
      "
    >
      {/* Background Grid */}
      <div
        className="
          absolute
          inset-0
          pointer-events-none
          opacity-[0.55]
        "
        style={{
          backgroundImage: `
            linear-gradient(#e2e8f0 1px, transparent 1px),
            linear-gradient(90deg, #e2e8f0 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      <div
        className="
          relative
          z-10
          max-w-[1800px]
          mx-auto
          px-6
          md:px-16
          py-16
          md:py-24
        "
      >
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-12
            gap-8
            lg:gap-12
            items-end
            mb-14
            md:mb-20
          "
        >
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-4 md:mb-5">
              <span className="w-2.5 h-2.5 bg-orange-500 rounded-none" />
              <span
                className="
                  font-mono
                  text-[10px]
                  md:text-[11px]
                  tracking-[0.24em]
                  uppercase
                  text-slate-500
                "
              >
                01 / ABOUT HEXORAFLOW
              </span>
            </div>

            <h2
              className="
                font-['Space_Grotesk']
                text-3xl
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
                font-bold
                tracking-[-0.04em]
                leading-[1.08]
                uppercase
              "
            >
              We Engineer High-Impact{" "}
              <span className="text-orange-500">Digital Solutions</span> That
              Scale Brands Worldwide.
            </h2>
          </div>

          <div className="lg:col-span-4 border-l-2 border-slate-900 pl-5">
            <p
              className="
                text-sm
                md:text-base
                text-slate-600
                leading-relaxed
                font-['Inter']
              "
            >
              Headquartered in Madurai, Tamil Nadu, HexoraFlow is a premier
              software and digital product studio. We bridge creative UI/UX
              design with robust full-stack engineering to build high-converting
              websites and mobile platforms for businesses across Madurai,
              South Tamil Nadu, and worldwide.
            </p>
          </div>
        </div>

        {/* =====================================================
            METRICS / STATS GRID
        ====================================================== */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-px
            bg-slate-200
            border
            border-slate-200
            mb-16
            md:mb-24
          "
        >
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="
                bg-white
                p-7
                md:p-8
                flex
                flex-col
                justify-between
                transition-colors
                duration-300
                hover:bg-slate-50/80
              "
            >
              <div>
                <span
                  className="
                    font-['Space_Grotesk']
                    text-3xl
                    md:text-4xl
                    font-bold
                    text-slate-950
                    tracking-tight
                    block
                  "
                >
                  {item.number}
                </span>
                <span
                  className="
                    mt-1
                    block
                    font-mono
                    text-[10px]
                    tracking-[0.16em]
                    uppercase
                    text-orange-600
                    font-semibold
                  "
                >
                  {item.label}
                </span>
              </div>
              <p
                className="
                  mt-4
                  text-xs
                  md:text-sm
                  text-slate-500
                  leading-relaxed
                  font-['Inter']
                "
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* =====================================================
            PILLARS / VALUE PROPOSITIONS
        ====================================================== */}
        <div className="mb-16 md:mb-24">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
            <h3
              className="
                font-['Space_Grotesk']
                text-xl
                md:text-2xl
                font-bold
                uppercase
                tracking-tight
              "
            >
              Core Engineering Philosophy
            </h3>
            <span
              className="
                font-mono
                text-[10px]
                tracking-[0.2em]
                uppercase
                text-slate-400
                hidden
                sm:inline
              "
            >
              Built For Scale
            </span>
          </div>

          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              gap-6
              lg:gap-8
            "
          >
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="
                    group
                    relative
                    p-8
                    border
                    border-slate-200
                    bg-[#f8fafc]
                    transition-all
                    duration-300
                    hover:border-slate-900
                    hover:bg-white
                    hover:shadow-lg
                  "
                >
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="
                        w-12
                        h-12
                        flex
                        items-center
                        justify-center
                        bg-slate-900
                        text-white
                        transition-colors
                        duration-300
                        group-hover:bg-orange-500
                      "
                    >
                      <Icon size={22} strokeWidth={1.75} />
                    </div>

                    <span
                      className="
                        font-mono
                        text-[9px]
                        tracking-[0.2em]
                        px-2.5
                        py-1
                        border
                        border-slate-300
                        uppercase
                        text-slate-600
                        group-hover:border-orange-500
                        group-hover:text-orange-600
                      "
                    >
                      {pillar.badge}
                    </span>
                  </div>

                  <h4
                    className="
                      font-['Space_Grotesk']
                      text-lg
                      md:text-xl
                      font-bold
                      tracking-tight
                      mb-3
                      text-slate-950
                    "
                  >
                    {pillar.title}
                  </h4>

                  <p
                    className="
                      text-sm
                      text-slate-600
                      leading-relaxed
                      font-['Inter']
                    "
                  >
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            HOW WE WORK / 4-STEP PROCESS
        ====================================================== */}
        <div className="mb-16 md:mb-20">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
            <h3
              className="
                font-['Space_Grotesk']
                text-xl
                md:text-2xl
                font-bold
                uppercase
                tracking-tight
              "
            >
              The HexoraFlow Execution Model
            </h3>
            <span
              className="
                font-mono
                text-[10px]
                tracking-[0.2em]
                uppercase
                text-slate-400
                hidden
                sm:inline
              "
            >
              Sprint-Driven
            </span>
          </div>

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
              gap-6
            "
          >
            {processSteps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={idx}
                  className="
                    relative
                    p-6
                    border
                    border-slate-200
                    bg-white
                    flex
                    flex-col
                    justify-between
                  "
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className="
                          font-mono
                          text-xs
                          font-bold
                          text-orange-500
                        "
                      >
                        {step.step}
                      </span>
                      <StepIcon size={18} className="text-slate-400" />
                    </div>

                    <h4
                      className="
                        font-['Space_Grotesk']
                        font-bold
                        text-base
                        md:text-lg
                        text-slate-950
                        mb-2
                      "
                    >
                      {step.title}
                    </h4>

                    <p
                      className="
                        text-xs
                        md:text-sm
                        text-slate-600
                        leading-relaxed
                      "
                    >
                      {step.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400">
                      Phase {step.step}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            GLOBAL & REGIONAL FOOTPRINT BANNER
        ====================================================== */}
        <div
          className="
            p-8
            md:p-10
            bg-[#090d14]
            text-white
            border
            border-slate-800
            flex
            flex-col
            lg:flex-row
            lg:items-center
            lg:justify-between
            gap-8
          "
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <MapPin size={16} className="text-orange-500" />
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-orange-400">
                Madurai • South Tamil Nadu • Pan-India • Global
              </span>
            </div>
            <h4 className="font-['Space_Grotesk'] text-2xl md:text-3xl font-bold tracking-tight mb-2">
              Ready To Build Something Exceptional?
            </h4>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              Serving businesses in Madurai, Tirunelveli, Dindigul, Thoothukudi,
              Virudhunagar, Sivakasi, Chennai, Coimbatore, Bangalore, and
              globally in the US, UK, Europe, UAE, and Australia.
            </p>
          </div>

          <a
            href="#contact"
            className="
              inline-flex
              items-center
              justify-center
              gap-3
              px-8
              py-4
              bg-orange-500
              text-white
              font-semibold
              text-xs
              md:text-sm
              tracking-[0.16em]
              uppercase
              transition-all
              duration-300
              hover:bg-white
              hover:text-slate-950
              shrink-0
            "
          >
            Start Your Project
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
