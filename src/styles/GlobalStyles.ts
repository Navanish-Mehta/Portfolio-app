import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${props => props.theme === 'dark' ? '#000' : '#fff'};
    color: ${props => props.theme === 'dark' ? '#fff' : '#000'};
    line-height: 1.5;
    transition: all 0.3s ease;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    font-family: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  ::selection {
    background: #2563eb;
    color: #fff;
  }

  /* Custom Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.theme === 'dark' ? '#1a1a1a' : '#f1f1f1'};
  }

  ::-webkit-scrollbar-thumb {
    background: #2563eb;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #1d4ed8;
  }

  /* Common Section Styles */
  section {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    margin-top: 0.2rem;
    padding: 1.5rem;
    position: relative;
    background: ${props => props.theme === 'dark' 
      ? 'linear-gradient(135deg, #23243a 0%, #181c2f 100%)'
      : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'};
    border-radius: 28px;
    box-shadow: ${props => props.theme === 'dark'
      ? '0 8px 32px rgba(37,99,235,0.13), 0 2px 16px #0002'
      : '0 8px 32px rgba(0,0,0,0.1), 0 2px 16px rgba(0,0,0,0.05)'};
    transition: all 0.3s ease;
  }

  h2 {
    color: ${props => props.theme === 'dark' ? '#fff' : '#000'};
    font-size: 2.8rem;
    font-weight: 800;
    margin-bottom: 2rem;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: color 0.3s ease;
  }

  p {
    color: ${props => props.theme === 'dark' ? '#bfc6d8' : '#4a5568'};
    font-size: 1.1rem;
    line-height: 1.6;
    transition: color 0.3s ease;
  }

  /* Card Styles */
  .card {
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

    &:hover {
      transform: translateY(-5px) rotateX(5deg) rotateY(5deg);
      box-shadow: ${props => props.theme === 'dark'
        ? '0 12px 40px rgba(37,99,235,0.2), 0 4px 20px #0003'
        : '0 12px 40px rgba(0,0,0,0.15), 0 4px 20px rgba(0,0,0,0.1)'};
    }
  }

  /* Contact Form Styles */
  .contact-form {
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

    &:hover {
      transform: translateY(-5px) rotateX(5deg) rotateY(5deg);
      box-shadow: ${props => props.theme === 'dark'
        ? '0 12px 40px rgba(37,99,235,0.2), 0 4px 20px #0003'
        : '0 12px 40px rgba(0,0,0,0.15), 0 4px 20px rgba(0,0,0,0.1)'};
    }

    input, textarea {
      background: ${props => props.theme === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'};
      border: 1px solid ${props => props.theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'};
      color: ${props => props.theme === 'dark' ? '#fff' : '#000'};
      border-radius: 10px;
      padding: 1rem;
      width: 100%;
      margin-bottom: 1rem;
      transition: all 0.3s ease;

      &:focus {
        outline: none;
        border-color: #2563eb;
        box-shadow: 0 0 0 2px rgba(37,99,235,0.2);
      }
    }

    button {
      background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
      color: #fff;
      border-radius: 10px;
      padding: 1rem 2rem;
      font-weight: 600;
      transition: all 0.3s ease;
      transform-style: preserve-3d;
      perspective: 1000px;

      &:hover {
        transform: translateY(-2px) rotateX(5deg);
        box-shadow: 0 8px 20px rgba(37,99,235,0.3);
      }

      &:active {
        transform: translateY(0) rotateX(0);
      }
    }
  }
`;

export default GlobalStyles; 