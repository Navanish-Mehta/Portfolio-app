import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { FaEnvelope } from 'react-icons/fa6';

const ButtonContainer = styled(motion.div)`
  position: fixed;
  left: 2rem;
  bottom: 2rem;
  z-index: 1000;
  perspective: 1000px;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Button = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: ${props => props.theme === 'dark' 
    ? 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)'
    : 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)'};
  color: white;
  font-weight: 600;
  border-radius: 30px;
  text-decoration: none;
  box-shadow: ${props => props.theme === 'dark'
    ? '0 8px 32px rgba(37,99,235,0.3), 0 2px 16px rgba(0,0,0,0.2)'
    : '0 8px 32px rgba(37,99,235,0.2), 0 2px 16px rgba(0,0,0,0.1)'};
  transform-style: preserve-3d;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }

  &:hover::before {
    transform: translateX(100%);
  }

  &:hover {
    transform: translateY(-5px) rotateX(10deg) rotateY(10deg);
    box-shadow: ${props => props.theme === 'dark'
      ? '0 12px 40px rgba(37,99,235,0.4), 0 4px 20px rgba(0,0,0,0.3)'
      : '0 12px 40px rgba(37,99,235,0.3), 0 4px 20px rgba(0,0,0,0.2)'};
  }

  &:active {
    transform: translateY(-2px) rotateX(5deg) rotateY(5deg);
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
`;

const ButtonText = styled(motion.span)`
  font-size: 1rem;
  font-weight: 600;
  transform-style: preserve-3d;
  transition: transform 0.3s ease;

  ${Button}:hover & {
    transform: translateZ(20px);
  }
`;

const IconWrapper = styled(motion.div)`
  font-size: 1.2rem;
  transform-style: preserve-3d;
  transition: transform 0.3s ease;

  ${Button}:hover & {
    transform: rotateY(180deg);
  }
`;

const EnvelopeIcon = FaEnvelope as React.ElementType;

const HireMeButton = () => {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroHeight = window.innerHeight;
      setIsVisible(scrollPosition > heroHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [isVisible, controls]);

  return (
    <ButtonContainer
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      <Button
        href="mailto:navanishmehta@gmail.com"
        theme={theme}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => controls.start({ scale: 1.1 })}
        onHoverEnd={() => controls.start({ scale: 1 })}
      >
        <IconWrapper>
          <EnvelopeIcon />
        </IconWrapper>
        <ButtonText>
          Hire Me
        </ButtonText>
      </Button>
    </ButtonContainer>
  );
};

export default HireMeButton; 