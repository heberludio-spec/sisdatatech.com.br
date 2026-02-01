
import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import DeploymentGuide from './components/DeploymentGuide';

const App: React.FC = () => {
  const [showGuide, setShowGuide] = useState(false);

  return (
    <div className="min-h-screen relative selection:bg-sky-500 selection:text-white">
      {showGuide ? (
        <DeploymentGuide onBack={() => setShowGuide(false)} />
      ) : (
        <LandingPage onShowGuide={() => setShowGuide(true)} />
      )}
      
      {/* Background Decor */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-sky-500/10 rounded-full blur-[120px] animate-glow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-amber-500/10 rounded-full blur-[120px] animate-glow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#1e293b 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>
    </div>
  );
};

export default App;
