import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import Icon from '../utils/Icon';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    if (isOpen) setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <NavbarContainer scrolled={scrolled}>
      <NavbarWrapper>
        <Logo>
          <Link to="home" smooth={true} duration={500} onClick={closeMenu}>DS</Link>
        </Logo>
        <MobileIcon onClick={toggleMenu}>
          {isOpen ? <Icon icon="FaTimes" /> : <Icon icon="FaBars" />}
        </MobileIcon>
        <NavMenu isOpen={isOpen}>
          <NavItem>
            <NavLink to="home" smooth={true} duration={500} offset={-70} onClick={closeMenu}>
              Accueil
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="about" smooth={true} duration={500} offset={-70} onClick={closeMenu}>
              À Propos
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="projects" smooth={true} duration={500} offset={-70} onClick={closeMenu}>
              Projets
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="contact" smooth={true} duration={500} offset={-70} onClick={closeMenu}>
              Contact
            </NavLink>
          </NavItem>
        </NavMenu>
      </NavbarWrapper>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.nav<{ scrolled: boolean }>`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: ${({ scrolled }) => (scrolled ? 'var(--background-color)' : 'transparent')};
  box-shadow: ${({ scrolled }) => (scrolled ? 'var(--shadow)' : 'none')};
  transition: var(--transition);
`;

const NavbarWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
`;

const Logo = styled.div`
  a {
    color: var(--primary-color);
    font-size: 1.8rem;
    font-weight: 700;
    text-decoration: none;
    cursor: pointer;
  }
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--primary-color);
  }
`;

const NavMenu = styled.ul<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    background-color: var(--background-color);
    transition: all 0.3s ease;
    justify-content: flex-start;
    padding-top: 2rem;
  }
`;

const NavItem = styled.li`
  height: 80px;

  @media screen and (max-width: 768px) {
    height: 60px;
  }
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  color: var(--text-color);
  transition: var(--transition);

  &:hover, &.active {
    color: var(--primary-color);
    border-bottom: 3px solid var(--primary-color);
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    &:hover, &.active {
      border-bottom: none;
    }
  }
`;

export default Navbar;
