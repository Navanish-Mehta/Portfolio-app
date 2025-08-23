import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --background: linear-gradient(135deg, #e0e7ff 0%, #60a5fa 100%);
    --text-color: #222;
    --nav-bg: #2563eb;
    --nav-text: #fff;
    --card-bg: #fff;
    --card-shadow: rgba(37,99,235,0.1);
  }

  [data-theme='dark'] {
    --background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
    --text-color: #fff;
    --nav-bg: #0f172a;
    --nav-text: #fff;
    --card-bg: #1e293b;
    --card-shadow: rgba(0,0,0,0.3);
  }

  body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    background: var(--background);
    color: var(--text-color);
    scroll-behavior: smooth;
    transition: background 0.3s, color 0.3s;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  section {
    padding: 80px 0 60px 0;
    min-height: 100vh;
  }
`;

export default GlobalStyle; 