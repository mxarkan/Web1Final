import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.3s ease;
    line-height: 1.7;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.text};
    font-weight: 700;
    line-height: 1.3;
    margin-bottom: 1rem;
  }

  p {
    color: ${({ theme }) => theme.textSecondary};
    margin-bottom: 1.5rem;
  }

  a {
    color: ${({ theme }) => theme.primary};
    transition: color 0.3s ease;
    text-decoration: none;
    
    &:hover {
      color: ${({ theme }) => theme.primaryDark};
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  section {
    padding: 5rem 0;
  }

  .section-title {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 3.5rem;
    position: relative;
    color: ${({ theme }) => theme.text};
    font-weight: 800;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -15px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 4px;
      background: linear-gradient(90deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.secondary});
      border-radius: 2px;
      width: 80px;
      height: 3px;
      background: ${({ theme }) => theme.primary};
    }
  }
`;
