import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --primary: #0a0e27;
    --secondary: #1a1f3a;
    --accent-1: #00d4ff;
    --accent-2: #12f7d6;
    --accent-3: #ff006e;
    --text-primary: #e0e0e0;
    --text-secondary: #a0a0a0;
    --border-color: rgba(0, 212, 255, 0.1);
  }

  body {
    font-family: 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif;
    background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0f0f2e 100%);
    color: var(--text-primary);
    background-attachment: fixed;
    line-height: 1.6;
  }

  html {
    scroll-behavior: smooth;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    letter-spacing: 0.5px;
  }

  h1 {
    font-size: 3.5rem;
    background: linear-gradient(135deg, var(--accent-1) 0%, var(--accent-2) 50%, var(--accent-3) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 1.5rem;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  h2 {
    font-size: 2.5rem;
    background: linear-gradient(135deg, var(--accent-1) 0%, var(--accent-2) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 1.25rem;

    @media (max-width: 768px) {
      font-size: 1.75rem;
    }
  }

  p {
    color: var(--text-secondary);
    font-size: 1.05rem;
    line-height: 1.8;
  }

  a {
    text-decoration: none;
    color: var(--accent-1);
    transition: all 0.3s ease;

    &:hover {
      color: var(--accent-2);
      text-shadow: 0 0 10px rgba(18, 247, 214, 0.5);
    }
  }

  /* Scrollbar Styling */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(10, 14, 39, 0.5);
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, var(--accent-1), var(--accent-2));
    border-radius: 5px;

    &:hover {
      background: linear-gradient(135deg, var(--accent-2), var(--accent-1));
    }
  }

  /* Animations */
  @keyframes glow {
    0%, 100% {
      text-shadow: 0 0 5px rgba(0, 212, 255, 0.5);
    }
    50% {
      text-shadow: 0 0 20px rgba(0, 212, 255, 0.8);
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
  }

  @keyframes slideInDown {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes pulse {
    0%, 100% {
      box-shadow: 0 0 10px rgba(0, 212, 255, 0.3);
    }
    50% {
      box-shadow: 0 0 30px rgba(0, 212, 255, 0.6);
    }
  }

  @keyframes borderGlow {
    0%, 100% {
      border-color: rgba(0, 212, 255, 0.3);
      box-shadow: inset 0 0 10px rgba(0, 212, 255, 0.1);
    }
    50% {
      border-color: rgba(0, 212, 255, 0.8);
      box-shadow: inset 0 0 10px rgba(0, 212, 255, 0.3);
    }
  }

  @keyframes shimmer {
    0% {
      background-position: -1000px 0;
    }
    100% {
      background-position: 1000px 0;
    }
  }
`;
