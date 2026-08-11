import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Client showcase project data
// To add more client projects in the future, simply add new project objects to this array.
const projects = [
  {
    id: "01",
    title: "SHARKINGS INTERIORS",
    category: "CLIENT WORK",
    type: "INTERIORS / WEB",
    description:
      "A bespoke gallery website designed for luxury interior projects, combining responsive interactive visuals with clear brand storytelling.",
    image: "/SharkingInteriorImg.png",
    link: "https://www.sharkingsinteriors.in/",
    tags: ["UI/UX Design", "React", "Tailwind CSS"],
  },
  /*
  // Add future client projects here:
  {
    id: "02",
    title: "PROJECT NAME",
    category: "CLIENT WORK",
    type: "WEB / APPLICATION",
    description: "Detailed description of the client project...",
    image: "/ProjectImage.png",
    link: "https://client-project-url.com/",
    tags: ["React", "Node.js", "Tailwind"],
  },
  */
];

const OurWorks = () => {
  const formattedCount = String(projects.length).padStart(2, "0");

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
                Selected Client Work / 2026
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
              Featured client projects engineered for brand impact, speed, and real business results.
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
          {/* Main Featured Client Project */}
          <div className="lg:col-span-7">
            <ProjectCard project={projects[0]} large delay={0} />
          </div>

          {/* Secondary Projects & Future Slot Teaser */}
          <div
            className="
              lg:col-span-5

              flex
              flex-col
              gap-5
              lg:gap-6
            "
          >
            {/* Additional projects (if added to array later) */}
            {projects.slice(1).map((proj, idx) => (
              <ProjectCard
                key={proj.id}
                project={proj}
                delay={(idx + 1) * 0.08}
              />
            ))}

            {/* Upcoming Client Work Card */}
            <UpcomingWorkCard delay={projects.length * 0.08} />
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
            Index / {formattedCount} Selected Client Work{projects.length > 1 ? "s" : ""}
          </span>

          <a
            href="#contact"
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
            Start A Project

            <ArrowUpRight
              size={16}
              className="
                transition-transform
                duration-300

                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            />
          </a>
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
          loading="lazy"
          decoding="async"
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

/* =========================================================
   UPCOMING WORK CARD (Placeholder for future client projects)
========================================================= */

const UpcomingWorkCard = ({ delay = 0.08 }) => {
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
        border-slate-900
        bg-slate-950
        text-white
        p-6
        md:p-8
        flex
        flex-col
        justify-between
        h-full
        min-h-[280px]
        md:min-h-[340px]
      "
    >
      {/* Background Micro Grid */}
      <div
        className="
          absolute
          inset-0
          pointer-events-none
          opacity-20
        "
        style={{
          backgroundImage: `
            linear-gradient(#ffffff 1px, transparent 1px),
            linear-gradient(90deg, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: "36px 36px",
        }}
      />

      {/* Top Header */}
      <div className="relative z-10 flex items-center justify-between">
        <span className="font-mono text-[9px] md:text-xs tracking-[0.22em] uppercase text-orange-400 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
          Next Case Study / Coming Soon
        </span>
      </div>

      {/* Center Body */}
      <div className="relative z-10 my-6">
        <h3 className="font-['Space_Grotesk'] text-2xl md:text-3xl font-bold uppercase tracking-tight text-white">
          Your Brand Here
        </h3>
        <p className="mt-3 text-xs md:text-sm text-slate-300 leading-relaxed max-w-md">
          We build custom websites and digital tools tailored to grow your business. Ready to launch your next project?
        </p>
      </div>

      {/* Bottom CTA */}
      <div className="relative z-10 flex items-center justify-between pt-4 border-t border-slate-800">
        <span className="font-mono text-[9px] md:text-[11px] tracking-widest text-slate-400 uppercase">
          Available Client Slot
        </span>

        <a
          href="#contact"
          className="
            inline-flex
            items-center
            gap-2
            px-4
            py-2.5
            bg-orange-500
            hover:bg-orange-600
            text-white
            text-xs
            font-semibold
            uppercase
            tracking-wider
            transition-colors
            duration-300
          "
        >
          Let's Connect
          <ArrowUpRight size={14} />
        </a>
      </div>
    </motion.article>
  );
};

export default OurWorks;
