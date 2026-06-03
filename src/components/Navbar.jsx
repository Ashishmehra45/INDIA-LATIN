import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaGlobeAmericas } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import logo from "../../public/INDIA-LAC.png";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    // { path: "/#about", label: "About" },
    { path: "/initiatives", label: "Initiatives" },
    { path: "/services", label: "Services" },
    { path: "/sectors", label: "Sectors" },
    // { path: "/gallery", label: "Gallery" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#F4F0EA]/95 border-b border-[#E6E2D6] shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* --- LOGO SECTION --- */}
        <Link
          to="/"
          className="flex items-center space-x-3 cursor-pointer group"
          onClick={() => setIsMobileMenuOpen(false)}
        >
        <img src={logo} alt="INDIA-LAC Logo" className="h-12 w-50" />
        </Link>

        {/* --- DESKTOP MENU --- */}
        <div className="hidden xl:flex items-center space-x-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `px-4 py-2 text-[11px] font-bold uppercase tracking-[0.15em] transition-all duration-300 relative group ${
                  isActive ? "text-[#3E443C]" : "text-[#7A8476] hover:text-[#8A9A86]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {/* Active State Underline Animation */}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-[#8A9A86] transition-all duration-300 ${
                      isActive ? "w-1/2" : "w-0 group-hover:w-1/3"
                    }`}
                  ></span>
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* --- DESKTOP CTA BUTTON --- */}
        <div className="hidden xl:flex items-center">
          <Link
            to="/join"
            className="ml-6 px-7 py-2.5 bg-[#3E443C] text-white text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#8A9A86] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            Join LAC
          </Link>
        </div>

        {/* --- MOBILE MENU TOGGLE BUTTON --- */}
        <button
          className="xl:hidden h-10 w-10 flex items-center justify-center text-[#5B6358] hover:text-[#8A9A86] transition-colors focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          {isMobileMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </button>
      </div>

      {/* --- MOBILE DROPDOWN MENU --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="xl:hidden bg-[#F4F0EA] border-b border-[#E6E2D6] overflow-hidden shadow-2xl absolute w-full left-0 top-20"
          >
            <div className="flex flex-col px-6 py-6 space-y-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-3 text-sm font-bold uppercase tracking-wider transition-all duration-200 ${
                      isActive
                        ? "text-[#3E443C] bg-[#EAE6DB] border-l-4 border-[#8A9A86]"
                        : "text-[#7A8476] border-l-4 border-transparent hover:text-[#8A9A86] hover:bg-[#EAE6DB]/50"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              
              {/* Mobile CTA Button */}
              <div className="pt-4 mt-2 border-t border-[#E6E2D6]">
                <Link
                  to="/join"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full py-4 bg-[#3E443C] text-white text-center text-xs font-bold tracking-[0.2em] uppercase shadow-md hover:bg-[#8A9A86] transition-colors"
                >
                  Join LAC
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}