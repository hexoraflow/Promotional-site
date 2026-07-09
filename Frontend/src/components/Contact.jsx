import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Mail, Check, AlertCircle, Loader2 } from "lucide-react";
import { useForm } from "@formspree/react"; // 1. Added Formspree import

const ease = [0.22, 1, 0.36, 1];
const projectTypes = ["Website", "Mobile App", "UI / UX", "Custom Software"];

const Contact = () => {
  const [selectedType, setSelectedType] = useState("Website");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [localSubmissionError, setLocalSubmissionError] = useState(null);
  
  // 2. Initialize Formspree hook (Removed local 'status' state)
  const [state, handleFormspreeSubmit] = useForm("xkolkjqy");//Api Key on useForm

  // 3. Reset form data automatically when Formspree succeeds
  useEffect(() => {
    if (state.succeeded) {
      setFormData({ name: "", email: "", message: "" });
      setSelectedType("Website");
      setLocalSubmissionError(null);
    }
  }, [state.succeeded]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }

    if (localSubmissionError) {
      setLocalSubmissionError(null);
    }
  };

  const validateForm = () => {
    const nextErrors = {};
    if (!formData.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }
    if (!formData.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!formData.message.trim()) {
      nextErrors.message = "Tell us a little about your project.";
    } else if (formData.message.trim().length < 20) {
      nextErrors.message = "A little more detail will help us understand your idea.";
    }
    return nextErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nextErrors = validateForm();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      const firstError = Object.keys(nextErrors)[0];
      requestAnimationFrame(() => {
        document.getElementById(firstError)?.focus();
      });
      return;
    }

    setErrors({});
    setLocalSubmissionError(null);

    try {
      // 4. Trigger Formspree submission after your custom validation passes
      await handleFormspreeSubmit(event);
    } catch (err) {
      console.error("Form submission error caught:", err);
      setLocalSubmissionError(err?.message || "A network error occurred. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className=" relative overflow-hidden bg-[#0b1017] text-white border-t border-white/10 "
    >
      {/* ===================================================== MILD GRID ====================================================== */}
      <div
        className=" absolute inset-0 pointer-events-none opacity-[0.11] "
        style={{
          backgroundImage: ` linear-gradient( rgba(148, 163, 184, 0.24) 1px, transparent 1px ), linear-gradient( 90deg, rgba(148, 163, 184, 0.24) 1px, transparent 1px ) `,
          backgroundSize: "72px 72px",
        }}
      />
      {/* Soft atmosphere */}
      <div className=" absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-orange-500/[0.045] blur-3xl pointer-events-none " />

      {/* ===================================================== CONTAINER ====================================================== */}
      <div className=" relative z-10 max-w-[1800px] mx-auto px-5 sm:px-6 md:px-16 py-14 md:py-20 lg:py-24 ">
        {/* ================================================= SECTION HEADER ================================================== */}
        <div className=" grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-12 items-end mb-9 md:mb-12 ">
          <div className="lg:col-span-8">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease }}
              className=" flex items-center gap-3 mb-4 "
            >
              <span className="w-2 h-2 bg-orange-500" />
              <span className=" font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase text-slate-400 ">
                Contact / Start A Project
              </span>
            </motion.div>
            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                ease,
              }}
              className=" font-['Space_Grotesk'] text-[13vw] sm:text-[11vw] md:text-[7vw] lg:text-[6.4rem] xl:text-[7.2rem] font-bold uppercase leading-[0.86] tracking-[-0.055em] "
            >
              Let's Make <br /> It <span className="text-orange-500">Real.</span>
            </motion.h2>
          </div>
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.12,
            }}
            className=" lg:col-span-4 lg:pb-2 "
          >
            <p className=" max-w-lg border-l-2 border-orange-500 pl-4 md:pl-5 text-sm md:text-[15px] lg:text-base leading-7 text-slate-300 ">
              Tell us what you want to build. A rough idea is enough — we can
              figure out the rest together.
            </p>
          </motion.div>
        </div>

        {/* ================================================= CONTACT WORKSPACE ================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            margin: "-60px",
          }}
          transition={{
            duration: 0.7,
            delay: 0.1,
            ease,
          }}
          className=" border border-white/15 bg-white text-slate-950 shadow-2xl shadow-black/20 "
        >
          <div className=" grid grid-cols-1 lg:grid-cols-12 ">
            {/* ============================================= LEFT INFO PANEL ============================================== */}
            <aside className=" lg:col-span-4 bg-[#111821] text-white p-6 md:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-white/10 ">
              <div className=" h-full flex flex-col ">
                {/* Top meta */}
                <div className=" flex items-center justify-between gap-4 pb-5 border-b border-white/15 ">
                  <span className=" font-mono text-[10px] md:text-[11px] tracking-[0.18em] uppercase text-slate-400 ">
                    Project Channel
                  </span>
                  <span className=" font-mono text-[10px] text-orange-400 ">
                    01 / 01
                  </span>
                </div>
                {/* Main info */}
                <div className="py-7 md:py-8">
                  <h3 className=" font-['Space_Grotesk'] text-3xl md:text-4xl lg:text-[2.6rem] font-semibold uppercase tracking-[-0.045em] leading-[0.95] ">
                    Start With <br /> The Idea.
                  </h3>
                  <p className=" mt-5 max-w-sm text-[15px] md:text-base leading-7 text-slate-400 ">
                    No polished brief needed. Share the problem, product, or
                    opportunity you're thinking about.
                  </p>
                </div>
                {/* Expectations */}
                <div className=" grid grid-cols-2 lg:grid-cols-1 gap-3 mt-1 ">
                  <InfoItem number="01" title="Tell us the idea" />
                  <InfoItem number="02" title="We review the scope" />
                  <InfoItem number="03" title="We plan next steps" />
                </div>
                {/* Email */}
                <a
                  href="mailto:hexoraflow@gmail.com"
                  className=" group mt-7 lg:mt-auto pt-6 border-t border-white/15 flex items-center justify-between gap-4 "
                >
                  <span>
                    <span className=" block font-mono text-[9px] md:text-[10px] tracking-[0.18em] uppercase text-slate-500 ">
                      Prefer Email?
                    </span>
                    <span className=" block mt-1 text-sm md:text-base text-slate-200 ">
                      hexoraflow@gmail.com
                    </span>
                  </span>
                  <span className=" w-11 h-11 shrink-0 flex items-center justify-center border border-white/20 transition-all duration-300 group-hover:bg-orange-500 group-hover:border-orange-500 ">
                    <Mail size={17} />
                  </span>
                </a>
              </div>
            </aside>

            {/* ============================================= FORM PANEL ============================================== */}
            <div className=" lg:col-span-8 p-5 sm:p-6 md:p-8 lg:p-10 xl:p-12 ">
              {/* Form heading */}
              <div className=" flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 pb-6 md:pb-7 border-b border-slate-200 ">
                <div>
                  <span className=" font-mono text-[10px] md:text-[11px] tracking-[0.18em] uppercase text-slate-500 ">
                    Project Inquiry
                  </span>
                  <h3 className=" mt-2 font-['Space_Grotesk'] text-2xl md:text-3xl font-semibold tracking-[-0.04em] ">
                    Tell us about your project
                  </h3>
                </div>
                <span className=" text-sm text-slate-500 ">
                  All fields are required
                </span>
              </div>

              <form onSubmit={handleSubmit} noValidate className=" pt-6 md:pt-8 ">
                
                {/* 5. Hidden Input to send 'selectedType' to Formspree */}
                <input type="hidden" name="projectType" value={selectedType} />

                {/* ========================================= NAME + EMAIL ========================================== */}
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 ">
                  <FormField
                    label="Your Name"
                    name="name"
                    type="text"
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    error={errors.name}
                    autoComplete="name"
                  />
                  <FormField
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                    autoComplete="email"
                  />
                </div>

                {/* ========================================= PROJECT TYPE ========================================== */}
                <fieldset className="mt-7 md:mt-8">
                  <legend className=" text-sm md:text-[15px] font-semibold text-slate-900 ">
                    What are we building?
                  </legend>
                  <p className=" mt-1 text-sm text-slate-500 ">
                    Choose the closest option.
                  </p>
                  <div className=" mt-4 grid grid-cols-2 lg:grid-cols-4 gap-2.5 md:gap-3 ">
                    {projectTypes.map((type) => {
                      const active = selectedType === type;
                      return (
                        <button
                          key={type}
                          type="button"
                          aria-pressed={active}
                          onClick={() => setSelectedType(type)}
                          className={` min-h-[52px] px-3 md:px-4 flex items-center justify-center gap-2 border text-[13px] md:text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 ${
                            active
                              ? ` border-slate-950 bg-slate-950 text-white `
                              : ` border-slate-300 bg-white text-slate-700 hover:border-slate-950 hover:text-slate-950 `
                          }`}
                        >
                          {active && <Check size={15} strokeWidth={2.2} />}
                          {type}
                        </button>
                      );
                    })}
                  </div>
                </fieldset>

                {/* ========================================= MESSAGE ========================================== */}
                <div className="mt-7 md:mt-8">
                  <label
                    htmlFor="message"
                    className=" block text-sm md:text-[15px] font-semibold text-slate-900 "
                  >
                    Tell us about your idea
                  </label>
                  <p id="message-help" className=" mt-1 text-sm text-slate-500 ">
                    Goals, problem, timeline — whatever you know so far.
                  </p>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={
                      errors.message ? "message-error" : "message-help"
                    }
                    placeholder="We want to build..."
                    className={` mt-4 w-full min-h-[150px] resize-y border bg-white px-4 py-3.5 text-base leading-7 text-slate-950 placeholder:text-slate-400 outline-none transition-all duration-200 focus:ring-2 focus:ring-orange-500/20 ${
                      errors.message
                        ? ` border-red-500 focus:border-red-500 `
                        : ` border-slate-300 focus:border-orange-500 `
                    }`}
                  />
                  {errors.message && (
                    <p
                      id="message-error"
                      role="alert"
                      className=" mt-2 flex items-center gap-2 text-sm text-red-600 "
                    >
                      <AlertCircle size={15} />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* ========================================= STATUS ========================================== */}
                <div aria-live="polite" className="mt-5 overflow-hidden">
                  <AnimatePresence mode="wait">
                    {state.succeeded && (
                      <motion.div
                        key="success-alert"
                        initial={{ opacity: 0, height: 0, y: -10 }}
                        animate={{ opacity: 1, height: "auto", y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -10 }}
                        transition={{ duration: 0.3, ease }}
                        className=" flex items-start gap-3 border border-emerald-500/20 bg-emerald-50/50 p-4 text-sm leading-6 text-emerald-800 backdrop-blur-sm "
                      >
                        <Check className="mt-0.5 w-5 h-5 text-emerald-600 shrink-0" />
                        <div>
                          <strong className="font-semibold block text-emerald-900">Message sent successfully!</strong>
                          <span className="text-emerald-700">Thanks — your inquiry is ready. We'll get back to you soon.</span>
                        </div>
                      </motion.div>
                    )}

                    {(state.errors || localSubmissionError) && !state.succeeded && (
                      <motion.div
                        key="error-alert"
                        initial={{ opacity: 0, height: 0, y: -10 }}
                        animate={{ opacity: 1, height: "auto", y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -10 }}
                        transition={{ duration: 0.3, ease }}
                        className=" flex items-start gap-3 border border-red-500/20 bg-red-50/50 p-4 text-sm leading-6 text-red-700 backdrop-blur-sm "
                      >
                        <AlertCircle className="mt-0.5 w-5 h-5 text-red-600 shrink-0" />
                        <div className="flex-1">
                          <strong className="font-semibold block text-red-900">Submission failed</strong>
                          <span className="text-red-700 block">
                            {localSubmissionError || "Something went wrong. Please check your inputs or try again."}
                          </span>
                          
                          {/* Display Formspree Form-level Errors */}
                          {state.errors && typeof state.errors.getFormErrors === "function" && state.errors.getFormErrors().length > 0 && (
                            <ul className="mt-2 list-disc list-inside space-y-1 text-xs text-red-600/90 font-medium">
                              {state.errors.getFormErrors().map((err, idx) => (
                                <li key={idx}>{err.message}</li>
                              ))}
                            </ul>
                          )}

                          {/* Display Formspree Field-level Validation Errors */}
                          {state.errors && typeof state.errors.getFieldErrors === "function" && (
                            <ul className="mt-2 list-disc list-inside space-y-1 text-xs text-red-600/90 font-medium">
                              {["name", "email", "message"].map((field) => {
                                const fieldErrors = state.errors.getFieldErrors(field);
                                if (Array.isArray(fieldErrors) && fieldErrors.length > 0) {
                                  return fieldErrors.map((err, idx) => (
                                    <li key={`${field}-${idx}`}>
                                      <span className="capitalize font-semibold">{field}</span>: {err.message}
                                    </li>
                                  ));
                                }
                                return null;
                              })}
                            </ul>
                          )}

                          {/* Fallback to exception messages inside state.errors */}
                          {state.errors && state.errors.message && (
                            <p className="mt-2 text-xs text-red-600/90 font-medium">
                              {state.errors.message}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* ========================================= SUBMIT ROW ========================================== */}
                <div className=" mt-7 md:mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 ">
                  <p className=" text-sm leading-6 text-slate-500 sm:max-w-xs ">
                    We only use these details to respond to your inquiry.
                  </p>
                  {/* 8. Linked disabled state to state.submitting */}
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className=" group w-full sm:w-auto min-h-[56px] px-6 flex items-center justify-center gap-4 bg-slate-950 text-white text-sm font-semibold transition-all duration-300 hover:bg-orange-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 "
                  >
                    {state.submitting ? (
                      <>
                        <Loader2 size={17} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Project Inquiry
                        <ArrowUpRight
                          size={17}
                          className=" transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 "
                        />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>

        {/* ================================================= FOOTER ================================================== */}
        <footer className=" mt-8 md:mt-10 pt-6 border-t border-white/15 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 ">
          <a
            href="#home"
            className=" inline-flex items-center font-['Space_Grotesk'] text-xl md:text-2xl font-bold tracking-[-0.06em] "
          >
            heXora <span className="ml-0.5 text-orange-500">.</span>
          </a>
          <div className=" flex items-center gap-3 ">
            <span className=" w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse " />
            <span className=" font-mono text-[9px] md:text-[10px] tracking-[0.16em] uppercase text-slate-500 ">
              Open For New Projects
            </span>
          </div>
          <span className=" font-mono text-[9px] tracking-[0.15em] uppercase text-slate-600 ">
            © {new Date().getFullYear()} heXora Studio
          </span>
        </footer>
      </div>
    </section>
  );
};

/* ========================================================= FORM FIELD ========================================================= */
const FormField = ({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  error,
  autoComplete,
}) => {
  const helpId = `${name}-error`;
  return (
    <div>
      <label
        htmlFor={name}
        className=" block text-sm md:text-[15px] font-semibold text-slate-900 "
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? helpId : undefined}
        className={` mt-2.5 w-full min-h-[52px] border bg-white px-4 text-base text-slate-950 placeholder:text-slate-400 outline-none transition-all duration-200 focus:ring-2 focus:ring-orange-500/20 ${
          error
            ? ` border-red-500 focus:border-red-500 `
            : ` border-slate-300 focus:border-orange-500 `
        }`}
      />
      {error && (
        <p
          id={helpId}
          role="alert"
          className=" mt-2 flex items-center gap-2 text-sm text-red-600 "
        >
          <AlertCircle size={15} />
          {error}
        </p>
      )}
    </div>
  );
};

/* ========================================================= INFO ITEM ========================================================= */
const InfoItem = ({ number, title }) => {
  return (
    <div className=" flex items-center gap-3 min-h-[44px] ">
      <span className=" w-8 h-8 shrink-0 flex items-center justify-center border border-white/15 font-mono text-[9px] text-orange-400 ">
        {number}
      </span>
      <span className=" text-xs md:text-sm text-slate-300 ">
        {title}
      </span>
    </div>
  );
};

export default Contact;