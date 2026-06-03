import React from "react";
import { motion } from "framer-motion";
import {
  FaWineBottle,
  FaTshirt,
  FaLeaf,
  FaShoppingBag,
  FaSpa,
  FaCalendarCheck,
  FaUsers,
  FaGlobeAmericas,
  FaRocket,
  FaCheck,
  FaBuilding,
} from "react-icons/fa";

// --- PRO EDITORIAL EARTHY THEME ---
// Background: #F4F0EA (Soft Cream)
// Accent: #8A9A86 (Sage Green)
// Text/Dark Accent: #3E443C (Dark Olive/Charcoal)

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export default function Initiatives() {
  return (
    <div className="bg-[#F4F0EA] text-[#3E443C] font-sans selection:bg-[#8A9A86] selection:text-white pt-20">
      
      {/* --- HERO SECTION --- */}
      <section className="relative py-32 px-4 flex items-center justify-center min-h-[60vh] overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1600&q=80" 
            alt="Initiatives Background" 
            className="w-full h-full object-cover scale-105"
          />
          {/* Lighter overlay to let the image pop, blending smoothly into the background at the bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#3E443C]/50 via-[#3E443C]/60 to-[#4a4947]" />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="relative z-10 max-w-5xl mx-auto text-center mt-10"
        >
          <span className="inline-block px-4 py-1.5 border border-[#8A9A86]/50 bg-[#8A9A86]/40 backdrop-blur-md text-[#F4F0EA] font-bold tracking-[0.2em] uppercase text-xs mb-6 rounded-full shadow-lg">
            Flagship Programs
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight drop-shadow-lg">
            Corridor-Defining <br className="hidden md:block" />
            <span className="italic text-[#8A9A86] drop-shadow-md">Bilateral Initiatives</span>
          </h1>
          <div className="w-16 h-[2px] bg-[#8A9A86] mx-auto mt-8 mb-8 shadow-sm" />
          <p className="text-lg md:text-xl text-[#F4F0EA] leading-relaxed font-light max-w-3xl mx-auto drop-shadow-md">
            We don't just facilitate conversations; we build structured pathways. Discover our signature platforms designed to scale premium brands, connect business leaders, and bridge startup ecosystems.
          </p>
        </motion.div>
      </section>

      {/* =========================================
          INITIATIVE 1: PREMIUM BRANDS ACCELERATOR
      ========================================= */}
      <section className="py-24 px-4 border-b border-[#E6E2D6]">
        <div className="max-w-7xl mx-auto">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-4xl mx-auto mb-20">
            <span className="text-[#8A9A86] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Initiative 01</span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#3E443C] mb-6">India–Latin Premium Brands Accelerator</h2>
            <p className="text-xl text-[#8A9A86] italic font-serif mb-6">
              "Helping Latin American heritage brands find their market in India — and Indian iconic products enter Latin America."
            </p>
            <p className="text-[#5B6358] font-light text-lg leading-relaxed">
              Latin America is home to iconic GI products — Colombian coffee, Peruvian Pisco, Brazilian Cachaça, Chilean wine — with massive growth potential in India's fast-evolving premium consumer market. Simultaneously, Indian GI products like Darjeeling tea, Basmati rice, and Alphonso mangoes have growing audiences in Latin America. We bridge that gap.
            </p>
          </motion.div>

          {/* Quick Stats Strip */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-20">
            <motion.div variants={fadeUp} className="bg-white border border-[#E6E2D6] p-8 text-center shadow-sm hover:border-[#8A9A86] transition-colors">
              <h4 className="text-5xl font-serif text-[#3E443C] mb-2">20+</h4>
              <p className="text-xs tracking-widest text-[#8A9A86] uppercase font-bold">Latin American countries with iconic GI products</p>
            </motion.div>
            <motion.div variants={fadeUp} className="bg-white border border-[#E6E2D6] p-8 text-center shadow-sm hover:border-[#8A9A86] transition-colors">
              <h4 className="text-5xl font-serif text-[#3E443C] mb-2">USD 200Bn+</h4>
              <p className="text-xs tracking-widest text-[#8A9A86] uppercase font-bold">India's premium consumer market size</p>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Col: What it does & Process */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h3 className="text-2xl font-serif text-[#3E443C] font-bold border-b border-[#D4D0C5] pb-3 mb-6">What this Initiative Does</h3>
              <ul className="space-y-4 mb-12">
                {[
                  "Identifies Latin American GI and premium product brands seeking to enter the Indian market.",
                  "Provides market-entry support — importer identification, regulatory navigation (FSSAI, labelling), pricing.",
                  "Connects brands with Indian distributors, hotel & restaurant buyers, e-commerce platforms.",
                  "Facilitates Indian brand expansion into Latin American markets.",
                  "Organises bilateral tasting events, brand showcases, and pop-up experiences.",
                  "Supports GI recognition — helping products secure GI protection in both regions.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <FaCheck className="text-[#8A9A86] mt-1.5 mr-4 text-xs shrink-0" />
                    <span className="text-[#5B6358] font-light leading-relaxed text-[15px]">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-[#EAE6DB] p-8 border border-[#D4D0C5] shadow-inner">
                <h3 className="text-sm font-bold text-[#3E443C] tracking-[0.15em] uppercase mb-6 text-center">The Accelerator Process</h3>
                <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 text-center">
                  <div className="flex flex-col items-center"><div className="w-10 h-10 rounded-full bg-[#3E443C] text-white flex items-center justify-center font-bold mb-2">1</div><span className="text-xs font-bold text-[#5B6358] uppercase">Apply</span></div>
                  <div className="w-[1px] h-4 sm:w-8 sm:h-[1px] bg-[#8A9A86]"></div>
                  <div className="flex flex-col items-center"><div className="w-10 h-10 rounded-full bg-[#3E443C] text-white flex items-center justify-center font-bold mb-2">2</div><span className="text-xs font-bold text-[#5B6358] uppercase">Assess</span></div>
                  <div className="w-[1px] h-4 sm:w-8 sm:h-[1px] bg-[#8A9A86]"></div>
                  <div className="flex flex-col items-center"><div className="w-10 h-10 rounded-full bg-[#3E443C] text-white flex items-center justify-center font-bold mb-2">3</div><span className="text-xs font-bold text-[#5B6358] uppercase">Match</span></div>
                  <div className="w-[1px] h-4 sm:w-8 sm:h-[1px] bg-[#8A9A86]"></div>
                  <div className="flex flex-col items-center"><div className="w-10 h-10 rounded-full bg-[#8A9A86] text-white flex items-center justify-center font-bold mb-2 shadow-lg scale-110">4</div><span className="text-xs font-bold text-[#3E443C] uppercase">Launch</span></div>
                </div>
              </div>
            </motion.div>

            {/* Right Col: Target Products */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="bg-[#FCFBF9] border border-[#E6E2D6] p-8 md:p-12 shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-serif text-[#3E443C] font-bold mb-8">Target Categories</h3>
              
              <div className="space-y-8">
                <motion.div variants={fadeUp}>
                  <h4 className="text-xs font-bold text-[#8A9A86] tracking-widest uppercase mb-4 flex items-center"><FaGlobeAmericas className="mr-2 text-lg"/> Latin America to India</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-white p-4 border border-[#F4F0EA] shadow-sm flex items-center space-x-3"><FaWineBottle className="text-[#8A9A86] text-lg"/> <span className="text-sm text-[#3E443C] font-medium">Premium Beverages</span></div>
                    <div className="bg-white p-4 border border-[#F4F0EA] shadow-sm flex items-center space-x-3"><FaLeaf className="text-[#8A9A86] text-lg"/> <span className="text-sm text-[#3E443C] font-medium">Superfoods & Meat</span></div>
                    <div className="bg-white p-4 border border-[#F4F0EA] shadow-sm flex items-center space-x-3"><FaShoppingBag className="text-[#8A9A86] text-lg"/> <span className="text-sm text-[#3E443C] font-medium">Crafts & Lifestyle</span></div>
                    <div className="bg-white p-4 border border-[#F4F0EA] shadow-sm flex items-center space-x-3"><FaSpa className="text-[#8A9A86] text-lg"/> <span className="text-sm text-[#3E443C] font-medium">Wellness & Cosmetics</span></div>
                  </div>
                </motion.div>

                <div className="w-full h-[1px] bg-[#E6E2D6]"></div>

                <motion.div variants={fadeUp}>
                  <h4 className="text-xs font-bold text-[#8A9A86] tracking-widest uppercase mb-4 flex items-center"><FaBuilding className="mr-2 text-lg"/> India to Latin America</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-white p-4 border border-[#F4F0EA] shadow-sm flex items-center space-x-3"><FaWineBottle className="text-[#8A9A86] text-lg"/> <span className="text-sm text-[#3E443C] font-medium">Tea & Coffee</span></div>
                    <div className="bg-white p-4 border border-[#F4F0EA] shadow-sm flex items-center space-x-3"><FaLeaf className="text-[#8A9A86] text-lg"/> <span className="text-sm text-[#3E443C] font-medium">Spices & Mangoes</span></div>
                    <div className="bg-white p-4 border border-[#F4F0EA] shadow-sm flex items-center space-x-3"><FaSpa className="text-[#8A9A86] text-lg"/> <span className="text-sm text-[#3E443C] font-medium">Ayurveda & Yoga</span></div>
                    <div className="bg-white p-4 border border-[#F4F0EA] shadow-sm flex items-center space-x-3"><FaTshirt className="text-[#8A9A86] text-lg"/> <span className="text-sm text-[#3E443C] font-medium">Silk & Textiles</span></div>
                  </div>
                </motion.div>
              </div>

              <button className="w-full mt-10 py-4 bg-[#3E443C] text-white font-bold text-xs tracking-[0.2em] uppercase hover:bg-[#8A9A86] transition-colors shadow-lg">
                Submit Your Brand
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================
          INITIATIVE 2: INDIA-LATIN CONNECT
      ========================================= */}
      <section className="py-24 px-4 bg-[#EAE6DB] border-b border-[#D4D0C5]">
        <div className="max-w-7xl mx-auto">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-4xl mx-auto mb-20">
            <span className="text-[#8A9A86] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Initiative 02</span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#3E443C] mb-6">India–Latin Connect</h2>
            <p className="text-xl text-[#8A9A86] italic font-serif mb-6">
              "The structured bilateral business networking platform for the corridor."
            </p>
            <p className="text-[#5B6358] font-light text-lg leading-relaxed">
              A year-round platform of bilateral business events, forums, and digital connects designed to bring Indian and Latin American companies face-to-face, build relationships, and accelerate deal-making across the USD 39-billion corridor.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Sticky Image/Nav Column */}
            <div className="lg:col-span-5 relative">
              <div className="lg:sticky lg:top-32 w-full aspect-[4/5] bg-white shadow-xl overflow-hidden group border border-[#E6E2D6]">
                <img 
                  src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80" 
                  alt="Networking Event" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale-[10%]"
                />
                <div className="absolute inset-0 bg-[#3E443C]/20 transition-colors duration-500 group-hover:bg-transparent"></div>
                
                {/* Overlay Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 text-center shadow-lg border border-[#E6E2D6]">
                  <h4 className="text-3xl md:text-4xl font-serif text-[#3E443C] mb-1">USD 39 Bn</h4>
                  <p className="text-[10px] uppercase tracking-widest text-[#8A9A86] font-bold mb-4">India–Latin bilateral trade</p>
                  <button className="w-full py-3 bg-[#8A9A86] text-white text-xs font-bold tracking-widest uppercase hover:bg-[#3E443C] transition-colors">
                    Register for Next Summit
                  </button>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 space-y-16 pt-4 lg:pt-8">
              
              {/* Feature 1 */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <h3 className="text-2xl font-serif text-[#3E443C] font-bold mb-4 flex items-center">
                  <div className="p-3 bg-[#8A9A86]/10 rounded-full mr-4"><FaUsers className="text-[#8A9A86] text-xl" /></div>
                  Flagship Summit
                </h3>
                <p className="text-[#5B6358] font-light leading-relaxed mb-6 text-[17px]">
                  The annual centrepiece of the initiative — a high-impact 1–2 day bilateral summit bringing together Indian and Latin American business leaders, government officials, and diplomats. Alternating between India and LAC regions.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                  {["Keynote sessions", "Structured B2B matchmaking", "Investor roundtables", "G2B briefings", "Networking receptions"].map((item, i) => (
                    <li key={i} className="flex items-center text-[#5B6358] text-[15px] font-medium"><span className="w-1.5 h-1.5 rounded-full bg-[#8A9A86] mr-3 shrink-0"></span>{item}</li>
                  ))}
                </ul>
              </motion.div>

              <div className="w-full h-[1px] bg-[#D4D0C5] opacity-60"></div>

              {/* Feature 2 */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <h3 className="text-2xl font-serif text-[#3E443C] font-bold mb-4 flex items-center">
                  <div className="p-3 bg-[#8A9A86]/10 rounded-full mr-4"><FaCalendarCheck className="text-[#8A9A86] text-xl" /></div>
                  Sector Connect Forums
                </h3>
                <p className="text-[#5B6358] font-light leading-relaxed mb-6 text-[17px]">
                  Focused half-day intelligence and networking events for specific industries throughout the year.
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {["IT & Digital", "Pharma & Health", "Agri & Food", "Energy", "Startup & Innovation", "Infrastructure"].map((tag, i) => (
                    <span key={i} className="px-4 py-2 bg-white border border-[#D4D0C5] text-xs font-bold text-[#5B6358] rounded-full shadow-sm hover:border-[#8A9A86] cursor-default transition-colors">{tag} Connect</span>
                  ))}
                </div>
              </motion.div>

              <div className="w-full h-[1px] bg-[#D4D0C5] opacity-60"></div>

              {/* Feature 3 */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white p-8 border border-[#E6E2D6] shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-serif text-[#3E443C] font-bold mb-4 flex items-center">
                  <FaGlobeAmericas className="text-[#8A9A86] mr-3 text-2xl" /> Virtual Connect & Intelligence
                </h3>
                <p className="text-[#5B6358] font-light text-[16px] leading-relaxed mb-4">
                  Monthly themed 45-minute bilateral intro calls for companies that cannot travel, pre-matched by sector.
                </p>
                <p className="text-[#5B6358] font-light text-[16px] leading-relaxed">
                  Coupled with the <strong className="font-bold text-[#3E443C]">India–Latin Business Monitor</strong>, our flagship quarterly intelligence report covering trade data, country spotlights, policy watch, and deal moves.
                </p>
                <button className="mt-8 px-6 py-3 border border-[#8A9A86] text-[#8A9A86] font-bold text-xs tracking-[0.15em] uppercase hover:bg-[#8A9A86] hover:text-white transition-colors w-full sm:w-auto text-center">
                  Subscribe to Newsletter
                </button>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          INITIATIVE 3: STARTUP BRIDGE (WAITLIST)
      ========================================= */}
      <section className="py-32 px-4 bg-[#3E443C] text-center relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-4xl mx-auto relative z-10">
          
          <div className="inline-flex items-center space-x-2 bg-[#F4F0EA]/10 border border-[#F4F0EA]/20 px-5 py-2 text-[10px] text-[#B6C3B1] uppercase tracking-[0.25em] mb-8 rounded-full shadow-inner">
            <span className="w-2 h-2 rounded-full bg-[#8A9A86] animate-pulse"></span>
            <span>Coming Soon</span>
          </div>

          <div className="w-20 h-20 bg-[#F4F0EA]/5 rounded-full flex items-center justify-center mx-auto mb-6 border border-[#8A9A86]/30">
             <FaRocket className="text-3xl text-[#8A9A86]" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">
            India–Latin Startup Bridge
          </h2>
          <div className="w-16 h-[2px] bg-[#8A9A86] mx-auto mb-8" />
          
          <p className="text-lg md:text-xl text-[#B6C3B1] font-light leading-relaxed mb-12">
            Connecting the world's third-largest startup ecosystem (India) with the surging unicorn landscape of Latin America. A bilateral matchmaking platform for market entry, cross-border acceleration, and investor networks.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {["Fintech", "Agri-Tech", "Health-Tech", "Clean Energy", "Logistics"].map((tag, i) => (
              <span key={i} className="px-5 py-2 bg-[#2E332C] border border-[#5B6358] text-[#DCE0D9] text-xs font-bold uppercase tracking-widest rounded-full shadow-sm">{tag}</span>
            ))}
          </div>

          <div className="max-w-md mx-auto bg-white/5 p-8 border border-white/10 backdrop-blur-xl rounded-2xl shadow-2xl">
            <h3 className="text-white font-serif text-2xl mb-2">Join the Waitlist</h3>
            <p className="text-[#8A9A86] text-sm font-light mb-6">Be the first to know when applications open.</p>
            <form className="flex flex-col space-y-4">
              <input type="email" placeholder="Enter your business email" className="w-full bg-[#3E443C] border border-[#5B6358] px-5 py-4 text-white focus:outline-none focus:border-[#8A9A86] text-sm text-center rounded-xl placeholder-[#B6C3B1]" required />
              <button type="submit" className="w-full py-4 bg-[#8A9A86] text-white font-bold text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-[#3E443C] transition-colors rounded-xl shadow-lg">
                Express Interest
              </button>
            </form>
          </div>

        </motion.div>
      </section>

    </div>
  );
}