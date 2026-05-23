import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import InteractiveServices from "./components/InteractiveServices";
import CaseStudies from "./components/CaseStudies";
import ROICalculator from "./components/ROICalculator";
import Team from "./components/Team";
import InquiryForm from "./components/InquiryForm";
import Footer from "./components/Footer";
import { Sparkles, Film, ArrowUpRight, ChevronRight, Check } from "lucide-react";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");

  // Smooth scroll logic triggering offsets
  const handleScrollTo = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth"
      });
      setActiveSection(sectionId);
    }
  };

  // Keep section triggers current under active scroll movements
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      const sections = ["hero", "services", "projects", "calculator", "team", "contact"];
      
      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-white selection:text-black font-sans relative">
      
      {/* Decorative Blueprint Corner Markers for high-fidelity luxury branding */}
      <div className="fixed top-4 left-4 font-mono text-[8px] text-zinc-700 tracking-widest uppercase z-40 select-none max-md:hidden">
        SYS.LOC: 23°S / 46°W
      </div>
      <div className="fixed bottom-4 left-4 font-mono text-[8px] text-zinc-700 tracking-widest uppercase z-40 select-none max-md:hidden">
        OMEN DESIGN UNIT
      </div>
      <div className="fixed top-4 right-4 font-mono text-[8px] text-zinc-700 tracking-widest uppercase z-40 select-none max-md:hidden">
        SCALE INDEX: NOIR
      </div>
      <div className="fixed bottom-4 right-4 font-mono text-[8px] text-zinc-700 tracking-widest uppercase z-40 select-none max-md:hidden">
        VER: 2026.05.23
      </div>

      {/* Embedded capsule menu header */}
      <Header onScrollTo={handleScrollTo} activeSection={activeSection} />

      {/* Main Sections Body */}
      <main>
        
        {/* Hero Visual Landing card */}
        <Hero onScrollTo={handleScrollTo} />

        {/* Dynamic statistics section */}
        <Stats />

        {/* Bento grid Interactive Services list */}
        <InteractiveServices />

        {/* Custom Category filtered Case Studies with Lightbox analysis */}
        <CaseStudies />

        {/* Fully operational simulated ROI Marketing Calculator */}
        <ROICalculator />

        {/* Staff team grid with Spotlight Philosophy display overlay */}
        <Team />

        {/* Multi-step lead planning Brief builder form */}
        <InquiryForm />

      </main>

      {/* Structured Footer */}
      <Footer />

    </div>
  );
}
