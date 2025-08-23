import React from 'react';
import styled from 'styled-components';
import { motion, HTMLMotionProps } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaTools } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

type ThemeProps = {
  theme: 'dark' | 'light';
};

type StyledMotionProps = HTMLMotionProps<"div"> & ThemeProps;
type StyledMotionParagraphProps = HTMLMotionProps<"p"> & ThemeProps;

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
  max-width: 1200px;

  &:hover {
    transform: translateY(-5px) rotateX(5deg) rotateY(5deg);
    box-shadow: ${props => props.theme === 'dark'
      ? '0 12px 40px rgba(37,99,235,0.2), 0 4px 20px #0003'
      : '0 12px 40px rgba(0,0,0,0.15), 0 4px 20px rgba(0,0,0,0.1)'};
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

const Title = styled(motion.h1)<StyledMotionProps>`
  color: ${props => props.theme === 'dark' ? '#fff' : '#000'};
  font-size: 3.5rem;
  font-weight: 800;
  text-align: center;
  line-height: 1.2;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;

  @media (max-width: 1024px) {
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const AboutContent = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  width: 100%;

  @media (max-width: 1024px) {
    gap: 2.5rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }

  @media (max-width: 480px) {
    gap: 1.5rem;
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;

  @media (max-width: 480px) {
    gap: 0.8rem;
  }
`;

const ProfileImage = styled(motion.div)<StyledMotionProps>`
  width: 280px;
  height: 280px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(37,99,235,0.13), 0 2px 16px #0002;
  flex-shrink: 0;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent, rgba(37,99,235,0.2), transparent);
    transform: translateX(-100%);
    transition: transform 0.6s;
    z-index: 1;
  }

  &:hover::before {
    transform: translateX(100%);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }

  @media (max-width: 480px) {
    width: 220px;
    height: 220px;
  }
`;

const Description = styled(motion.p)<StyledMotionParagraphProps>`
  color: ${props => props.theme === 'dark' ? '#bfc6d8' : '#4a5568'};
  font-size: 1.1rem;
  line-height: 1.7;
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    line-height: 1.6;
  }
`;

const SkillsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

const SkillsTitle = styled.h3`
  color: ${props => props.theme === 'dark' ? '#fff' : '#000'};
  font-size: 1.5rem;
  font-weight: 700;
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 0.8rem;
  }
`;

const SkillCard = styled(motion.div)`
  background: ${props => props.theme === 'dark'
    ? 'linear-gradient(135deg, #23243a 0%, #181c2f 100%)'
    : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'};
  border-radius: 15px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: ${props => props.theme === 'dark'
    ? '0 8px 32px rgba(37,99,235,0.13), 0 2px 16px #0002'
    : '0 8px 32px rgba(0,0,0,0.1), 0 2px 16px rgba(0,0,0,0.05)'};
  transition: all 0.3s ease;
  transform-style: preserve-3d;
  perspective: 1000px;

  @media (max-width: 768px) {
    padding: 1.2rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    gap: 0.8rem;
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
    border-radius: 15px;
  }

  &:hover::before {
    opacity: 0.5;
  }
`;

const SkillIcon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(37, 99, 235, 0.1);
  border-radius: 12px;
  color: #38bdf8;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
    font-size: 1.2rem;
  }
`;

const SkillInfo = styled.div`
  flex: 1;
`;

const SkillName = styled.h4`
  color: ${props => props.theme === 'dark' ? '#fff' : '#000'};
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.3rem;
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const SkillLevel = styled.div`
  width: 100%;
  height: 6px;
  background: rgba(37, 99, 235, 0.1);
  border-radius: 3px;
  overflow: hidden;

  @media (max-width: 480px) {
    height: 4px;
  }
`;

const SkillProgress = styled.div<{ level: number }>`
  width: ${props => props.level}%;
  height: 100%;
  background: linear-gradient(90deg, #2563eb 0%, #38bdf8 100%);
  border-radius: 3px;
  transition: width 1s ease;
`;

const ModelContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 400px;
  position: relative;
  background: #0f172a;
  border-radius: 20px;
  overflow: hidden;

  @media (max-width: 768px) {
    min-height: 350px;
  }

  @media (max-width: 480px) {
    min-height: 300px;
    border-radius: 15px;
  }
`;

const About = () => {
  const { theme } = useTheme();

  return (
    <SectionWrapper id="about" theme={theme}>
      <Card
        initial={{ x: -40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        theme={theme}
      >
        <Content>
          <Title
            theme={theme}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </Title>
          <AboutContent>
            <ProfileImage
              theme={theme}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <img src="https://media.licdn.com/dms/image/v2/D4D03AQEIAvlgiUvo9g/profile-displayphoto-shrink_800_800/B4DZWJHsY7HIAg-/0/1741762251320?e=1753315200&v=beta&t=BnWjaSRtqb_9tGt65LEywkl5PtlENQEVmftXw5slhHI" alt="Profile" />
            </ProfileImage>
            <TextContent>
              <Description
                theme={theme}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -5 }}
              >
                I'm a passionate Full Stack Developer with a strong foundation in web technologies.
                I love creating efficient, scalable, and user-friendly applications that solve real-world problems.
                With expertise in both frontend and backend development, I strive to build seamless digital experiences
                that make a difference.
              </Description>
            </TextContent>
          </AboutContent>
        </Content>
      </Card>
    </SectionWrapper>
  );
};

export default About; 