
import React from 'react';

interface LandingPageProps {
  onShowGuide: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onShowGuide }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
      {/* Container do Logo com Efeito de Profundidade */}
      <div className="relative mb-12 animate-float group">
        <div className="absolute inset-0 bg-sky-500/20 rounded-full blur-[120px] animate-pulse-soft opacity-60"></div>
        <div className="absolute inset-0 bg-amber-500/10 rounded-full blur-[100px] animate-pulse-soft opacity-40" style={{ animationDelay: '2s' }}></div>
        
        <div className="relative z-10 logo-reflection">
          <img 
            src="logo.png" 
            alt="SisData Tech Logo" 
            className="w-72 h-72 md:w-96 md:h-96 object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.5)] transition-transform duration-700 group-hover:scale-105"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent) {
                const msg = document.createElement('div');
                msg.className = "p-8 glass-panel rounded-3xl border-dashed border-2 border-sky-400/50 text-sky-400";
                msg.innerHTML = "<i class='fa-solid fa-image text-4xl mb-2'></i><br/>Certifique-se que a imagem<br/>se chama 'logo.png'";
                parent.appendChild(msg);
              }
            }}
          />
        </div>
      </div>

      <div className="max-w-3xl z-20 animate-in fade-in slide-in-from-bottom-10 duration-1000">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-white tracking-tight">
          Estamos preparando algo <span className="text-sky-400 italic">extraordinário</span>.
        </h1>
        
        <div className="h-px w-48 bg-gradient-to-r from-transparent via-sky-500 to-transparent mx-auto mb-8"></div>

        <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-10 max-w-xl mx-auto font-light">
          A <span className="text-white font-semibold">SisData Tech</span> está em fase final de desenvolvimento.
        </p>

        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-slate-300 mb-12 shadow-inner">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
          </span>
          <span className="text-xs font-bold uppercase tracking-[0.3em]">Ambiente em Construção</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-20 z-20">
        <a 
          href="mailto:contato@sisdatatech.com.br"
          className="px-8 py-3 rounded-xl bg-white text-slate-900 font-bold transition-all hover:bg-sky-50 flex items-center justify-center gap-2"
        >
          <i className="fa-solid fa-paper-plane"></i>
          Entrar em Contato
        </a>
        <button 
          onClick={onShowGuide}
          className="px-8 py-3 rounded-xl border border-white/20 hover:border-white/40 text-white font-semibold transition-all flex items-center justify-center gap-2 group"
        >
          <i className="fa-solid fa-triangle-exclamation group-hover:scale-110 transition-transform text-amber-400"></i>
          Resolver Erro de Domínio
        </button>
      </div>

      <footer className="mt-auto py-8 w-full flex flex-col items-center gap-4 text-slate-500 text-xs tracking-widest uppercase">
        <div className="flex gap-6 mb-2">
          <a href="#" className="hover:text-white transition-colors"><i className="fa-brands fa-linkedin-in text-lg"></i></a>
          <a href="#" className="hover:text-white transition-colors"><i className="fa-brands fa-whatsapp text-lg"></i></a>
        </div>
        <div>
          &copy; {new Date().getFullYear()} SisData Tech — sisdatatech.com.br
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
