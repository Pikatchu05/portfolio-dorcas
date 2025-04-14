import React, { useState, useEffect } from 'react';
import CodeIntro from './animation/CodeIntro';
import App from '../App';

const IntroWrapper: React.FC = () => {
  const [showIntro, setShowIntro] = useState(true);

  // Supprimons la fonctionnalité de localStorage pour toujours afficher l'intro
  useEffect(() => {
    // Supprimer les visites précédentes pour forcer l'affichage de l'intro
    localStorage.removeItem('hasVisitedPortfolio');
  }, []);

  const handleIntroComplete = () => {
    // Quand l'utilisateur clique, cacher l'intro et montrer le portfolio
    setShowIntro(false);
  };

  return (
    <>
      {showIntro && <CodeIntro onComplete={handleIntroComplete} />}
      <div style={{ 
        opacity: showIntro ? 0 : 1, 
        transition: 'opacity 0.5s ease',
        visibility: showIntro ? 'hidden' : 'visible'
      }}>
        <App />
      </div>
    </>
  );
};

export default IntroWrapper;
