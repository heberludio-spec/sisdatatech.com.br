
import React from 'react';

interface DeploymentGuideProps {
  onBack: () => void;
}

const DeploymentGuide: React.FC<DeploymentGuideProps> = ({ onBack }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 md:p-12 animate-in fade-in duration-500">
      <button 
        onClick={onBack}
        className="mb-8 text-sky-400 hover:text-sky-300 flex items-center gap-2 font-semibold transition-colors"
      >
        <i className="fa-solid fa-arrow-left"></i> Voltar para o Site
      </button>

      <div className="mb-12">
        <h2 className="text-3xl md:text-5xl font-black mb-4 text-white tracking-tight">
          Como Resolver o <span className="text-amber-400">Erro de DNS</span>
        </h2>
        <p className="text-slate-400 text-lg mb-6">
          Baseado no seu painel da Vercel, você precisa configurar os seguintes registros no seu provedor de domínio (ex: Registro.br):
        </p>
      </div>

      <div className="space-y-6 mb-12">
        {/* Registro para WWW */}
        <div className="glass-panel p-6 rounded-2xl border-sky-500/30">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-sky-500 text-white text-xs font-bold px-2 py-1 rounded">REGISTRO 1</span>
            <h3 className="text-xl font-bold text-white">Configurar o WWW</h3>
          </div>
          <div className="grid grid-cols-3 gap-4 bg-black/40 p-4 rounded-xl border border-white/5 font-mono text-sm">
            <div>
              <p className="text-slate-500 mb-1 uppercase text-[10px]">Tipo</p>
              <p className="text-sky-400">CNAME</p>
            </div>
            <div>
              <p className="text-slate-500 mb-1 uppercase text-[10px]">Nome/Host</p>
              <p className="text-white">www</p>
            </div>
            <div className="col-span-3 md:col-span-1">
              <p className="text-slate-500 mb-1 uppercase text-[10px]">Valor/Destino</p>
              <p className="text-white break-all">6c4f3806575791e0.vercel-dns-017.com.</p>
            </div>
          </div>
        </div>

        {/* Registro para Apex Domain */}
        <div className="glass-panel p-6 rounded-2xl border-amber-500/30">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded">REGISTRO 2</span>
            <h3 className="text-xl font-bold text-white">Configurar Domínio Principal</h3>
          </div>
          <p className="text-slate-400 text-sm mb-4 italic">No seu painel, o domínio 'sisdatatech.com.br' deve apontar para o IP da Vercel:</p>
          <div className="grid grid-cols-3 gap-4 bg-black/40 p-4 rounded-xl border border-white/5 font-mono text-sm">
            <div>
              <p className="text-slate-500 mb-1 uppercase text-[10px]">Tipo</p>
              <p className="text-amber-400">A</p>
            </div>
            <div>
              <p className="text-slate-500 mb-1 uppercase text-[10px]">Nome/Host</p>
              <p className="text-white">@ (ou vazio)</p>
            </div>
            <div className="col-span-3 md:col-span-1">
              <p className="text-slate-500 mb-1 uppercase text-[10px]">Valor/IP</p>
              <p className="text-white font-bold">76.76.21.21</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-amber-500/10 p-8 rounded-3xl border border-amber-500/20">
        <h3 className="text-xl font-bold text-amber-400 mb-4 flex items-center gap-2">
          <i className="fa-solid fa-clock"></i> Tempo de Espera
        </h3>
        <p className="text-slate-300 text-sm leading-relaxed">
          Após salvar no Registro.br ou provedor similar, pode levar de <strong>1 a 24 horas</strong> para que a alteração se propague. A Vercel atualizará automaticamente de "Configuração Inválida" para um check verde assim que detectar a mudança.
        </p>
      </div>
    </div>
  );
};

export default DeploymentGuide;
