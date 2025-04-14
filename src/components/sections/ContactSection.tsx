import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Icon from '../utils/Icon';

const ContactSection: React.FC = () => {
  return (
    <ContactContainer id="contact">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Me Contacter
        </motion.h2>
        
        <ContactContentCentered>
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ContactInfo>
              <h3>Me Contacter</h3>
              <p>
                N'hésitez pas à me contacter pour discuter de vos projets, 
                opportunités professionnelles ou simplement pour échanger sur le 
                développement web et l'intelligence artificielle.
              </p>
              
              <ContactDetailsList>
                <ContactDetailItem onClick={() => window.location.href = 'mailto:d.sivuila@suprh.com'}>
                  <CodeIcon>
                    <span>&lt;</span>Contact<span>&nbsp;/&gt;</span>
                  </CodeIcon>
                  <span>d.sivuila@suprh.com</span>
                </ContactDetailItem>
              </ContactDetailsList>
              
              <SocialLinks>
                <SocialLink href="https://www.linkedin.com/in/dorcas-sivuila-9697762a1" target="_blank" rel="noopener noreferrer">
                  <Icon icon="FaLinkedin" />
                </SocialLink>
                <SocialLink href="https://github.com/Pikatchu05" target="_blank" rel="noopener noreferrer">
                  <Icon icon="FaGithub" />
                </SocialLink>
              </SocialLinks>
            </ContactInfo>
          </motion.div>
        </ContactContentCentered>
      </div>
    </ContactContainer>
  );
};

const ContactContainer = styled.section`
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  padding: 5rem 0;
  
  .container {
    text-align: center;
  }
  
  .section-title {
    margin-left: auto;
    margin-right: auto;
    display: inline-block;
  }
`;

const ContactContentCentered = styled.div`
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
  
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const ContactInfo = styled.div`
  h3 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    position: relative;
    
    &:after {
      content: '';
      position: absolute;
      width: 40px;
      height: 3px;
      background-color: var(--primary-color);
      bottom: -10px;
      left: 0;
    }
  }
  
  p {
    margin-bottom: 2rem;
    color: white;
    line-height: 1.8;
    font-weight: 500;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
    background: rgba(0, 0, 0, 0.2);
    padding: 1rem;
    border-radius: 8px;
  }
`;

const ContactDetailsList = styled.ul`
  list-style: none;
  margin-bottom: 2rem;
`;

const ContactDetailItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  color: white;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
  background: rgba(0, 0, 0, 0.12);
  padding: 0.9rem 1.2rem;
  border-radius: 10px;
  transition: var(--transition);
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  
  &:hover {
    background: rgba(94, 124, 226, 0.15);
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.08);
  }
  
  span {
    font-size: 1.05rem;
    font-weight: 500;
  }
`;

const CodeIcon = styled.div`
  display: flex;
  align-items: center;
  color: var(--primary-color);
  font-family: 'Consolas', monospace;
  font-size: 1.1rem;
  font-weight: 600;
  margin-right: 1rem;
  
  span {
    color: var(--secondary-color);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  width: 48px;
  height: 48px;
  background-color: rgba(255, 255, 255, 0.9);
  color: var(--primary-color);
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  transition: var(--transition);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  
  &:hover {
    background-color: var(--primary-color);
    color: white;
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }
`;





export default ContactSection;
