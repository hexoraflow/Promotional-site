import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

import Navbar from "./Navbar";
import CustomCursor from "./CustomCursor";
import WhatWeDo from "./WhatWeDo";
import OurWorks from "./OurWorks";
import FloatingShapes from "./FloatingShapes";
import Contact from './Contact'

const ease = [0.22, 1, 0.36, 1];

const LandingPage = () => {
  const scrollToServices = () => {
    document
      .getElementById("services")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* =====================================================
          HERO
      ====================================================== */}

      <section
        id="home"
        className="
          relative
          min-h-[100svh]
          overflow-hidden
          bg-[#f8fafc]
          text-slate-900

          selection:bg-slate-900
          selection:text-white
        "
      >
        <CustomCursor />

        {/* =================================================
            BACKGROUND GRID
        ================================================== */}

        <div
          className="
            absolute
            inset-0
            z-0
            pointer-events-none
            opacity-[0.58]
          "
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(203, 213, 225, 0.72) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(203, 213, 225, 0.72) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Soft atmosphere */}
        <div
          className="
            absolute
            z-[1]
            pointer-events-none

            top-[-20%]
            right-[-12%]

            w-[520px]
            h-[520px]

            rounded-full

            bg-orange-200/10
            blur-3xl
          "
        />

        {/* =================================================
            FLOATING TECH ELEMENTS
        ================================================== */}

        <FloatingShapes />

        {/* =================================================
            NAVBAR
        ================================================== */}

        <div className="relative z-30">
          <Navbar />
        </div>

        {/* =================================================
            MICRO SYSTEM LABEL — DESKTOP
        ================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.7,
            delay: 0.8,
          }}
          className="
            hidden
            lg:flex

            absolute
            z-20

            top-[15%]
            right-[4%]

            items-center
            gap-3
          "
        >
          <span
            className="
              font-mono
              text-[10px]
              tracking-[0.22em]
              uppercase
              text-slate-500
            "
          >
            Digital Systems / 2026
          </span>

          <span className="w-10 h-px bg-slate-400" />

          <span className="w-2 h-2 bg-orange-500" />
        </motion.div>

        {/* =================================================
            HERO CONTENT
        ================================================== */}

        <main
          className="
            relative
            z-10

            min-h-[100svh]

            flex
            items-center
          "
        >
          <div
            className="
              w-full
              max-w-[1800px]
              mx-auto

              px-6
              md:px-16

              pt-20
              md:pt-24

              pb-16
              md:pb-12
          "
          >
            {/* =============================================
                MAIN TYPOGRAPHY
            ============================================== */}

            <div className="relative flex flex-col">
              {/* BUILD */}

              <div className="overflow-hidden">
                <motion.h1
                  initial={{
                    y: "110%",
                    opacity: 0,
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.85,
                    ease,
                  }}
                  className="
                    font-['Space_Grotesk']

                    text-[15vw]
                    md:text-[10rem]
                    lg:text-[10.5rem]
                    xl:text-[11.5rem]
                    2xl:text-[12.5rem]

                    font-bold
                    uppercase

                    leading-[0.82]
                    tracking-[-0.065em]
                  "
                >
                  Build
                </motion.h1>
              </div>

              {/* SOMETHING */}

              <div className="overflow-hidden self-end">
                <motion.h1
                  initial={{
                    y: "110%",
                    opacity: 0,
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.85,
                    delay: 0.12,
                    ease,
                  }}
                  className="
                    font-['Space_Grotesk']

                    text-[15vw]
                    md:text-[10rem]
                    lg:text-[10.5rem]
                    xl:text-[11.5rem]
                    2xl:text-[12.5rem]

                    font-bold
                    uppercase

                    leading-[0.82]
                    tracking-[-0.065em]

                    mt-3
                  "
                >
                  Something
                </motion.h1>
              </div>

              {/* AMAZING */}

              <div className="overflow-hidden">
                <motion.h1
                  initial={{
                    y: "110%",
                    opacity: 0,
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.85,
                    delay: 0.24,
                    ease,
                  }}
                  className="
                    font-['Space_Grotesk']

                    text-[15vw]
                    md:text-[10rem]
                    lg:text-[10.5rem]
                    xl:text-[11.5rem]
                    2xl:text-[12.5rem]

                    font-bold
                    uppercase

                    leading-[0.82]
                    tracking-[-0.065em]

                    mt-3
                  "
                >
                  Amazing
                </motion.h1>
              </div>
            </div>

            {/* =============================================
                BOTTOM INFORMATION ROW
            ============================================== */}

            <div
              className="
                mt-6
                md:mt-8

                grid
                grid-cols-1
                md:grid-cols-12

                gap-7
                md:gap-8

                items-end
              "
            >
              {/* LEFT SYSTEM INFO */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.7,
                  ease,
                }}
                className="
                  hidden
                  md:flex

                  md:col-span-4

                  items-center
                  gap-3
                "
              >
                <span className="w-2 h-2 bg-orange-500" />

                <div>
                  <span
                    className="
                      block

                      font-mono

                      text-[10px]
                      lg:text-[11px]

                      tracking-[0.2em]

                      uppercase

                      text-slate-500
                    "
                  >
                    Design / Development
                  </span>

                  <span
                    className="
                      block

                      mt-1

                      font-mono

                      text-[9px]
                      lg:text-[10px]

                      tracking-[0.18em]

                      uppercase

                      text-slate-400
                    "
                  >
                    Web / Mobile / Product
                  </span>
                </div>
              </motion.div>

              {/* CENTER SCROLL CUE */}

              <motion.button
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.8,
                  ease,
                }}
                onClick={scrollToServices}
                className="
                  hidden
                  lg:flex

                  lg:col-span-3

                  justify-self-center

                  group

                  items-center
                  gap-3

                  font-mono

                  text-[10px]

                  tracking-[0.2em]

                  uppercase

                  text-slate-500
                "
              >
                Explore

                <span
                  className="
                    w-9
                    h-9

                    flex
                    items-center
                    justify-center

                    border
                    border-slate-400

                    transition-all
                    duration-300

                    group-hover:bg-slate-900
                    group-hover:border-slate-900
                    group-hover:text-white
                  "
                >
                  <ArrowDown
                    size={14}
                    className="
                      transition-transform
                      duration-300

                      group-hover:translate-y-0.5
                    "
                  />
                </span>
              </motion.button>

              {/* DESCRIPTION */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.65,
                  delay: 0.6,
                  ease,
                }}
                className="
                  md:col-span-8
                  lg:col-span-5

                  md:ml-auto

                  md:max-w-md
                  lg:max-w-lg

                  border-l-2
                  border-orange-500

                  pl-4
                  md:pl-5
                "
              >
                <p
                  className="
                    text-[10px]
                    md:text-sm
                    lg:text-[15px]

                    uppercase

                    tracking-[0.18em]
                    md:tracking-[0.12em]

                    leading-relaxed
                    md:leading-[1.8]

                    text-slate-600
                  "
                >
                  We design and build custom websites, mobile apps, and
                  digital experiences that engage your audience and help your
                  business scale.
                </p>
              </motion.div>
            </div>
          </div>
        </main>

        {/* =================================================
            DESKTOP PROJECT CTA
        ================================================== */}

        <motion.a
          href="#works"
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.6,
            delay: 1,
            ease,
          }}
          className="
            hidden
            md:flex

            absolute
            z-40

            right-8
            bottom-8

            lg:right-10
            lg:bottom-10

            group

            w-16
            h-16

            lg:w-[72px]
            lg:h-[72px]

            items-center
            justify-center

            rounded-full

            bg-slate-900
            text-white

            shadow-xl

            transition-transform
            duration-300

            hover:scale-105
          "
        >
          <ArrowUpRight
            size={20}
            strokeWidth={1.6}
            className="
              transition-transform
              duration-300

              group-hover:translate-x-1
              group-hover:-translate-y-1
            "
          />

          {/* Orbit border */}
          <span
            className="
              absolute
              -inset-2

              rounded-full

              border
              border-slate-900/20

              transition-transform
              duration-500

              group-hover:scale-110
            "
          />
        </motion.a>

        {/* =================================================
            MOBILE CTA
        ================================================== */}

        <motion.a
          href="#works"
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.9,
          }}
          className="
            md:hidden

            absolute
            z-40

            right-6
            bottom-6

            w-12
            h-12

            flex
            items-center
            justify-center

            rounded-full

            bg-slate-900
            text-white
          "
        >
          <ArrowUpRight
            size={17}
            strokeWidth={1.7}
          />
        </motion.a>

        {/* =================================================
            BOTTOM EDGE TECHNICAL MARK
        ================================================== */}

        <div
          className="
            hidden
            lg:flex

            absolute
            z-20

            left-[4%]
            bottom-[3%]

            items-center
            gap-3

            opacity-60
          "
        >
          <span
            className="
              font-mono
              text-[9px]
              tracking-[0.22em]
              uppercase
              text-slate-500
            "
          >
            00 / Introduction
          </span>

          <span className="w-12 h-px bg-slate-400" />
        </div>
      </section>

      {/* =====================================================
          DARK CAPABILITIES SECTION
      ====================================================== */}

      <WhatWeDo />

      {/* =====================================================
          PROJECT SHOWCASE
      ====================================================== */}

      <OurWorks />

      <Contact />
    </>
  );
};

export default LandingPage;