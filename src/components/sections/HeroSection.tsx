import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import Icon from '../utils/Icon';

const HeroSection: React.FC = () => {
  return (
    <HeroContainer id="home">
      <HeroContent>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Greeting>Bonjour, je suis</Greeting>
          <Name>Dorcas Sivuila</Name>
          <Title>Développeuse React & Ingénieure en Intelligence Artificielle</Title>
          <Description>
            Je crée des expériences web modernes et des solutions d'intelligence artificielle innovantes.
          </Description>
          <ButtonContainer>
            <PrimaryButton
              to="projects"
              smooth={true}
              duration={500}
              offset={-70}
            >
              Projets
            </PrimaryButton>
            <SecondaryButton
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
            >
              Contact
            </SecondaryButton>
          </ButtonContainer>
        </motion.div>
      </HeroContent>
      <ScrollDown
        to="about"
        smooth={true}
        duration={500}
        offset={-70}
      >
        <Icon icon="FaArrowDown" />
      </ScrollDown>
    </HeroContainer>
  );
};

const HeroContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: transparent;
  position: relative;
`;

const HeroContent = styled.div`
  max-width: 800px;
  text-align: center;
  margin: 0 auto;
  width: 90%;
`;



const Name = styled.h1`
  font-size: 6rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: white;
  text-shadow: 0 0 15px rgba(0, 200, 255, 0.6);
  letter-spacing: 2px;
  
  @media screen and (max-width: 768px) {
    font-size: 3.5rem;
  }
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, #4ae0ff, var(--accent-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;



const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  
  @media screen and (max-width: 480px) {
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
  }
`;

const PrimaryButton = styled(Link)`
  background-color: var(--primary-color);
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 30px;
  font-weight: 600;
  transition: var(--transition);
  cursor: pointer;
  letter-spacing: 1px;
  text-transform: uppercase;
  
  &:hover {
    background-color: var(--accent-color);
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const SecondaryButton = styled(Link)`
  background-color: transparent;
  color: var(--primary-color);
  padding: 0.8rem 2rem;
  border-radius: 30px;
  font-weight: 600;
  border: 2px solid var(--primary-color);
  transition: var(--transition);
  cursor: pointer;
  letter-spacing: 1px;
  text-transform: uppercase;
  
  &:hover {
    background-color: var(--primary-color);
    color: white;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const ScrollDown = styled(Link)`
  position: absolute;
  bottom: 2rem;
  font-size: 1.5rem;
  color: var(--primary-color);
  animation: bounce 2s infinite;
  cursor: pointer;
  filter: drop-shadow(0 0 8px var(--primary-color));
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-20px);
    }
    60% {
      transform: translateY(-10px);
    }
  }
`;

export default HeroSection;
