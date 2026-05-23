import { useState, FormEvent } from "react";
import { Check, ClipboardList, Send, Sparkles, Building, ChevronRight, FileCheck, RefreshCw } from "lucide-react";

export default function InquiryForm() {
  const [currentStep, setCurrentStep] = useState<"services" | "details" | "success">("services");
  
  // Form states
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [budgetRange, setBudgetRange] = useState<string>("R$ 10.000 - R$ 25.000 /mês");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [details, setDetails] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Available options
  const servicesList = [
    { id: "branding", label: "Direção de Arte & Branding" },
    { id: "production", label: "Produção de Filmes & Campanhas" },
    { id: "uiux", label: "UI/UX & Design Digital" },
    { id: "ads", label: "Amplificação & Tráfego Pago" }
  ];

  const budgetOptions = [
    "Até R$ 5.000 /mês",
    "R$ 5.000 - R$ 10.000 /mês",
    "R$ 10.000 - R$ 25.000 /mês",
    "R$ 25.000 - R$ 50.000 /mês",
    "Acima de R$ 50.000 /mês"
  ];

  const toggleService = (srvLabel: string) => {
    if (selectedServices.includes(srvLabel)) {
      setSelectedServices(selectedServices.filter(s => s !== srvLabel));
    } else {
      setSelectedServices([...selectedServices, srvLabel]);
    }
  };

  const handleNextStep = () => {
    if (selectedServices.length === 0) {
      setErrors({ services: "Por favor, selecione ao menos um serviço para continuar." });
      return;
    }
    setErrors({});
    setCurrentStep("details");
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = "Nome corporativo é obrigatório.";
    if (!email.trim() || !email.includes("@")) newErrors.email = "E-mail corporativo válido é obrigatório.";
    if (!company.trim()) newErrors.company = "Nome da empresa é obrigatório.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate elite submission agency response
    setTimeout(() => {
      setIsSubmitting(false);
      setCurrentStep("success");
    }, 1500);
  };

  const resetForm = () => {
    setSelectedServices([]);
    setBudgetRange("R$ 10.000 - R$ 25.000 /mês");
    setName("");
    setEmail("");
    setCompany("");
    setPhone("");
    setDetails("");
    setErrors({});
    setCurrentStep("services");
  };

  return (
    <section id="contact" className="py-24 bg-black text-white relative border-b border-white/10">
      
      {/* Decorative vertical blueprint coordinate indicators */}
      <div className="absolute top-10 left-8 font-mono text-[9px] text-zinc-500 tracking-[0.2em] uppercase rotate-90 origin-left max-md:hidden">
        OMEN INQUIRY BLOCK • VERIFICATION CODES
      </div>

      <div className="max-w-4xl w-full mx-auto px-4 relative z-10">
        
        {/* Title Block */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black border border-white/20 text-zinc-300 text-[9px] uppercase font-mono tracking-[0.2em] rounded-none mb-4">
            <ClipboardList className="w-3.5 h-3.5" />
            Engenharia de Briefing
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tighter leading-none">
            Inicie Sua Coprodução <br />
            <span className="text-black bg-white px-3 py-0.5 ml-[-4px] font-black inline-block mt-2 font-display">Com Omen LLC</span>
          </h2>
          <p className="text-zinc-400 text-xs mt-3 leading-relaxed">
            Responda o roteiro tático simplificado abaixo para direcionarmos o diretor de branding ideal ao seu modelo de distribuição.
          </p>
        </div>

        {/* Contact Container Box */}
        <div className="bg-black border border-white/10 rounded-none p-6 md:p-10 relative overflow-hidden">
          
          {/* Top visual step tracker bar */}
          <div className="flex items-center justify-between pointer-events-none mb-8 border-b border-white/10 pb-6 text-xs font-mono uppercase tracking-wider text-zinc-500">
            <span className={currentStep === "services" ? "text-white font-bold" : ""}>01. Configurar Escopo</span>
            <ChevronRight className="w-4 h-4" />
            <span className={currentStep === "details" ? "text-white font-bold" : ""}>02. Credenciais</span>
            <ChevronRight className="w-4 h-4" />
            <span className={currentStep === "success" ? "text-white font-bold" : ""}>03. Ticket Gerado</span>
          </div>

          {currentStep === "services" && (
            <div className="flex flex-col gap-6 text-left animate-fadeIn">
              
              {/* Step 1 Title */}
              <div>
                <h3 className="font-display font-black text-lg uppercase text-white tracking-tight">
                  Quais canais táticos precisamos ajustar?
                </h3>
                <p className="text-zinc-400 text-xs mt-1">Selecione uma ou mais soluções de marketing de nosso ecossistema.</p>
              </div>

              {/* Grid selectors */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                {servicesList.map(srv => {
                  const selected = selectedServices.includes(srv.label);
                  return (
                    <button
                      key={srv.id}
                      onClick={() => toggleService(srv.label)}
                      className={`p-4 rounded-none border flex items-center justify-between text-left transition-all duration-200 cursor-pointer ${
                        selected
                          ? "bg-white text-black border-white"
                          : "bg-transparent text-zinc-400 border-white/10 hover:border-white/20 hover:text-white"
                      }`}
                      id={`srv-form-item-${srv.id}`}
                    >
                      <span className="font-display text-xs uppercase tracking-wider font-bold">{srv.label}</span>
                      <div className={`w-5 h-5 rounded-none border flex items-center justify-center ${
                        selected ? "bg-black text-white border-black" : "border-white/10"
                      }`}>
                        {selected && <Check className="w-3.5 h-3.5" />}
                      </div>
                    </button>
                  );
                })}
              </div>
              {errors.services && (
                <p className="text-red-500 font-mono text-[10px] uppercase tracking-wider mt-1">{errors.services}</p>
              )}

              {/* Step 2 Title Budget Selector */}
              <div className="mt-6">
                <div>
                  <h3 className="font-display font-black text-lg uppercase text-white tracking-tight">
                    Qual verba mensal disponível para tráfego & produção?
                  </h3>
                  <p className="text-zinc-400 text-xs mt-1">Este dado auxilia a calibrar os modelos operacionais e ferramentas.</p>
                </div>

                <div className="flex flex-wrap gap-2.5 mt-4">
                  {budgetOptions.map(opt => {
                    const active = budgetRange === opt;
                    return (
                      <button
                        key={opt}
                        onClick={() => setBudgetRange(opt)}
                        className={`px-4 py-2.5 rounded-none text-[10px] uppercase tracking-wider font-bold border transition-all duration-155 cursor-pointer ${
                          active
                            ? "bg-white text-black border-white"
                            : "bg-transparent text-zinc-400 border-white/15 hover:border-white/25 hover:text-white"
                        }`}
                        id={`budget-opt-btn-${opt.replace(/\s+/g, "-")}`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Actions Footer */}
              <div className="mt-8 pt-6 border-t border-white/10 flex justify-end">
                <button
                  onClick={handleNextStep}
                  className="px-6 py-3.5 rounded-none bg-white text-black text-xs font-bold uppercase tracking-[0.2em] hover:bg-zinc-250 transition-colors flex items-center gap-2 cursor-pointer"
                  id="form-step-1-next"
                >
                  Próxima Etapa
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          )}

          {currentStep === "details" && (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-left animate-fadeIn">
              
              <div>
                <h3 className="font-display font-black text-lg uppercase text-white tracking-tight">
                  Forneça suas credenciais corporativas
                </h3>
                <p className="text-zinc-400 text-xs mt-1">Asseguramos sigilo profissional estrito sob todas as informações recebidas.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Corporate Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[10px] uppercase text-zinc-400 tracking-wider">Seu Nome Completo</label>
                  <input 
                    type="text" 
                    placeholder="Ex: Alan Baker"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="p-3.5 rounded-none bg-black border border-white/10 focus:border-white text-xs text-white placeholder-zinc-700 outline-none transition-colors"
                    id="input-name"
                  />
                  {errors.name && <span className="text-red-500 font-mono text-[9px] uppercase">{errors.name}</span>}
                </div>

                {/* Company Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[10px] uppercase text-zinc-400 tracking-wider">Nome da Empresa</label>
                  <input 
                    type="text" 
                    placeholder="Ex: Redline S.A."
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="p-3.5 rounded-none bg-black border border-white/10 focus:border-white text-xs text-white placeholder-zinc-700 outline-none transition-colors"
                    id="input-company"
                  />
                  {errors.company && <span className="text-red-500 font-mono text-[9px] uppercase">{errors.company}</span>}
                </div>

                {/* Corporate Email */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[10px] uppercase text-zinc-400 tracking-wider">E-mail Corporativo</label>
                  <input 
                    type="email" 
                    placeholder="Ex: alan@redline.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-3.5 rounded-none bg-black border border-white/10 focus:border-white text-xs text-white placeholder-zinc-700 outline-none transition-colors"
                    id="input-email"
                  />
                  {errors.email && <span className="text-red-500 font-mono text-[9px] uppercase">{errors.email}</span>}
                </div>

                {/* Phone / Corporate WhatsApp */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[10px] uppercase text-zinc-400 tracking-wider">WhatsApp Corporativo (Opcional)</label>
                  <input 
                    type="tel" 
                    placeholder="Ex: +55 (11) 99999-9999"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="p-3.5 rounded-none bg-black border border-white/10 focus:border-white text-xs text-white placeholder-zinc-700 outline-none transition-colors"
                    id="input-phone"
                  />
                </div>

              </div>

              {/* Message briefings */}
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[10px] uppercase text-zinc-400 tracking-wider">Detalhes Adicionais de Metas / Modelo (Opcional)</label>
                <textarea 
                  rows={4}
                  placeholder="Diga-nos brevemente o ROI almejado, concorrentes ou restrições de branding."
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="p-4 rounded-none bg-black border border-white/10 focus:border-white text-xs text-white placeholder-zinc-750 outline-none transition-colors custom-scrollbar"
                  id="input-details"
                />
              </div>

              {/* Actions Footer */}
              <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setCurrentStep("services")}
                  className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 hover:text-white cursor-pointer"
                  id="form-step-2-back"
                >
                  ← Voltar Etapa
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3.5 rounded-none bg-white text-black text-xs font-bold uppercase tracking-[0.2em] hover:bg-zinc-200 transition-colors flex items-center gap-2 cursor-pointer disabled:opacity-50 font-black"
                  id="form-submit"
                >
                  {isSubmitting ? (
                    <>
                      Transmitindo...
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    </>
                  ) : (
                    <>
                      Gerar Briefing Omen
                      <Send className="w-3.5 h-3.5 fill-black text-black" />
                    </>
                  )}
                </button>
              </div>

            </form>
          )}

          {currentStep === "success" && (
            <div className="flex flex-col items-center justify-center p-6 text-center animate-fadeIn">
              
              {/* Receipt Ticket */}
              <div 
                className="max-w-md w-full bg-black border-2 border-dashed border-white/20 rounded-none p-6 md:p-8 text-left relative overflow-hidden my-4 shadow-2xl"
                id="receipt-briefing-ticket"
              >
                {/* Visual side notches representing cinematic ticket stub */}
                <div className="absolute top-1/2 -left-3 w-6 h-6 rounded-full bg-black border-r border-white/20 -translate-y-1/2" />
                <div className="absolute top-1/2 -right-3 w-6 h-6 rounded-full bg-black border-l border-white/20 -translate-y-1/2" />

                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6 font-bold">
                  <div className="flex items-center gap-2">
                    <Building className="w-4 h-4 text-white" />
                    <span className="font-display font-black text-xs uppercase tracking-[0.2em] text-white">OMEN TICKET</span>
                  </div>
                  <span className="font-mono text-[9px] px-2 py-0.5 rounded-none bg-white text-black uppercase font-black tracking-widest">
                    VALIDADO
                  </span>
                </div>

                <div className="flex flex-col gap-4 text-xs">
                  <div>
                    <span className="font-mono text-[9px] uppercase text-zinc-500 tracking-wider block">Empresa Cliente:</span>
                    <span className="font-black text-white uppercase text-sm block mt-0.5">{company}</span>
                  </div>
                  <div>
                    <span className="font-mono text-[9px] uppercase text-zinc-500 tracking-wider block">Diretoria Responsável:</span>
                    <span className="font-black text-white uppercase block mt-0.5">{name}</span>
                  </div>
                  <div>
                    <span className="font-mono text-[9px] uppercase text-zinc-500 tracking-wider block">Canais Solicitados:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {selectedServices.map((srv, idx) => (
                        <span key={idx} className="bg-black text-[9px] border border-white/15 py-0.5 px-2 rounded-none text-zinc-300">
                          {srv}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 border-t border-white/10 pt-4 mt-2">
                    <div>
                      <span className="font-mono text-[9px] uppercase text-zinc-500 tracking-wider block">Escala de Verba:</span>
                      <span className="font-bold text-white mt-0.5 block">{budgetRange}</span>
                    </div>
                    <div>
                      <span className="font-mono text-[9px] uppercase text-zinc-500 tracking-wider block">Código Hash:</span>
                      <span className="font-mono text-[9px] text-zinc-400 mt-0.5 block font-bold">ØX-OMEN-{(Math.random()*10000).toFixed(0)}</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/10 mt-6 pt-4 flex gap-2 text-[10px] text-zinc-400 font-mono items-center">
                  <FileCheck className="w-4 h-4 text-white" />
                  <span>Enviado com sucesso ao Diretor Operacional</span>
                </div>
              </div>

              <h3 className="font-display font-black text-xl uppercase mt-6 text-white tracking-widest">
                Briefing Validado com Sucesso!
              </h3>
              <p className="text-zinc-400 text-xs mt-2 max-w-sm">
                Nossos diretores de marketing já estão traçando um mapa de calor e posicionamento para a sua marca. Retornaremos em até 4 horas úteis no e-mail <strong>{email}</strong>.
              </p>

              <button
                onClick={resetForm}
                className="mt-6 font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-400 hover:text-white px-4 py-2 border border-white/10 rounded-none hover:border-white/30 cursor-pointer"
                id="reset-form-btn"
              >
                Gerar Novo Briefing
              </button>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
