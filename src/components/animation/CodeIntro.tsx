import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

interface CodeIntroProps {
  onComplete: () => void;
}

const CodeIntro: React.FC<CodeIntroProps> = ({ onComplete }) => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  const fullText = '<Découvre moi />';
  
  useEffect(() => {
    let index = 0;
    
    // Animation d'écriture du texte caractère par caractère
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
        setIsComplete(true);
      }
    }, 120); // Vitesse d'écriture
    
    // Curseur clignotant
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);
  
  // Quand l'animation est complète, permettre le clic pour continuer
  useEffect(() => {
    if (isComplete) {
      const timer = setTimeout(() => {
        // Ajouter une petite pause avant d'ajouter la classe pulsate
        document.querySelector('.code-container')?.classList.add('pulsate');
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [isComplete]);
  
  const handleClick = () => {
    if (isComplete) {
      // Transition de sortie
      document.querySelector('.code-container')?.classList.add('exit');
      
      // Attendre la fin de l'animation de sortie
      setTimeout(() => {
        onComplete();
      }, 800);
    }
  };
  
  return (
    <IntroContainer>
      <CodeContainer 
        className="code-container"
        onClick={handleClick} 
        role="button"
        tabIndex={0}
        aria-label="Cliquez pour découvrir le portfolio"
      >
        <CodeText>
          {text}
          {showCursor && <Cursor>|</Cursor>}
        </CodeText>
        {isComplete && <ClickMessage>Cliquez pour continuer</ClickMessage>}
      </CodeContainer>
    </IntroContainer>
  );
};

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const pulsate = keyframes`
  0% { transform: scale(1); box-shadow: 0 0 10px rgba(94, 124, 226, 0.5); }
  50% { transform: scale(1.05); box-shadow: 0 0 20px rgba(94, 124, 226, 0.8); }
  100% { transform: scale(1); box-shadow: 0 0 10px rgba(94, 124, 226, 0.5); }
`;

const fadeOut = keyframes`
  0% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(-30px); }
`;

const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(10px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const IntroContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(15, 23, 42, 0.97);
  z-index: 1000;
`;

const CodeContainer = styled.div`
  background-color: rgba(30, 41, 59, 0.8);
  padding: 2rem 2.5rem;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(94, 124, 226, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(30, 41, 59, 0.9);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
  }
  
  &.pulsate {
    animation: ${pulsate} 1.5s ease-in-out infinite;
  }
  
  &.exit {
    animation: ${fadeOut} 0.8s ease-in-out forwards;
  }
`;

const CodeText = styled.div`
  font-family: 'Consolas', monospace;
  font-size: 2.5rem;
  color: #5e7ce2;
  font-weight: 600;
  white-space: nowrap;
  
  /* Couleur pour les balises */
  span.tag {
    color: #7f8de1;
  }
`;

const Cursor = styled.span`
  animation: ${blink} 1s infinite;
  color: #5e7ce2;
  font-weight: normal;
`;

const ClickMessage = styled.div`
  margin-top: 1.5rem;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  animation: ${fadeIn} 1s ease-in-out forwards;
`;

export default CodeIntro;
