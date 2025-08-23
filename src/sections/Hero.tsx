import React, { Suspense } from 'react';
import styled from 'styled-components';
import { motion, HTMLMotionProps } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { useTheme } from '../context/ThemeContext';
import Projects from './Projects';
import * as THREE from 'three';

type ThemeProps = {
  theme: 'dark' | 'light';
};

type StyledMotionProps = HTMLMotionProps<"div"> & ThemeProps;
type StyledMotionTitleProps = HTMLMotionProps<"h1"> & ThemeProps;
type StyledMotionSubtitleProps = HTMLMotionProps<"p"> & ThemeProps;

const SectionWrapper = styled.section<ThemeProps>`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  margin-top: 2.5rem;
  padding: 2rem;
  position: relative;
  background: ${props => props.theme === 'dark'
    ? 'linear-gradient(135deg, #23243a 0%, #181c2f 100%)'
    : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'};
  border-radius: 28px;
  box-shadow: ${props => props.theme === 'dark'
    ? '0 8px 32px rgba(37,99,235,0.13), 0 2px 16px #0002'
    : '0 8px 32px rgba(0,0,0,0.1), 0 2px 16px rgba(0,0,0,0.05)'};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 1.5rem;
    margin-top: 2rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    margin-top: 1.5rem;
    border-radius: 20px;
  }
`;

const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    gap: 3rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  @media (max-width: 480px) {
    gap: 1.5rem;
  }
`;

const Card = styled(motion.div)<StyledMotionProps>`
  background: ${props => props.theme === 'dark'
    ? 'linear-gradient(135deg, #23243a 0%, #181c2f 100%)'
    : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'};
  border-radius: 20px;
  padding: 2rem;
  box-shadow: ${props => props.theme === 'dark'
    ? '0 8px 32px rgba(37,99,235,0.13), 0 2px 16px #0002'
    : '0 8px 32px rgba(0,0,0,0.1), 0 2px 16px rgba(0,0,0,0.05)'};
  transition: all 0.3s ease;
  transform-style: preserve-3d;
  perspective: 1000px;
  position: relative;
  width: 100%;

  &:hover {
    transform: translateY(-5px) rotateX(5deg) rotateY(5deg);
    box-shadow: ${props => props.theme === 'dark'
      ? '0 12px 40px rgba(37,99,235,0.2), 0 4px 20px #0003'
      : '0 12px 40px rgba(0,0,0,0.15), 0 4px 20px rgba(0,0,0,0.1)'};
  }
`;

const SocialRow = styled.div`
  display: flex;
  gap: 1.1rem;
  position: absolute;
  top: 2.2rem;
  right: 2.5rem;
`;

const SocialIcon = styled.a`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: linear-gradient(135deg, #2563eb 60%, #38bdf8 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.5rem;
  box-shadow: 0 2px 8px #2563eb22;
  transition: background 0.2s, transform 0.2s;

  &:hover {
    background: linear-gradient(135deg, #38bdf8 60%, #2563eb 100%);
    transform: scale(1.13);
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  @media (max-width: 768px) {
    gap: 2rem;
  }

  @media (max-width: 480px) {
    gap: 1.5rem;
  }
`;

const Title = styled(motion.h1)<StyledMotionTitleProps>`
  color: ${props => props.theme === 'dark' ? '#fff' : '#000'};
  font-size: 4rem;
  font-weight: 800;
  text-align: center;
  line-height: 1.2;
  margin-bottom: 1rem;
  transition: color 0.3s ease;

  @media (max-width: 1024px) {
    font-size: 3.5rem;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.p)<StyledMotionSubtitleProps>`
  color: ${props => props.theme === 'dark' ? '#bfc6d8' : '#4a5568'};
  font-size: 1.5rem;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  transition: color 0.3s ease;

  @media (max-width: 1024px) {
    font-size: 1.3rem;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const CanvasCol = styled.div`
  width: 100%;
  height: 80vh;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CTAButton = styled(motion.button)`
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
  color: #fff;
  border: none;
  border-radius: 12px;
  padding: 1rem 2.5rem;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  transform-style: preserve-3d;
  perspective: 1000px;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 0.9rem 2rem;
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    padding: 0.8rem 1.8rem;
    font-size: 1rem;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    transform: translateY(-2px) rotateX(5deg);
    box-shadow: 0 8px 20px rgba(37,99,235,0.3);
  }

  &:active:not(:disabled) {
    transform: translateY(0) rotateX(0);
  }
`;

const ModelContainer = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  background: #0f172a;
  border-radius: 20px;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 350px;
  }

  @media (max-width: 480px) {
    height: 300px;
    border-radius: 15px;
  }
`;

function PlanetModel(props: any) {
  const { scene } = useGLTF('./models/planet/textures/scene.gltf');
  // Fix texture paths for Vite/public
  scene.traverse((object) => {
    if (object.type === 'Mesh') {
      const mesh = object as THREE.Mesh;
      const material = mesh.material;
      if (Array.isArray(material)) {
        material.forEach(mat => {
          const matAny = mat as any;
          if (matAny.map && typeof matAny.map.image?.src === 'string' && !matAny.map.image.src.startsWith('http')) {
            matAny.map.image.src = './models/planet/textures/textures/' + matAny.map.image.src.split('/').pop();
            matAny.map.needsUpdate = true;
          }
        });
      } else if (material) {
        const materialAny = material as any;
        if (materialAny.map && typeof materialAny.map.image?.src === 'string' && !materialAny.map.image.src.startsWith('http')) {
          materialAny.map.image.src = './models/planet/textures/textures/' + materialAny.map.image.src.split('/').pop();
          materialAny.map.needsUpdate = true;
        }
      }
    }
  });
  return <primitive object={scene} {...props} />;
}

const Hero = () => {
  const { theme } = useTheme();

  const scrollToProject = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <SectionWrapper id="home" theme={theme}>
      <HeroContent>
        <Card
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          theme={theme}
        >
          <IconContext.Provider value={{ size: '24px' }}>
            <SocialRow>
              <SocialIcon href="https://www.linkedin.com/in/navanish-mehta-258825247/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                {React.createElement(FaLinkedin as React.ComponentType)}
              </SocialIcon>
              <SocialIcon href="https://github.com/Navanish-Mehta" target="_blank" rel="noopener noreferrer" title="GitHub">
                {React.createElement(FaGithub as React.ComponentType)}
              </SocialIcon>
            </SocialRow>
          </IconContext.Provider>
          <div style={{ color: '#bfc6d8', fontWeight: 700, letterSpacing: 1, marginBottom: 10, fontSize: '1.1rem' }}>WELCOME TO MY WORLD</div>
          <Title
            theme={theme}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hi, I'm <span>Navanish Mehta</span>
          </Title>
          <Subtitle
            theme={theme}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            A Full Stack Developer passionate about creating beautiful and functional web applications
          </Subtitle>
          <CTAButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToProject}
          >
            View My Work
          </CTAButton>
        </Card>
        <CanvasCol>
          <Canvas
            style={{ width: '100%', height: '100%', background: 'transparent' }}
            camera={{ position: [0, 0, 4], fov: 45 }}
            gl={{ antialias: true, alpha: true }}
          >
            <ambientLight intensity={0.8} />
            <directionalLight position={[5, 5, 5]} intensity={1.2} />
            <Suspense fallback={null}>
              <PlanetModel scale={1.8} />
              <Environment preset="sunset" />
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
            </Suspense>
          </Canvas>
        </CanvasCol>
      </HeroContent>
    </SectionWrapper>
  );
};

export default Hero;

useGLTF.preload('./models/planet/textures/scene.gltf'); 