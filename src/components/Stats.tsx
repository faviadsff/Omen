import { AGENCY_STATS } from "../data";
import { TrendingUp, Award, PlayCircle, Users } from "lucide-react";

export default function Stats() {
  // Map icons to index numbers to make layout distinctive
  const icons = [
    <PlayCircle className="w-5 h-5 text-white" key="views" />,
    <TrendingUp className="w-5 h-5 text-white" key="growth" />,
    <Award className="w-5 h-5 text-white" key="awards" />,
    <Users className="w-5 h-5 text-white" key="revenue" />
  ];

  return (
    <section className="py-12 bg-black border-y border-white/10 overflow-hidden relative">
      {/* Absolute high-contrast design accent */}
      <div className="absolute top-0 left-0 w-32 h-[1px] bg-white" />
      <div className="absolute bottom-0 right-0 w-32 h-[1px] bg-white" />

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {AGENCY_STATS.map((stat, idx) => (
            <div 
              key={stat.label} 
              className={`p-4 text-center md:text-left flex flex-col items-center md:items-start gap-2 group transition-all duration-300 ${
                idx > 0 ? "pt-8 md:pt-4" : ""
              }`}
              id={`stat-box-${idx}`}
            >
              {/* Icon Circle */}
              <div className="w-10 h-10 rounded-none bg-black border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300">
                <div className="group-hover:invert duration-300">
                  {icons[idx]}
                </div>
              </div>

              <div>
                <span className="font-mono text-3xl md:text-4xl font-black text-white tracking-widest block">
                  {stat.value}
                </span>
                <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-zinc-300 mt-1 block">
                  {stat.label}
                </span>
                <span className="text-[11px] text-zinc-500 font-light block mt-0.5">
                  {stat.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
