import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Smartphone,
  PenTool,
  Cpu,
  Palette,  
} from "lucide-react";

const services = [
  {
    id: "01",
    title: "Web Development",
    shortTitle: "Web",
    description:
      "Fast, scalable and carefully engineered websites built to turn ideas into high-performing digital experiences.",
    tags: ["React", "Django", "Full Stack"],
    icon: Code2,
  },
  {
    id: "02",
    title: "Mobile Applications",
    shortTitle: "Mobile",
    description:
      "Intuitive mobile products designed around real user behaviour, seamless interaction and long-term growth.",
    tags: ["Android", "iOS", "Cross Platform"],
    icon: Smartphone,
  },
  {
    id: "03",
    title: "UI / UX Design",
    shortTitle: "Design",
    description:
      "Clear digital interfaces shaped through thoughtful systems, strong visual hierarchy and purposeful interaction.",
    tags: ["UI Systems", "UX", "Prototyping"],
    icon: PenTool,
  },
  {
    id: "04",
    title: "Custom Software",
    shortTitle: "Software",
    description:
      "Purpose-built software systems created to solve complex operational challenges and support ambitious businesses.",
    tags: ["Automation", "Systems", "Scalable"],
    icon: Cpu,
  },
  {
  id: "05",
  title: "Graphic Design",
  shortTitle: "Design",
  description:
    "High-impact visual assets and brand identity systems designed to capture attention and communicate your core message.",
  tags: ["Branding", "Print", "Typography"],
  icon: Palette,
  },
];

const WhatWeDo = () => {
  return (
    <section
      id="services"
      className="
        relative
        overflow-hidden
        bg-[#0b1017]
        text-white
        border-y
        border-white/10
      "
    >
      {/* =====================================================
          MILD GRID BACKGROUND
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          pointer-events-none
          opacity-[0.16]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(148, 163, 184, 0.22) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(148, 163, 184, 0.22) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "72px 72px",
        }}
      />

      {/* Soft radial atmosphere */}
      <div
        className="
          absolute
          top-[-20%]
          right-[-10%]
          w-[600px]
          h-[600px]
          rounded-full
          bg-slate-400/[0.035]
          blur-3xl
          pointer-events-none
        "
      />

      {/* =====================================================
          TECHNICAL BACKGROUND MARKERS
      ====================================================== */}

      {/* Top right coordinate */}
      <div
        className="
          hidden
          lg:flex
          absolute
          right-[4%]
          top-[8%]
          items-center
          gap-3
          opacity-40
        "
      >
        <span
          className="
            font-mono
            text-[10px]
            tracking-[0.22em]
            text-slate-400
          "
        >
          SYS / 04
        </span>

        <span className="w-8 h-px bg-slate-500" />

        <span className="w-2 h-2 bg-orange-500" />
      </div>

      {/* Left vertical marker */}
      <div
        className="
          hidden
          xl:flex
          absolute
          left-[2%]
          top-1/2
          -translate-y-1/2
          -rotate-90
          items-center
          gap-3
          opacity-30
        "
      >
        <span
          className="
            font-mono
            text-[9px]
            tracking-[0.3em]
            text-slate-400
            uppercase
          "
        >
          Capabilities / Digital Systems
        </span>

        <span className="w-12 h-px bg-slate-500" />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          z-10
          max-w-[1800px]
          mx-auto
          px-6
          md:px-16
          py-16
          md:py-20
          lg:py-24
        "
      >
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-12
            gap-8
            lg:gap-12
            items-end
            mb-12
            md:mb-16
          "
        >
          {/* Main heading */}
          <div className="lg:col-span-8">
            <div
              className="
                flex
                items-center
                gap-3
                mb-4
                md:mb-5
              "
            >
              <span className="w-2 h-2 bg-orange-500" />

              <span
                className="
                  font-mono
                  text-[9px]
                  md:text-xs
                  tracking-[0.3em]
                  md:tracking-[0.22em]
                  text-slate-400
                  uppercase
                "
              >
                Capabilities / 04
              </span>
            </div>

            <motion.h2
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-80px",
              }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                font-['Space_Grotesk']
                text-[13vw]
                md:text-[8vw]
                lg:text-[6.5rem]
                xl:text-[7.5rem]
                font-bold
                uppercase
                leading-[0.82]
                tracking-[-0.055em]
                text-white
              "
            >
              What We Do
            </motion.h2>
          </div>

          {/* Header description */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.15,
            }}
            className="
              lg:col-span-4
              lg:pb-2
            "
          >
            <p
              className="
                max-w-sm
                md:max-w-md

                border-l-2
                border-orange-500

                pl-4
                md:pl-5

                text-[10px]
                md:text-sm
                lg:text-[15px]

                uppercase

                tracking-[0.16em]
                md:tracking-[0.12em]

                leading-relaxed
                md:leading-[1.8]

                text-slate-400
              "
            >
              We design and engineer digital systems that help
              ambitious ideas become useful, scalable products.
            </p>
          </motion.div>
        </div>

        {/* =====================================================
            SERVICE LIST
        ====================================================== */}

        <div
          className="
            border-t
            border-white/15
          "
        >
          {services.map((service, index) => (
            <ServiceRow
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </div>

        {/* =====================================================
            BOTTOM SYSTEM BAR
        ====================================================== */}

        <div
          className="
            mt-8
            md:mt-10

            pt-5
            md:pt-6

            border-t
            border-white/15

            flex
            items-center
            justify-between
            gap-5
          "
        >
          <div
            className="
              flex
              items-center
              gap-3
            "
          >
            <span
              className="
                w-1.5
                h-1.5
                rounded-full
                bg-orange-500
                animate-pulse
              "
            />

            <span
              className="
                font-mono

                text-[8px]
                md:text-[11px]

                tracking-[0.25em]
                md:tracking-[0.18em]

                text-slate-500
                uppercase
              "
            >
              Systems Ready / 04 Capabilities
            </span>
          </div>

          <span
            className="
              hidden
              sm:block

              font-mono

              text-[8px]
              md:text-[10px]

              tracking-[0.2em]

              text-slate-600
              uppercase
            "
          >
            Build / Launch / Scale
          </span>
        </div>
      </div>
    </section>
  );
};

/* =========================================================
   SERVICE ROW
========================================================= */

const ServiceRow = ({ service, index }) => {
  const Icon = service.icon;

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-40px",
      }}
      transition={{
        duration: 0.55,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        group
        relative

        border-b
        border-white/15

        overflow-hidden
      "
    >
      {/* Hover background */}
      <div
        className="
          absolute
          inset-0
          bg-white/[0.035]

          origin-left
          scale-x-0

          transition-transform
          duration-500
          ease-out

          group-hover:scale-x-100
        "
      />

      {/* Orange hover line */}
      <div
        className="
          absolute
          left-0
          top-0

          w-[2px]
          h-full

          bg-orange-500

          scale-y-0
          origin-top

          transition-transform
          duration-500

          group-hover:scale-y-100
        "
      />

      {/* Row */}
      <div
        className="
          relative
          z-10

          grid
          grid-cols-[auto_1fr_auto]

          lg:grid-cols-12

          items-center

          gap-4
          md:gap-6

          py-6
          md:py-7
          lg:py-8
        "
      >
        {/* =================================================
            NUMBER
        ================================================== */}

        <div
          className="
            lg:col-span-1
          "
        >
          <span
            className="
              font-mono

              text-[9px]
              md:text-[11px]

              tracking-[0.18em]

              text-slate-500

              transition-colors
              duration-300

              group-hover:text-orange-400
            "
          >
            {service.id}
          </span>
        </div>

        {/* =================================================
            TITLE
        ================================================== */}

        <div
          className="
            lg:col-span-4
            min-w-0
          "
        >
          <h3
            className="
              font-['Space_Grotesk']

              text-xl
              md:text-3xl
              lg:text-[2.2rem]
              xl:text-[2.5rem]

              font-semibold

              uppercase

              leading-none
              tracking-[-0.035em]

              text-white

              transition-transform
              duration-500

              lg:group-hover:translate-x-2
            "
          >
            {service.title}
          </h3>
        </div>

        {/* =================================================
            DESCRIPTION
        ================================================== */}

        <div
          className="
            hidden
            lg:block
            lg:col-span-4
          "
        >
          <p
            className="
              max-w-md

              text-[15px]
              leading-7

              text-slate-400

              transition-colors
              duration-300

              group-hover:text-slate-300
            "
          >
            {service.description}
          </p>
        </div>

        {/* =================================================
            TAGS
        ================================================== */}

        <div
          className="
            hidden
            xl:flex

            xl:col-span-2

            flex-wrap
            gap-2
          "
        >
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="
                border
                border-white/15

                px-2.5
                py-1.5

                font-mono

                text-[9px]

                tracking-[0.12em]

                uppercase

                text-slate-500

                transition-all
                duration-300

                group-hover:border-white/25
                group-hover:text-slate-300
              "
            >
              {tag}
            </span>
          ))}
        </div>

        {/* =================================================
            ACTION / ICON
        ================================================== */}

        <div
          className="
            lg:col-span-1

            flex
            justify-end
          "
        >
          <div
            className="
              relative

              w-10
              h-10

              md:w-12
              md:h-12

              flex
              items-center
              justify-center

              border
              border-white/20

              text-slate-400

              transition-all
              duration-300

              group-hover:bg-orange-500
              group-hover:border-orange-500
              group-hover:text-white
            "
          >
            {/* Service icon */}
            <Icon
              size={18}
              strokeWidth={1.5}
              className="
                transition-all
                duration-300

                group-hover:scale-0
                group-hover:rotate-45
              "
            />

            {/* Arrow */}
            <ArrowUpRight
              size={18}
              className="
                absolute

                scale-0
                -rotate-45

                transition-all
                duration-300

                group-hover:scale-100
                group-hover:rotate-0
              "
            />
          </div>
        </div>
      </div>

      {/* =================================================
          MOBILE DESCRIPTION
      ================================================== */}

      <div
        className="
          relative
          z-10

          lg:hidden

          pl-[2.2rem]
          md:pl-[2.7rem]

          pr-4

          pb-6
          md:pb-7
        "
      >
        <p
          className="
            max-w-lg

            text-xs
            md:text-sm

            leading-6
            md:leading-7

            text-slate-400
          "
        >
          {service.description}
        </p>

        {/* Mobile tags */}
        <div
          className="
            mt-4

            flex
            flex-wrap
            gap-2
          "
        >
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="
                border
                border-white/15

                px-2
                py-1

                font-mono

                text-[8px]
                md:text-[9px]

                tracking-[0.12em]

                uppercase

                text-slate-500
              "
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

export default WhatWeDo;