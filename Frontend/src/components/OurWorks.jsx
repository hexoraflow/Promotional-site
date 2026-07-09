import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "SHARKINGS INTERIORS",
    type: "INTERIORS / WEB",
    description:
      "An immersive, high-fidelity gallery website crafted to showcase luxury interior design projects with fluid animations and a focus on visual storytelling.",
    image: "/SharkingInteriorImg.png",
    link: "https://sharkings-interior.vercel.app/",
  },
  {
    id: "02",
    title: "PORTFOLIO",
    type: "WEB / PORTFOLIO",
    description:
      "A meticulously crafted personal portfolio website that blends clean aesthetics with subtle animations to create a premium user experience.",
    image: "/PortfolioImg.png",
    link: "https://sivanesh-portfolio-web.vercel.app/",
  },
  {
    id: "03",
    title: "BUDGET TRACKER",
    type: "WEB / EXPERIENCE",
    description:
      "A streamlined financial management tool that turns complex spending habits into clear, actionable insights through interactive data visualizations.",
    image: "/BudgetTrackerImg.png",
    link: "https://budgettrackingapp.vercel.app/",
  },
];

const OurWorks = () => {
  return (
    <section
      id="works"
      className="
        relative
        overflow-hidden
        bg-white
        text-slate-950
        border-t
        border-slate-200
      "
    >
      {/* Grid Background */}
      <div
        className="
          absolute
          inset-0
          pointer-events-none
          opacity-60
        "
        style={{
          backgroundImage: `
            linear-gradient(#e2e8f0 1px, transparent 1px),
            linear-gradient(90deg, #e2e8f0 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
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
          md:py-20
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
            gap-6
            lg:gap-10
            items-end
            mb-12
            md:mb-14
          "
        >
          {/* Heading */}
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-4 md:mb-5">
              <span className="w-2 h-2 bg-orange-500" />

              <span
                className="
                  font-mono
                  text-[9px]
                  md:text-xs
                  tracking-[0.3em]
                  md:tracking-[0.22em]
                  text-slate-500
                  uppercase
                "
              >
                Selected Projects / 2026
              </span>
            </div>

            <h2
              className="
                font-['Space_Grotesk']
                text-[13vw]
                md:text-[8vw]
                lg:text-[6.5rem]
                xl:text-[7.5rem]
                font-bold
                uppercase
                leading-[0.82]
                tracking-[-0.05em]
              "
            >
              Our Works
            </h2>
          </div>

          {/* Header Description */}
          <div className="lg:col-span-4 lg:pb-2">
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

                text-slate-500
                md:text-slate-600
              "
            >
              Selected digital products shaped through design,
              technology and clear thinking.
            </p>
          </div>
        </div>

        {/* =====================================================
            PROJECT GRID
        ====================================================== */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-12
            gap-5
            lg:gap-6
          "
        >
          {/* Main Project */}
          <div className="lg:col-span-7">
            <ProjectCard
              project={projects[0]}
              large
              delay={0}
            />
          </div>

          {/* Secondary Projects */}
          <div
            className="
              lg:col-span-5

              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-1

              gap-5
              lg:gap-6
            "
          >
            <ProjectCard
              project={projects[1]}
              delay={0.08}
            />

            <ProjectCard
              project={projects[2]}
              delay={0.16}
            />
          </div>
        </div>

        {/* =====================================================
            FOOTER INDEX
        ====================================================== */}

        <div
          className="
            mt-8
            md:mt-10

            pt-5
            md:pt-6

            border-t
            border-slate-300

            flex
            items-center
            justify-between
            gap-5
          "
        >
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
            Index / 03 Selected Works
          </span>

          <button
            className="
              group
              flex
              items-center
              gap-3

              text-[9px]
              md:text-xs

              font-semibold

              tracking-[0.2em]
              md:tracking-[0.16em]

              uppercase
            "
          >
            View All

            <ArrowUpRight
              size={16}
              className="
                transition-transform
                duration-300

                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            />
          </button>
        </div>
      </div>
    </section>
  );
};

/* =========================================================
   PROJECT CARD
========================================================= */

const ProjectCard = ({
  project,
  large = false,
  delay = 0,
}) => {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-50px",
      }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        group
        relative
        overflow-hidden
        border
        border-slate-300
        bg-slate-100
      "
    >
      {/* =====================================================
          IMAGE
      ====================================================== */}

      <div
        className={`
          relative
          overflow-hidden

          ${
            large
              ? `
                  h-[320px]
                  md:h-[470px]
                  lg:h-[500px]
                `
              : `
                  h-[220px]
                  md:h-[225px]
                  lg:h-[235px]
                `
          }
        `}
      >
        <img
          src={project.image}
          alt={project.title}
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover

            transition-transform
            duration-700
            ease-out

            group-hover:scale-[1.035]
          "
        />

        {/* Subtle Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-slate-950/5

            transition-colors
            duration-500

            group-hover:bg-slate-950/15
          "
        />

        {/* Project Number */}
        <div
          className="
            absolute
            top-4
            left-4

            px-3
            py-2

            bg-white/90
            backdrop-blur-sm

            font-mono

            text-[8px]
            md:text-[11px]

            tracking-[0.2em]
            md:tracking-[0.16em]

            text-slate-800
          "
        >
          PROJECT / {project.id}
        </div>

        {/* Orange Node */}
        <div
          className="
            absolute
            top-4
            right-4

            w-2
            h-2
            md:w-2.5
            md:h-2.5

            bg-orange-500
          "
        />

        {/* Bottom Left Technical Corner */}
        <div
          className="
            absolute
            left-4
            bottom-4

            w-6
            h-6

            md:w-8
            md:h-8

            border-l
            border-b
            border-white/80
          "
        />

        {/* Bottom Right Technical Corner */}
        <div
          className="
            absolute
            right-4
            bottom-4

            w-6
            h-6

            md:w-8
            md:h-8

            border-r
            border-b
            border-white/80
          "
        />
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div
        className={`
          bg-white

          ${
            large
              ? `
                  p-6
                  md:p-7
                  lg:p-8
                `
              : `
                  p-5
                  md:p-6
                  lg:px-7
                  lg:py-6
                `
          }
        `}
      >
        <div
          className="
            flex
            items-start
            justify-between
            gap-6
          "
        >
          <div className="min-w-0">
            {/* Project Type */}
            <span
              className="
                font-mono

                text-[8px]
                md:text-[11px]

                tracking-[0.22em]
                md:tracking-[0.18em]

                text-slate-500
                uppercase
              "
            >
              {project.type}
            </span>

            {/* Project Title */}
            <h3
              className={`
                mt-2
                md:mt-3

                font-['Space_Grotesk']
                font-bold
                uppercase

                tracking-[-0.04em]
                leading-[0.95]

                ${
                  large
                    ? `
                        text-3xl
                        md:text-5xl
                        lg:text-[3.4rem]
                      `
                    : `
                        text-2xl
                        md:text-3xl
                        lg:text-[2rem]
                      `
                }
              `}
            >
              {project.title}
            </h3>

            {/* Description */}
            <p
              className="
                mt-3
                md:mt-4

                max-w-lg

                text-xs
                md:text-[15px]

                leading-6
                md:leading-7

                text-slate-500
                md:text-slate-600
              "
            >
              {project.description}
            </p>
          </div>

          {/* Action Button */}
          <a
            href={project.link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title}`}
            className="
              shrink-0

              w-10
              h-10

              md:w-12
              md:h-12

              flex
              items-center
              justify-center

              border
              border-slate-900

              transition-all
              duration-300

              group-hover:bg-slate-900
              group-hover:text-white
            "
          >
            <ArrowUpRight
              size={17}
              className="
                transition-transform
                duration-300

                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default OurWorks;