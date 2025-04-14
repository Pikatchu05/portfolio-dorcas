import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import Icon from '../utils/Icon';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <ScrollToTop to="home" smooth={true} duration={500}>
        <Icon icon="FaArrowUp" />
      </ScrollToTop>
      
      <FooterContent>
        <FooterLogo>DS</FooterLogo>
        
        <FooterLinks>
          <FooterLink to="home" smooth={true} duration={500} offset={-70}>Accueil</FooterLink>
          <FooterLink to="about" smooth={true} duration={500} offset={-70}>À Propos</FooterLink>
          <FooterLink to="projects" smooth={true} duration={500} offset={-70}>Projets</FooterLink>
          <FooterLink to="contact" smooth={true} duration={500} offset={-70}>Contact</FooterLink>
        </FooterLinks>
        
        <FooterCopyright>
          <p>© {currentYear} Dorcas Sivuila. Tous droits réservés.</p>
          <p>Réalisé avec <HeartIcon><Icon icon="FaHeart" /></HeartIcon> en React</p>
        </FooterCopyright>
      </FooterContent>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  padding: 3rem 0 2rem;
  position: relative;
`;

const ScrollToTop = styled(Link)`
  position: absolute;
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 50px;
  background-color: var(--primary-color);
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: var(--transition);
  box-shadow: var(--shadow);
  
  &:hover {
    background-color: var(--accent-color);
    transform: translateX(-50%) translateY(-5px);
  }
`;

const FooterContent = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const FooterLogo = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 2rem;
  
  @media screen and (max-width: 480px) {
    gap: 1rem;
  }
`;

const FooterLink = styled(Link)`
  color: var(--text-color);
  cursor: pointer;
  transition: var(--transition);
  
  &:hover {
    color: var(--primary-color);
  }
`;

const FooterCopyright = styled.div`
  color: var(--text-light);
  font-size: 0.9rem;
  
  p {
    margin-bottom: 0.5rem;
  }
`;

const HeartIcon = styled.span`
  color: #e25555;
  display: inline-block;
  animation: pulse 1.5s ease infinite;
  
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.3); }
    100% { transform: scale(1); }
  }
`;

export default Footer;
