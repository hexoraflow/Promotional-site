import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  ArrowUpRight,
  HelpCircle,
  ChevronDown,
  Sparkles,
  Zap,
  Layers,
  Shield,
} from "lucide-react";

const pricingData = {
  inr: [
    {
      id: "basic",
      name: "Basic",
      tagline: "Starter Business Website",
      popular: false,
      price: "₹7,000",
      period: "one-time",
      delivery: "3–5 Days Delivery",
      description:
        "Essential modern website for local businesses, shops, startups, and personal brands seeking a professional online presence.",
      features: [
        "Up to 5 Custom Responsive Pages",
        "Sub-second Load Time & 95+ PageSpeed",
        "Mobile, Tablet & Desktop Friendly",
        "Google Search Console & SEO Setup",
        "Contact Form & WhatsApp Chat Integration",
        "Clean Semantic HTML / React Code",
        "Free Domain & Cloudflare SSL Setup",
        "30 Days Free Maintenance & Support",
      ],
      ctaText: "Choose Basic Plan",
      accent: "slate",
    },
    {
      id: "growth",
      name: "Growth",
      tagline: "Full-Stack Web App & Dynamic Website",
      popular: true,
      price: "₹20,000",
      period: "one-time",
      delivery: "7–10 Days Delivery",
      description:
        "Tailored for growing businesses, e-commerce, and service brands requiring custom UI/UX design, database integration, and high conversion.",
      features: [
        "React / Next.js / Django Architecture",
        "Bespoke UI/UX Design System in Figma",
        "CMS / Dynamic Database Integration",
        "Advanced Google SEO & Schema Markup",
        "Payment Gateway (Razorpay / UPI / Stripe)",
        "Smooth Micro-Animations & Interactivity",
        "Full Source Code & GitHub Ownership",
        "Admin Dashboard / Management System",
        "60 Days Dedicated Support & Maintenance",
      ],
      ctaText: "Choose Growth Plan",
      accent: "orange",
    },
    {
      id: "premium",
      name: "Premium",
      tagline: "Custom Software & Mobile Solutions",
      popular: false,
      price: "₹35,000",
      period: "one-time",
      delivery: "14–20 Days Delivery",
      description:
        "Comprehensive digital platform for businesses needing custom web portals, mobile apps, database architecture, or automated business tools.",
      features: [
        "Custom Web App or Mobile Application",
        "Scalable Cloud Backend (Python / Node.js)",
        "User Accounts & Role-Based Access Control",
        "Custom API Development & Integrations",
        "Business Automation & Workflow Tools",
        "High-Security Architecture & Backups",
        "Cloud Hosting & Production Deployment",
        "Dedicated Developer & Sprint Updates",
        "90 Days Priority Support & Maintenance",
      ],
      ctaText: "Choose Premium Plan",
      accent: "slate",
    },
  ],
  usd: [
    {
      id: "basic",
      name: "Basic",
      tagline: "Starter Business Website",
      popular: false,
      price: "$89",
      period: "one-time",
      delivery: "3–5 Days Delivery",
      description:
        "Essential modern website for local businesses, startups, and personal brands seeking a fast, professional online presence.",
      features: [
        "Up to 5 Custom Responsive Pages",
        "Sub-second Load Time & 95+ PageSpeed",
        "Mobile, Tablet & Desktop Friendly",
        "Google Search Console & SEO Setup",
        "Contact Form & Direct Inquiries",
        "Clean Semantic HTML / React Code",
        "Domain & Cloudflare SSL Setup",
        "30 Days Free Maintenance & Support",
      ],
      ctaText: "Choose Basic Plan",
      accent: "slate",
    },
    {
      id: "growth",
      name: "Growth",
      tagline: "Full-Stack Web App & Dynamic Website",
      popular: true,
      price: "$249",
      period: "one-time",
      delivery: "7–10 Days Delivery",
      description:
        "Tailored for growing businesses, e-commerce, and product brands requiring custom UI/UX design, database integration, and high conversion.",
      features: [
        "React / Next.js / Django Architecture",
        "Bespoke UI/UX Design System in Figma",
        "CMS / Dynamic Database Integration",
        "Advanced Google SEO & Schema Markup",
        "Payment Gateway Integration (Stripe / PayPal)",
        "Smooth Micro-Animations & Interactivity",
        "Full Source Code & GitHub Ownership",
        "Admin Dashboard / Management System",
        "60 Days Dedicated Support & Maintenance",
      ],
      ctaText: "Choose Growth Plan",
      accent: "orange",
    },
    {
      id: "premium",
      name: "Premium",
      tagline: "Custom Software & Mobile Solutions",
      popular: false,
      price: "$449",
      period: "one-time",
      delivery: "14–20 Days Delivery",
      description:
        "Comprehensive digital platform for businesses needing custom web portals, mobile apps, database architecture, or automated business tools.",
      features: [
        "Custom Web App or Mobile Application",
        "Scalable Cloud Backend (Python / Node.js)",
        "User Accounts & Role-Based Access Control",
        "Custom API Development & Integrations",
        "Business Automation & Workflow Tools",
        "High-Security Architecture & Backups",
        "Cloud Hosting & Production Deployment",
        "Dedicated Developer & Sprint Updates",
        "90 Days Priority Support & Maintenance",
      ],
      ctaText: "Choose Premium Plan",
      accent: "slate",
    },
  ],
};

const faqs = [
  {
    question: "How do we get started and what is the payment process?",
    answer:
      "We start with a quick discussion to understand your requirements and vision. Payments are divided into milestone stages (e.g. 50% upon project kickoff and 50% after your final approval before launch). We accept UPI, GPay, Bank Transfer, Razorpay, and International Wire / Stripe.",
  },
  {
    question: "Do you work with clients across Madurai, Tamil Nadu, and internationally?",
    answer:
      "Yes! Headquartered in Madurai, HexoraFlow serves businesses across South Tamil Nadu (Madurai, Tirunelveli, Dindigul, Thoothukudi, Virudhunagar, Sivakasi, Theni), Chennai, Bangalore, and across India, as well as global clients in the United States, UK, Europe, UAE, Singapore, and Australia.",
  },
  {
    question: "Do I get full ownership of the source code and design files?",
    answer:
      "Absolutely. You receive 100% intellectual property ownership of the complete codebase (GitHub repository), assets, Figma designs, and deployment configurations upon project completion with zero hidden recurring fees.",
  },
  {
    question: "What if I need custom features not listed in these packages?",
    answer:
      "Every business is unique. We regularly build custom web platforms, e-commerce stores, client portals, and mobile apps. Reach out through our contact form and we will provide a clear, customized proposal.",
  },
  {
    question: "How do you ensure my website ranks on Google Search?",
    answer:
      "We implement complete technical SEO into every build: high-speed performance, clean semantic HTML5, XML sitemaps, robots.txt, Schema.org Organization markup, and Google Search Console verification to help you rank.",
  },
];

const Pricing = () => {
  const [currency, setCurrency] = useState("inr");
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  const handleSelectPlan = (planName) => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentPlans = pricingData[currency];

  return (
    <section
      id="pricing"
      className="
        relative
        overflow-hidden
        bg-[#090d14]
        text-white
        border-t
        border-white/10
        py-16
        md:py-24
      "
    >
      {/* Background Subtle Grid */}
      <div
        className="
          absolute
          inset-0
          pointer-events-none
          opacity-[0.14]
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(148, 163, 184, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148, 163, 184, 0.2) 1px, transparent 1px)
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
        "
      >
        {/* =====================================================
            HEADER & CURRENCY TOGGLE
        ====================================================== */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14 md:mb-18">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2.5 h-2.5 bg-orange-500 rounded-none" />
              <span
                className="
                  font-mono
                  text-[10px]
                  md:text-[11px]
                  tracking-[0.24em]
                  uppercase
                  text-orange-400
                "
              >
                03 / TRANSPARENT PRICING
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
              Affordable Pricing.{" "}
              <span className="text-orange-500">Unmatched Quality.</span>
            </h2>
            <p className="mt-3 text-slate-400 text-sm md:text-base max-w-2xl font-['Inter']">
              Clear, milestone-based packages designed for businesses in Madurai,
              Tamil Nadu, and worldwide. No hidden costs.
            </p>
          </div>

          {/* Currency Switcher */}
          <div
            className="
              self-start
              md:self-auto
              p-1.5
              border
              border-white/20
              bg-white/5
              backdrop-blur-md
              flex
              items-center
              gap-1
            "
          >
            <button
              type="button"
              onClick={() => setCurrency("inr")}
              className={`
                px-4
                py-2
                text-xs
                font-mono
                tracking-wider
                uppercase
                transition-all
                duration-300
                ${
                  currency === "inr"
                    ? "bg-orange-500 text-white font-bold shadow-md"
                    : "text-slate-400 hover:text-white"
                }
              `}
            >
              INR (₹) • India
            </button>
            <button
              type="button"
              onClick={() => setCurrency("usd")}
              className={`
                px-4
                py-2
                text-xs
                font-mono
                tracking-wider
                uppercase
                transition-all
                duration-300
                ${
                  currency === "usd"
                    ? "bg-orange-500 text-white font-bold shadow-md"
                    : "text-slate-400 hover:text-white"
                }
              `}
            >
              USD ($) • Global
            </button>
          </div>
        </div>

        {/* =====================================================
            PRICING CARDS (7k / 20k / 35k)
        ====================================================== */}
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-3
            gap-8
            mb-20
            md:mb-28
          "
        >
          {currentPlans.map((plan, index) => {
            const isPopular = plan.popular;
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className={`
                  relative
                  flex
                  flex-col
                  justify-between
                  p-8
                  md:p-10
                  transition-all
                  duration-300
                  ${
                    isPopular
                      ? "bg-[#111827] border-2 border-orange-500 shadow-2xl shadow-orange-500/10 lg:-translate-y-2"
                      : "bg-[#0f141f] border border-white/10 hover:border-white/25"
                  }
                `}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div
                    className="
                      absolute
                      -top-3.5
                      right-6
                      px-3.5
                      py-1
                      bg-orange-500
                      text-white
                      font-mono
                      text-[9px]
                      font-bold
                      tracking-[0.2em]
                      uppercase
                    "
                  >
                    RECOMMENDED • MOST POPULAR
                  </div>
                )}

                <div>
                  {/* Plan Top Meta */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-orange-400 font-semibold">
                      {plan.tagline}
                    </span>
                  </div>

                  <h3 className="font-['Space_Grotesk'] text-2xl md:text-3xl font-bold tracking-tight text-white mb-4">
                    {plan.name}
                  </h3>

                  <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-['Inter'] mb-6 min-h-[48px]">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="pb-6 mb-6 border-b border-white/10">
                    <div className="flex items-baseline gap-2">
                      <span className="font-['Space_Grotesk'] text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                        {plan.price}
                      </span>
                      <span className="font-mono text-[11px] text-slate-400 uppercase tracking-wider">
                        / {plan.period}
                      </span>
                    </div>

                    <div className="mt-2.5 inline-flex items-center gap-2 px-2.5 py-1 bg-white/5 border border-white/10">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span className="font-mono text-[9px] text-slate-300 uppercase tracking-widest">
                        {plan.delivery}
                      </span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3.5 mb-8">
                    <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-slate-400 font-semibold">
                      What's Included:
                    </span>
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3">
                        <span
                          className={`
                            shrink-0
                            w-5
                            h-5
                            flex
                            items-center
                            justify-center
                            mt-0.5
                            ${
                              isPopular
                                ? "bg-orange-500 text-white"
                                : "bg-white/10 text-slate-300"
                            }
                          `}
                        >
                          <Check size={13} strokeWidth={2.5} />
                        </span>
                        <span className="text-xs md:text-sm text-slate-300 font-['Inter'] leading-snug">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  type="button"
                  onClick={() => handleSelectPlan(plan.name)}
                  className={`
                    w-full
                    py-4
                    px-6
                    flex
                    items-center
                    justify-center
                    gap-3
                    font-['Inter']
                    text-xs
                    md:text-sm
                    font-semibold
                    tracking-[0.16em]
                    uppercase
                    transition-all
                    duration-300
                    cursor-pointer
                    ${
                      isPopular
                        ? "bg-orange-500 text-white hover:bg-orange-600 shadow-lg shadow-orange-500/20"
                        : "bg-white/10 text-white hover:bg-white hover:text-slate-950"
                    }
                  `}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowUpRight size={16} />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* =====================================================
            FAQ ACCORDION SECTION
        ====================================================== */}
        <div className="border-t border-white/10 pt-16 md:pt-20">
          <div className="max-w-3xl mb-10">
            <div className="flex items-center gap-2 mb-3">
              <HelpCircle size={16} className="text-orange-500" />
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-orange-400">
                Frequently Asked Questions
              </span>
            </div>
            <h3 className="font-['Space_Grotesk'] text-2xl md:text-4xl font-bold tracking-tight uppercase">
              Everything You Need To Know
            </h3>
          </div>

          <div className="space-y-4 max-w-4xl">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="
                    border
                    border-white/10
                    bg-[#0d131c]
                    transition-colors
                    duration-200
                    hover:border-white/20
                  "
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="
                      w-full
                      p-6
                      flex
                      items-center
                      justify-between
                      gap-4
                      text-left
                      cursor-pointer
                    "
                  >
                    <span className="font-['Space_Grotesk'] text-base md:text-lg font-bold text-white tracking-tight">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`
                        shrink-0
                        text-orange-400
                        transition-transform
                        duration-300
                        ${isOpen ? "rotate-180" : ""}
                      `}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-1 text-sm md:text-[15px] text-slate-300 leading-relaxed font-['Inter'] border-t border-white/5">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
