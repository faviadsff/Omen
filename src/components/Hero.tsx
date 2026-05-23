import { useState } from "react";
import { Play, Sparkles, Film, ArrowDown, Aperture, Eye } from "lucide-react";

interface HeroProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Hero({ onScrollTo }: HeroProps) {
  // Ultra-crafted interactive film styling states
  const [activeVisualTone, setActiveVisualTone] = useState<"obsidian" | "silver">("obsidian");
  const [grainActive, setGrainActive] = useState(true);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen pt-36 pb-16 flex flex-col justify-center items-center px-4 overflow-hidden border-b border-white/10"
    >
      {/* Dynamic Cinematic Grain Overlay */}
      {grainActive && (
        <div className="absolute inset-0 pointer-events-none opacity-[0.04] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-200 via-zinc-900 to-black z-10" />
      )}

      {/* Decorative high-contrast ambient glow lines */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-20">
        
        {/* Left Content Side */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
          
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-black border border-white/20 text-zinc-300 text-[9px] uppercase font-mono tracking-[0.2em] rounded-none">
            <span className="w-1.5 h-1.5 bg-white animate-pulse" />
            Omen Picture LLC • Agência Criativa Estrita
          </div>

          {/* Typography Display (High-Contrast Poster Minimalist) */}
          <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-[84px] tracking-tighter leading-[0.85] text-white uppercase">
            SOBERANIA<br />
            <span className="text-black bg-white px-4 -ml-4 my-2 inline-block font-black select-none">VISUAL</span><br />
            DEFINIDA
          </h1>

          <p className="max-w-lg text-zinc-300 text-sm md:text-base font-light leading-relaxed">
            De campanhas de mídias de alto tráfego a produções cinematográficas exclusivas. Criamos caminhos estéticos disruptivos que convertem de verdade. O absoluto preto e branco da excelência de marketing.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap gap-4 mt-2">
            <button
              onClick={() => onScrollTo("contact")}
              className="px-6 py-3.5 bg-white text-black text-xs font-black uppercase tracking-[0.2em] hover:bg-zinc-200 transition-all duration-300 flex items-center gap-2 cursor-pointer rounded-none border border-white"
              id="hero-primary-cta"
            >
              Iniciar Projeto
              <Play className="w-3 h-3 fill-black text-black" />
            </button>
            <button
              onClick={() => onScrollTo("services")}
              className="px-6 py-3.5 bg-black border border-white/20 text-xs font-semibold uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black transition-all duration-300 cursor-pointer rounded-none"
              id="hero-secondary-cta"
            >
              Explorar Serviços
            </button>
          </div>

          {/* Trust indicators/stats in visual pills */}
          <div className="flex items-center gap-6 mt-6 border-t border-white/10 pt-6 w-full">
            <div>
              <p className="font-mono text-xl font-black text-white tracking-widest">10+</p>
              <p className="text-[10px] uppercase font-mono tracking-wider text-zinc-500">Anos de Domínio</p>
            </div>
            <div className="h-8 w-[1px] bg-white/10" />
            <div>
              <p className="font-mono text-xl font-black text-white tracking-widest">800+</p>
              <p className="text-[10px] uppercase font-mono tracking-wider text-zinc-500">Filmes Dirigidos</p>
            </div>
            <div className="h-8 w-[1px] bg-white/10" />
            <div>
              <p className="font-mono text-xl font-black text-white tracking-widest">2.5X</p>
              <p className="text-[10px] uppercase font-mono tracking-wider text-zinc-500">Taxa de Conversão Média</p>
            </div>
          </div>

        </div>

        {/* Right Graphic/Interactive Camera Box Side */}
        <div className="lg:col-span-5 relative flex flex-col items-center">
          
          <div 
            className={`w-full max-w-sm aspect-3/4 overflow-hidden border transition-all duration-500 relative group shadow-2xl rounded-none ${
              activeVisualTone === "obsidian" 
                ? "border-white/20 bg-black shadow-black" 
                : "border-white/40 bg-zinc-950 shadow-black"
            }`}
            id="interactive-visual-box"
          >
            {/* Grayscale Film Photo */}
            <img 
              src="https://images.unsplash.com/photo-1542204172-e7052809f852?auto=format&fit=crop&q=80&w=800"
              alt="Omen Picture Studio Art Director"
              className={`w-full h-full object-cover transition-all duration-700 ${
                activeVisualTone === "obsidian" 
                  ? "grayscale contrast-125 brightness-75 scale-100" 
                  : "grayscale brightness-90 contrast-100 scale-102"
              }`}
              referrerPolicy="no-referrer"
            />

            {/* Cinematic Gradient Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 pointer-events-none" />

            {/* Holographic Interactive Branding Widgets */}
            <div className="absolute top-4 right-4 bg-black/90 backdrop-blur-md border border-white/20 py-1.5 px-3 flex items-center gap-1.5 rounded-none">
              <Aperture className="w-3.5 h-3.5 text-zinc-400 animate-spin-slow" />
              <span className="font-mono text-[9px] text-zinc-300 tracking-[0.1em]">LENS: OMEN 50MM</span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 p-5 bg-black/95 border border-white/20 backdrop-blur-md flex flex-col gap-1 text-left rounded-none">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] tracking-[0.2em] text-zinc-400 uppercase">Câmera Ativa</span>
                <span className="w-2.5 h-2.5 bg-white animate-pulse" />
              </div>
              <p className="font-display font-black text-sm text-white uppercase tracking-[0.1em]">FILM ADVERTISING UNIT</p>
              <p className="text-[10px] text-zinc-400 font-light mt-1">
                Estratégias de imagem bruta e som direcionado que fixam sua marca na memória dos clientes.
              </p>
            </div>
          </div>

          {/* Interactive Styling Dashboard */}
          <div className="w-full max-w-sm mt-4 bg-black border border-white/10 rounded-none p-4 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-[0.2em] flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-white" />
                Painel Visual Interativo
              </span>
              <button
                onClick={() => setGrainActive(!grainActive)}
                className={`font-mono text-[9px] px-2 py-0.5 border uppercase transition-colors rounded-none ${
                  grainActive 
                    ? "bg-white text-black border-white" 
                    : "text-zinc-500 border-white/20 hover:text-white"
                }`}
                id="toggle-grain"
              >
                Grão: {grainActive ? "ATIVO" : "DESATIVADO"}
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button
                onClick={() => setActiveVisualTone("obsidian")}
                className={`py-2 px-3 border flex items-center justify-center gap-2 transition-all cursor-pointer uppercase font-mono text-[10px] rounded-none ${
                  activeVisualTone === "obsidian"
                    ? "bg-white text-black font-bold border-white"
                    : "bg-transparent text-zinc-400 border-white/10 hover:text-white"
                }`}
                id="tone-obsidian"
              >
                <div className="w-2.5 h-2.5 bg-zinc-950 border border-zinc-700" />
                Noir Profundo
              </button>
              <button
                onClick={() => setActiveVisualTone("silver")}
                className={`py-2 px-3 border flex items-center justify-center gap-2 transition-all cursor-pointer uppercase font-mono text-[10px] rounded-none ${
                  activeVisualTone === "silver"
                    ? "bg-white text-black font-bold border-white"
                    : "bg-transparent text-zinc-400 border-white/10 hover:text-white"
                }`}
                id="tone-silver"
              >
                <div className="w-2.5 h-2.5 bg-zinc-300 border border-zinc-100" />
                Prata Suave
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Bounce Down Arrow */}
      <button 
        onClick={() => onScrollTo("services")}
        className="mt-12 text-zinc-500 hover:text-white transition-colors animate-bounce flex flex-col items-center gap-2 cursor-pointer focus:outline-none"
        id="scroll-down-arrow"
      >
        <span className="font-mono text-[9px] tracking-widest uppercase">Descer</span>
        <ArrowDown className="w-4 h-4" />
      </button>
    </section>
  );
}
