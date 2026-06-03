import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Sectors from "../pages/Sectors";
import Initiatives from "../pages/Initiatives";
import Services from "../pages/Services";
import Footer from "../components/Footer";
import Contact from "../pages/contact";
import Join from "../pages/Join";

export default function AppRoutes() {
  return (
    <div className="min-h-screen bg-[#F4F0EA] text-[#3E443C] font-sans selection:bg-[#8A9A86] selection:text-white overflow-x-hidden flex flex-col">
      
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/sectors" element={<Sectors />} />
            <Route path="/initiatives" element={<Initiatives />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/join" element={<Join />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}