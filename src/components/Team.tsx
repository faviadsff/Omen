import { useState } from "react";
import { TEAM } from "../data";
import { Linkedin, Mail, BadgeAlert, Award, ArrowUpRight, ShieldCheck, Heart } from "lucide-react";

export default function Team() {
  const [activeSpotlightIdx, setActiveSpotlightIdx] = useState<number>(0);
  const spotlightMember = TEAM[activeSpotlightIdx];

  return (
    <section id="team" className="py-24 bg-black text-white relative border-b border-white/10">
      <div className="max-w-6xl w-full mx-auto px-4">
        
        {/* Title Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black border border-white/20 text-zinc-300 text-[9px] uppercase font-mono tracking-[0.2em] rounded-none mb-4">
              <span className="w-1.5 h-1.5 bg-white" />
              Diretorias de Criação
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tighter uppercase leading-none">
              Mentes Por Trás do <br />
              <span className="text-black bg-white px-3 py-0.5 ml-[-4px] font-black inline-block mt-2 font-display">Prisma Omen</span>
            </h2>
          </div>
          <p className="max-w-xs text-zinc-400 text-xs text-left leading-relaxed">
            Nossos diretores e operadores unem rigor técnico-científico com arte visual brutalista para orquestrar campanhas imortais.
          </p>
        </div>

        {/* Team Members Grid - 3 columns on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {TEAM.map((member, idx) => {
            const isSpotlighted = activeSpotlightIdx === idx;
            return (
              <div 
                key={member.id}
                onClick={() => setActiveSpotlightIdx(idx)}
                className={`group cursor-pointer p-6 rounded-none border transition-all duration-300 text-left flex flex-col justify-between relative ${
                  isSpotlighted
                    ? "bg-white text-black border-white shadow-2xl scale-[1.01]"
                    : "bg-black text-zinc-350 border-white/10 hover:border-white/20 hover:bg-white/[0.01]"
                }`}
                id={`member-card-${idx}`}
              >
                {/* Visual Headshot */}
                <div className="relative w-full aspect-square rounded-none overflow-hidden mb-6 border border-white/10 bg-black animate-none">
                  <img 
                    src={member.avatar} 
                    alt={member.name}
                    className={`w-full h-full object-cover transition-all duration-75 ${
                      isSpotlighted
                        ? "grayscale brightness-90 contrast-125"
                        : "grayscale brightness-75 contrast-100 group-hover:brightness-90 group-hover:scale-102"
                    }`}
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Floating role badge overlay */}
                  <div className="absolute top-3 left-3 bg-black/95 border border-white/20 px-2.5 py-1 text-[9px] font-mono text-zinc-350 uppercase tracking-widest rounded-none">
                    {member.role === "CEO & Founder" ? "Liderança Estrita" : "Especialista"}
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-display font-black text-base tracking-tight uppercase">
                      {member.name}
                    </h3>
                    <div className="flex gap-1">
                      <Linkedin className={`w-3.5 h-3.5 hover:scale-110 transition-transform ${isSpotlighted ? "text-zinc-650 hover:text-black" : "text-zinc-505 hover:text-white"}`} />
                    </div>
                  </div>

                  <p className={`font-mono text-[9px] uppercase tracking-[0.1em] font-semibold mt-1 ${
                    isSpotlighted ? "text-zinc-500" : "text-zinc-500"
                  }`}>
                    {member.role}
                  </p>

                  <p className={`text-xs mt-3 font-light leading-relaxed line-clamp-3 ${
                    isSpotlighted ? "text-zinc-800" : "text-zinc-400"
                  }`}>
                    {member.bio}
                  </p>
                </div>

                {/* Experience Badge on hover or spotlighted */}
                <div className={`mt-4 pt-4 border-t flex justify-between items-center ${isSpotlighted ? "border-black/10" : "border-white/10"}`}>
                  <span className={`font-mono text-[8px] uppercase tracking-widest ${
                    isSpotlighted ? "text-zinc-600 font-bold" : "text-zinc-500"
                  }`}>
                    {member.experience.split("•")[0]}
                  </span>
                  <span className={`text-[9px] font-bold uppercase tracking-wider cursor-pointer ${
                    isSpotlighted ? "text-black underline" : "text-white hover:underline"
                  }`}>
                    Ver Filosofia →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Interactive Spotlight Showcase Detailer */}
        <div 
          className="bg-black border border-white/10 rounded-none p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center justify-between text-left relative overflow-hidden"
          id="spotlight-panel"
        >
          {/* Subtle logo bg mark */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.03] pointer-events-none" />

          {/* Mini face photo for spotlight preview */}
          <div className="w-20 h-20 rounded-none overflow-hidden border border-white/20 shrink-0">
            <img 
              src={spotlightMember.avatar} 
              alt={spotlightMember.name} 
              className="w-full h-full object-cover grayscale contrast-125"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-500">
                Foco Ativo de Diretoria
              </span>
              <span className="inline-flex items-center gap-1 bg-black border border-white/20 text-white font-mono text-[8px] px-2 py-0.5 uppercase rounded-none">
                <ShieldCheck className="w-3 h-3 text-white" /> Credencial Registrada
              </span>
            </div>
            
            <h4 className="font-display font-medium text-lg text-white uppercase tracking-tight">
              Filosofia Operacional de <span className="font-bold underline decoration-zinc-700 decoration-1 hover:decoration-white">{spotlightMember.name}</span>
            </h4>
            
            <p className="text-zinc-300 font-sans text-xs md:text-sm font-light leading-relaxed mt-2 italic">
              &ldquo;{spotlightMember.bio} Unindo o preto e o branco da objetividade analítica e da criação conceitual para alcançar a máxima ascensão de marca.&rdquo;
            </p>
          </div>

          {/* High-contrast CTA block inside Team section */}
          <div className="p-5 rounded-none bg-black border border-white/20 text-center min-w-[200px] flex flex-col gap-2">
            <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-zinc-455">Precisa de Coprodução?</span>
            <p className="text-[10px] text-zinc-400 font-light">Alavanque seu faturamento com {spotlightMember.name.split(" ")[0]}.</p>
            <a 
              href="#contact"
              className="mt-1 bg-white text-black font-black text-[10px] py-2 px-3 tracking-[0.2em] rounded-none uppercase hover:bg-zinc-200 transition-colors block text-center"
            >
              Falar com o Diretor
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
