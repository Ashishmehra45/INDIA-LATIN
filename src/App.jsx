import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaCalendarAlt, FaMapMarkerAlt, FaGlobe, FaHandshake, FaBriefcase, 
  FaUsers, FaBuilding, FaUserTie, FaCheckCircle, FaPhone, FaEnvelope, 
  FaMapMarker, FaChartLine, FaBars, FaTimes, FaGlobeAmericas
} from 'react-icons/fa';

// --- PREMIUM CLEAN CORPORATE THEME ---
// Font: Clean Sans-Serif (Tailwind default)
// Background: Slate-50 / White
// Accents: Corporate Blue & Premium Amber

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'agenda', label: 'Agenda' },
    { id: 'speakers', label: 'Speakers' },
    { id: 'countries', label: 'Countries' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
    { id: 'register', label: 'Register' } // Moved to the very end
  ];

  // Smooth scroll handler
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset for the fixed header
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-200 selection:text-blue-900 overflow-x-hidden">
      
     <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/90 border-b border-slate-200 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* UPDATED LOGO SECTION */}
          <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => scrollToSection('home')}>
            <div className="flex items-center justify-center w-12 h-12 bg-blue-50 text-blue-600 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
              <FaGlobeAmericas className="text-2xl" />
            </div>
            <div className="flex flex-col">
              <span className="block font-black text-lg md:text-xl leading-none tracking-tight text-slate-900">
                INDIA LAC
              </span>
              <span className="block text-[10px] md:text-xs text-slate-500 font-bold tracking-[0.2em] uppercase mt-1">
                Trade & Investment Forum
              </span>
            </div>
          </div>

          {/* Desktop Nav - Better Alignment & Hover Effects */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-full text-[12px] font-bold uppercase tracking-wider transition-all duration-300 ${
                  item.id === 'register' 
                  ? 'bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 ml-4 px-6' 
                  : 'text-slate-500 hover:text-blue-700 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="text-slate-600 hover:text-blue-600 bg-slate-50 hover:bg-blue-50 h-10 w-10 flex items-center justify-center rounded-full transition-colors focus:outline-none"
            >
              {isMobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown - Smoother & Cleaner */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }} 
              animate={{ height: 'auto', opacity: 1 }} 
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden bg-white border-b border-slate-200 overflow-hidden shadow-2xl absolute w-full rounded-b-2xl"
            >
              <div className="flex flex-col px-6 py-6 space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      scrollToSection(item.id);
                      setIsMobileMenuOpen(false); // Close menu after clicking
                    }}
                    className={`text-left px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all ${
                      item.id === 'register' 
                      ? 'bg-gradient-to-r from-blue-600 to-blue-800 text-white mt-4 text-center shadow-md' 
                      : 'text-slate-600 hover:text-blue-700 hover:bg-blue-50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* --- MAIN SINGLE PAGE CONTENT --- */}
      <main className="pt-20"> {/* Padding to offset fixed header */}
        
        {/* 1. HERO SECTION */}
        <section id="home" className="relative min-h-[90vh] flex items-center justify-center bg-slate-900 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src="https://plus.unsplash.com/premium_photo-1664474503673-5febe9ca12b9?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Conference" className="w-full h-full object-cover  " />
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 via-slate-900/40 to-slate-900" />
          </div>
          
          <div className="relative max-w-5xl mx-auto text-center z-10 px-4 py-20">
            <motion.div initial={{ scale: 0.95, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full text-xs text-amber-400 uppercase tracking-widest mb-8 font-bold shadow-lg">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-300 animate-pulse" />
              <span>Global Sovereign Summit 2026</span>
            </motion.div>

            <motion.h1 initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} viewport={{ once: true }} className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
              India – Latin America & Caribbean <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">Trade & Investment Forum</span>
            </motion.h1>

            <motion.p initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }} viewport={{ once: true }} className="mt-8 text-lg sm:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
              Connecting Businesses, Investments & Global Opportunities across bilateral horizons.
            </motion.p>

            <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }} viewport={{ once: true }} className="mt-10 flex flex-wrap items-center justify-center gap-4 text-sm font-bold text-slate-100">
              <span className="flex items-center bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3.5 rounded-xl shadow-lg">
                <FaCalendarAlt className="text-amber-400 mr-3 text-lg" /> 6 June 2026
              </span>
              <span className="flex items-center bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3.5 rounded-xl shadow-lg">
                <FaMapMarkerAlt className="text-blue-400 mr-3 text-lg" /> Pride Hotel, Indore
              </span>
            </motion.div>

            <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.8 }} viewport={{ once: true }} className="mt-12">
              <button onClick={() => scrollToSection('register')} className="px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-extrabold text-sm tracking-widest uppercase rounded-full shadow-2xl shadow-blue-900/50 hover:shadow-blue-600/40 hover:-translate-y-1 transition-all">
                Register as Delegate
              </button>
            </motion.div>
          </div>
        </section>

      {/* ORGANIZERS STRIP */}
        <section className="bg-white border-t border-slate-200 border-b border-slate-200 py-10 overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-4 text-center mb-8">
            <p className="text-xs font-bold tracking-widest text-slate-400 uppercase">Institutional Patrons & Partners</p>
          </div>

          {/* Marquee Container */}
          <div className="flex w-full overflow-hidden">
            <div className="flex w-max animate-[marquee_20s_linear_infinite] hover:[animation-play-state:paused]">
              
              {/* Array mapped twice to create a seamless infinite loop */}
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex items-center justify-center gap-16 md:gap-24 px-8 md:px-12">
                  {['Govt of Madhya Pradesh', 'Invest MP', 'MPIDC', 'GIBF', 'IM'].map((org, idx) => (
                    <div 
                      key={idx} 
                      className="whitespace-nowrap text-xl md:text-2xl font-extrabold tracking-wider text-slate-300 hover:text-blue-800 transition-colors duration-300 cursor-default"
                    >
                      {org}
                    </div>
                  ))}
                </div>
              ))}

            </div>
          </div>

          {/* Inline CSS Keyframes so you don't have to touch tailwind.config.js */}
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes marquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
          `}} />
        </section>

        {/* 2. ABOUT SECTION */}
        <section id="about" className="py-24 bg-slate-50 px-4 scroll-mt-20">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-slate-900 uppercase tracking-tight">The Convergence Framework</h2>
              <div className="w-16 h-1 bg-amber-500 mx-auto mt-6 rounded-full" />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div variants={fadeUp}>
                <img src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80" alt="Meeting" className="rounded-3xl shadow-2xl" />
              </motion.div>
              <motion.div variants={fadeUp} className="space-y-8">
                <div className="bg-white border border-slate-100 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow">
                  <h3 className="text-2xl font-extrabold text-slate-900 mb-4 flex items-center"><FaGlobe className="mr-3 text-blue-600"/> Our Mission</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    To build friction-free transactional frameworks between enterprise ecosystems in India and the LAC region, optimizing trade execution pathways and high-level sovereign dialogue.
                  </p>
                </div>
                <div className="bg-white border border-slate-100 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow">
                  <h3 className="text-2xl font-extrabold text-slate-900 mb-4 flex items-center"><FaChartLine className="mr-3 text-amber-500"/> Our Vision</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    To establish a modern multi-trillion dollar digital and physical production corridor, validating technology exchanges, supply-chain independence, and green field capital deployment.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* QUICK STATS */}
        <section className="py-20 bg-blue-900 relative">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-10 text-center relative z-10">
            {[
              { count: '20+', label: 'Participating Nations' },
              { count: '500+', label: 'Elite Delegates' },
              { count: '100+', label: 'Venture Capital & Investors' },
              { count: '50+', label: 'Global Industry Leaders' },
            ].map((s, i) => (
              <motion.div initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} key={i}>
                <div className="text-5xl font-extrabold text-amber-400 drop-shadow-lg">{s.count}</div>
                <div className="text-sm text-blue-100 font-bold mt-3 uppercase tracking-widest">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 3. AGENDA SECTION */}
        <section id="agenda" className="py-24 bg-white px-4 scroll-mt-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-slate-900 uppercase tracking-tight">Summit Agenda</h2>
              <p className="text-sm text-blue-600 font-bold mt-3 uppercase tracking-widest">Timeline Matrix — June 6, 2026</p>
            </div>

            <div className="relative border-l-2 border-slate-200 ml-4 md:ml-32 space-y-12">
              {[
                { time: '09:00 AM', event: 'Delegate Registration & Security Clearance', desc: 'Issuance of premium access badges and technical toolkits.' },
                { time: '10:00 AM', event: 'Inaugural Ceremony & National Anthems', desc: 'Lighting of the lamp by ministerial dignitaries.' },
                { time: '11:00 AM', event: 'Keynote Address: The Indo-LAC 2026 Grid', desc: 'Sovereign presentation on projected trade tariff reductions.' },
                { time: '12:00 PM', event: 'Plenary Investment Infrastructure Sessions', desc: 'Panel evaluation on manufacturing frameworks.' },
                { time: '01:30 PM', event: 'B2B Networking Lunch & Exhibition Walkthrough', desc: 'Exclusive lounges curated for industry interaction.' },
                { time: '03:30 PM', event: 'B2G Ministerial Closing Dialogues', desc: 'Signing of initial Memorandums of Understanding (MoUs).' }
              ].map((item, idx) => (
                <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: idx * 0.1 }} viewport={{ once: true, margin: "-50px" }} key={idx} className="relative pl-10">
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-blue-600 ring-4 ring-white shadow-sm" />
                  
                  <div className="md:absolute md:-left-44 md:top-0 md:w-32 md:text-right font-extrabold text-sm text-amber-600 tracking-wider uppercase mb-2 md:mb-0">
                    {item.time}
                  </div>

                  <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl hover:shadow-xl transition-shadow cursor-default">
                    <h3 className="text-xl font-extrabold text-slate-900">{item.event}</h3>
                    <p className="text-base text-slate-600 mt-2 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. SPEAKERS SECTION */}
        <section id="speakers" className="py-24 bg-slate-100 px-4 scroll-mt-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-slate-900 uppercase tracking-tight">Dignitaries & Speakers</h2>
              <div className="w-16 h-1 bg-amber-500 mx-auto mt-6 rounded-full" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: 'Dr. Arindam Mishra', role: 'Joint Secretary', org: 'Ministry of Commerce', country: 'India', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80', bio: 'Strategic Lead for global trade expansion models.' },
                { name: 'H.E. Valeria Silva', role: 'Ambassador', org: 'ApexBrasil Corporation', country: 'Brazil', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80', bio: 'Pioneered foreign capital structural inflows.' },
                { name: 'Carlos Mendoza', role: 'Director General', org: 'ProMexico Fund', country: 'Mexico', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80', bio: 'Expert advisor on cross-border tech deployment.' },
                { name: 'Elena Rostova', role: 'Chief Economist', org: 'LAC Development Bank', country: 'Argentina', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80', bio: 'Spearheading alternative sovereign liquidity grids.' }
              ].map((s, i) => (
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} key={i} className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all group">
                  <div className="h-64 relative overflow-hidden bg-slate-200">
                    <img src={s.img} alt={s.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-slate-900 text-[10px] font-extrabold px-3 py-1.5 rounded-lg uppercase tracking-wider shadow-sm">
                      {s.country}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">{s.name}</h3>
                    <p className="text-sm text-blue-600 font-bold mt-1">{s.role}</p>
                    <p className="text-xs text-slate-500 font-bold mt-1 uppercase tracking-wider">{s.org}</p>
                    <div className="w-full h-[1px] bg-slate-100 my-4" />
                    <p className="text-sm text-slate-600 leading-relaxed">{s.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

       {/* 5. ALL LAC NATIONS + INDIA GRID */}
        <section id="countries" className="py-32 bg-[#495776] px-4 scroll-mt-20 border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-cyan-400 text-sm font-black uppercase tracking-[0.3em] mb-4">Global Reach</h2>
              <h3 className="text-4xl md:text-5xl font-black text-white">Participating Nations</h3>
              <p className="text-slate-400 mt-6 max-w-2xl mx-auto">A unified framework of 34 sovereign entities driving the future of intercontinental trade and investment.</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                { name: "India", flagUrl: "https://flagcdn.com/w80/in.png" }, 
                { name: "Argentina", flagUrl: "https://flagcdn.com/w80/ar.png" }, 
                { name: "Bahamas", flagUrl: "https://flagcdn.com/w80/bs.png" },
                { name: "Barbados", flagUrl: "https://flagcdn.com/w80/bb.png" }, 
                { name: "Belize", flagUrl: "https://flagcdn.com/w80/bz.png" }, 
                { name: "Bolivia", flagUrl: "https://flagcdn.com/w80/bo.png" },
                { name: "Brazil", flagUrl: "https://flagcdn.com/w80/br.png" }, 
                { name: "Chile", flagUrl: "https://flagcdn.com/w80/cl.png" }, 
                { name: "Colombia", flagUrl: "https://flagcdn.com/w80/co.png" },
                { name: "Costa Rica", flagUrl: "https://flagcdn.com/w80/cr.png" }, 
                { name: "Cuba", flagUrl: "https://flagcdn.com/w80/cu.png" }, 
                { name: "Dominican Rep.", flagUrl: "https://flagcdn.com/w80/do.png" },
                { name: "Ecuador", flagUrl: "https://flagcdn.com/w80/ec.png" }, 
                { name: "El Salvador", flagUrl: "https://flagcdn.com/w80/sv.png" }, 
                { name: "Guatemala", flagUrl: "https://flagcdn.com/w80/gt.png" },
                { name: "Guyana", flagUrl: "https://flagcdn.com/w80/gy.png" }, 
                { name: "Haiti", flagUrl: "https://flagcdn.com/w80/ht.png" }, 
                { name: "Honduras", flagUrl: "https://flagcdn.com/w80/hn.png" },
                { name: "Jamaica", flagUrl: "https://flagcdn.com/w80/jm.png" }, 
                { name: "Mexico", flagUrl: "https://flagcdn.com/w80/mx.png" }, 
                { name: "Nicaragua", flagUrl: "https://flagcdn.com/w80/ni.png" },
                { name: "Panama", flagUrl: "https://flagcdn.com/w80/pa.png" }, 
                { name: "Paraguay", flagUrl: "https://flagcdn.com/w80/py.png" }, 
                { name: "Peru", flagUrl: "https://flagcdn.com/w80/pe.png" },
                { name: "Suriname", flagUrl: "https://flagcdn.com/w80/sr.png" }, 
                { name: "Trinidad & T.", flagUrl: "https://flagcdn.com/w80/tt.png" }, 
                { name: "Uruguay", flagUrl: "https://flagcdn.com/w80/uy.png" },
                { name: "Venezuela", flagUrl: "https://flagcdn.com/w80/ve.png" }, 
                { name: "Antigua & B.", flagUrl: "https://flagcdn.com/w80/ag.png" }, 
                { name: "Dominica", flagUrl: "https://flagcdn.com/w80/dm.png" },
                { name: "Grenada", flagUrl: "https://flagcdn.com/w80/gd.png" }, 
                { name: "St. Kitts", flagUrl: "https://flagcdn.com/w80/kn.png" }, 
                { name: "St. Lucia", flagUrl: "https://flagcdn.com/w80/lc.png" },
                { name: "St. Vincent", flagUrl: "https://flagcdn.com/w80/vc.png" }
              ].map((c, i) => (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }} 
                  whileInView={{ opacity: 1, scale: 1 }} 
                  transition={{ delay: (i % 6) * 0.05 }} 
                  viewport={{ once: true }} 
                  key={i} 
                  className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center hover:bg-cyan-900/30 hover:border-cyan-500/50 hover:-translate-y-2 transition-all duration-300 group"
                >
                  <div className="mb-3 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] group-hover:scale-125 transition-transform duration-300 flex items-center justify-center h-12 w-16">
                    <img src={c.flagUrl} alt={`${c.name} flag`} loading="lazy" className="max-w-full max-h-full object-contain rounded-[2px]" />
                  </div>
                  <h4 className="text-xs font-bold text-slate-300 group-hover:text-white text-center uppercase tracking-wider">{c.name}</h4>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. GALLERY SECTION */}
        <section id="gallery" className="py-24 bg-[#3b465e] px-4 scroll-mt-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-white uppercase tracking-tight">Media Archives</h2>
              <div className="w-16 h-1 bg-amber-500 mx-auto mt-6 rounded-full" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80', title: 'Sovereign Summit Setup', category: 'Keynote' },
                { src: 'https://images.unsplash.com/photo-1475721028070-2051152cb56b?auto=format&fit=crop&w=600&q=80', title: 'Global Ministerial Roundtable', category: 'Panel' },
                { src: 'https://images.unsplash.com/photo-1559223607-a43c990c692c?auto=format&fit=crop&w=600&q=80', title: 'B2B Private Signing MoUs', category: 'B2B Session' },
                { src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=600&q=80', title: 'Indore Trade Convention Lounge', category: 'Venue' },
                { src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80', title: 'Industrial Framework Review', category: 'Panel' },
                { src: 'https://images.unsplash.com/photo-1582192730841-2a682d7375f9?auto=format&fit=crop&w=600&q=80', title: 'Valedictory Press Address', category: 'Media' }
              ].map((item, idx) => (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: idx * 0.1 }} viewport={{ once: true }} key={idx} className="bg-slate-800 rounded-3xl overflow-hidden group shadow-2xl border border-slate-700 relative">
                  <div className="h-64 relative overflow-hidden">
                    <img src={item.src} alt={item.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90" />
                  </div>
                  <div className="absolute bottom-0 left-0 w-full p-6">
                    <div className="inline-block bg-amber-500 text-slate-900 text-[10px] font-extrabold px-3 py-1 rounded-lg uppercase tracking-wider mb-2 shadow-sm">
                      {item.category}
                    </div>
                    <h3 className="text-lg font-extrabold text-white tracking-wide">{item.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. CONTACT SECTION */}
        <section id="contact" className="py-24 bg-white px-4 scroll-mt-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl font-extrabold text-slate-900 uppercase tracking-tight mb-8">Contact Secretariat</h2>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-6 bg-slate-50 border border-slate-100 p-6 rounded-3xl">
                  <div className="w-14 h-14 bg-white text-blue-600 rounded-full flex items-center justify-center text-2xl shadow-sm shrink-0"><FaMapMarker /></div>
                  <div>
                    <p className="font-extrabold text-slate-900 uppercase text-sm">Venue Infrastructure</p>
                    <p className="text-slate-600 mt-1 text-base">Pride Hotel, Indore, Madhya Pradesh, India</p>
                  </div>
                </div>

                <div className="flex items-center space-x-6 bg-slate-50 border border-slate-100 p-6 rounded-3xl">
                  <div className="w-14 h-14 bg-white text-amber-500 rounded-full flex items-center justify-center text-2xl shadow-sm shrink-0"><FaEnvelope /></div>
                  <div>
                    <p className="font-extrabold text-slate-900 uppercase text-sm">Communications</p>
                    <p className="text-slate-600 mt-1 text-base">secretariat@india-lacforum.gov.in</p>
                  </div>
                </div>

                <div className="flex items-center space-x-6 bg-slate-50 border border-slate-100 p-6 rounded-3xl">
                  <div className="w-14 h-14 bg-white text-emerald-600 rounded-full flex items-center justify-center text-2xl shadow-sm shrink-0"><FaPhone /></div>
                  <div>
                    <p className="font-extrabold text-slate-900 uppercase text-sm">Hotline Switchboard</p>
                    <p className="text-slate-600 mt-1 text-base">+91 (731) 4455-266 / Ext 104</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-slate-50 border border-slate-200 p-8 sm:p-10 rounded-[2rem] shadow-xl">
              <h3 className="text-2xl font-extrabold text-slate-900 uppercase tracking-tight mb-8">Official Query</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input required type="text" placeholder="Full Name" className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-sm" />
                  <input required type="email" placeholder="Email Address" className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-sm" />
                </div>
                <input required type="text" placeholder="Subject" className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-sm" />
                <textarea required rows="5" placeholder="Your message..." className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none transition-all shadow-sm" />
                <button type="submit" className="w-full py-4 bg-slate-900 hover:bg-blue-600 text-white font-extrabold text-sm uppercase tracking-wider rounded-xl transition-colors shadow-lg">
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </section>

        {/* 8. REGISTRATION SECTION (FINAL CALL TO ACTION) */}
        <section id="register" className="py-24 bg-[#d5dceb] px-4 relative overflow-hidden scroll-mt-20">
          <div className="absolute inset-0 z-0">
             <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-40"></div>
             <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-40"></div>
          </div>
          
          <div className="max-w-4xl mx-auto relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-[2.5rem] p-8 sm:p-14 shadow-2xl">
              <div className="text-center mb-10">
                <h2 className="text-4xl font-extrabold text-slate-900 uppercase tracking-tight">Delegate Registration</h2>
                <p className="text-base text-slate-500 mt-3">Secure your institutional access for the Indore 2026 Summit</p>
              </div>

              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Registration Submitted Successfully!'); }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-extrabold text-slate-500 uppercase tracking-wider mb-2">Full Name *</label>
                    <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="e.g. Ravi Tiwari" />
                  </div>
                  <div>
                    <label className="block text-xs font-extrabold text-slate-500 uppercase tracking-wider mb-2">Company / Institution *</label>
                    <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="Enterprise Name" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-extrabold text-slate-500 uppercase tracking-wider mb-2">Designation *</label>
                    <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="e.g. Managing Director" />
                  </div>
                  <div>
                    <label className="block text-xs font-extrabold text-slate-500 uppercase tracking-wider mb-2">Official Email *</label>
                    <input required type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="name@company.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-extrabold text-slate-500 uppercase tracking-wider mb-2">Phone Number *</label>
                    <input required type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="+91 98765 43210" />
                  </div>
                  <div>
                    <label className="block text-xs font-extrabold text-slate-500 uppercase tracking-wider mb-2">Industry Sector *</label>
                    <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all">
                      <option>Renewable Infrastructure</option>
                      <option>Pharmaceutical Logistics</option>
                      <option>Agritech Sovereign Units</option>
                      <option>Fintech Infrastructure</option>
                      <option>Mineral Refining</option>
                    </select>
                  </div>
                </div>

                <button type="submit" className="w-full mt-8 py-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-extrabold text-sm uppercase tracking-widest rounded-xl transition-all shadow-xl shadow-blue-500/30 hover:-translate-y-1 hover:shadow-blue-600/40">
                  Submit Registration Request
                </button>
              </form>
            </motion.div>
          </div>
        </section>

      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-950 pt-16 pb-8 text-center border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="w-14 h-14 bg-gradient-to-tr from-blue-700 to-amber-500 rounded-2xl flex items-center justify-center font-bold text-2xl text-white shadow-lg mx-auto mb-6">
            IL
          </div>
          <h2 className="text-white font-extrabold text-xl tracking-wide mb-3 uppercase">India – LAC Forum 2026</h2>
          <p className="text-sm mb-10 max-w-xl mx-auto text-slate-400 leading-relaxed">
            Connecting Businesses, Investments & Global Opportunities across bilateral horizons.
          </p>
          <div className="border-t border-slate-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 font-bold uppercase tracking-wider">
            <p>&copy; 2026 All Rights Reserved.</p>
            <p className="mt-4 md:mt-0">Managed under official trade council frameworks.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}