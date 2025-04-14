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
              Voir mes projets
            </PrimaryButton>
            <SecondaryButton
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
            >
              Me contacter
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
  padding: 0 1rem;
`;

const HeroContent = styled.div`
  max-width: 800px;
  text-align: center;
  margin: 0 auto;
  width: 90%;
`;

const Greeting = styled.p`
  font-size: 1.7rem;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
  font-weight: 600;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
  background: rgba(0, 0, 0, 0.3);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  display: inline-block;
`;

const Name = styled.h1`
  font-size: 5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: white;
  text-shadow: 0 0 15px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 120, 255, 0.6);
  letter-spacing: 2px;
  -webkit-text-stroke: 1px var(--primary-color);
  
  @media screen and (max-width: 768px) {
    font-size: 3.5rem;
  }
`;

const Title = styled.h2`
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #ffffff;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  background: rgba(0, 0, 0, 0.3);
  padding: 0.5rem 1.5rem;
  border-radius: 8px;
  display: inline-block;
  
  @media screen and (max-width: 768px) {
    font-size: 1.7rem;
  }
`;

const Description = styled.p`
  font-size: 1.3rem;
  max-width: 600px;
  margin: 0 auto 2rem;
  color: #ffffff;
  text-shadow: 0 0 8px rgba(0, 0, 0, 0.7);
  background: rgba(0, 0, 0, 0.2);
  padding: 1rem 1.5rem;
  border-radius: 8px;
  font-weight: 500;
  line-height: 1.5;
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
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  font-weight: 500;
  transition: var(--transition);
  cursor: pointer;
  
  &:hover {
    background-color: var(--accent-color);
    transform: translateY(-3px);
  }
`;

const SecondaryButton = styled(Link)`
  background-color: transparent;
  color: var(--primary-color);
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  font-weight: 500;
  border: 2px solid var(--primary-color);
  transition: var(--transition);
  cursor: pointer;
  
  &:hover {
    background-color: var(--primary-color);
    color: white;
    transform: translateY(-3px);
  }
`;

const ScrollDown = styled(Link)`
  position: absolute;
  bottom: 2rem;
  font-size: 1.5rem;
  color: var(--primary-color);
  animation: bounce 2s infinite;
  cursor: pointer;
  
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
