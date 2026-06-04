import React from "react";
import { Link } from "react-router-dom";
import {
  FaGlobeAmericas,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaArrowRight,
} from "react-icons/fa";
import logo from "/public/INDIA-LAC.png"; // Assuming you have a logo image in assets folder

export default function Footer() {
  return (
    <footer className="bg-[#EAE6DB] pt-24 pb-8 border-t border-[#D4D0C5] text-[#3E443C] font-sans selection:bg-[#8A9A86] selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Column 1: Brand & Socials (Wider Column) */}
          <div className="lg:col-span-4">
            <Link
              to="/"
              className="flex items-center space-x-3 cursor-pointer group"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <img src={logo} alt="INDIA-LAC Logo" className="h-12 w-50" />
            </Link>

            <p className="text-[15px] text-[#5B6358] font-light leading-relaxed mt-4 mb-8 pr-4">
              Bridging continents through strategic partnerships. The
              authoritative voice of the India–LAC corridor, connecting
              businesses, investments, and global opportunities.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-3">
              {[
                { icon: <FaLinkedinIn />, link: "#" },
                { icon: <FaTwitter />, link: "#" },
                { icon: <FaFacebookF />, link: "#" },
                { icon: <FaInstagram />, link: "#" },
                { icon: <FaYoutube />, link: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-[#D4D0C5] bg-[#F4F0EA] flex items-center justify-center text-[#5B6358] hover:bg-[#8A9A86] hover:text-white hover:border-[#8A9A86] transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="text-[#3E443C] text-xs font-bold tracking-[0.15em] uppercase mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {[
                { label: "About Us", path: "/about" },
                { label: "Initiatives", path: "/initiatives" },
                { label: "Services", path: "/services" },
                { label: "Sectors", path: "/sectors" },
                { label: "Gallery", path: "/gallery" },
              ].map((link, i) => (
                <li key={i} className="group">
                  <Link
                    to={link.path}
                    className="text-[15px] text-[#5B6358] font-light hover:text-[#8A9A86] transition-colors duration-200 flex items-center"
                  >
                    <FaArrowRight className="text-[10px] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 mr-2 transition-all duration-300 text-[#8A9A86]" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="lg:col-span-2">
            <h3 className="text-[#3E443C] text-xs font-bold tracking-[0.15em] uppercase mb-6">
              Resources
            </h3>
            <ul className="space-y-4">
              {[
                { label: "Market Intelligence", path: "#" },
                { label: "Business Monitor", path: "#" },
                { label: "Travel Guidelines", path: "#" },
                { label: "Privacy Policy", path: "#" },
                { label: "Terms of Service", path: "#" },
              ].map((link, i) => (
                <li key={i} className="group">
                  <a
                    href={link.path}
                    className="text-[15px] text-[#5B6358] font-light hover:text-[#8A9A86] transition-colors duration-200 flex items-center"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4D0C5] group-hover:bg-[#8A9A86] mr-3 transition-colors duration-300"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Secretariat */}
          <div className="lg:col-span-3">
            <h3 className="text-[#3E443C] text-xs font-bold tracking-[0.15em] uppercase mb-6">
              Contact Secretariat
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start group">
                <FaMapMarkerAlt className="text-[#8A9A86] mt-1 mr-4 text-base shrink-0" />
                <span className="text-[15px] text-[#5B6358] font-light leading-relaxed">
                  C06 At, Chhatrapati Shivaji Maharaj International Airport
                  Mumbai, Maharashtra 400099
                </span>
              </li>
              <li className="flex items-center group">
                <FaEnvelope className="text-[#8A9A86] mr-4 text-base shrink-0" />
                <a
                  href="mailto:office.ceo@mexicoindia.org"
                  className="text-[15px] text-[#5B6358] font-light hover:text-[#3E443C] transition-colors"
                >
                  office.ceo@mexicoindia.org <br />
                  info@mexicoindia.org
                </a>
              </li>
              <li className="flex items-center group">
                <FaPhoneAlt className="text-[#8A9A86] mr-4 text-base shrink-0" />
                <span className="text-[15px] text-[#5B6358] font-light">
                 +91-755-2559971
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Credits */}
        <div className="border-t border-[#D4D0C5] pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-[11px] text-[#7A8476] font-bold tracking-widest uppercase">
            &copy; {new Date().getFullYear()} India-LAC Business Council. All
            Rights Reserved.
          </p>
          <p className="text-[11px] text-[#7A8476] font-bold tracking-widest uppercase">
            Managed under official trade council frameworks.
          </p>
        </div>
      </div>
    </footer>
  );
}
