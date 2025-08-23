import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

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
  transition: color 0.3s ease;
`;

const Timeline = styled.div`
  width: 100%;
  max-width: 800px;
  position: relative;
  margin: 0 auto;
  padding: 2rem 0;

  &::before {
    content: '';
    position: absolute;
    width: 2px;
    background: linear-gradient(to bottom, #2563eb, #38bdf8);
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 0;
  }
`;

interface TimelineItemProps {
  $isEven: boolean;
}

const TimelineItem = styled(motion.div)<TimelineItemProps>`
  width: 100%;
  margin-bottom: 3rem;
  position: relative;
  display: flex;
  justify-content: ${props => props.$isEven ? 'flex-end' : 'flex-start'};
  padding: 0 2rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

interface TimelineContentProps {
  $isEven: boolean;
}

const TimelineContent = styled.div<TimelineContentProps>`
  width: calc(50% - 2rem);
  background: ${props => props.theme === 'dark'
    ? 'linear-gradient(135deg, #23243a 0%, #181c2f 100%)'
    : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'};
  border-radius: 20px;
  padding: 2rem;
  position: relative;
  box-shadow: ${props => props.theme === 'dark'
    ? '0 8px 32px rgba(37,99,235,0.13), 0 2px 16px #0002'
    : '0 8px 32px rgba(0,0,0,0.1), 0 2px 16px rgba(0,0,0,0.05)'};
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background: #2563eb;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
    ${props => props.$isEven ? 'left: -3rem;' : 'right: -3rem;'}
    z-index: 1;
  }
`;

const TimelineDate = styled.div`
  color: #2563eb;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const TimelineTitle = styled.h3`
  color: ${props => props.theme === 'dark' ? '#fff' : '#000'};
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
`;

const TimelineSubtitle = styled.div`
  color: ${props => props.theme === 'dark' ? '#bfc6d8' : '#4a5568'};
  font-size: 1.1rem;
  margin-bottom: 1rem;
  transition: color 0.3s ease;
`;

const TimelineDescription = styled.p`
  color: ${props => props.theme === 'dark' ? '#bfc6d8' : '#4a5568'};
  font-size: 1rem;
  line-height: 1.6;
  transition: color 0.3s ease;
`;

const Education = () => {
  const { theme } = useTheme();
  const educationData = [
    {
      date: '2018-2019',
      title: 'Matriculation',
      subtitle: 'CBSE Board,New Delhi',
      description: 'Completed matriculation with 91% under the CBSE board. Ranked among the top performers in my district, with my achievement featured in a local newspaper. Built a strong foundation in Mathematics, Science, and English.'
    },
    {
      date: '2019-2021',
      title: 'Intermediate',
      subtitle: 'M.S College,Motihari',
      description: 'Completed Intermediate (12th) with 88% under the Bihar School Examination Board (BSEB), Patna. Built a solid foundation in Physics, Chemistry, and Mathematics, consistently performing well in core subjects. This academic phase further strengthened my analytical and problem-solving skills, preparing me for a career in engineering and technology.'
    },
    {
      date: '2022-2026',
      title: 'Bachelor of Technology,CSE',
      subtitle: 'Quantum University,Roorkee',
      description: 'Pursuing B.Tech in Computer Science and Engineering with a strong focus on web development, software testing, and AI-based projects. Actively working on practical projects and continuously enhancing my technical skills through hands-on learning and certifications.'
    }
  ];

  return (
    <SectionWrapper id="education" theme={theme}>
      <Content>
        <Title theme={theme}>Education & Experience</Title>
        <Timeline>
          {educationData.map((item, index) => (
            <TimelineItem
              key={index}
              $isEven={index % 2 === 0}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <TimelineContent $isEven={index % 2 === 0} theme={theme}>
                <TimelineDate>{item.date}</TimelineDate>
                <TimelineTitle theme={theme}>{item.title}</TimelineTitle>
                <TimelineSubtitle theme={theme}>{item.subtitle}</TimelineSubtitle>
                <TimelineDescription theme={theme}>{item.description}</TimelineDescription>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Content>
    </SectionWrapper>
  );
};

export default Education;
