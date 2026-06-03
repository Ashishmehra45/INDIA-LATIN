import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaRocket, FaArrowRight, FaEnvelope, FaGlobeAmericas } from "react-icons/fa";
import { Link } from "react-router-dom";

// --- PRO EDITORIAL EARTHY THEME ---
// Background: #F4F0EA (Soft Cream)
// Accent: #8A9A86 (Sage Green)
// Text/Dark Accent: #3E443C (Dark Olive/Charcoal)

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Join() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null); // 'success' or 'error'

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    
    // Yahan tumhara API call aayega backend ke liye
    // Dummy success response:
    setStatus("success");
    setEmail("");
    
    setTimeout(() => {
      setStatus(null);
    }, 4000);
  };

  return (
    <div className="relative min-h-screen bg-[#3E443C] text-white font-sans selection:bg-[#8A9A86] selection:text-white flex flex-col items-center justify-center overflow-hidden">
      
      {/* --- BACKGROUND IMAGE & OVERLAY --- */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80" 
          alt="Corporate Building" 
          className="w-full h-full object-cover grayscale-[30%] opacity-40 scale-105"
        />
        {/* Soft radial gradient for spotlight effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#3E443C_80%)] opacity-90" />
      </div>

      {/* --- MINIMAL HEADER --- */}
      <div className="absolute top-0 w-full p-6 md:p-10 z-20 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3 cursor-pointer group">
          <div className="flex items-center justify-center w-10 h-10 bg-[#8A9A86]/20 text-[#8A9A86] rounded-full backdrop-blur-md border border-[#8A9A86]/30 shadow-sm">
            <FaGlobeAmericas className="text-xl" />
          </div>
          <div className="flex flex-col">
            <span className="block font-serif font-bold text-lg md:text-xl leading-none tracking-tight text-white">
              INDIA LAC
            </span>
          </div>
        </Link>
        <Link to="/" className="text-xs font-bold tracking-[0.2em] uppercase text-[#8A9A86] hover:text-white transition-colors">
          Return Home
        </Link>
      </div>

      {/* --- MAIN CONTENT --- */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
        }}
        className="relative z-10 w-full max-w-3xl mx-auto px-4 text-center mt-20"
      >
        
        {/* Coming Soon Badge */}
        <motion.div variants={fadeUp} className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 backdrop-blur-md px-5 py-2 text-[10px] mt-10 text-[#B6C3B1] uppercase tracking-[0.25em] mb-8 rounded-full shadow-inner">
          <span className="w-2 h-2 rounded-full bg-[#8A9A86] animate-pulse"></span>
          <span>Memberships Opening Soon</span>
        </motion.div>

        {/* Title */}
        <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-serif text-white leading-tight mb-6">
          Exclusive Access to the <br className="hidden md:block" />
          <span className="italic text-[#8A9A86]">India–LAC Corridor</span>
        </motion.h1>

        {/* Divider */}
        <motion.div variants={fadeUp} className="w-16 h-[2px] bg-[#8A9A86] mx-auto mb-8" />

        {/* Description */}
        <motion.p variants={fadeUp} className="text-lg md:text-xl text-[#B6C3B1] font-light leading-relaxed mb-12 max-w-2xl mx-auto">
          The Latin America Business Council is an invite-only institutional platform. We are finalizing our founding member cohorts. Join the waitlist to receive priority access when official applications open.
        </motion.p>

        {/* Form Box */}
        <motion.div variants={fadeUp} className="max-w-md mx-auto bg-white/5 p-8 md:p-10 border border-white/10 backdrop-blur-xl rounded-2xl shadow-2xl relative overflow-hidden">
          
          {/* Subtle Grid Background inside the form box */}
          <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#8A9A86_1px,transparent_1px),linear-gradient(to_bottom,#8A9A86_1px,transparent_1px)] bg-[size:20px_20px]"></div>
          
          <div className="relative z-10">
            <FaRocket className="text-3xl text-[#8A9A86] mx-auto mb-4 opacity-80" />
            <h3 className="text-white font-serif text-2xl mb-2">Priority Waitlist</h3>
            <p className="text-[#8A9A86] text-xs font-light tracking-wide uppercase mb-8">Secure your early access</p>
            
            {status === "success" ? (
              <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-[#8A9A86]/20 border border-[#8A9A86] text-white p-4 rounded-xl text-sm font-light">
                Thank you! You have been added to the priority waitlist. We will be in touch soon.
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FaEnvelope className="text-[#8A9A86]" />
                  </div>
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your business email" 
                    className="w-full bg-[#2E332C] border border-[#5B6358] pl-11 pr-4 py-4 text-white focus:outline-none focus:border-[#8A9A86] text-sm rounded-xl placeholder-[#B6C3B1] transition-colors" 
                    required 
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full py-4 bg-[#8A9A86] text-white font-bold text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-[#3E443C] transition-colors rounded-xl shadow-lg flex items-center justify-center space-x-2"
                >
                  <span>Join Waitlist</span>
                  <FaArrowRight className="text-[10px]" />
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </motion.div>

      {/* --- FOOTER STRIP --- */}
      <div className="absolute bottom-0 w-full p-6 text-center z-20">
        <p className="text-[10px] text-[#8A9A86] font-medium tracking-[0.15em] uppercase">
          &copy; 2026 India-LAC Trade Forum. All Rights Reserved.
        </p>
      </div>

    </div>
  );
}