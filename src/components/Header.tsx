import { useState, useEffect } from "react";
import { Camera, Film, Menu, X, ArrowUpRight } from "lucide-react";

interface HeaderProps {
  onScrollTo: (sectionId: string) => void;
  activeSection: string;
}

export default function Header({ onScrollTo, activeSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", label: "Início" },
    { id: "services", label: "Serviços" },
    { id: "projects", label: "Projetos" },
    { id: "calculator", label: "Calculadora ROI" },
    { id: "team", label: "Time" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-0 py-0">
      <div 
        className={`w-full transition-all duration-300 border-b border-white/10 bg-black/90 backdrop-blur-md px-6 md:px-12 py-4 flex items-center justify-between ${
          scrolled ? "shadow-2xl shadow-black/80 border-white/20 py-3" : ""
        }`}
        id="nav-container"
      >
        {/* Logo / Brand Name */}
        <button 
          onClick={() => onScrollTo("hero")}
          className="flex flex-col text-left group cursor-pointer focus:outline-none"
          id="logo-button"
        >
          <h1 className="text-xl md:text-2xl font-black tracking-tighter leading-none text-white">
            OMEN<br/>PICTURE
          </h1>
          <span className="text-[8px] tracking-[0.35em] uppercase opacity-60 mt-1 block">
            MARKETING LLC
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onScrollTo(item.id)}
              className={`text-[10px] font-medium uppercase tracking-[0.2em] transition-all duration-200 cursor-pointer ${
                activeSection === item.id
                  ? "text-white border-b border-white pb-1"
                  : "text-zinc-400 hover:text-white pb-1 border-b border-transparent"
              }`}
              id={`nav-item-${item.id}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button
            onClick={() => onScrollTo("contact")}
            className="flex items-center gap-1.5 px-6 py-2.5 bg-white text-black text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-zinc-200 transition-all duration-300 cursor-pointer rounded-none"
            id="header-cta"
          >
            Fazer Briefing
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1 text-zinc-405 hover:text-white focus:outline-none"
            id="mobile-menu-trigger"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-black border-b border-white/20 p-8 shadow-2xl z-40">
          <div className="flex flex-col gap-5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onScrollTo(item.id);
                  setIsOpen(false);
                }}
                className={`text-left py-2 font-display text-xs uppercase tracking-[0.2em] border-b border-zinc-900 pb-2 cursor-pointer ${
                  activeSection === item.id ? "text-white font-bold" : "text-zinc-500"
                }`}
                id={`mobile-nav-${item.id}`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                onScrollTo("contact");
                setIsOpen(false);
              }}
              className="mt-2 w-full text-center py-3.5 bg-white text-black text-[10px] font-bold uppercase tracking-[0.2em] transition-colors hover:bg-zinc-200 cursor-pointer rounded-none"
              id="mobile-nav-cta"
            >
              Fazer Briefing
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
