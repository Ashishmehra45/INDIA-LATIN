import React from "react";
import { motion } from "framer-motion";
import {
  FaSeedling,
  FaGlobeAmericas,
  FaUtensils,
  FaTshirt,
  FaPills,
  FaLaptopCode,
  FaCar,
  FaSolarPanel,
  FaPlaneDeparture,
  FaShippingFast,
  FaCheck,
  FaArrowRight,
} from "react-icons/fa";

// --- PRO EDITORIAL EARTHY THEME ---
// Background: #F4F0EA (Soft Cream)
// Accent: #8A9A86 (Sage Green)
// Text/Dark Accent: #3E443C (Dark Olive/Charcoal)

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Sectors() {
  const sectorsData = [
    {
      id: "01",
      title: "Agriculture",
      icon: <FaSeedling />,
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1600&q=80",
      overview:
        "India and Latin America together hold nearly 30% of the world’s arable land. India’s agri-tech, seeds, and fertilizers complement Latin America’s massive production of soy, corn, sugarcane, coffee, and tropical fruits.",
      opportunities: [
        "Export of Indian agrochemicals, pesticides & fertilizers",
        "Agri-tech solutions (precision farming, drones, soil analytics)",
        "Hybrid seed technology collaborations",
        "Organic produce certification & joint exports",
        "Cold chain and post-harvest infrastructure",
      ],
      activities: [
        "Bilateral trade missions & buyer-seller meets",
        "Technology demos for drip & micro-irrigation",
        "MoUs between Indian agri-tech firms and LATAM cooperatives",
        "Knowledge exchange on climate-resilient farming",
      ],
      whyLatam:
        "Brazil is the top global exporter of soybeans, coffee, sugar & beef. The region holds 28% of world’s freshwater and has a growing middle class demanding value-added food products.",
      players: [
        "UPL Limited",
        "Mahindra AgriTech",
        "Jain Irrigation",
        "Coromandel International",
        "IFFCO",
      ],
    },
    {
      id: "02",
      title: "Food Processing",
      icon: <FaUtensils />,
      image: "https://plus.unsplash.com/premium_photo-1661962510909-4be27f3637a2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      overview:
        "Latin America is rich in raw agricultural produce but weak in value-added processing. India’s $300B+ food processing industry can help the region move up the value chain.",
      opportunities: [
        "Export of food processing & packaging machinery",
        "Joint processing units for fruits, vegetables & dairy",
        "Spice & flavoring supply chain partnerships",
        "Ready-to-eat and convenience food development",
        "Cold chain logistics collaboration",
      ],
      activities: [
        "Joint food-tech incubators",
        "Participation in major food expos (SIAL Brazil, Expo Antad Mexico)",
        "Investment in food processing SEZs",
        "Standards & certification harmonization",
      ],
      whyLatam:
        "World’s largest net food exporter with $150B+ food processing market in Brazil alone. Strong government push for industrialization and nearshoring.",
      players: [
        "Britannia Industries",
        "Dabur",
        "ITC Agribusiness",
        "KRBL",
        "Tata Consumer Products",
      ],
    },
    {
      id: "03",
      title: "Textiles",
      icon: <FaTshirt />,
      image: "https://images.unsplash.com/photo-1605289982774-9a6fef564df8?auto=format&fit=crop&w=1600&q=80",
      overview:
        "India is a global textile powerhouse while Latin America (especially Mexico & Colombia) has strong apparel manufacturing and US market access via USMCA.",
      opportunities: [
        "Indian yarn & fabric exports",
        "Technical textiles collaboration",
        "Joint garment manufacturing for nearshoring",
        "Sustainable & organic cotton supply chains",
        "Textile machinery exports",
      ],
      activities: [
        "B2B matchmaking events",
        "Participation in Colombiamoda & Expo Textil Mexico",
        "Investment in Mexican textile hubs",
        "Sustainable certification collaboration",
      ],
      whyLatam:
        "Duty-free US market access, nearshoring trend, and growing demand for sustainable fashion.",
      players: [
        "Arvind Limited",
        "Welspun India",
        "Raymond Group",
        "Trident Group",
        "Vardhman Textiles",
      ],
    },
    {
      id: "04",
      title: "Pharmaceuticals",
      icon: <FaPills />,
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1600&q=80",
      overview:
        "India, the “Pharmacy of the World”, can fulfill Latin America’s high demand for affordable generics and APIs in its $80B+ pharma market.",
      opportunities: [
        "Generic drug & API supply",
        "Vaccine and biosimilar partnerships",
        "Medical devices & diagnostics exports",
        "Clinical research collaborations",
      ],
      activities: [
        "Regulatory harmonization with ANVISA, COFEPRIS, INVIMA",
        "Product registration support",
        "Joint manufacturing in Mexico & Brazil",
      ],
      whyLatam:
        "Market expected to cross $100B by 2027. High demand for affordable medicines across Brazil, Mexico & Colombia.",
      players: [
        "Sun Pharmaceutical",
        "Dr. Reddy’s Laboratories",
        "Cipla",
        "Aurobindo Pharma",
        "Lupin",
        "Zydus Lifesciences",
      ],
    },
    {
      id: "05",
      title: "IT & Technology",
      icon: <FaLaptopCode />,
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80",
      overview:
        "India’s $250B+ IT industry can power Latin America’s fast-growing digital economy (projected to reach $1 trillion by 2030).",
      opportunities: [
        "IT outsourcing & software services",
        "Fintech solutions for digital payments",
        "Cybersecurity & cloud services",
        "E-governance & smart city solutions",
        "EdTech and HealthTech deployment",
      ],
      activities: [
        "Tech startup bridge programs",
        "Setting up delivery centers in São Paulo, Mexico City, Bogotá",
        "Joint hackathons and innovation challenges",
      ],
      whyLatam:
        "Young population, nearshoring boom, and strong government digital push.",
      players: [
        "TCS",
        "Infosys",
        "Wipro",
        "HCL Technologies",
        "Tech Mahindra",
        "Freshworks",
      ],
    },
    {
      id: "06",
      title: "Automobile",
      icon: <FaCar />,
      image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=1600&q=80",
      overview:
        "India’s strong auto-component ecosystem complements Latin America’s large vehicle manufacturing base in Mexico and Brazil.",
      opportunities: [
        "Auto-component exports",
        "Two & three-wheeler market entry",
        "EV technology & battery collaboration",
        "Joint manufacturing ventures",
      ],
      activities: [
        "Supplier development programs",
        "Participation in auto expos",
        "EV ecosystem partnerships",
      ],
      whyLatam:
        "Mexico (5th largest auto producer) and Brazil offer huge nearshoring and EV growth potential.",
      players: [
        "Motherson Group",
        "Bharat Forge",
        "Tata Motors",
        "Mahindra & Mahindra",
        "Minda Industries",
      ],
    },
    {
      id: "07",
      title: "Renewable Energy",
      icon: <FaSolarPanel />,
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1600&q=80",
      overview:
        "India’s renewable energy expertise pairs perfectly with Latin America’s exceptional solar, wind, and hydro resources.",
      opportunities: [
        "Solar equipment & EPC contracts",
        "Green hydrogen collaboration",
        "Energy storage & smart grid solutions",
      ],
      activities: [
        "Clean energy investment forums",
        "Technology transfer for solar manufacturing",
        "Joint green hydrogen projects",
      ],
      whyLatam:
        "Chile has the best solar irradiation globally. Brazil, Mexico & Colombia have massive clean energy targets.",
      players: [
        "Adani Green Energy",
        "Tata Power",
        "Greenko Group",
        "ReNew Power",
        "Sterling & Wilson",
        "NTPC",
      ],
    },
    {
      id: "08",
      title: "Tourism",
      icon: <FaPlaneDeparture />,
      image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1600&q=80",
      overview:
        "Both regions have rich heritage and natural beauty with low bilateral tourist flow — huge untapped potential.",
      opportunities: [
        "Two-way tourism promotion",
        "MICE tourism partnerships",
        "Indian hotel chains in LATAM",
        "Yoga & wellness tourism",
      ],
      activities: [
        "Joint tourism roadshows",
        "B2B travel trade meets",
        "Direct flight connectivity push",
      ],
      whyLatam:
        "Growing middle class with rising interest in India as a destination.",
      players: [
        "Taj Hotels",
        "OYO",
        "MakeMyTrip",
        "Club Mahindra",
        "Thomas Cook India",
      ],
    },
    {
      id: "09",
      title: "Logistics",
      icon: <FaShippingFast />,
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
      overview:
        "Efficient direct logistics is essential to reduce high shipping costs between India and Latin America.",
      opportunities: [
        "Direct shipping routes",
        "Air cargo partnerships",
        "Digital freight platforms",
        "Cold chain logistics development",
      ],
      activities: [
        "Port partnerships (JNPT–Santos, Manzanillo)",
        "Logistics corridor feasibility studies",
        "Customs harmonization workshops",
      ],
      whyLatam: "Strategic ports and growing infrastructure investment.",
      players: [
        "Adani Ports",
        "Blue Dart",
        "Mahindra Logistics",
        "Allcargo Logistics",
      ],
    },
  ];

  return (
    <div className="bg-[#F4F0EA] text-[#3E443C] font-sans selection:bg-[#8A9A86] selection:text-white pt-20">
      
      {/* --- HERO SECTION WITH BACKGROUND IMAGE --- */}
      <section className="relative py-32 px-4 flex items-center justify-center min-h-[60vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80" 
            alt="Corporate Sectors Background" 
            className="w-full h-full object-cover grayscale-[20%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#3E443C]/90 via-[#3E443C]/70 to-[#696866]" />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="relative z-10 max-w-5xl mx-auto text-center"
        >
          <span className="inline-block px-4 py-1.5 border border-[#8A9A86]/50 bg-[#8A9A86]/20 backdrop-blur-md text-[#B6C3B1] font-bold tracking-[0.2em] uppercase text-xs mb-6 rounded-full">
            Corridor Opportunities
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-white leading-tight">
            Strategic Sectors of <br className="hidden md:block" />
            <span className="italic text-[#8A9A86]">Growth & Collaboration</span>
          </h1>
          <div className="w-16 h-[2px] bg-[#8A9A86] mx-auto mt-8 mb-8" />
          <p className="text-lg md:text-xl text-[#DCE0D9] leading-relaxed font-light max-w-3xl mx-auto">
            Discover the 9 priority sectors where India and Latin America share deep structural complementarities, offering multi-billion dollar avenues for trade, investment, and joint ventures.
          </p>
        </motion.div>
      </section>

      {/* --- BENTO CARD SECTORS LISTING --- */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto space-y-20">
          {sectorsData.map((sector, index) => (
            <motion.div
              key={sector.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col border border-[#E6E2D6]"
            >
              
              {/* TOP HALF: Split Image & Dark High-Contrast Intro */}
              <div className="flex flex-col lg:flex-row">
                
                {/* Image Section */}
                <div className="w-full lg:w-1/2 h-[350px] lg:h-auto relative overflow-hidden group">
                  <img 
                    src={sector.image} 
                    alt={sector.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  {/* Floating Icon Pill */}
                  <div className="absolute top-6 left-6 bg-[#3E443C]/80 backdrop-blur-md px-5 py-3 rounded-full border border-white/10 text-white font-bold tracking-widest text-sm flex items-center shadow-lg">
                    {sector.icon} <span className="ml-3 uppercase">{sector.title}</span>
                  </div>
                  {/* Giant Watermark ID */}
                  <div className="absolute -bottom-10 -left-4 text-[140px] font-serif font-black text-white/30 leading-none pointer-events-none drop-shadow-md">
                    {sector.id}
                  </div>
                </div>

                {/* Dark Intro Box */}
                <div className="w-full lg:w-1/2 bg-[#3E443C] p-8 md:p-12 lg:p-16 flex flex-col justify-center text-white relative overflow-hidden">
                  {/* Subtle Grid Pattern Overlay */}
                  <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#8A9A86_1px,transparent_1px),linear-gradient(to_bottom,#8A9A86_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                  
                  <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl font-serif mb-6 leading-tight">
                      Sector Overview
                    </h2>
                    <p className="text-[#B6C3B1] font-light leading-relaxed mb-10 text-lg">
                      {sector.overview}
                    </p>
                    
                    {/* Why Latam Box inside Dark Theme */}
                    <div className="bg-[#4F564D] p-6 rounded-2xl border border-[#5B6358] shadow-inner">
                      <h4 className="text-xs font-bold text-[#8A9A86] uppercase tracking-[0.15em] mb-3 flex items-center">
                        <FaGlobeAmericas className="mr-2 text-lg" /> Why Latin America
                      </h4>
                      <p className="text-sm font-light leading-relaxed text-[#DCE0D9]">
                        {sector.whyLatam}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* BOTTOM HALF: 3-Column Perfect Bento Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-[#E6E2D6] bg-white">
                
                {/* Column 1: Opportunities */}
                <div className="p-8 md:p-12 hover:bg-[#F4F0EA]/50 transition-colors duration-300">
                  <h3 className="text-lg font-serif text-[#3E443C] font-bold mb-6 flex items-center">
                    <FaArrowRight className="text-[#8A9A86] mr-3" /> Opportunities
                  </h3>
                  <ul className="space-y-4">
                    {sector.opportunities.map((item, i) => (
                      <li key={i} className="flex items-start text-[#5B6358] font-light text-[15px] leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8A9A86] mt-2 mr-3 shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 2: Key Activities */}
                <div className="p-8 md:p-12 hover:bg-[#F4F0EA]/50 transition-colors duration-300">
                  <h3 className="text-lg font-serif text-[#3E443C] font-bold mb-6 flex items-center">
                    <FaCheck className="text-[#8A9A86] mr-3" /> Key Activities
                  </h3>
                  <ul className="space-y-4">
                    {sector.activities.map((item, i) => (
                      <li key={i} className="flex items-start text-[#5B6358] font-light text-[15px] leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8A9A86] mt-2 mr-3 shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 3: Indian Players */}
                <div className="p-8 md:p-12 bg-[#FCFBF9] hover:bg-[#F4F0EA]/80 transition-colors duration-300">
                  <h3 className="text-lg font-serif text-[#3E443C] font-bold mb-6">
                    Key Indian Players
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {sector.players.map((player, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-white border border-[#D4D0C5] text-xs font-semibold text-[#3E443C] rounded-lg shadow-sm hover:border-[#8A9A86] transition-colors cursor-default"
                      >
                        {player}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- BOTTOM CTA --- */}
      <section className="py-24 bg-[#3E443C] text-center px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">
            Ready to explore these <span className="italic text-[#8A9A86]">sectors?</span>
          </h2>
          <p className="text-[#B6C3B1] font-light text-lg mb-10">
            Join the LABC network and connect with the right stakeholders across the corridor.
          </p>
          <button className="px-10 py-4 bg-[#8A9A86] text-white font-bold text-xs tracking-[0.2em] uppercase hover:bg-[#F4F0EA] hover:text-[#3E443C] transition-colors duration-300 shadow-xl rounded-full">
            Become a Member
          </button>
        </motion.div>
      </section>
      
    </div>
  );
}