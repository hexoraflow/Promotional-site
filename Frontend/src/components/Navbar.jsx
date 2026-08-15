import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  {
    id: "01",
    label: "Home",
    href: "#home",
  },
  {
    id: "02",
    label: "About Us",
    href: "#about",
  },
  {
    id: "03",
    label: "What We Do",
    href: "#services",
  },
  {
    id: "04",
    label: "Our Works",
    href: "#works",
  },
  {
    id: "05",
    label: "Pricing",
    href: "#pricing",
  },
  {
    id: "06",
    label: "Contact Us",
    href: "#contact",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  /* =====================================================
     SCROLL STATE
  ====================================================== */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =====================================================
     LOCK BODY WHEN MOBILE MENU IS OPEN
  ====================================================== */

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  /* =====================================================
     SMOOTH NAVIGATION
  ====================================================== */

  const handleNavigate = (event, href) => {
    event.preventDefault();

    setIsOpen(false);

    const target = document.querySelector(href);

    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <motion.nav
        className={`
          fixed
          top-0
          left-0
          right-0

          z-[100]

          h-20

          flex
          items-center

          transition-all
          duration-500

          ${
            isScrolled
              ? `
                  bg-white/85
                  backdrop-blur-xl
                  border-b
                  border-slate-200/80
                `
              : `
                  bg-transparent
                  border-b
                  border-transparent
                `
          }
        `}
      >
        <div
          className="
            w-full
            max-w-[1800px]
            mx-auto

            px-6
            md:px-16

            flex
            items-center
            justify-between
          "
        >
          {/* =================================================
              LOGO
          ================================================== */}

          <a
            href="#home"
            onClick={(event) =>
              handleNavigate(event, "#home")
            }
            className="
              group
              relative
              flex
              items-center
              py-1
            "
          >
            <img
              src="/logo-light.png"
              alt="HexoraFlow Logo"
              width="48"
              height="48"
              className="
                h-11
                md:h-12
                w-auto
                object-contain
                transition-transform
                duration-300
                group-hover:scale-105
              "
            />

            {/* Tiny technical line */}
            <span
              className="
                absolute
                -bottom-1.5
                left-0
                w-0
                h-px
                bg-orange-500
                transition-all
                duration-500
                group-hover:w-full
              "
            />
          </a>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}

          <div
            className="
              hidden
              md:flex

              items-center

              lg:gap-8
              xl:gap-10
            "
          >
            {links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(event) =>
                  handleNavigate(event, link.href)
                }
                className="
                  group
                  relative

                  flex
                  items-center
                  gap-2

                  py-2
                "
              >

                {/* Link label */}
                <span
                  className="
                    font-['Inter']
                    font-medium

                    text-[10px]
                    lg:text-[11px]

                    tracking-[0.14em]

                    uppercase

                    text-slate-500

                    transition-colors
                    duration-300

                    group-hover:text-slate-950
                  "
                >
                  {link.label}
                </span>

                {/* Hover indicator */}
                <span
                  className="
                    absolute

                    left-0
                    -bottom-0.5

                    w-0
                    h-px

                    bg-orange-500

                    transition-all
                    duration-300

                    group-hover:w-full
                  "
                />
              </a>
            ))}
          </div>

          {/* =================================================
              DESKTOP CTA
          ================================================== */}

          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(event) =>
                handleNavigate(event, "#contact")
              }
              className="
                group

                h-11

                px-5
                lg:px-6

                flex
                items-center
                gap-3

                border
                border-slate-900

                bg-transparent

                transition-all
                duration-300

                hover:bg-slate-900
                hover:text-white
              "
            >
              <span
                className="
                  font-['Inter']
                  font-semibold

                  text-[10px]
                  lg:text-[11px]

                  tracking-[0.18em]

                  uppercase
                "
              >
                Start Project
              </span>

              <ArrowUpRight
                size={15}
                strokeWidth={1.7}
                className="
                  transition-transform
                  duration-300

                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </a>
          </div>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================== */}

          <button
            type="button"
            aria-label={
              isOpen ? "Close menu" : "Open menu"
            }
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="
              md:hidden

              relative

              w-11
              h-11

              flex
              items-center
              justify-center

              border
              border-slate-300

              bg-white/60
              backdrop-blur-md

              text-slate-950

              transition-colors
              duration-300

              hover:border-slate-900
            "
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.span
                  key="close"
                  initial={{
                    opacity: 0,
                    rotate: -45,
                    scale: 0.8,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: 45,
                    scale: 0.8,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  <X size={20} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{
                    opacity: 0,
                    rotate: 45,
                    scale: 0.8,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: -45,
                    scale: 0.8,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  <Menu size={20} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* =================================================
            SCROLL PROGRESS / TECH LINE
        ================================================== */}

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{
            scaleX: isScrolled ? 1 : 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="
            absolute
            bottom-0
            left-0

            w-full
            h-px

            origin-left

            bg-gradient-to-r
            from-orange-500
            via-slate-300
            to-transparent
          "
        />
      </motion.nav>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
              fixed
              inset-0

              z-[90]

              md:hidden

              bg-[#f8fafc]
            "
          >
            {/* Mild Grid */}
            <div
              className="
                absolute
                inset-0

                pointer-events-none

                opacity-[0.55]
              "
              style={{
                backgroundImage: `
                  linear-gradient(
                    rgba(203, 213, 225, 0.7) 1px,
                    transparent 1px
                  ),
                  linear-gradient(
                    90deg,
                    rgba(203, 213, 225, 0.7) 1px,
                    transparent 1px
                  )
                `,
                backgroundSize: "60px 60px",
              }}
            />

            {/* Soft orange atmosphere */}
            <div
              className="
                absolute

                top-[-10%]
                right-[-25%]

                w-[320px]
                h-[320px]

                rounded-full

                bg-orange-200/15

                blur-3xl

                pointer-events-none
              "
            />

            <motion.div
              initial={{
                y: -20,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -15,
                opacity: 0,
              }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                z-10

                min-h-[100svh]

                px-6

                pt-28
                pb-8

                flex
                flex-col
              "
            >
              {/* =============================================
                  MOBILE SYSTEM LABEL
              ============================================== */}

              <div
                className="
                  flex
                  items-center
                  gap-3

                  mb-8
                "
              >
                <span className="w-2 h-2 bg-orange-500" />

                <span
                  className="
                    font-mono

                    text-[9px]

                    tracking-[0.25em]

                    uppercase

                    text-slate-500
                  "
                >
                  Navigation / 06
                </span>

                <span className="flex-1 h-px bg-slate-300" />
              </div>

              {/* =============================================
                  MOBILE LINKS
              ============================================== */}

              <div
                className="
                  border-t
                  border-slate-300
                "
              >
                {links.map((link, index) => (
                  <motion.a
                    key={link.id}
                    href={link.href}
                    onClick={(event) =>
                      handleNavigate(event, link.href)
                    }
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: 0.08 + index * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                      group

                      py-5

                      border-b
                      border-slate-300

                      flex
                      items-center
                      justify-between

                      text-slate-950
                    "
                  >
                    <div
                      className="
                        flex
                        items-start
                        gap-4
                      "
                    >
                      <span
                        className="
                          mt-1

                          font-mono

                          text-[9px]

                          tracking-[0.16em]

                          text-orange-500
                        "
                      >
                        {link.id}
                      </span>

                      <span
                        className="
                          font-['Space_Grotesk']

                          text-3xl

                          font-semibold

                          uppercase

                          tracking-[-0.04em]

                          leading-none
                        "
                      >
                        {link.label}
                      </span>
                    </div>

                    <ArrowUpRight
                      size={18}
                      strokeWidth={1.5}
                      className="
                        text-slate-400

                        transition-all
                        duration-300

                        group-hover:text-slate-950
                        group-hover:translate-x-0.5
                        group-hover:-translate-y-0.5
                      "
                    />
                  </motion.a>
                ))}
              </div>

              {/* =============================================
                  MOBILE CTA
              ============================================== */}

              <motion.a
                href="#contact"
                onClick={(event) =>
                  handleNavigate(event, "#contact")
                }
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.4,
                }}
                className="
                  mt-7

                  w-full
                  h-14

                  px-5

                  flex
                  items-center
                  justify-between

                  bg-slate-950
                  text-white
                "
              >
                <span
                  className="
                    font-['Inter']

                    text-[11px]

                    font-semibold

                    tracking-[0.2em]

                    uppercase
                  "
                >
                  Start A Project
                </span>

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.6}
                />
              </motion.a>

              {/* =============================================
                  MOBILE FOOTER META
              ============================================== */}

              <div
                className="
                  mt-auto
                  pt-8

                  flex
                  items-center
                  justify-between

                  font-mono

                  text-[8px]

                  tracking-[0.18em]

                  uppercase

                  text-slate-400
                "
              >
                <span>Digital Studio</span>

                <span>Build / Launch / Scale</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;