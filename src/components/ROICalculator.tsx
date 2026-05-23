import { useState } from "react";
import { Calculator, Sparkles, AlertCircle, RefreshCw, BarChart2 } from "lucide-react";

export default function ROICalculator() {
  const [budget, setBudget] = useState<number>(10000);
  const [traffic, setTraffic] = useState<number>(20000);
  const [currentConversion, setCurrentConversion] = useState<number>(1.2);
  const [niche, setNiche] = useState<string>("saas");

  // Niche multipling factor mapping
  const nicheMultipliers: Record<string, { label: string; conversionValue: number }> = {
    ecommerce: { label: "E-Commerce", conversionValue: 80 },
    saas: { label: "SaaS / Softwares", conversionValue: 250 },
    servicos: { label: "Serviços de Alto Valor / Imobiliário", conversionValue: 1200 },
    infoprodutos: { label: "Infoprodutores & Escala", conversionValue: 150 }
  };

  // Calculations
  const averageLeadValue = nicheMultipliers[niche].conversionValue;
  
  // Traditional campaign conversions
  const currentConversions = Math.round((traffic * currentConversion) / 100);
  const currentRevenue = currentConversions * averageLeadValue;

  // Omen-optimized campaigns conversions
  // Omen raises average conversion by 3.4x on average as per services data
  const omenConversion = Math.min(6.5, Number((currentConversion * 3.4).toFixed(2)));
  const omenConversions = Math.round((traffic * omenConversion) / 100);
  const omenRevenue = omenConversions * averageLeadValue;

  // Nets
  const ROIIncreaseValue = omenRevenue - currentRevenue;
  const currentROI = Number(((currentRevenue / budget) * 100).toFixed(0));
  const omenROI = Number(((omenRevenue / budget) * 100).toFixed(0));  return (
    <section id="calculator" className="py-24 bg-black text-white relative border-b border-white/10 overflow-hidden">
      
      {/* Absolute decorative linear design lines */}
      <div className="absolute top-1/2 left-0 w-24 h-[1px] bg-white/10" />
      <div className="absolute top-1/2 right-0 w-24 h-[1px] bg-white/10" />
      
      <div className="max-w-6xl w-full mx-auto px-4 relative z-10">
        
        {/* Title Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black border border-white/20 text-zinc-300 text-[9px] uppercase font-mono tracking-[0.2em] rounded-none mb-4">
            <Calculator className="w-3.5 h-3.5 text-zinc-300" />
            Simulador de Impacto
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tighter leading-none">
            Previsão de Retorno <br />
            <span className="text-black bg-white px-3 py-0.5 ml-[-4px] font-black inline-block mt-2 font-display">Estratégico Omen</span>
          </h2>
          <p className="text-zinc-400 text-xs mt-3">
            O marketing que não é medido se transforma em despesa vazia. Calcule o ganho presumido baseado nos multiplicadores históricos auditados da nossa agência.
          </p>
        </div>

        {/* Dashboard Frame Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Inputs Section */}
          <div className="lg:col-span-12 xl:col-span-5 bg-black border border-white/10 rounded-none p-6 md:p-8 flex flex-col justify-between text-left">
            <div className="flex flex-col gap-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-white">Parâmetros Atuais</span>
                <span className="text-[10px] uppercase font-mono text-zinc-500">Inputs Ajustáveis</span>
              </div>

              {/* Segment Toggle */}
              <div>
                <label className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-400 block mb-2">Segmento do seu Negócio</label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {Object.entries(nicheMultipliers).map(([key, value]) => (
                    <button
                      key={key}
                      onClick={() => setNiche(key)}
                      className={`p-2.5 rounded-none border font-medium text-left transition-all duration-300 cursor-pointer ${
                        niche === key
                          ? "bg-white text-black border-white font-bold"
                          : "bg-transparent text-zinc-450 border-white/10 hover:border-white/20 hover:text-white"
                      }`}
                      id={`niche-toggle-${key}`}
                    >
                      <span className="block text-[10px] truncate uppercase font-bold tracking-[0.05em]">{value.label}</span>
                      <span className={`block text-[9px] font-mono mt-0.5 ${
                        niche === key ? "text-zinc-650" : "text-zinc-500"
                      }`}>
                        Venda Média: R$ {value.conversionValue}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Monthly Budget Slider Input */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-zinc-400">Orçamento de Tráfego</span>
                  <span className="font-bold font-mono text-white text-sm">
                    R$ {budget.toLocaleString("pt-BR")}
                  </span>
                </div>
                <input 
                  type="range" 
                  min="2500" 
                  max="100000" 
                  step="2500"
                  value={budget} 
                  onChange={(e) => setBudget(Number(e.target.value))}
                  className="w-full h-1.5 bg-zinc-900 rounded-none appearance-none cursor-pointer accent-white"
                  style={{ background: `linear-gradient(to right, #ffffff 0%, #ffffff ${((budget - 2500) / 97500) * 100}%, #18181b ${((budget - 2500) / 97500) * 100}%, #18181b 100%)` }}
                  id="budget-range"
                />
                <div className="flex justify-between font-mono text-[8px] text-zinc-600 uppercase tracking-widest leading-none">
                  <span>Mín: R$ 2,5 mil</span>
                  <span>Máx: R$ 100 mil</span>
                </div>
              </div>

              {/* Monthly Traffic Input Slider */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-zinc-400">Tráfego Mensal Estimado</span>
                  <span className="font-bold font-mono text-white text-sm">
                    {traffic.toLocaleString("pt-BR")} Visitas
                  </span>
                </div>
                <input 
                  type="range" 
                  min="5000" 
                  max="250000" 
                  step="5000"
                  value={traffic} 
                  onChange={(e) => setTraffic(Number(e.target.value))}
                  className="w-full h-1.5 bg-zinc-900 rounded-none appearance-none cursor-pointer accent-white"
                  style={{ background: `linear-gradient(to right, #ffffff 0%, #ffffff ${((traffic - 5000) / 245000) * 100}%, #18181b ${((traffic - 5000) / 245000) * 100}%, #18181b 100%)` }}
                  id="traffic-range"
                />
                <div className="flex justify-between font-mono text-[8px] text-zinc-600 uppercase tracking-widest leading-none">
                  <span>Mín: 5.000</span>
                  <span>Máx: 250.000</span>
                </div>
              </div>

              {/* Current Conversion Rate Input */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-zinc-400">Taxa de Conversão Atual</span>
                  <span className="font-bold font-mono text-white text-sm">
                    {currentConversion}%
                  </span>
                </div>
                <input 
                  type="range" 
                  min="0.2" 
                  max="4.0" 
                  step="0.1"
                  value={currentConversion} 
                  onChange={(e) => setCurrentConversion(Number(e.target.value))}
                  className="w-full h-1.5 bg-zinc-900 rounded-none appearance-none cursor-pointer accent-white"
                  style={{ background: `linear-gradient(to right, #ffffff 0%, #ffffff ${((currentConversion - 0.2) / 3.8) * 100}%, #18181b ${((currentConversion - 0.2) / 3.8) * 100}%, #18181b 100%)` }}
                  id="conversion-range"
                />
                <div className="flex justify-between font-mono text-[8px] text-zinc-600 uppercase tracking-widest leading-none">
                  <span>Baixa: 0.2%</span>
                  <span>Alta: 4.0%</span>
                </div>
              </div>

            </div>

            <div className="mt-8 p-4 rounded-none bg-black border border-white/10 flex gap-3 text-xs text-zinc-400 items-start">
              <AlertCircle className="w-4 h-4 text-white shrink-0 mt-0.5" />
              <span>
                Cálculo baseado no índice médio ponderado de conversão otimizado por design de interface e campanha cinematográfica estrita.
              </span>
            </div>
          </div>

          {/* Outputs / Calculations visualization */}
          <div className="lg:col-span-12 xl:col-span-7 bg-black border border-white/10 rounded-none p-6 md:p-8 flex flex-col justify-between text-left relative overflow-hidden">
            
            <div className="flex flex-col gap-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="font-display font-bold text-xs uppercase tracking-[0.2em] text-zinc-300">Análise de Performance Comparativa</span>
                <span className="inline-flex items-center gap-1 font-mono text-[9px] uppercase tracking-[0.1em] text-white">
                  <Sparkles className="w-3.5 h-3.5" /> Omen Boost ativado
                </span>
              </div>

              {/* Comparison chart / stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Current Scenario Card */}
                <div className="p-5 rounded-none bg-black border border-white/10 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-zinc-500 block">Cenário Tradicional Atual</span>
                    <span className="text-xl font-bold font-mono tracking-wider block mt-1 text-zinc-400">
                      R$ {currentRevenue.toLocaleString("pt-BR")}
                    </span>
                    <span className="text-[10px] text-zinc-500 mt-1 block">
                      Receita Gerada ({currentConversions} conversões de R$ {averageLeadValue})
                    </span>
                  </div>
                  
                  {/* Visual mini progress bar for comparison */}
                  <div className="mt-4">
                    <div className="flex justify-between text-[9px] font-mono text-zinc-500 mb-1">
                      <span>Conversão</span>
                      <span>{currentConversion}%</span>
                    </div>
                    <div className="w-full h-1 bg-zinc-900 rounded-none overflow-hidden">
                      <div 
                        className="bg-zinc-650 h-full duration-500" 
                        style={{ width: `${(currentConversion / 6.5) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Omen Boosted Scenario Card */}
                <div className="p-5 rounded-none bg-black border-2 border-white flex flex-col justify-between relative shadow-2xl">
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded-none bg-white text-black font-mono font-bold text-[8px] tracking-wider uppercase">
                    3.4x Impacto
                  </div>

                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-zinc-300 block font-bold leading-none">Cenário Otmizado Omen</span>
                    <span className="text-2xl font-black font-mono tracking-widest block mt-2 text-white">
                      R$ {omenRevenue.toLocaleString("pt-BR")}
                    </span>
                    <span className="text-[10px] text-zinc-400 mt-1 block leading-normal">
                      Receita Gerada ({omenConversions} conversões de R$ {averageLeadValue})
                    </span>
                  </div>

                  {/* Visual dynamic progress bar */}
                  <div className="mt-4">
                    <div className="flex justify-between text-[9px] font-mono text-zinc-300 mb-1">
                      <span className="font-bold">Conversão Estimada</span>
                      <span className="font-bold text-white">{omenConversion}%</span>
                    </div>
                    <div className="w-full h-1 bg-zinc-900 rounded-none overflow-hidden">
                      <div 
                        className="bg-white h-full duration-500" 
                        style={{ width: `${(omenConversion / 6.5) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>

              </div>

              {/* Net ROI Multiplier Summary Panel */}
              <div className="p-6 rounded-none bg-white text-black flex flex-col md:flex-row md:items-center justify-between gap-4 mt-2">
                <div className="text-left">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-500 font-bold block leading-none">Diferencial de Ganho Bruto Mensal</span>
                  <span className="font-mono text-xl md:text-2xl font-black block mt-1 tracking-wider">
                    + R$ {ROIIncreaseValue.toLocaleString("pt-BR")}
                  </span>
                  <span className="text-[11px] leading-tight text-zinc-850 mt-1 block">
                    Faturamento incremental líquido gerado exclusivamente por design estratégico de marca e otimização.
                  </span>
                </div>
                
                <div className="bg-black text-white p-3.5 rounded-none text-center flex flex-col justify-center min-w-[110px] border border-white/20">
                  <span className="font-mono text-[9px] uppercase text-zinc-400">Novo ROI Médio</span>
                  <span className="font-mono text-base font-extrabold tracking-widest">{omenROI}%</span>
                </div>
              </div>

            </div>

            <div className="mt-8 flex flex-col md:flex-row md:items-center justify-between gap-4 pt-6 border-t border-white/10">
              <div className="text-left">
                <span className="font-mono text-[9px] uppercase text-zinc-500 tracking-[0.1em] block">Garantia Omen Picture</span>
                <p className="text-xs text-zinc-450 leading-relaxed max-w-sm mt-0.5">
                  Nossos contratos incluem SLAs rigorosos focados em aumento métrico real e consolidação de identidade digital de altíssima escala.
                </p>
              </div>
              <button
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-none bg-zinc-950 border border-white/20 text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
              >
                Garantir Meu Crescimento
                <BarChart2 className="w-4 h-4 rotate-90" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
