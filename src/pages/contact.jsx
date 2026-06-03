import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

// --- PRO EDITORIAL EARTHY THEME ---
// Background: #FCFBF9 (Off-White/Cream)
// Accent: #8A9A86 (Sage Green)
// Text/Dark Accent: #3E443C (Dark Olive/Charcoal)
// Field Background: #F4F0EA (Soft Beige)

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeRight = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMsg(null);

    // API CALL (Tumhare Node.js backend ke liye)
    try {
      /* 
      const response = await fetch("http://localhost:5000/api/queries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      */

      // Dummy success for now
      setTimeout(() => {
        setStatusMsg({ type: "success", text: "Message sent successfully!" });
        setFormData({ name: "", email: "", subject: "", message: "" });
        setLoading(false);
      }, 1500);

    } catch (error) {
      setStatusMsg({ type: "error", text: "Something went wrong." });
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#FCFBF9] text-[#3E443C] font-sans selection:bg-[#8A9A86] selection:text-white py-24 px-4 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* --- LEFT COLUMN: CONTACT INFO --- */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeRight}
            className="flex flex-col space-y-8"
          >
            {/* Green Highlighted Heading */}
            <div className="mb-4">
              <h2 className="inline-block bg-[#8A9A86] text-white px-5 py-2 text-2xl md:text-3xl font-serif uppercase tracking-widest shadow-sm">
                Contact Secretariat
              </h2>
            </div>

            {/* Info Cards (Sharp Edges, Beige Background) */}
            <div className="flex items-center bg-[#F4F0EA] p-6 border border-[#E6E2D6]/50 shadow-sm">
              <div className="w-14 h-14 bg-white text-[#8A9A86] flex items-center justify-center text-xl shrink-0 shadow-sm">
                <FaMapMarkerAlt />
              </div>
              <div className="ml-6">
                <p className="font-bold text-[#3E443C] uppercase text-xs tracking-[0.15em] mb-1">
                  Location
                </p>
                <p className="text-[#5B6358] text-[15px] font-light leading-relaxed">
                  C06 At, Chhatrapati Shivaji Maharaj International Airport Mumbai, <br />
                  Maharashtra 400099
                </p>
              </div>
            </div>

            <div className="flex items-center bg-[#F4F0EA] p-6 border border-[#E6E2D6]/50 shadow-sm">
              <div className="w-14 h-14 bg-white text-[#8A9A86] flex items-center justify-center text-xl shrink-0 shadow-sm">
                <FaEnvelope />
              </div>
              <div className="ml-6">
                <p className="font-bold text-[#3E443C] uppercase text-xs tracking-[0.15em] mb-1">
                  Email Address
                </p>
                <p className="text-[#5B6358] text-[15px] font-light leading-relaxed">
                  office.ceo@mexicoindia.org<br />
                  info@mexicoindia.org
                </p>
              </div>
            </div>

            <div className="flex items-center bg-[#F4F0EA] p-6 border border-[#E6E2D6]/50 shadow-sm">
              <div className="w-14 h-14 bg-white text-[#8A9A86] flex items-center justify-center text-xl shrink-0 shadow-sm">
                <FaPhoneAlt />
              </div>
              <div className="ml-6">
                <p className="font-bold text-[#3E443C] uppercase text-xs tracking-[0.15em] mb-1">
                  Hotline
                </p>
                <p className="text-[#5B6358] text-[15px] font-light leading-relaxed">
                  +91 79991 47155
                </p>
              </div>
            </div>
          </motion.div>

          {/* --- RIGHT COLUMN: OFFICIAL QUERY FORM --- */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeLeft}
            className="bg-white border border-[#E6E2D6] p-10 md:p-12 shadow-xl"
          >
            <h3 className="text-2xl md:text-3xl font-serif text-[#3E443C] uppercase tracking-widest mb-10 text-center">
              Official Query
            </h3>

            {/* Status Message */}
            {statusMsg && (
              <div className={`p-4 mb-6 text-sm font-bold text-center border ${statusMsg.type === 'success' ? 'bg-[#8A9A86]/20 text-[#3E443C] border-[#8A9A86]' : 'bg-red-50 text-red-600 border-red-200'}`}>
                {statusMsg.text}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full bg-[#F4F0EA] px-5 py-4 text-[15px] font-light text-[#3E443C] focus:outline-none focus:ring-1 focus:ring-[#8A9A86] transition-shadow placeholder-[#A0A89D]"
                />
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full bg-[#F4F0EA] px-5 py-4 text-[15px] font-light text-[#3E443C] focus:outline-none focus:ring-1 focus:ring-[#8A9A86] transition-shadow placeholder-[#A0A89D]"
                />
              </div>
              
              <input
                required
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full bg-[#F4F0EA] px-5 py-4 text-[15px] font-light text-[#3E443C] focus:outline-none focus:ring-1 focus:ring-[#8A9A86] transition-shadow placeholder-[#A0A89D]"
              />
              
              <textarea
                required
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                className="w-full bg-[#F4F0EA] px-5 py-4 text-[15px] font-light text-[#3E443C] focus:outline-none focus:ring-1 focus:ring-[#8A9A86] resize-none transition-shadow placeholder-[#A0A89D]"
              />
              
              <button
                type="submit"
                disabled={loading}
                className={`w-full mt-4 py-4 text-white font-bold text-xs uppercase tracking-[0.2em] transition-all shadow-md hover:shadow-lg ${loading ? 'bg-[#5B6358] cursor-not-allowed' : 'bg-[#3E443C] hover:bg-[#8A9A86] hover:-translate-y-0.5'}`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}