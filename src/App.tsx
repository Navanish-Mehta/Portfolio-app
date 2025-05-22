import React from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar';
import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Hero from './sections/Hero';
import About from './sections/About';
import Education from './sections/Education';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Skills from './sections/Skills';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ErrorBoundary from './components/ErrorBoundary';

const AppContainer = styled.div`
  min-height: 100vh;
  background: ${props => props.theme === 'dark' ? '#000' : '#fff'};
  transition: background-color 0.3s ease;
  padding: 2rem;
  padding-top: 90px;
`;

const AppContent = () => {
  const { theme } = useTheme();
  return (
    <AppContainer theme={theme}>
      <Navbar />
      <ErrorBoundary>
        <Hero />
      </ErrorBoundary>
      <Skills />
      <Education />
      <Projects />
      <About />
      <Contact />
    </AppContainer>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <AppContent />
    </ThemeProvider>
  );
};

reportWebVitals();
export default App;
