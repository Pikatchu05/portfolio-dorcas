import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #5e7ce2; /* Bleu plus doux */
    --secondary-color: #7f8de1; /* Violet plus doux */
    --accent-color: #3a5fba; /* Bleu accent plus doux */
    --background-color: transparent;
    --light-gray: #f0f4f8;
    --text-color: #2d3748;
    --text-light: #4a5568;
    --shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
    --transition: all 0.3s ease;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: transparent;
    color: var(--text-color);
    line-height: 1.6;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
  }

  a {
    text-decoration: none;
    color: var(--primary-color);
    transition: var(--transition);
    
    &:hover {
      color: var(--accent-color);
    }
  }

  section {
    padding: 5rem 0;
  }

  .container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .btn {
    display: inline-block;
    padding: 0.8rem 1.5rem;
    background-color: var(--primary-color);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: var(--transition);
    font-weight: 500;
    
    &:hover {
      background-color: var(--accent-color);
      transform: translateY(-3px);
    }
  }

  .section-title {
    font-size: 2.2rem;
    text-align: center;
    margin-bottom: 3rem;
    position: relative;
    
    &:after {
      content: '';
      position: absolute;
      width: 50px;
      height: 3px;
      background-color: var(--primary-color);
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  @media (max-width: 768px) {
    section {
      padding: 3rem 0;
    }
    
    .section-title {
      font-size: 1.8rem;
    }
  }
`;

export default GlobalStyles;
