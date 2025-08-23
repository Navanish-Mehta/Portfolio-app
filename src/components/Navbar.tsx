import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon, FaFileAlt, FaUser, FaCode } from 'react-icons/fa';
import { IconType } from 'react-icons';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background: ${props => props.theme === 'dark' ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)'};
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 480px) {
    padding: 0 1rem;
    height: 60px;
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.theme === 'dark' ? '#fff' : '#000'};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    gap: 0.3rem;
  }
`;

const LogoIcon = styled(motion.div)`
  color: #2563eb;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const LogoText = styled.span`
  background: linear-gradient(135deg, #2563eb 0%, #38bdf8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(motion.a)`
  color: ${props => props.theme === 'dark' ? '#fff' : '#000'};
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  
  &:hover {
    color: #2563eb;
  }

  @media (max-width: 1024px) {
    font-size: 0.9rem;
    gap: 0.3rem;
  }
`;

const ThemeToggle = styled(motion.button)`
  background: none;
  border: none;
  color: ${props => props.theme === 'dark' ? '#fff' : '#000'};
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 0.4rem;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${props => props.theme === 'dark' ? '#fff' : '#000'};
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;

  @media (max-width: 768px) {
    display: block;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
    padding: 0.4rem;
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;
  position: fixed;
  top: 70px;
  right: 0;
  bottom: 0;
  width: 250px;
  background: ${props => props.theme === 'dark' ? '#1e293b' : '#fff'};
  padding: 2rem;
  z-index: 1000;
  box-shadow: ${props => props.theme === 'dark' 
    ? '0 0 20px rgba(0, 0, 0, 0.3)' 
    : '0 0 20px rgba(0, 0, 0, 0.1)'};
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: flex;
  }

  @media (max-width: 480px) {
    width: 200px;
    padding: 1.5rem;
    top: 60px;
  }
`;

const MobileNavLink = styled(motion.a)`
  color: ${props => props.theme === 'dark' ? '#fff' : '#000'};
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  
  &:hover {
    color: #2563eb;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    gap: 0.3rem;
  }
`;

interface NavLink {
  href: string;
  text: string;
  icon: IconType | null;
}

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: NavLink[] = [
    { href: '#home', text: 'Home', icon: null },
    { href: '#about', text: 'About Me', icon: FaUser },
    { href: '#skills', text: 'Skills', icon: null },
    { href: '#projects', text: 'Projects', icon: null },
    { href: '#contact', text: 'Contact', icon: null },
    { href: 'https://drive.google.com/file/d/1H8ThhXMpEe0WsHQ2xNsrJgDvBpZtmofa/view?usp=sharing', text: 'Resume', icon: FaFileAlt },
  ];

  const renderIcon = (Icon: IconType | null) => {
    if (!Icon) return null;
    const IconElement = Icon as React.ComponentType<{ className?: string }>;
    return <IconElement />;
  };

  return (
    <>
      <Nav theme={theme} style={{ 
        background: isScrolled 
          ? theme === 'dark' 
            ? 'rgba(0, 0, 0, 0.95)' 
            : 'rgba(255, 255, 255, 0.95)'
          : theme === 'dark'
            ? 'rgba(0, 0, 0, 0.8)'
            : 'rgba(255, 255, 255, 0.8)',
        boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.1)' : 'none'
      }}>
        <Logo theme={theme}>
          <LogoIcon>
            {renderIcon(FaCode)}
          </LogoIcon>
          <LogoText>NM| Navanish Mehta</LogoText>
        </Logo>
        <NavLinks>
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              href={link.href}
              theme={theme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {renderIcon(link.icon)}
              {link.text}
            </NavLink>
          ))}
          <ThemeToggle
            onClick={toggleTheme}
            theme={theme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {theme === 'dark' ? renderIcon(FaSun) : renderIcon(FaMoon)}
          </ThemeToggle>
        </NavLinks>
        <MobileMenuButton
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          theme={theme}
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </MobileMenuButton>
      </Nav>
      <MobileMenu
        initial={{ opacity: 0, x: 100 }}
        animate={{ 
          opacity: isMobileMenuOpen ? 1 : 0,
          x: isMobileMenuOpen ? 0 : 100,
          display: isMobileMenuOpen ? 'flex' : 'none'
        }}
        transition={{ duration: 0.3 }}
        theme={theme}
      >
        {navLinks.map((link, index) => (
          <MobileNavLink
            key={index}
            href={link.href}
            theme={theme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {renderIcon(link.icon)}
            {link.text}
          </MobileNavLink>
        ))}
        <ThemeToggle
          onClick={toggleTheme}
          theme={theme}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {theme === 'dark' ? renderIcon(FaSun) : renderIcon(FaMoon)}
        </ThemeToggle>
      </MobileMenu>
    </>
  );
};

export default Navbar; 