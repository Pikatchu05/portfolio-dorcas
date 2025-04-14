import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

interface PaperBallIntroProps {
  onComplete: () => void;
}

const PaperBallIntro: React.FC<PaperBallIntroProps> = ({ onComplete }) => {
  const [isUnfolding, setIsUnfolding] = useState(false);
  
  const handleClick = () => {
    console.log('Papier cliqué!');
    if (!isUnfolding) {
      setIsUnfolding(true);
      console.log('Animation de dépliage démarrée');
      // Lancer l'animation puis appeler onComplete à la fin
      setTimeout(() => {
        console.log('Animation terminée, affichage du portfolio');
        onComplete();
      }, 2000); // Temps de l'animation de dépliage
    }
  };

  return (
    <IntroContainer>
      <PaperBallWrapper>
        <PaperBall 
          className={isUnfolding ? 'unfolding' : ''}
          onClick={handleClick}
          role="button"
          tabIndex={0}
          aria-label="Cliquez pour découvrir le portfolio"
          initial={{ scale: 0.9 }}
          animate={{ 
            scale: isUnfolding ? [0.9, 1.1, 10] : [0.9, 1, 0.97, 1],
            rotate: isUnfolding ? [0, 10, 0] : [0, -2, 2, 0]
          }}
          transition={{ 
            duration: isUnfolding ? 2 : 3, 
            repeat: isUnfolding ? 0 : Infinity,
            repeatType: "reverse"
          }}
        >
          {/* Multiples textures de papier */}
          <PaperTexture className="main" />
          <PaperCrinkle style={{ transform: 'rotate(15deg) translate(-5%, -2%)', opacity: 0.7 }} />
          <PaperCrinkle style={{ transform: 'rotate(45deg) translate(10%, -15%)', opacity: 0.5 }} />
          <PaperCrinkle style={{ transform: 'rotate(75deg) translate(-12%, 8%)', opacity: 0.6 }} />
          <PaperCrinkle style={{ transform: 'rotate(105deg) translate(15%, 10%)', opacity: 0.7 }} />
          <PaperCrinkle style={{ transform: 'rotate(135deg) translate(-8%, 15%)', opacity: 0.5 }} />
          <PaperCrinkle style={{ transform: 'rotate(165deg) translate(5%, -18%)', opacity: 0.6 }} />
          <PaperCrinkle style={{ transform: 'rotate(195deg) translate(-18%, -5%)', opacity: 0.4 }} />
          <PaperCrinkle style={{ transform: 'rotate(225deg) translate(12%, 5%)', opacity: 0.7 }} />
          <PaperCrinkle style={{ transform: 'rotate(255deg) translate(-5%, -10%)', opacity: 0.5 }} />
          <PaperCrinkle style={{ transform: 'rotate(285deg) translate(8%, 18%)', opacity: 0.6 }} />
          <PaperCrinkle style={{ transform: 'rotate(315deg) translate(-15%, -8%)', opacity: 0.7 }} />
          <PaperCrinkle style={{ transform: 'rotate(345deg) translate(18%, -2%)', opacity: 0.5 }} />
          
          {/* Creux et bosses */}
          <PaperDent style={{ top: '20%', left: '30%', width: '40%', height: '25%', transform: 'rotate(15deg)' }} />
          <PaperDent style={{ top: '50%', left: '15%', width: '30%', height: '20%', transform: 'rotate(-25deg)' }} />
          <PaperDent style={{ top: '40%', left: '60%', width: '25%', height: '35%', transform: 'rotate(55deg)' }} />
          
          {/* Plis visibles */}
          <PaperFold style={{ top: '30%', left: '10%', width: '80%', transform: 'rotate(28deg)' }} />
          <PaperFold style={{ top: '70%', left: '20%', width: '60%', transform: 'rotate(-32deg)' }} />
          <PaperFold style={{ top: '50%', left: '15%', width: '70%', transform: 'rotate(8deg)' }} />
          <PaperFold style={{ top: '45%', left: '25%', width: '50%', transform: 'rotate(-58deg)' }} />
          <PaperFold style={{ top: '25%', left: '30%', width: '40%', transform: 'rotate(62deg)' }} />
          
          {/* Texte au centre avec effet 3D */}
          <DiscoverTextContainer>
            <DiscoverText
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              style={{ opacity: isUnfolding ? 0 : 1 }}
            >
              Découvre-moi
            </DiscoverText>
          </DiscoverTextContainer>
        </PaperBall>
      </PaperBallWrapper>
    </IntroContainer>
  );
};

const IntroContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e7eb 100%);
  z-index: 1000;
  overflow: hidden;
`;

const PaperBallWrapper = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PaperBall = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
  border-radius: 50%;
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.2),
    inset 0 0 30px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  overflow: hidden;
  transform-style: preserve-3d;
  perspective: 1000px;
  
  /* Améliorer la visibilité du clic */
  &:active {
    transform: scale(0.98);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.25);
  }
  
  &.unfolding {
    border-radius: 0;
    transform-origin: center;
  }
  
  &:hover {
    box-shadow: 
      0 25px 50px rgba(0, 0, 0, 0.3),
      inset 0 0 40px rgba(0, 0, 0, 0.2);
  }
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    background: rgba(0, 0, 0, 0.05);
    transition: all 0.5s ease;
  }
  
  &::before {
    top: 25%;
    left: 20%;
    width: 60%;
    height: 1px;
    transform: rotate(-15deg);
  }
  
  &::after {
    bottom: 30%;
    right: 20%;
    width: 50%;
    height: 1px;
    transform: rotate(25deg);
  }
  
  &.unfolding::before,
  &.unfolding::after {
    opacity: 0;
  }
`;

const PaperTexture = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    to bottom right,
    rgba(0, 0, 0, 0.02) 0%,
    rgba(0, 0, 0, 0) 20%,
    rgba(0, 0, 0, 0.01) 60%,
    rgba(0, 0, 0, 0.03) 100%
  );
  pointer-events: none;
  
  &.main {
    background-color: #f8f8f8;
    background-image: 
      repeating-linear-gradient(
        45deg,
        rgba(0, 0, 0, 0.01),
        rgba(0, 0, 0, 0.01) 10px,
        rgba(0, 0, 0, 0.03) 10px,
        rgba(0, 0, 0, 0.03) 20px
      );
  }
`;

const PaperCrinkle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(
      circle at 50% 50%, 
      rgba(0, 0, 0, 0) 0%, 
      rgba(0, 0, 0, 0.02) 40%, 
      rgba(0, 0, 0, 0.04) 50%,
      rgba(0, 0, 0, 0.02) 60%,
      rgba(0, 0, 0, 0) 100%
    );
  pointer-events: none;
`;

const PaperDent = styled.div`
  position: absolute;
  border-radius: 50%;
  box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.15);
  pointer-events: none;
`;

const PaperFold = styled.div`
  position: absolute;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  pointer-events: none;
`;

const DiscoverTextContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  z-index: 10;
`;

const DiscoverText = styled(motion.div)`
  font-size: 2rem;
  font-weight: 700;
  color: #1a1a1a;
  text-align: center;
  transition: opacity 0.3s ease;
  white-space: nowrap;
  text-shadow: 
    0 1px 0 #fff,
    0 2px 0 #fff,
    0 -1px 0 #fff,
    1px 0 0 #fff,
    -1px 0 0 #fff;
  letter-spacing: 0.05em;
  background-image: 
    linear-gradient(
      to bottom,
      #444 0%,
      #000 100%
    );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  padding: 10px 20px;
  border-radius: 50px;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.2);
`;

export default PaperBallIntro;
