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
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&w=1600&q=80",
      overview:
        "The India–Latin America Business Council helps companies navigate the full investment journey — from the first feasibility question to operational launch. Whether you are an Indian company entering Brazil, Colombia, Chile, or Argentina, or a Latin American company entering India, we provide the institutional support to make it happen.",
      subServices: [
        {
          num: "1.1",
          title: "Market Entry & Feasibility Assessment",
          desc: "Before committing capital, companies need clarity on opportunity size, competitive landscape, regulatory environment, and cost structures. We conduct structured feasibility assessments to answer the critical entry questions.",
          bullets: [
            "Country-level feasibility studies — market sizing, competitive benchmarking, demand analysis",
            "Regulatory landscape mapping — entry requirements, foreign investment rules, licensing",
            "Cost modelling and investment threshold analysis",
            "Risk assessment — political, currency, operational",
            "Go / No-go recommendation with a structured entry roadmap",
          ],
        },
        {
          num: "1.2",
          title: "Location Strategy & Site Selection",
          desc: "Choosing the right city, state, or industrial zone is one of the most consequential investment decisions. We provide data-backed location intelligence to help companies identify the most competitive site.",
          bullets: [
            "State-by-state and city-level location analysis across Latin American countries",
            "Industrial park and SEZ (Special Economic Zone) mapping",
            "Incentive mapping — tax holidays, land subsidies, export incentives offered by state governments",
            "Infrastructure assessment — logistics, utilities, port connectivity, talent availability",
            "Site visits and government introductions in shortlisted locations",
          ],
        },
        {
          num: "1.3",
          title: "Entity Setup & Regulatory Navigation",
          desc: "Setting up a legal entity in a new country involves navigating incorporation law, tax registration, labour compliance, and sector-specific licensing. We manage this process end-to-end.",
          bullets: [
            "Legal entity selection — subsidiary, branch, JV, liaison office — with pros and cons for each",
            "Coordination with local legal and accounting advisors for incorporation",
            "Tax registration, employer registration, and sector-specific licensing",
            "Regulatory interface with investment promotion agencies — Invest India, ProChile, ProColombia, CAINCO, etc.",
            "Post-incorporation compliance setup — banking, HR, import-export codes",
          ],
        },
        {
          num: "1.4",
          title: "Launch Execution & Operational Setup",
          desc: "After entity setup, companies need to activate operations quickly. We support the first 90-180 days of operational establishment — from hiring to supply chain activation.",
          bullets: [
            "Talent onboarding — introduction to local HR firms, hiring networks, salary benchmarking",
            "Office/facility search and lease negotiation support",
            "Supply chain identification — local vendors, raw material sourcing, logistics partners",
            "Banking and financial services introduction",
            "Initial government liaison — customs, trade licences, environmental clearances",
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
        "India–Latin America bilateral trade reached USD 39 billion in FY 2024–25 — but is widely acknowledged to be well below its potential. The India–Latin America Business Council bridges this gap by actively connecting exporters, importers, buyers, and suppliers across the corridor.",
      subServices: [
        {
          num: "2.1",
          title: "Buyer-Seller Matchmaking",
          desc: "One of the most direct and effective services we offer is personalised, pre-qualified B2B matchmaking between Indian companies and Latin American buyers, distributors, and partners — and vice versa.",
          bullets: [
            "Pre-qualified buyer/seller identification based on sector and product profile",
            "Introductory meetings — in-person during delegations or virtual year-round",
            "Background screening and company profiling before introductions",
            "Follow-up support to convert introductions into active commercial relationships",
            "Sector-focused matchmaking rounds — IT, pharma, agri, auto-components, textiles, energy",
          ],
        },
        {
          num: "2.2",
          title: "Trade Missions & Delegations",
          desc: "We organise and anchor trade missions in both directions — Indian companies visiting Latin America and Latin American companies visiting India. Every mission is curated, not generic.",
          bullets: [
            "End-to-end trade mission organisation — itinerary, meetings, logistics, translation",
            "Government and institutional meeting facilitation — ministries, embassies, investment agencies",
            "Factory and facility visits in both directions",
            "Sector-specific delegation programs — one sector, one mission, deep engagement",
            "Post-mission follow-up coordination and deal-tracking",
          ],
        },
        {
          num: "2.3",
          title: "Export Promotion & Market Access",
          desc: "For companies exporting into Latin America or India for the first time, we provide structured market access support — from understanding import regulations to identifying the first buyer.",
          bullets: [
            "Import regulation and tariff analysis for target markets",
            "Distributor and agent identification in target countries",
            "Participation facilitation in Latin American and Indian trade fairs and expos",
            "Export documentation and logistics advisory — customs, HS codes, certification requirements",
            "Introduction to trade finance — EXIM Bank India, CAF, IDB financing windows",
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
          title: "Government & Ministerial Programmes",
          desc: "We facilitate official government-to-government delegations between India and Latin American nations — coordinating ministerial agendas, institutional meetings, and outcomes documentation.",
          bullets: [
            "Agenda design for ministerial and senior official visits",
            "Institutional meeting facilitation — ministry of commerce, industry, finance, foreign affairs",
            "MoU drafting support and signing ceremony coordination",
            "Media and communications coordination for official visits",
            "Post-visit outcomes tracking and implementation follow-up",
          ],
        },
        {
          num: "3.2",
          title: "Business & Industry Council Delegations",
          desc: "We organise multi-company business delegations representing Indian industry bodies visiting Latin America, and Latin American chambers visiting India — structured for maximum deal-making.",
          bullets: [
            "Delegation composition advisory — right mix of sectors and company sizes",
            "CII, FICCI, ASSOCHAM, CPC, CAINCO, Fiesp engagement for delegation partnership",
            "B2B meetings with local counterpart companies and industry bodies",
            "Embassy briefings and trade intelligence sessions at both ends",
            "Delegation reports and follow-up action plans",
          ],
        },
        {
          num: "3.3",
          title: "Executive Site Visits & C-Suite Programmes",
          desc: "For senior executives evaluating investment or partnership decisions, we design bespoke visit programmes — factory tours, government meetings, investment site visits, and roundtables.",
          bullets: [
            "Customised 2–5 day executive visit itineraries",
            "Introductions to C-suite peers in target companies",
            "Investment site visits — industrial parks, SEZs, factory facilities",
            "Government briefings — investment climate, sector policy, incentives",
            "Social and cultural programme — relationship building beyond the boardroom",
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
          desc: "We produce and commission research on bilateral trade, investment trends, sector outlooks, and regulatory developments — giving our members current, actionable intelligence.",
          bullets: [
            "Bilateral trade data analysis — sector-wise, country-wise, trend-wise",
            "Sector intelligence reports — IT, pharma, energy, agri, auto, minerals",
            "Country entry guides — updated regulatory, tax, and investment environment summaries",
            "Competitor mapping — who is already present in your target market and how",
            "Quarterly India–Latin America business outlook briefings",
          ],
        },
        {
          num: "4.2",
          title: "Policy Monitoring & Regulatory Updates",
          desc: "Trade policy, investment rules, tariff schedules, and sector regulations change. We track these changes across all major Latin American markets and India, and alert members to what matters.",
          bullets: [
            "Real-time monitoring of trade policy, FTA developments, and tariff changes",
            "Investment regulation updates — FDI rules, sectoral caps, repatriation policies",
            "Labour law, tax, and compliance environment updates",
            "Pacific Alliance, MERCOSUR, and bilateral treaty monitoring",
            "Monthly policy newsletters for members",
          ],
        },
        {
          num: "4.3",
          title: "Government Advocacy & Representation",
          desc: "When business interests need to be represented before government — on trade barriers, investment facilitation, policy design, or bilateral agreements — we are the institutional voice.",
          bullets: [
            "Representation in bilateral Joint Economic Commissions (JECs) and trade talks",
            "Submission of industry positions to Indian Ministry of Commerce & MEA",
            "Engagement with Latin American trade ministries and investment agencies",
            "Advocacy on specific barriers — tariff anomalies, certification issues, visa facilitation",
            "Participation in G20, Pacific Alliance, and MERCOSUR business engagement forums",
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
          <div className="absolute inset-0 bg-gradient-to-b from-[#3E443C]/90 via-[#3E443C]/80 to-[#F4F0EA]" />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="relative z-10 max-w-5xl mx-auto text-center"
        >
          <span className="inline-block px-4 py-1.5 border border-[#8A9A86]/50 bg-[#8A9A86]/20 backdrop-blur-md text-[#B6C3B1] font-bold tracking-[0.2em] uppercase text-xs mb-6 rounded-full">
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

      {/* --- SERVICES MAIN LISTING (SPLIT EDITORIAL LAYOUT) --- */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto space-y-32">
          {servicesData.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={service.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="relative"
              >
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-start`}>
                  
                  {/* --- STICKY IMAGE COLUMN --- */}
                  <div className="w-full lg:w-5/12 relative">
                    <div className="lg:sticky lg:top-32 relative h-[500px] lg:h-[650px] group">
                      {/* Giant Number Watermark */}
                      <div className={`absolute -top-12 ${isEven ? '-left-8' : '-right-8'} text-[120px] md:text-[180px] font-serif font-bold text-[#EAE6DB] opacity-80 z-0 pointer-events-none leading-none select-none`}>
                        {service.id}
                      </div>
                      
                      {/* Image Box */}
                      <motion.div variants={fadeUp} className="relative z-10 w-full h-full overflow-hidden shadow-lg border border-[#E6E2D6]">
                        <img 
                          src={service.image} 
                          alt={service.title} 
                          className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 grayscale-[15%]"
                        />
                        <div className="absolute inset-0 bg-[#3E443C]/10 mix-blend-multiply transition-colors duration-500 group-hover:bg-transparent"></div>
                      </motion.div>
                    </div>
                  </div>

                  {/* --- CONTENT COLUMN --- */}
                  <div className="w-full lg:w-7/12 flex flex-col pt-4 lg:pt-8 z-10">
                    
                    {/* Header */}
                    <motion.div variants={fadeUp} className="mb-10">
                      <div className="flex items-center space-x-5 mb-6">
                        <div className="w-14 h-14 bg-[#8A9A86]/10 text-[#8A9A86] flex items-center justify-center text-2xl rounded-full shadow-sm">
                          {service.icon}
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif text-[#3E443C] font-bold">
                          {service.title}
                        </h2>
                      </div>
                      <p className="text-xl font-serif italic text-[#8A9A86] mb-6">
                        "{service.tagline}"
                      </p>
                      <p className="text-lg text-[#5B6358] font-light leading-relaxed">
                        {service.overview}
                      </p>
                    </motion.div>

                    {/* Sub-Services Bento Cards */}
                    <div className="space-y-8">
                      {service.subServices.map((sub, i) => (
                        <motion.div 
                          key={i} 
                          variants={fadeUp} 
                          className="bg-white border border-[#E6E2D6] p-8 md:p-10 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group"
                        >
                          {/* Accent Line on Hover */}
                          <div className="absolute top-0 left-0 w-full h-1 bg-[#8A9A86] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                          
                          <div className="flex flex-col md:flex-row md:items-baseline mb-4">
                            <span className="text-[#8A9A86] font-bold tracking-widest mr-4 mb-2 md:mb-0 text-sm">
                              {sub.num}
                            </span>
                            <h3 className="text-2xl font-serif text-[#3E443C] font-bold">
                              {sub.title}
                            </h3>
                          </div>
                          
                          <p className="text-[#5B6358] font-light leading-relaxed mb-6 text-base">
                            {sub.desc}
                          </p>
                          
                          <ul className="space-y-4 border-t border-[#F4F0EA] pt-6 mb-8">
                            {sub.bullets.map((bullet, idx) => (
                              <li key={idx} className="flex items-start text-[#5B6358] font-light text-[15px] leading-relaxed">
                                <FaCheck className="text-[#8A9A86] mt-1.5 mr-4 text-xs shrink-0" />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>

                          {/* CTA Button per sub-service as requested */}
                          <button className="flex items-center space-x-2 text-[#3E443C] font-bold text-xs tracking-[0.2em] uppercase hover:text-[#8A9A86] transition-colors">
                            <span>Request this Service</span>
                            <FaArrowRight />
                          </button>

                        </motion.div>
                      ))}
                    </div>

                  </div>
                </div>

                {/* Divider for next service */}
                {index !== servicesData.length - 1 && (
                  <div className="w-full h-[1px] bg-[#D4D0C5] mt-24 lg:mt-32 opacity-50" />
                )}
              </motion.div>
            );
          })}
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