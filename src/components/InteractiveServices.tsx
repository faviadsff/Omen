import { useState } from "react";
import { SERVICES } from "../data";
import { ArrowRight, CheckCircle2, Award, ArrowUpRight } from "lucide-react";

export default function InteractiveServices() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeService = SERVICES[selectedIdx];

  return (
    <section id="services" className="py-24 bg-black text-white relative border-b border-white/10">
      
      {/* Structural layout border lines */}
      <div className="absolute top-0 left-[10%] w-[1px] h-full bg-white/5 max-md:hidden" />
      <div className="absolute top-0 right-[10%] w-[1px] h-full bg-white/5 max-md:hidden" />

      <div className="max-w-6xl w-full mx-auto px-4 relative z-10">
        
        {/* Section Heading */}
        <div className="text-left mb-16 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black border border-white/20 text-zinc-300 text-[9px] uppercase font-mono tracking-[0.2em] rounded-none mb-4">
            <span className="w-1.5 h-1.5 bg-white" />
            Nossos Serviços
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tighter uppercase leading-none">
            Marketing Operacional de <br />
            <span className="text-black bg-white px-3 py-0.5 ml-[-4px] font-black inline-block mt-2 font-display">Alta Performance</span>
          </h2>
          <p className="text-zinc-400 text-sm mt-4">
            Eliminamos palpites e aplicamos refinamento estético estrito combinado com engenharia de conversão de dados. Clique em cada especialidade para entender nosso fluxo de entrega.
          </p>
        </div>

        {/* Core Layout: Left List, Right Dynamic Preview Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Services Rows Side */}
          <div className="lg:col-span-6 flex flex-col w-full gap-3">
            {SERVICES.map((srv, idx) => {
              const worksAsSelected = selectedIdx === idx;
              return (
                <button
                  key={srv.id}
                  onClick={() => setSelectedIdx(idx)}
                  className={`w-full text-left p-6 rounded-none border transition-all duration-300 group flex items-start justify-between cursor-pointer focus:outline-none ${
                    worksAsSelected
                      ? "bg-white text-black border-white shadow-2xl"
                      : "bg-black text-zinc-300 border-white/10 hover:border-white/20 hover:bg-white/[0.02]"
                  }`}
                  id={`service-button-${idx}`}
                >
                  <div className="flex gap-4 items-start">
                    {/* Big Number */}
                    <span className={`font-mono text-xs uppercase font-extrabold tracking-widest ${
                      worksAsSelected ? "text-zinc-500" : "text-zinc-600"
                    }`}>
                      {srv.num}
                    </span>

                    {/* Meta info */}
                    <div>
                      <h3 className="font-display font-bold text-base md:text-lg tracking-tight uppercase">
                        {srv.title}
                      </h3>
                      <p className={`text-xs mt-1 transition-colors ${
                        worksAsSelected ? "text-zinc-700" : "text-zinc-500 line-clamp-1"
                      }`}>
                        {srv.description}
                      </p>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className={`w-8 h-8 rounded-none border flex items-center justify-center transition-all duration-300 ${
                    worksAsSelected
                      ? "bg-black text-white border-black rotate-45"
                      : "bg-transparent text-zinc-500 border-white/10 group-hover:text-white group-hover:border-white/20 group-hover:translate-x-1"
                  }`}>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Preview Showcase Side */}
          <div className="lg:col-span-6 w-full lg:sticky lg:top-28">
            <div 
              className="w-full bg-black border border-white/10 rounded-none p-6 md:p-8 relative overflow-hidden text-left"
              id="service-preview-panel"
            >
              {/* Artistic Grid Decor */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:12px_12px] opacity-[0.05] pointer-events-none" />

              {/* Service Visual Preview Header */}
              <div className="relative w-full aspect-2/1 rounded-none overflow-hidden mb-6 border border-white/10">
                <img 
                  src={activeService.image} 
                  alt={activeService.title} 
                  className="w-full h-full object-cover grayscale contrast-125 brightness-75 scale-100 hover:scale-105 duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Float Indicator Badge (Monochrome) */}
                <div className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 bg-black/90 border border-white/20 text-white text-[9px] uppercase font-mono tracking-widest rounded-none">
                  <Award className="w-3 h-3 text-zinc-400" />
                  Performance Validada
                </div>
              </div>

              {/* Header Title inside Preview */}
              <div className="flex flex-col gap-2 mb-4">
                <span className="font-mono text-[10px] uppercase text-zinc-500 tracking-[0.2em]">
                  Especificação Técnica • {activeService.num}
                </span>
                <h4 className="font-display font-black text-xl md:text-2xl text-white uppercase tracking-tight">
                  {activeService.title}
                </h4>
              </div>

              <p className="text-sm text-zinc-300 font-light leading-relaxed mb-6">
                {activeService.description}
              </p>

              {/* Custom Metrics Counter card inside preview */}
              <div className="p-4 rounded-none bg-black border border-white/15 flex items-center justify-between mb-6">
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-zinc-500 block">
                    Métrica de Impacto Histórico
                  </span>
                  <span className="text-white font-display text-sm md:text-base font-semibold block mt-0.5">
                    {activeService.metrics}
                  </span>
                </div>
                <div className="px-3 py-1 rounded-none bg-zinc-950 border border-white/10 font-mono text-[9px] tracking-wider text-zinc-400 uppercase">
                  Auditoria Omen
                </div>
              </div>

              {/* Deliverables Checklist list */}
              <div>
                <span className="font-mono text-[10px] uppercase text-zinc-450 tracking-wider block mb-3">
                  O que está incluso no escopo:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeService.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-zinc-300 text-xs">
                      <div className="w-1.5 h-1.5 bg-white shrink-0" />
                      <span className="font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Dynamic Horizontal Cross Ticker */}
        <div className="mt-24 border-y border-white/10 py-6 overflow-hidden w-full relative">
          <div className="ticker-wrap">
            <div className="ticker-content flex gap-8 items-center text-zinc-400 text-sm font-display uppercase tracking-widest font-light">
              <span>Omen Picture LLC</span>
              <span className="text-white">•</span>
              <span className="font-bold text-white tracking-widest">Inovação Radical</span>
              <span className="text-white">•</span>
              <span>Cinema Noir</span>
              <span className="text-white">•</span>
              <span className="font-bold text-white tracking-widest">Faturamento Premium</span>
              <span className="text-white">•</span>
              <span>Escalar Marcas</span>
              <span className="text-white">•</span>
              <span className="font-bold text-white tracking-widest">Estratégia Omen</span>
              <span className="text-white">•</span>
              
              {/* Duplicate for infinite effect */}
              <span>Omen Picture LLC</span>
              <span className="text-white">•</span>
              <span className="font-bold text-white tracking-widest">Inovação Radical</span>
              <span className="text-white">•</span>
              <span>Cinema Noir</span>
              <span className="text-white">•</span>
              <span className="font-bold text-white tracking-widest">Faturamento Premium</span>
              <span className="text-white">•</span>
              <span>Escalar Marcas</span>
              <span className="text-white">•</span>
              <span className="font-bold text-white tracking-widest">Estratégia Omen</span>
              <span className="text-white">•</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
