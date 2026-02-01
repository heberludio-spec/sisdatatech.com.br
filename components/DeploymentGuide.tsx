
import React from 'react';

interface DeploymentGuideProps {
  onBack: () => void;
}

const DeploymentGuide: React.FC<DeploymentGuideProps> = ({ onBack }) => {
  const steps = [
    {
      title: "Subir para o GitHub",
      description: "Crie um repositório vazio no GitHub e use os comandos 'git add .', 'git commit' e 'git push' para enviar os arquivos.",
      icon: "fa-brands fa-github"
    },
    {
      title: "Conectar na Vercel",
      description: "No painel da Vercel, clique em 'Add New' > 'Project' e autorize o acesso ao seu GitHub.",
      icon: "fa-solid fa-cloud-arrow-up"
    },
    {
      title: "Importar e Build",
      description: "Selecione o repositório. A Vercel lerá o 'package.json' e fará o build automaticamente em segundos.",
      icon: "fa-solid fa-gears"
    },
    {
      title: "Apontar o Domínio",
      description: "Vá em Settings > Domains, adicione 'sisdatateche.com.br' e siga as instruções para alterar o DNS no seu provedor.",
      icon: "fa-solid fa-globe"
    }
  ];

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
          Pronto para o <span className="text-sky-400">Deploy</span>
        </h2>
        <p className="text-slate-400 text-lg">
          Já adicionei o <code className="text-sky-300 bg-sky-500/10 px-1 rounded">package.json</code> e o <code className="text-sky-300 bg-sky-500/10 px-1 rounded">vercel.json</code> para você. Basta seguir os passos abaixo:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {steps.map((step, idx) => (
          <div key={idx} className="glass-panel p-6 rounded-2xl border-slate-700/50 hover:border-sky-500/50 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center mb-4 group-hover:bg-sky-500/20 transition-colors">
              <i className={`${step.icon} text-sky-400 text-xl`}></i>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{idx + 1}. {step.title}</h3>
            <p className="text-slate-400 leading-relaxed text-sm">{step.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-sky-900/40 to-indigo-900/40 p-8 rounded-3xl border border-sky-500/20">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <i className="fa-solid fa-circle-check text-green-400"></i> Dica de Publicação
        </h3>
        <p className="text-slate-300 mb-6 text-sm">
          Como este site usa a imagem <strong>logo.png</strong>, certifique-se de que o arquivo de imagem está na mesma pasta que o <strong>index.html</strong> antes de subir para o GitHub.
        </p>
        <div className="flex gap-4">
          <a 
            href="https://vercel.com/docs/concepts/get-started/deploy-git" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sky-400 underline hover:text-sky-300 font-semibold text-sm"
          >
            Guia Git na Vercel
          </a>
        </div>
      </div>
    </div>
  );
};

export default DeploymentGuide;
