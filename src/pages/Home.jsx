import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaGlobeAmericas,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaEnvelope,
  FaMapMarker,
  FaPhone,
  FaBars,
  FaTimes,
  FaArrowRight,
  FaQuoteLeft,
  FaRegCheckCircle,
} from "react-icons/fa";
import API_BASE_URL from "../config/config";

import latin from "/public/Lac.jpg";
import home from "/public/home.jpeg";

// --- PRO EDITORIAL EARTHY THEME ---
// Background: #F4F0EA (Soft Cream)
// Accent: #8A9A86 (Sage Green)
// Text/Dark Accent: #3E443C (Dark Olive/Charcoal)

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeRight = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState(null);

  // --- 2. INPUT CHANGE HANDLER ---
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // --- 3. SUBMIT HANDLER (Connects to Backend) ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMsg(null);

    try {
      const response = await fetch(`${API_BASE_URL}/queries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatusMsg({
          type: "success",
          text: "Your message has been sent successfully!",
        });
        setFormData({ name: "", email: "", subject: "", message: "" }); // Form clear karo
      } else {
        setStatusMsg({
          type: "error",
          text: data.message || "Failed to send message.",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatusMsg({
        type: "error",
        text: "Server error. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const whatWeDo = [
    {
      title: "Trade Promotion",
      desc: "Connecting Indian exporters and LAC buyers across 9 priority sectors — facilitating trade missions, B2B matchmaking, and market entry support.",
    },
    {
      title: "Investment Facilitation",
      desc: "Guiding companies through feasibility assessment, regulatory navigation, location strategy, and entity setup in both regions.",
    },
    {
      title: "Policy Advocacy",
      desc: "Placing private sector priorities directly in front of governments to shape bilateral agreements, tariff frameworks, and trade infrastructure.",
    },
    {
      title: "Sectoral Conclaves",
      desc: "Convening India's premier India–LAC business gatherings for policymakers, CEOs, diplomats, and industry associations.",
    },
    {
      title: "Membership & Network",
      desc: "Offering a growing community of executives and institutions invested in India–LAC growth with founding membership opportunities.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F4F0EA] text-[#3E443C] font-sans selection:bg-[#8A9A86] selection:text-white overflow-x-hidden">
      <main className="pt-20">
        {/* --- HERO SECTION (Kept intact) --- */}
        <section
          id="home"
          className="relative min-h-[90vh] flex items-center justify-center bg-[#EAE6DB] overflow-hidden"
        >
          <div className="absolute inset-0 z-0">
            <img
              src={home}
              alt="Conference"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#3E443C]/80 via-[#4F564D]/70 to-[#2E332C]/95" />
          </div>

          <div className="relative max-w-5xl mx-auto text-center z-10 px-4 py-20">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2.5 text-xs text-[#E8EAE6] uppercase tracking-[0.25em] mb-8 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#8A9A86] animate-pulse" />
              <span>an initiative by </span>
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-5xl sm:text-6xl md:text-8xl font-serif font-light text-white tracking-wide leading-tight"
            >
              India – L A C <br />
              <span className="text-[#B6C3B1] font-medium ">
                Trade & Investment Forum
              </span>
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8 text-lg sm:text-xl text-[#DCE0D9] max-w-2xl mx-auto font-light leading-relaxed"
            >
              Bridging India and the Latin America & Caribbean (LAC) region by
              connecting businesses, capital, and global opportunities through
              elegant execution
            </motion.p>
          </div>
        </section>

        {/* =========================================
            PRO EDITORIAL ABOUT SECTION STARTS HERE
        ========================================= */}
        <div id="about" className="scroll-mt-20">
          {/* 1. Who We Are (Split Editorial Layout) */}
          <section className="py-24 md:py-32 px-4 max-w-7xl mx-auto relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              {/* Text Block */}
              <motion.div
                className="lg:col-span-7 z-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeRight}
              >
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <h2 className="text-4xl md:text-5xl font-serif text-[#3E443C]">
                    What We Do
                  </h2>
                  <div className="w-16 h-[2px] bg-[#8A9A86] mt-2" />
                </motion.div>

                <h2 className="text-4xl md:text-6xl font-serif text-[#3E443C] leading-[1.1] mb-8">
                  <span className="italic text-[#8A9A86]">
                    India–LAC Corridor.
                  </span>
                </h2>

                <div className="space-y-6 text-lg text-[#5B6358] font-light leading-relaxed">
                  <p>
                    The{" "}
                    <strong className="font-semibold text-[#3E443C]">
                      India Latin America Caribbean Trade & Investment Forum
                      (ILACTIF)
                    </strong>{" "}
                    is India's dedicated institutional platform for advancing
                    trade, investment, and strategic partnership between India
                    and the Latin American & Caribbean region.
                  </p>
                  <p>
                    Established to bridge two of the world's most dynamic and
                    complementary economic blocs, we connect governments,
                    industries, investors, and institutions across 43 nations.
                  </p>
                  <div className="pl-6 border-l-2 border-[#8A9A86] mt-8 py-2">
                    <p className="text-xl font-serif text-[#3E443C] italic">
                      "LABC is more than a council. It is a commitment — to
                      structured engagement, verified opportunities, and real
                      commercial partnerships."
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Image Block (Tall Portrait) */}
              <motion.div
                className="lg:col-span-5 relative"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {/* Decorative Box */}
                <div className="absolute -top-6 -right-6 w-2/3 h-full border border-[#8A9A86]/30 z-0 hidden lg:block"></div>

                <div className="relative z-10 w-full aspect-[4/5] overflow-hidden bg-[#EAE6DB]">
                  <img
                    src={latin}
                    alt="Corporate Building"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                  />
                </div>
              </motion.div>
            </div>
          </section>

          {/* 2. Mission & Vision (Overlapping Offset Cards) */}
          <section className="py-24 bg-[#EAE6DB] relative">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8">
                {/* Left: Landscape Image */}
                <motion.div
                  className="w-full aspect-[4/3] lg:aspect-auto lg:h-[600px] overflow-hidden relative"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1000&q=80"
                    alt="Handshake Meeting"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                  />
                  {/* Subtle Overlay */}
                  <div className="absolute inset-0 bg-[#3E443C]/10"></div>
                </motion.div>

                {/* Right: Floating Cards */}
                <div className="flex flex-col justify-center space-y-8 lg:-ml-24 z-10 relative">
                  {/* Mission Card */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="bg-[#FCFBF9] p-10 md:p-12 shadow-xl border border-[#E6E2D6]"
                  >
                    <h3 className="text-3xl font-serif text-[#3E443C] mb-4 flex items-center">
                      Our Mission
                    </h3>
                    <p className="text-[#5B6358] font-light leading-relaxed">
                      To build a permanent, high-impact institutional bridge
                      between India and Latin America — enabling businesses to
                      enter new markets, governments to align on policy, and
                      investors to unlock the immense untapped potential of the
                      India–LAC corridor.
                    </p>
                  </motion.div>

                  {/* Vision Card */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="bg-[#3E443C] text-white p-10 md:p-12 shadow-xl ml-0 lg:ml-12"
                  >
                    <h3 className="text-3xl font-serif text-[#F4F0EA] mb-4 flex items-center">
                      Our Vision
                    </h3>
                    <p className="text-[#DCE0D9] font-light leading-relaxed">
                      A{" "}
                      <strong className="font-semibold text-white">
                        USD 100 billion
                      </strong>{" "}
                      India–Latin America trade relationship by 2030 — driven by
                      sector-specific partnerships, sustained institutional
                      engagement, and a shared commitment to South-South
                      prosperity.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* 3. The Opportunity (Data & Contrast Section) */}
          <section className="py-32 px-4 bg-[#F4F0EA] relative overflow-hidden">
            {/* Giant Background Text Watermark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-serif font-bold text-[#EAE6DB] opacity-50 whitespace-nowrap z-0 pointer-events-none">
              OPPORTUNITY
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
              <motion.div
                className="text-center max-w-3xl mx-auto mb-20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <h2 className="text-4xl md:text-5xl font-serif text-[#3E443C]">
                  The Opportunity We Address
                </h2>
                <div className="w-16 h-[2px] bg-[#8A9A86] mx-auto mt-6 mb-8" />
                <p className="text-xl text-[#5B6358] font-light">
                  Bilateral trade has grown nine-fold over 25 years. Yet this
                  figure represents only a fraction of what is structurally
                  possible.
                </p>
              </motion.div>

              {/* Big Data Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Stats */}
                <motion.div
                  className="bg-[#3E443C] p-12 md:p-16 text-center text-white"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeRight}
                >
                  <p className="text-sm font-bold tracking-[0.2em] text-[#8A9A86] uppercase mb-4">
                    Trade Growth (2000 - Today)
                  </p>
                  <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
                    <div>
                      <span className="block text-5xl md:text-6xl font-serif">
                        2B
                      </span>
                      <span className="block text-xs uppercase tracking-widest text-[#B6C3B1] mt-2">
                        USD in 2000
                      </span>
                    </div>
                    <FaArrowRight className="text-3xl text-[#8A9A86] hidden md:block" />
                    <div>
                      <span className="block text-5xl md:text-6xl font-serif text-[#8A9A86]">
                        50B
                      </span>
                      <span className="block text-xs uppercase tracking-widest text-[#B6C3B1] mt-2">
                        USD Today
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Bullet Points */}
                <motion.div
                  className="space-y-8"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                >
                  {[
                    "Latin America holds the world's largest reserves of lithium, copper, and agricultural commodities.",
                    "India brings pharmaceuticals, IT services, automotive manufacturing, textiles, and renewable energy technology.",
                    "Both regions share a Global South identity, aligned multilateral positions, and a growing appetite for strategic autonomy.",
                  ].map((text, i) => (
                    <motion.div
                      key={i}
                      variants={fadeUp}
                      className="flex items-start"
                    >
                      <FaRegCheckCircle className="text-2xl text-[#8A9A86] mr-5 shrink-0 mt-1" />
                      <p className="text-lg text-[#3E443C] font-light leading-relaxed">
                        {text}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </section>

          {/* 4. What We Do (Masonry / Editorial List Layout) */}
          <section className="py-32 px-4 bg-[#EAE6DB]">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <h2 className="text-4xl md:text-5xl font-serif text-[#3E443C]">
                    What We Do
                  </h2>
                  <div className="w-16 h-[2px] bg-[#8A9A86] mt-6" />
                </motion.div>
                <motion.p
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="text-[#5B6358] font-light max-w-sm"
                >
                  Converting complementarity into commerce through strategic,
                  high-impact pillars.
                </motion.p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Left: Aesthetic Image */}
                <motion.div
                  className="lg:col-span-5 h-[400px] lg:h-auto overflow-hidden"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80"
                    alt="Event Conclave"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 grayscale-[20%]"
                  />
                </motion.div>

                {/* Right: Sleek List */}
                <motion.div
                  className="lg:col-span-7 flex flex-col justify-center"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                >
                  {whatWeDo.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeUp}
                      className="border-b border-[#D4D0C5] py-8 group hover:bg-[#F4F0EA] transition-colors duration-300 px-4 -mx-4"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-baseline mb-3">
                        <span className="text-sm font-bold text-[#8A9A86] tracking-widest w-12 shrink-0 mb-2 sm:mb-0">
                          0{index + 1}
                        </span>
                        <h3 className="text-2xl font-serif text-[#3E443C] group-hover:text-[#8A9A86] transition-colors duration-300">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-[#5B6358] font-light sm:ml-12 text-lg">
                        {item.desc}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </section>

          {/* 5. Why LABC (Cinematic Closing Quote) */}
          <section className="relative py-40 px-4 flex items-center justify-center overflow-hidden">
            {/* Background Image with Parallax feel */}
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
                alt="Architecture"
                className="w-full h-full object-cover object-bottom"
              />
              <div className="absolute inset-0 bg-[#3E443C]/90 backdrop-blur-[2px]"></div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="relative z-10 max-w-4xl mx-auto text-center"
            >
              <FaQuoteLeft className="text-4xl text-[#8A9A86] mx-auto mb-8 opacity-80" />
              <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight mb-8">
                "We are different because we are{" "}
                <br className="hidden md:block" />
                <span className="italic text-[#8A9A86]">
                  structural, not ceremonial.
                </span>
                "
              </h2>
              <p className="text-lg md:text-xl text-[#B6C3B1] font-light leading-relaxed max-w-3xl mx-auto">
                Most bilateral forums create conversations.{" "}
                <strong className="text-white">LABC creates corridors.</strong>{" "}
                Every engagement we facilitate is designed to produce a tangible
                outcome — a partnership signed, a market entered, a policy
                moved, a deal closed.
              </p>

              <div className="mt-12 inline-block border border-[#8A9A86] p-6 bg-white/5 backdrop-blur-sm">
                <p className="text-sm font-bold text-white uppercase tracking-[0.2em] leading-relaxed">
                  India and Latin America are no longer a future opportunity.
                  <br />
                  <span className="text-[#8A9A86]">
                    They are a present imperative.
                  </span>
                  <br />
                  LABC is where that imperative becomes action.
                </p>
              </div>
            </motion.div>
          </section>
        </div>
        {/* =========================================
            ABOUT SECTION ENDS HERE
        ========================================= */}

        {/* --- CONTACT & FOOTER REMAINS THE SAME --- */}
        {/* --- CONTACT SECTION JSX --- */}
        <section
          id="contact"
          className="py-24 bg-[#FCFBF9] px-4 scroll-mt-20 border-t border-[#E6E2D6]"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Contact Info Side */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-serif text-[#3E443C] uppercase tracking-widest mb-10">
                Contact Secretariat
              </h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-6 bg-[#F4F0EA] border border-[#E6E2D6] p-6">
                  <div className="w-12 h-12 bg-white text-[#8A9A86] flex items-center justify-center text-xl shrink-0 shadow-sm">
                    <FaMapMarker />
                  </div>
                  <div>
                    <p className="font-bold text-[#3E443C] uppercase text-xs tracking-widest">
                      Location
                    </p>
                    <p className="text-[#5B6358] mt-1 text-sm">
                      C06 At, Chhatrapati Shivaji Maharaj International Airport
                      Mumbai, Maharashtra 400099
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-6 bg-[#F4F0EA] border border-[#E6E2D6] p-6">
                  <div className="w-12 h-12 bg-white text-[#8A9A86] flex items-center justify-center text-xl shrink-0 shadow-sm">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className="font-bold text-[#3E443C] uppercase text-xs tracking-widest">
                      Email Address
                    </p>
                    <p className="text-[#5B6358] mt-1 text-sm">
                      office.ceo@mexicoindia.org <br /> info@mexicoindia.org
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-6 bg-[#F4F0EA] border border-[#E6E2D6] p-6">
                  <div className="w-12 h-12 bg-white text-[#8A9A86] flex items-center justify-center text-xl shrink-0 shadow-sm">
                    <FaPhone />
                  </div>
                  <div>
                    <p className="font-bold text-[#3E443C] uppercase text-xs tracking-widest">
                      Hotline
                    </p>
                    <p className="text-[#5B6358] mt-1 text-sm">
                      +91-755-2559971
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form Side */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-[#E6E2D6] p-8 sm:p-10 shadow-lg"
            >
              <h3 className="text-2xl font-serif text-[#3E443C] uppercase tracking-widest mb-8 text-center">
                Official Query
              </h3>

              {/* Alert Message Box */}
              {statusMsg && (
                <div
                  className={`p-4 mb-6 text-sm font-bold text-center border ${statusMsg.type === "success" ? "bg-[#8A9A86]/20 text-[#3E443C] border-[#8A9A86]" : "bg-red-50 text-red-600 border-red-200"}`}
                >
                  {statusMsg.text}
                </div>
              )}

              {/* Form mapped to State */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="w-full bg-[#F4F0EA] border-b border-[#D4D0C5] px-4 py-3 text-sm focus:outline-none focus:border-[#8A9A86] transition-colors placeholder-[#A0A89D]"
                  />
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full bg-[#F4F0EA] border-b border-[#D4D0C5] px-4 py-3 text-sm focus:outline-none focus:border-[#8A9A86] transition-colors placeholder-[#A0A89D]"
                  />
                </div>

                <input
                  required
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full bg-[#F4F0EA] border-b border-[#D4D0C5] px-4 py-3 text-sm focus:outline-none focus:border-[#8A9A86] transition-colors placeholder-[#A0A89D]"
                />

                <textarea
                  required
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  className="w-full bg-[#F4F0EA] border-b border-[#D4D0C5] px-4 py-3 text-sm focus:outline-none focus:border-[#8A9A86] resize-none transition-colors placeholder-[#A0A89D]"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-4 text-white font-bold text-xs uppercase tracking-[0.2em] transition-colors ${loading ? "bg-[#5B6358] cursor-wait" : "bg-[#3E443C] hover:bg-[#8A9A86]"}`}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
