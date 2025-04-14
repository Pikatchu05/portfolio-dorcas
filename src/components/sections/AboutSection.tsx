import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Icon from '../utils/Icon';

const AboutSection: React.FC = () => {
  return (
    <AboutContainer id="about">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          À Propos de Moi
        </motion.h2>
        
        <AboutContent>
          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <AboutImage>
              <div className="image-placeholder">
                {/* Image placeholder - in a real scenario, this would be replaced with an actual image */}
                <span></span>
              </div>
            </AboutImage>
          </motion.div>
          
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <AboutDescription>
              <p>
                Je suis Dorcas Sivuila, développeuse passionnée spécialisée en intelligence artificielle et dans les technologies qui en découlent.
                Mon parcours technique est guidé par une fascination pour l'IA et sa capacité à transformer des idées en solutions intelligentes et interactives.
              </p>
              <p>
                Je conçois des applications web intelligentes en combinant l'IA à des outils modernes tels que React, FastAPI, ou encore des bibliothèques de traitement du langage naturel et de machine learning.
              </p>
              <p>
                Mon objectif : créer des solutions digitales performantes, intuitives et capables d'évoluer avec les besoins de demain.
              </p>
            </AboutDescription>
          </motion.div>
        </AboutContent>
        
        <SkillsContainer>
          <h3>Mes Compétences</h3>
          <SkillsGrid>
            <motion.div
              className="skill-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <SkillCard>
                <SkillIcon>
                  <Icon icon="FaReact" />
                </SkillIcon>
                <h4>React & Frontend</h4>
                <p>Développement d'interfaces utilisateur modernes avec React, TypeScript, et styled-components</p>
              </SkillCard>
            </motion.div>
            
            <motion.div
              className="skill-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <SkillCard>
                <SkillIcon>
                  <Icon icon="FaBrain" />
                </SkillIcon>
                <h4>Intelligence Artificielle</h4>
                <p>Intégration de solutions d'IA dans des applications web, développement de chatbots et d'assistants virtuels</p>
              </SkillCard>
            </motion.div>
            
            <motion.div
              className="skill-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <SkillCard>
                <SkillIcon>
                  <Icon icon="FaCode" />
                </SkillIcon>
                <h4>Développement Full Stack</h4>
                <p>Création d'applications web complètes avec Node.js, Express et bases de données modernes</p>
              </SkillCard>
            </motion.div>
            
            <motion.div
              className="skill-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <SkillCard>
                <SkillIcon>
                  <Icon icon="FaMobileAlt" />
                </SkillIcon>
                <h4>Design Responsive</h4>
                <p>Création d'interfaces adaptatives pour une expérience optimale sur tous les appareils</p>
              </SkillCard>
            </motion.div>
          </SkillsGrid>
        </SkillsContainer>
      </div>
    </AboutContainer>
  );
};

const AboutContainer = styled.section`
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  padding: 5rem 0;
  
  .section-title {
    color: white;
    font-size: 2.8rem;
    font-weight: 700;
    text-shadow: 0 0 15px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 120, 255, 0.6);
    margin-bottom: 3rem;
    background: rgba(0, 0, 0, 0.4);
    padding: 0.8rem 2rem;
    border-radius: 10px;
    display: inline-block;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
  
  .container {
    text-align: center;
  }
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`;

const AboutImage = styled.div`
  .image-placeholder {
    width: 300px;
    height: 300px;
    background-color: var(--light-gray);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
      opacity: 0.6;
    }
    
    span {
      font-size: 4rem;
      font-weight: 700;
      color: white;
      position: relative;
      z-index: 1;
    }
  }
`;

const AboutDescription = styled.div`
  background: rgba(0, 0, 0, 0.4);
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  color: white;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
  
  p {
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
    line-height: 1.8;
    color: white;
    text-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
    font-weight: 500;
  }
`;

const SkillsContainer = styled.div`
  margin-top: 4rem;
  
  h3 {
    text-align: center;
    font-size: 2rem;
    color: white;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
    background: rgba(0, 0, 0, 0.3);
    padding: 0.5rem 1rem;
    border-radius: 8px;
    display: inline-block;
    margin-bottom: 2rem;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const SkillCard = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: var(--transition);
  height: 100%;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  h4 {
    font-size: 1.5rem;
    margin: 1rem 0;
    color: white;
    text-shadow: 0 0 8px rgba(0, 0, 0, 0.7);
    font-weight: 600;
  }
  
  p {
    color: rgba(255, 255, 255, 0.95);
    font-size: 1.1rem;
    text-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
    font-weight: 500;
  }
`;

const SkillIcon = styled.div`
  font-size: 3rem;
  color: var(--primary-color);
  filter: drop-shadow(0 0 8px rgba(0, 120, 255, 0.6));
`;

export default AboutSection;
