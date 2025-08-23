import React, { Suspense } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaAws, 
  FaDocker, 
  FaDatabase, 
  FaHtml5, 
  FaCss3Alt, 
  FaGitAlt, 
  FaGithub,
  FaServer,
  FaTools,
  FaCode
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiJavascript, 
  SiMongodb, 
  SiPostgresql, 
  SiTailwindcss, 
  SiNextdotjs, 
  SiExpress, 
  SiRedux, 
  SiJest, 
  SiWebpack, 
  SiVercel, 
  SiNetlify,
  SiGraphql,
  SiPrisma,
  SiWebrtc
} from 'react-icons/si';
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
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;

const Title = styled.h2`
  color: ${props => props.theme === 'dark' ? '#fff' : '#000'};
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  text-align: center;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
`;

const SkillCard = styled(motion.div)`
  background: ${props => props.theme === 'dark'
    ? 'linear-gradient(135deg, #23243a 0%, #181c2f 100%)'
    : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'};
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  box-shadow: ${props => props.theme === 'dark'
    ? '0 8px 32px rgba(37,99,235,0.13), 0 2px 16px #0002'
    : '0 8px 32px rgba(0,0,0,0.1), 0 2px 16px rgba(0,0,0,0.05)'};
  transition: all 0.3s ease;
  transform-style: preserve-3d;
  perspective: 1000px;
  position: relative;

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
    border-radius: 20px;
  }

  &:hover {
    transform: translateY(-5px) rotateX(5deg) rotateY(5deg);
    box-shadow: ${props => props.theme === 'dark'
      ? '0 12px 40px rgba(37,99,235,0.2), 0 4px 20px #0003'
      : '0 12px 40px rgba(0,0,0,0.15), 0 4px 20px rgba(0,0,0,0.1)'};
  }

  &:hover::before {
    opacity: 0.5;
  }
`;

const SkillIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #2563eb 60%, #38bdf8 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.8rem;
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;
`;

const SkillTitle = styled.h3`
  color: ${props => props.theme === 'dark' ? '#fff' : '#000'};
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-align: center;
`;

const SkillDescription = styled.p`
  color: ${props => props.theme === 'dark' ? '#bfc6d8' : '#4a5568'};
  font-size: 1rem;
  line-height: 1.6;
  text-align: center;
`;

const ModelContainer = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  margin-bottom: 2rem;
`;

const TechnologyTag = styled(motion.div)`
  background: rgba(37,99,235,0.1);
  border: 1px solid rgba(37,99,235,0.2);
  border-radius: 20px;
  padding: 0.5rem 1rem;
  color: #bfc6d8;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(37,99,235,0.2);
    transform: translateY(-2px);
  }
`;

const TechnologiesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin-top: 1rem;
`;

const TechnologiesSection = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-top: 4rem;
`;

const TechnologiesTitle = styled.h3`
  color: ${props => props.theme === 'dark' ? '#fff' : '#000'};
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
`;

const TechnologiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
  width: 100%;
`;

const TechnologyItem = styled(motion.div)`
  background: ${props => props.theme === 'dark'
    ? 'linear-gradient(135deg, #23243a 0%, #181c2f 100%)'
    : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'};
  border-radius: 15px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  box-shadow: ${props => props.theme === 'dark'
    ? '0 8px 32px rgba(37,99,235,0.13), 0 2px 16px #0002'
    : '0 8px 32px rgba(0,0,0,0.1), 0 2px 16px rgba(0,0,0,0.05)'};
  transition: all 0.3s ease;
  transform-style: preserve-3d;
  perspective: 1000px;
  position: relative;

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
    border-radius: 15px;
  }

  &:hover::before {
    opacity: 0.5;
  }
`;

const TechnologyIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: linear-gradient(135deg, #2563eb 60%, #38bdf8 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.5rem;
`;

const TechnologyName = styled.span`
  color: ${props => props.theme === 'dark' ? '#fff' : '#000'};
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
`;

function SkillModel() {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh>
        <torusKnotGeometry args={[1, 0.3, 128, 32]} />
        <meshStandardMaterial 
          color="#2563eb"
          metalness={0.7}
          roughness={0.2}
          wireframe
        />
      </mesh>
    </Float>
  );
}

interface Skill {
  icon: IconType;
  title: string;
  description: string;
}

interface Technology {
  name: string;
  icon: IconType;
}

const Skills = () => {
  const { theme } = useTheme();
  
  const IconComponent = ({ icon: Icon }: { icon: IconType }) => {
    if (!Icon) return null;
    const IconElement = Icon as React.ComponentType<{ className?: string }>;
    return <IconElement />;
  };
  
  const skills: Skill[] = [
    {
      icon: FaReact,
      title: 'Frontend Development',
      description: 'Building modern, responsive web applications with cutting-edge technologies.',
    },
    {
      icon: FaNodeJs,
      title: 'Backend Development',
      description: 'Creating robust server-side applications and RESTful APIs.',
    },
    {
      icon: FaDatabase,
      title: 'Database Management',
      description: 'Working with both SQL and NoSQL databases for optimal data storage.',
    },
    {
      icon: FaAws,
      title: 'DevOps & Tools',
      description: 'Implementing CI/CD pipelines and using modern development tools.',
    }
  ];

  const technologies: Technology[] = [
    { name: 'HTML5', icon: FaHtml5 },
    { name: 'CSS3', icon: FaCss3Alt },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'React', icon: FaReact },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'Node.js', icon: FaNodeJs },
    { name: 'Express.js', icon: SiExpress },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'Redux', icon: SiRedux },
    { name: 'Docker', icon: FaDocker },
    { name: 'AWS', icon: FaAws },
    { name: 'Git', icon: FaGitAlt },
    { name: 'GitHub', icon: FaGithub },
    { name: 'Vercel', icon: SiVercel }
  ];

  return (
    <SectionWrapper id="skills" theme={theme}>
      <Content>
        <Title theme={theme}>Services</Title>
        <ModelContainer>
          <Canvas
            camera={{ position: [0, 0, 5], fov: 45 }}
            style={{ background: 'transparent' }}
          >
            <ambientLight intensity={0.8} />
            <directionalLight position={[5, 5, 5]} intensity={1.2} />
            <Suspense fallback={null}>
              <SkillModel />
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
            </Suspense>
          </Canvas>
        </ModelContainer>
        <SkillsGrid>
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              theme={theme}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.05,
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
              <SkillIcon>
                <IconComponent icon={skill.icon} />
              </SkillIcon>
              <SkillTitle theme={theme}>{skill.title}</SkillTitle>
              <SkillDescription theme={theme}>{skill.description}</SkillDescription>
            </SkillCard>
          ))}
        </SkillsGrid>

        <TechnologiesSection>
          <TechnologiesTitle theme={theme}>Skills</TechnologiesTitle>
          <TechnologiesGrid>
            {technologies.map((tech, index) => (
              <TechnologyItem
                key={index}
                theme={theme}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{
                  scale: 1.1,
                  rotateX: 5,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                animate={{
                  y: [0, -5, 0],
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
                <TechnologyIcon>
                  <IconComponent icon={tech.icon} />
                </TechnologyIcon>
                <TechnologyName theme={theme}>{tech.name}</TechnologyName>
              </TechnologyItem>
            ))}
          </TechnologiesGrid>
        </TechnologiesSection>
      </Content>
    </SectionWrapper>
  );
};

export default Skills; 