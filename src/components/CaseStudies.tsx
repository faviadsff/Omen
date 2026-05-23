import { useState } from "react";
import { PROJECTS } from "../data";
import { Project } from "../types";
import { Filter, Calendar, TrendingUp, X, Award, Eye } from "lucide-react";

export default function CaseStudies() {
  const [activeCategory, setActiveCategory] = useState<string>("todos");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filter Categories in Portuguese
  const categories = [
    { id: "todos", label: "Todos os Projetos" },
    { id: "brand", label: "Direção & Branding" },
    { id: "film", label: "Cinema & Vídeo" },
    { id: "design", label: "UI/UX & Design" }
  ];

  const getFilteredProjects = () => {
    if (activeCategory === "todos") return PROJECTS;
    if (activeCategory === "brand") return PROJECTS.filter(p => p.category.includes("Branding") || p.category.includes("Direção"));
    if (activeCategory === "film") return PROJECTS.filter(p => p.category.includes("Campanha") || p.category.includes("Comercial"));
    if (activeCategory === "design") return PROJECTS.filter(p => p.category.includes("Design"));
    return PROJECTS;
  };

  const filtered = getFilteredProjects();

  return (
    <section id="projects" className="py-24 bg-black text-white relative border-b border-white/10">
      <div className="max-w-6xl w-full mx-auto px-4">
        
        {/* Title Grid Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black border border-white/20 text-zinc-300 text-[9px] uppercase font-mono tracking-[0.2em] rounded-none mb-4">
              <span className="w-1.5 h-1.5 bg-white" />
              Nosso Portfólio
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tighter uppercase leading-none">
              Obras-primas de <br />
              <span className="text-black bg-white px-3 py-0.5 ml-[-4px] font-black inline-block mt-2 font-display">Engajamento Visual</span>
            </h2>
          </div>
          <p className="max-w-xs text-zinc-400 text-xs text-left leading-relaxed">
            Cada trabalho na Omen LLC é projetado como uma peça de expressão artística voltada para maximizar resultados comerciais mensuráveis.
          </p>
        </div>

        {/* Categories Bar Filter */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-white/10 pb-6">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-none text-[10px] uppercase tracking-[0.2em] font-bold border transition-all duration-300 cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-white text-black border-white"
                  : "bg-transparent text-zinc-400 border-white/10 hover:text-white hover:border-white/45"
              }`}
              id={`cat-filter-btn-${cat.id}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="case-studies-grid">
          {filtered.map((proj, idx) => (
            <div 
              key={proj.id}
              onClick={() => setSelectedProject(proj)}
              className="group cursor-pointer flex flex-col items-start text-left bg-black border border-white/10 hover:border-white/25 rounded-none p-5 transition-all duration-500 hover:bg-white/[0.01]"
              id={`project-card-${proj.id}`}
            >
              {/* Image Frame with hover zoom & monochrome filters */}
              <div className="relative w-full aspect-16/10 rounded-none overflow-hidden mb-6 border border-white/10 bg-black">
                <img 
                  src={proj.image} 
                  alt={proj.title} 
                  className="w-full h-full object-cover grayscale contrast-125 brightness-90 transition-all duration-700 group-hover:scale-103 group-hover:brightness-75 group-hover:contrast-135"
                  referrerPolicy="no-referrer"
                />
                
                {/* Year tag & Category tag overlay */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-black/90 border border-white/20 px-3 py-1 font-mono text-[9px] text-zinc-300 uppercase tracking-widest rounded-none">
                    {proj.category}
                  </span>
                  <span className="bg-white text-black font-black px-2 py-1 font-mono text-[9px] uppercase tracking-wider rounded-none">
                    {proj.year}
                  </span>
                </div>

                {/* Performance HUD metrics tag */}
                <div className="absolute bottom-4 right-4 bg-black/95 border border-white/20 rounded-none py-1.5 px-3 flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-zinc-200" />
                  <span className="font-mono text-[9px] text-zinc-100 font-bold tracking-wider">{proj.metrics}</span>
                </div>
              </div>

              <div className="w-full flex justify-between items-start gap-4">
                <div>
                  <h3 className="font-display font-bold text-lg text-white group-hover:underline uppercase tracking-tight">
                    {proj.title}
                  </h3>
                  <p className="text-zinc-400 text-xs font-light mt-1.5 max-w-md line-clamp-2">
                    {proj.description}
                  </p>
                </div>
                
                {/* Visual arrow pointer badge */}
                <span className="w-9 h-9 rounded-none bg-black border border-white/10 flex items-center justify-center text-zinc-400 group-hover:bg-white group-hover:text-black group-hover:invert duration-300">
                  <Eye className="w-4 h-4" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-24 text-zinc-500 border border-dashed border-white/10 rounded-none">
            Nenhum projeto encontrado nesta categoria.
          </div>
        )}

      </div>

      {/* Cinematic Modal / Lightbox for detailed Case Study analysis */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div 
            className="bg-black border border-white/20 rounded-none max-w-4xl w-full max-h-[90vh] overflow-y-auto custom-scrollbar relative p-6 md:p-10 shadow-3xl text-left"
            id="case-study-lightbox"
          >
            {/* Close button */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-none bg-black border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors z-10 cursor-pointer text-white"
              id="close-lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Layout Header */}
            <div className="mb-6 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-black border border-white/20 font-mono text-[9px] text-zinc-300 uppercase tracking-[0.15em] rounded-none">
                <Award className="w-3.5 h-3.5" />
                Caso de Sucesso Premiado
              </span>
              <span className="px-2 py-0.5 rounded-none bg-black text-zinc-400 font-mono text-[9px] border border-white/10 uppercase tracking-[0.1em]">
                {selectedProject.category}
              </span>
            </div>

            <h3 className="font-display font-black text-2xl md:text-3xl text-white uppercase tracking-tight mb-2">
              {selectedProject.title}
            </h3>
            
            <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest mb-6 flex items-center gap-4">
              <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> Ano de Lançamento: {selectedProject.year}</span>
              <span>•</span>
              <span className="text-white font-bold uppercase">Impacto: {selectedProject.metrics}</span>
            </p>

            {/* Large full screen-esque header inside modal */}
            <div className="relative w-full aspect-16/9 rounded-none overflow-hidden mb-8 border border-white/15 bg-black">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full h-full object-cover grayscale contrast-125 brightness-90"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* In-depth case story split layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              
              <div className="md:col-span-8">
                <h4 className="font-display uppercase font-bold text-xs text-zinc-400 tracking-wider mb-3">Estratégia & Execução da Omen:</h4>
                <p className="text-zinc-300 text-sm md:text-base font-light leading-relaxed whitespace-pre-line">
                  {selectedProject.fullStory}
                </p>
              </div>

              {/* Side card KPI metrics block */}
              <div className="md:col-span-4 p-6 rounded-none bg-black border border-white/15 flex flex-col gap-4">
                <h4 className="font-mono text-[10px] uppercase text-zinc-550 tracking-widest block">Métricas Auditadas:</h4>
                
                <div>
                  <span className="font-mono text-3xl font-black text-white tracking-widest block">
                    {selectedProject.metrics.split("•")[0] || selectedProject.metrics}
                  </span>
                  <span className="text-[10px] uppercase text-zinc-500 font-mono tracking-widest block mt-1">Crescimento de Conversão</span>
                </div>
                
                <div className="border-t border-white/10 pt-4">
                  <span className="font-mono text-xl font-bold text-white tracking-wider block">
                    {selectedProject.metrics.split("•")[1] || "Presença de Elite"}
                  </span>
                  <span className="text-[10px] uppercase text-zinc-500 font-mono tracking-widest block mt-1">Garantia & Escala</span>
                </div>

                <button
                  onClick={() => {
                    setSelectedProject(null);
                    // Scroll to contact form
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="mt-4 w-full text-center py-3 bg-white text-black text-[11px] font-black uppercase tracking-[0.2em] transition-colors hover:bg-zinc-200 cursor-pointer rounded-none"
                >
                  Fazer Coprodução Similar
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}
