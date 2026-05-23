import { useState, FormEvent } from "react";
import { Film, Send, Sparkles, Mail, CheckCircle2 } from "lucide-react";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim() && newsletterEmail.includes("@")) {
      setNewsletterSubscribed(true);
      setNewsletterEmail("");
    }
  };

  return (
    <footer className="bg-black text-white py-16 border-t border-white/10 relative">
      <div className="max-w-6xl w-full mx-auto px-4">
        
        {/* Banner Grid Header: Brand & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pb-12 border-b border-white/10 mb-12">
          
          {/* Left Brand Area (Omen Picture info) */}
          <div className="lg:col-span-5 text-left flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-none bg-white flex items-center justify-center text-black">
                <Film className="w-4 h-4" />
              </div>
              <div>
                <span className="font-display font-black text-base tracking-wider uppercase block text-white">
                  OMEN PICTURE LLC
                </span>
                <span className="font-mono text-[9px] tracking-widest text-zinc-550 block -mt-1 uppercase">
                  ESTÉTICA ESTRITA
                </span>
              </div>
            </div>
            
            <p className="text-zinc-400 text-xs font-light leading-relaxed max-w-sm">
              Esculpimos caminhos estéticos pretos e brancos que dão voz digital soberana a marcas em escala internacional.
            </p>
          </div>

          {/* Right Newsletter Area */}
          <div className="lg:col-span-7 w-full text-left">
            <span className="font-mono text-[10px] uppercase text-zinc-400 tracking-[0.2em] block mb-2">
              Inscreva-se no Boletim Técnico
            </span>
            <p className="text-zinc-400 text-xs font-light mb-4">
              Receba análises brutas semanais de tráfego pago, direção de arte e hacks de conversão direto no seu inbox.
            </p>

            {!newsletterSubscribed ? (
               <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-lg">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                  <input
                    type="email"
                    required
                    placeholder="Seu melhor e-mail corporativo"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 bg-black border border-white/10 rounded-none text-xs text-white placeholder-zinc-700 focus:border-white outline-none transition-colors"
                    id="newsletter-email"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-white text-black font-black uppercase text-[10px] tracking-[0.2em] rounded-none hover:bg-zinc-200 transition-colors cursor-pointer"
                  id="newsletter-subscribe"
                >
                  Inscrever-se
                </button>
              </form>
            ) : (
              <div className="p-4 rounded-none bg-black border border-white/10 flex items-center gap-2.5 text-xs text-zinc-300 max-w-lg animate-fadeIn">
                <CheckCircle2 className="w-4 h-4 text-white" />
                <span>
                  E-mail registrado com sucesso! Você receberá nosso próximo boletim na primeira hora da segunda-feira.
                </span>
              </div>
            )}
          </div>

        </div>

        {/* Sitemap Grid links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-left pb-12 border-b border-white/10">
          
          {/* Column 1: Empresa */}
          <div>
            <span className="font-mono text-[10px] uppercase text-zinc-500 tracking-wider block mb-4">
              Empresa
            </span>
            <ul className="flex flex-col gap-2.5 text-xs text-zinc-400">
              <li><a href="#hero" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Portfólio</a></li>
              <li><a href="#team" className="hover:text-white transition-colors">Diretores</a></li>
            </ul>
          </div>

          {/* Column 2: Soluções */}
          <div>
            <span className="font-mono text-[10px] uppercase text-zinc-500 tracking-wider block mb-4">
              Soluções
            </span>
            <ul className="flex flex-col gap-2.5 text-xs text-zinc-400">
              <li><a href="#services" className="hover:text-white transition-colors">Direção de Arte</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Filmes Comerciais</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">UI/UX Brutalista</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Tráfego de Elite</a></li>
            </ul>
          </div>

          {/* Column 3: Métricas */}
          <div>
            <span className="font-mono text-[10px] uppercase text-zinc-500 tracking-wider block mb-4">
              Recursos
            </span>
            <ul className="flex flex-col gap-2.5 text-xs text-zinc-400">
              <li><a href="#calculator" className="hover:text-white transition-colors">Calculadora de ROI</a></li>
              <li><a href="#calculator" className="hover:text-white transition-colors">Estatísticas Omen</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Agendar Briefing</a></li>
              <li><a href="#hero" className="hover:text-white transition-colors">Manifesto Noir</a></li>
            </ul>
          </div>

          {/* Column 4: Redes Sociais */}
          <div>
            <span className="font-mono text-[10px] uppercase text-zinc-500 tracking-wider block mb-4">
              Conexões
            </span>
            <ul className="flex flex-col gap-2.5 text-xs text-zinc-400">
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-1">Instagram <Sparkles className="w-2.5 h-2.5 animate-pulse" /></a></li>
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Vimeo Pro</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Behance</a></li>
            </ul>
          </div>

        </div>

        {/* Footer bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-zinc-500 text-left font-mono">
          <div>
            Omen Picture LLC © {new Date().getFullYear()}. Todos os direitos reservados.
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Segurança NDA</a>
            <span>•</span>
            <div className="flex items-center gap-1.5 text-white/80">
              <span className="w-1.5 h-1.5 rounded-none bg-white" />
              STATUS: ESTÁVEL
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
