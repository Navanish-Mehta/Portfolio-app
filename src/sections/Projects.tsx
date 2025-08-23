import React, { Suspense } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import { IconType } from 'react-icons';

const SectionWrapper = styled.section`
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

const Title = styled.h2`
  color: ${props => props.theme === 'dark' ? '#fff' : '#000'};
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  text-align: center;
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const ProjectCard = styled(motion.article)`
  background: ${props => props.theme === 'dark'
    ? 'linear-gradient(135deg, #23243a 0%, #181c2f 100%)'
    : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'};
  border-radius: 20px;
  overflow: hidden;
  box-shadow: ${props => props.theme === 'dark'
    ? '0 8px 32px rgba(37,99,235,0.13), 0 2px 16px #0002'
    : '0 8px 32px rgba(0,0,0,0.1), 0 2px 16px rgba(0,0,0,0.05)'};
  position: relative;
  transition: all 0.3s ease;
  transform-style: preserve-3d;
  perspective: 1000px;

  @media (max-width: 480px) {
    border-radius: 15px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);
    pointer-events: none;
    transition: all 0.3s ease;
  }

  &:hover::before {
    opacity: 0.5;
  }
`;

const ModelContainer = styled.div`
  width: 100%;
  height: 250px;
  position: relative;
  background: #0f172a;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 200px;
  }

  @media (max-width: 480px) {
    height: 180px;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProjectContent = styled.div`
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1.2rem;
  }
`;

const ProjectTitle = styled.h3`
  color: ${props => props.theme === 'dark' ? '#fff' : '#000'};
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.4;
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const ProjectDescription = styled.p`
  color: ${props => props.theme === 'dark' ? '#bfc6d8' : '#4a5568'};
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  transition: color 0.3s ease;

  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 480px) {
    gap: 0.3rem;
    margin-bottom: 1rem;
  }
`;

const TechTag = styled.span`
  background: rgba(37, 99, 235, 0.1);
  color: #38bdf8;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 0.2rem 0.6rem;
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 480px) {
    gap: 0.8rem;
  }
`;

const ProjectLink = styled.a`
  color: #2563eb;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s;

  @media (max-width: 480px) {
    font-size: 0.9rem;
    gap: 0.3rem;
  }

  &:hover {
    color: #38bdf8;
    transform: translateY(-2px);
  }
`;

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
}

const Projects = () => {
  const { theme } = useTheme();

  const IconComponent = ({ icon: Icon }: { icon: IconType }) => {
    if (!Icon) return null;
    const IconComponent = Icon as React.ComponentType;
    return <IconComponent />;
  };

  const projects: Project[] = [
    {
      title: 'Taskwave- Full Stack Task Management App',
      description: 'A full-stack task management application with real-time updates, team collaboration, and efficient productivity tracking.',
      image: './images/projects/Taskwave.png',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'JWT'],
      github: 'https://github.com/navanish-mehta/Taskwave',
      live: 'https://task-wave-xi.vercel.app/'
    },
    {
      title: 'Travel Itinerary Application',
      description: 'A responsive travel planner that allows users to create, manage, and customize their trip itineraries with an interactive dashboard and user-friendly design.',
      image: './images/projects/travel.png',
      technologies: ['React', 'Tailwind CSS', 'JavaScript'],
      github: 'https://github.com/Navanish-Mehta/travel-itinerary-app',
      live: 'https://navanish-mehta.github.io/travel-itinerary-app/'
    },
    {
      title: 'Global_Connect - Professional Networking Platform',
      description: 'A full-stack professional networking platform with real-time chat, job board integration, and secure authentication.',
      image: './images/projects/Global_Connect.png',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'JWT', 'Google OAuth'],
      github: 'https://github.com/Navanish-Mehta/Global_Connect',
      live: 'https://global-connect-umber.vercel.app'
    }
  ];

  return (
    <SectionWrapper id="projects" theme={theme}>
      <Content>
        <Title theme={theme}>Featured Projects</Title>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              theme={theme}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.02,
                rotateX: 5,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              animate={{
                y: [0, -10, 0],
                rotateX: [0, 2, 0],
                rotateY: [0, 2, 0],
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                y: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                },
                rotateX: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                },
                rotateY: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }
              }}
            >
              <ModelContainer>
                <ProjectImage src={project.image} alt={project.title} />
              </ModelContainer>
              <ProjectContent>
                <ProjectTitle theme={theme}>{project.title}</ProjectTitle>
                <ProjectDescription theme={theme}>{project.description}</ProjectDescription>
                <TechStack>
                  {project.technologies.map((tech, techIndex) => (
                    <TechTag key={techIndex}>{tech}</TechTag>
                  ))}
                </TechStack>
                <ProjectLinks>
                  <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                    <IconComponent icon={FaGithub} /> Code
                  </ProjectLink>
                  <ProjectLink href={project.live} target="_blank" rel="noopener noreferrer">
                    <IconComponent icon={FaExternalLinkAlt} /> Live Demo
                  </ProjectLink>
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Content>
    </SectionWrapper>
  );
};

export default Projects; 
