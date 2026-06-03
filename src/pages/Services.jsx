import React from "react";
import { motion } from "framer-motion";
import {
  FaChartPie,
  FaHandshake,
  FaUsers,
  FaLandmark,
  FaArrowRight,
  FaCheck,
  FaGlobeAmericas,
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

export default function Services() {
  const servicesData = [
    {
      id: "01",
      title: "Investment Facilitation",
      tagline: "Helping companies enter Latin America or India through a structured investment pathway",
      icon: <FaChartPie />,
      image: "https://plus.unsplash.com/premium_photo-1681487769650-a0c3fbaed85a?q=80&w=1255&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      overview:
        "The India Latin America Caribbean Trade & Investment Forum (ILACTIF) helps companies navigate the full investment journey — from the first feasibility question to operational launch. Whether you are an Indian company entering Brazil, Colombia, Chile, or Argentina, or a Latin American company entering India, we provide the institutional support to make it happen.",
      subServices: [
        {
          num: "1.1",
          title: "Market Entry & Feasibility",
          desc: "Before committing capital, companies need clarity on opportunity size, competitive landscape, regulatory environment, and cost structures.",
          bullets: [
            "Country-level feasibility studies",
            "Regulatory landscape mapping",
            "Cost modelling and threshold analysis",
            "Risk assessment (political, operational)",
            "Structured entry roadmap",
          ],
        },
        {
          num: "1.2",
          title: "Location Strategy & Selection",
          desc: "Choosing the right city, state, or industrial zone is one of the most consequential investment decisions. We provide data-backed location intelligence.",
          bullets: [
            "State & city-level location analysis",
            "Industrial park and SEZ mapping",
            "Incentive mapping (tax holidays, subsidies)",
            "Infrastructure & talent assessment",
            "Site visits and government introductions",
          ],
        },
        {
          num: "1.3",
          title: "Entity Setup & Navigation",
          desc: "Setting up a legal entity involves navigating incorporation law, tax registration, labour compliance, and sector-specific licensing.",
          bullets: [
            "Legal entity selection advisory",
            "Coordination for local incorporation",
            "Tax, employer, and licensing registration",
            "Interface with investment promotion agencies",
            "Post-incorporation banking & compliance",
          ],
        },
        {
          num: "1.4",
          title: "Launch Execution",
          desc: "After entity setup, companies need to activate operations quickly. We support the first 90-180 days of operational establishment.",
          bullets: [
            "Talent onboarding & HR introductions",
            "Office/facility search & lease support",
            "Supply chain identification & logistics",
            "Banking and financial services setup",
            "Initial government liaison clearances",
          ],
        },
      ],
    },
    {
      id: "02",
      title: "Trade Promotion",
      tagline: "Connecting Indian and Latin American companies through targeted trade facilitation",
      icon: <FaHandshake />,
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1600&q=80",
      overview:
        "India–Latin America bilateral trade reached USD 39 billion in FY 2024–25 — but is widely acknowledged to be well below its potential. The India–Latin America Caribbean Trade & Investment Forum (ILACTIF) bridges this gap by actively connecting exporters, importers, buyers, and suppliers across the corridor.",
      subServices: [
        {
          num: "2.1",
          title: "Buyer-Seller Matchmaking",
          desc: "One of the most direct and effective services we offer is personalised, pre-qualified B2B matchmaking between Indian and Latin American partners.",
          bullets: [
            "Pre-qualified buyer/seller identification",
            "In-person and virtual introductory meetings",
            "Background screening & company profiling",
            "Follow-up support to convert relationships",
            "Sector-focused matchmaking rounds",
          ],
        },
        {
          num: "2.2",
          title: "Trade Missions & Delegations",
          desc: "We organise and anchor trade missions in both directions. Every mission is highly curated, focusing on real business outcomes.",
          bullets: [
            "End-to-end trade mission organisation",
            "Government and institutional meeting facilitation",
            "Factory and facility visits in both directions",
            "Sector-specific delegation programs",
            "Post-mission deal-tracking",
          ],
        },
        {
          num: "2.3",
          title: "Export Promotion & Access",
          desc: "For companies exporting into Latin America or India for the first time, we provide structured market access support from start to finish.",
          bullets: [
            "Import regulation and tariff analysis",
            "Distributor and agent identification",
            "Participation in major trade fairs and expos",
            "Export documentation and logistics advisory",
            "Introduction to trade finance windows",
          ],
        },
      ],
    },
    {
      id: "03",
      title: "Delegation Facilitation",
      tagline: "End-to-end management of high-level government and business delegations",
      icon: <FaUsers />,
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=80",
      overview:
        "High-level delegations — government ministers, industry leaders, investment promotion agencies — are one of the most powerful instruments for advancing bilateral trade and investment. We handle every element of delegation design, logistics, and outcomes.",
      subServices: [
        {
          num: "3.1",
          title: "Government Programmes",
          desc: "We facilitate official government-to-government delegations between India and Latin American nations, coordinating ministerial agendas.",
          bullets: [
            "Agenda design for ministerial visits",
            "Institutional meeting facilitation",
            "MoU drafting and signing ceremony coordination",
            "Media and communications management",
            "Post-visit outcomes tracking",
          ],
        },
        {
          num: "3.2",
          title: "Industry Council Delegations",
          desc: "We organise multi-company business delegations representing Indian industry bodies visiting Latin America, and Latin American chambers visiting India.",
          bullets: [
            "Delegation composition advisory",
            "Engagement with major trade chambers",
            "B2B meetings with local counterparts",
            "Embassy briefings and trade intelligence sessions",
            "Delegation reports and action plans",
          ],
        },
        {
          num: "3.3",
          title: "C-Suite & Executive Visits",
          desc: "For senior executives evaluating investment or partnership decisions, we design bespoke visit programmes tailored to strategic objectives.",
          bullets: [
            "Customised 2–5 day executive itineraries",
            "Introductions to C-suite peers",
            "Investment site & factory facility visits",
            "Government briefings on investment climate",
            "Curated social and cultural programmes",
          ],
        },
      ],
    },
    {
      id: "04",
      title: "Intelligence & Advocacy",
      tagline: "Providing strategic intelligence and representing business interests with governments",
      icon: <FaLandmark />,
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
      overview:
        "Business decisions are only as good as the intelligence behind them. And in a corridor as vast and diverse as India–Latin America, policy changes, regulatory shifts, and government priorities move fast. We keep our members and partners ahead of the curve.",
      subServices: [
        {
          num: "4.1",
          title: "Market Intelligence & Research",
          desc: "We produce and commission research on bilateral trade, investment trends, sector outlooks, and regulatory developments.",
          bullets: [
            "Bilateral trade data analysis",
            "Sector intelligence reports",
            "Updated country entry guides",
            "Competitor landscape mapping",
            "Quarterly business outlook briefings",
          ],
        },
        {
          num: "4.2",
          title: "Policy Monitoring & Updates",
          desc: "We track changes across all major Latin American markets and India regarding trade policy, investment rules, and tariff schedules.",
          bullets: [
            "Real-time monitoring of FTA developments",
            "Investment regulation updates",
            "Labour law and compliance environment updates",
            "Multilateral treaty monitoring",
            "Monthly policy newsletters for members",
          ],
        },
        {
          num: "4.3",
          title: "Government Representation",
          desc: "When business interests need to be represented before government — on trade barriers or bilateral agreements — we are the institutional voice.",
          bullets: [
            "Representation in Joint Economic Commissions",
            "Submission of industry positions to ministries",
            "Engagement with trade & investment agencies",
            "Advocacy on tariff anomalies and visa issues",
            "Participation in global business forums",
          ],
        },
      ],
    },
  ];

  return (
    <div className="bg-[#F4F0EA] text-[#3E443C] font-sans selection:bg-[#8A9A86] selection:text-white pt-20">
      
      {/* --- HERO SECTION --- */}
      <section className="relative py-32 px-4 flex items-center justify-center min-h-[50vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80" 
            alt="Services Background" 
            className="w-full h-full object-cover grayscale-[30%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#3E443C]/90 via-[#3E443C]/80 to-[#5b5956]" />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="relative z-10 max-w-5xl mx-auto text-center"
        >
          <span className="inline-block px-4 py-1.5 border border-[#8A9A86]/50 bg-[#8A9A86]/20 backdrop-blur-md text-[#F4F0EA] font-bold tracking-[0.2em] uppercase text-xs mb-6 rounded-full">
            Our Expertise
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-white leading-tight">
            Structured Engagement. <br className="hidden md:block" />
            <span className="italic text-[#8A9A86]">Verified Outcomes.</span>
          </h1>
          <div className="w-16 h-[2px] bg-[#8A9A86] mx-auto mt-8 mb-8" />
          <p className="text-lg md:text-xl text-[#DCE0D9] leading-relaxed font-light max-w-3xl mx-auto">
            From intelligence and advocacy to end-to-end investment execution, LABC provides the institutional support required to navigate the India–Latin America corridor.
          </p>
        </motion.div>
      </section>

      {/* --- DATA CALLOUT STRIP --- */}
      <section className="bg-[#EAE6DB] border-b border-[#D4D0C5] py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
            <FaGlobeAmericas className="text-3xl text-[#8A9A86]" />
            <h3 className="text-xl md:text-2xl font-serif text-[#3E443C] tracking-wide">
              Powering <strong className="font-bold text-[#8A9A86]">USD 39 Billion</strong> in Bilateral Trade across 43 Nations
            </h3>
          </motion.div>
        </div>
      </section>

      {/* --- BENTO CARD SECTORS LISTING (Fixing Height & Alignment) --- */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto space-y-24">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col border border-[#E6E2D6]"
            >
              
              {/* TOP HALF: Split Image & Dark High-Contrast Intro */}
              <div className="flex flex-col lg:flex-row h-auto lg:min-h-[500px]">
                
                {/* Image Section (Flex child automatically matches height of adjacent content) */}
                <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-full overflow-hidden group">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  {/* Floating Icon Pill */}
                  <div className="absolute top-6 left-6 bg-[#3E443C]/80 backdrop-blur-md px-5 py-3 rounded-full border border-white/10 text-white font-bold tracking-widest text-sm flex items-center shadow-lg">
                    {service.icon} <span className="ml-3 uppercase">{service.title}</span>
                  </div>
                  {/* Giant Watermark ID */}
                  <div className="absolute -bottom-6 -left-4 text-[140px] font-serif font-black text-white/30 leading-none pointer-events-none drop-shadow-md">
                    {service.id}
                  </div>
                </div>

                {/* Dark Intro Box */}
                <div className="w-full lg:w-1/2 bg-[#3E443C] p-8 md:p-12 lg:p-16 flex flex-col justify-center text-white relative overflow-hidden">
                  {/* Subtle Grid Pattern Overlay */}
                  <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#8A9A86_1px,transparent_1px),linear-gradient(to_bottom,#8A9A86_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                  
                  <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl font-serif mb-6 leading-tight">
                      Service Overview
                    </h2>
                    <p className="text-[#B6C3B1] font-light leading-relaxed mb-10 text-[17px]">
                      {service.overview}
                    </p>
                    
                    {/* The Objective Box inside Dark Theme */}
                    <div className="bg-[#4F564D] p-6 rounded-2xl border border-[#5B6358] shadow-inner">
                      <h4 className="text-xs font-bold text-[#8A9A86] uppercase tracking-[0.15em] mb-3 flex items-center">
                        <FaGlobeAmericas className="mr-2 text-lg" /> The Objective
                      </h4>
                      <p className="text-sm font-light leading-relaxed text-[#DCE0D9]">
                        {service.tagline}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* BOTTOM HALF: Dynamic Grid to force equal heights */}
              <div 
                className={`grid grid-cols-1 md:grid-cols-2 ${service.subServices.length === 3 ? 'xl:grid-cols-3' : 'xl:grid-cols-2'} gap-[1px] bg-[#E6E2D6]`}
              >
                {service.subServices.map((sub, i) => (
                  <div 
                    key={i} 
                    className="bg-white p-8 md:p-12 flex flex-col h-full hover:bg-[#F4F0EA]/50 transition-colors duration-300 group"
                  >
                    <div className="flex items-center mb-6">
                      <span className="text-[#8A9A86] font-bold tracking-widest mr-4 text-sm shrink-0">
                        {sub.num}
                      </span>
                      <h3 className="text-2xl font-serif text-[#3E443C] font-bold group-hover:text-[#8A9A86] transition-colors">
                        {sub.title}
                      </h3>
                    </div>
                    
                    <p className="text-[#5B6358] font-light leading-relaxed mb-8 text-[15px]">
                      {sub.desc}
                    </p>
                    
                    <ul className="space-y-4 mb-8">
                      {sub.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start text-[#5B6358] font-light text-[14px] leading-relaxed">
                          <FaCheck className="text-[#8A9A86] mt-1.5 mr-3 text-xs shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* mt-auto pushes the button to the absolute bottom perfectly */}
                    <button className="mt-auto flex items-center space-x-2 text-[#3E443C] font-bold text-xs tracking-[0.2em] uppercase hover:text-[#8A9A86] transition-colors w-max">
                      <span>Request this Service</span>
                      <FaArrowRight />
                    </button>
                  </div>
                ))}
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
            Ready to initiate your <span className="italic text-[#8A9A86]">expansion?</span>
          </h2>
          <p className="text-[#B6C3B1] font-light text-lg mb-10">
            Speak with our secretariat to customize an engagement plan for your business.
          </p>
          <button className="px-10 py-4 bg-[#8A9A86] text-white font-bold text-xs tracking-[0.2em] uppercase hover:bg-[#F4F0EA] hover:text-[#3E443C] transition-colors duration-300 shadow-xl rounded-full">
            Contact Us Today
          </button>
        </motion.div>
      </section>
      
    </div>
  );
}