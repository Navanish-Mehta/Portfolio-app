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
import HireMeButton from './components/HireMeButton';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ErrorBoundary from './components/ErrorBoundary';
import { Helmet, HelmetProvider } from 'react-helmet-async';

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
      <HireMeButton />
    </AppContainer>
  );
};

const App = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Navanish Mehta Portfolio</title>
        <meta name="description" content="Navanish Mehta's modern, responsive portfolio built with React and TypeScript. Showcasing skills, projects, and experience with a fast, SEO-optimized, and beautiful design." />
        <meta name="keywords" content="Navanish Mehta, Portfolio, Web Developer, React, TypeScript, Projects, Resume, Frontend, Software Engineer" />
        <meta property="og:title" content="Navanish Mehta Portfolio" />
        <meta property="og:description" content="Modern, responsive portfolio built with React and TypeScript. Showcasing skills, projects, and experience." />
        <meta property="og:image" content="https://navanish-mehta.github.io/Portfolio-app/image/profile.jpg" />
        <meta property="og:url" content="https://navanish-mehta.github.io/Portfolio-app/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Navanish Mehta Portfolio" />
        <meta name="twitter:description" content="Modern, responsive portfolio built with React and TypeScript. Showcasing skills, projects, and experience." />
        <meta name="twitter:image" content="https://navanish-mehta.github.io/Portfolio-app/image/profile.jpg" />
      </Helmet>
      <ThemeProvider>
        <GlobalStyles />
        <AppContent />
      </ThemeProvider>
    </HelmetProvider>
  );
};

reportWebVitals();
export default App;
