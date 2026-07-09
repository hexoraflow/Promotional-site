import React from "react";

const FloatingShapes = () => {
  return (
    <div
      className="
        pointer-events-none
        absolute
        inset-0
        z-[6]
        overflow-hidden
      "
      aria-hidden="true"
    >
      {/* =====================================================
          01 — ORBITAL SYSTEM
          Top-right empty zone
      ====================================================== */}
      <div className="
        absolute
        md:right-[15%]
        right-[5%]
        md:top-[13%]
        top-[20%]
        animate-float-slow
      ">
        <div className="relative w-32 h-32 lg:w-40 lg:h-40">

          {/* Outer orbit */}
          <div className="
            absolute inset-0
            rounded-full
            border
            border-slate-900/20
          " />

          {/* Inner dashed orbit */}
          <div className="
            absolute inset-[18%]
            rounded-full
            border
            border-dashed
            border-slate-900/20
          " />

          {/* Vertical axis */}
          <div className="
            absolute
            left-1/2
            top-[-12px]
            h-[calc(100%+24px)]
            w-px
            bg-slate-900/10
          " />

          {/* Dark node */}
          <div className="
            absolute
            left-1/2
            top-[8%]
            w-2.5 h-2.5
            -translate-x-1/2
            rounded-full
            bg-slate-900
          " />

          {/* Orange core */}
          <div className="
            absolute
            left-1/2
            top-1/2
            w-2 h-2
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-orange-500
          " />
        </div>
      </div>


      {/* =====================================================
          02 — SMALL CROSS MARK
          Top-center negative space
      ====================================================== */}
      <div className="
        absolute
        left-[47%]
        top-[12%]
        animate-float-fast
      ">
        <div className="
          relative
          w-10 h-10
          rotate-12
          opacity-45
        ">
          <div className="
            absolute
            left-1/2 top-0
            w-px h-full
            bg-slate-700
          " />

          <div className="
            absolute
            top-1/2 left-0
            h-px w-full
            bg-slate-700
          " />
        </div>
      </div>

      {/* =====================================================
          04 — COORDINATE / SYSTEM LABEL
          Bottom-left
      ====================================================== */}
      <div className="
        absolute
        left-[4%]
        bottom-[7%]
        animate-float-subtle
      ">
        <div className="
          flex
          items-center
          gap-3
          opacity-55
        ">
          <div className="
            w-12
            h-px
            bg-slate-700/60
            -rotate-6
          " />

          <span className="
            font-mono
            text-[9px]
            tracking-[0.3em]
            text-slate-600
          ">
            24.08
          </span>

          <div className="
            w-2 h-2
            bg-orange-300
          " />
        </div>
      </div>


      {/* =====================================================
          05 — TECH CARD
          Bottom-center open area
      ====================================================== */}
      <div className="
        absolute
        left-[57%]
        bottom-[8%]
        animate-float-medium
      ">
        <div className="
          relative
          w-16 h-16
          rotate-12
          border
          border-slate-700/25
        ">
          {/* inner line */}
          <div className="
            absolute
            left-2
            bottom-3
            w-6
            h-px
            bg-slate-700/50
          " />

          {/* orange node */}
          <div className="
            absolute
            -right-1
            top-2
            w-2.5 h-2.5
            bg-orange-300
          " />
        </div>
      </div>


      {/* =====================================================
          06 — CONNECTION SYSTEM
          Right side between text regions
      ====================================================== */}
      <div className="
        absolute
        right-[6%]
        top-[64%]
        animate-float-slow
      ">
        <div className="
          relative
          w-28 h-24
          opacity-50
        ">
          <svg
            viewBox="0 0 120 100"
            className="absolute inset-0 w-full h-full"
            fill="none"
          >
            <path
              d="M8 20 L105 12 L82 88 Z"
              stroke="rgb(51 65 85 / 0.45)"
              strokeWidth="1"
            />
          </svg>

          <div className="
            absolute
            left-[3%]
            top-[16%]
            w-2 h-2
            rounded-full
            bg-slate-900
          " />

          <div className="
            absolute
            right-[8%]
            top-[8%]
            w-2 h-2
            rounded-full
            bg-orange-400
          " />

          <div className="
            absolute
            right-[25%]
            bottom-[8%]
            w-2.5 h-2.5
            rounded-full
            bg-slate-500
          " />
        </div>
      </div>


      {/* =====================================================
          07 — MICRO DATA MARKER
          Left-middle edge
      ====================================================== */}
      <div className="
        absolute
        left-[2.5%]
        top-[43%]
        animate-float-subtle
      ">
        <div className="
          flex
          flex-col
          gap-1
          opacity-40
        ">
          <span className="
            font-mono
            text-[8px]
            tracking-[0.25em]
            text-slate-600
          ">
            SYS.01
          </span>

          <div className="
            flex
            items-center
            gap-1
          ">
            <div className="w-8 h-px bg-slate-600" />
            <div className="w-1 h-1 bg-orange-500" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default FloatingShapes;