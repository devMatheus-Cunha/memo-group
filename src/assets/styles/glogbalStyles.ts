import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --cyan-50: #EDFDFD;
    --cyan-100: #C4F1F9;
    --cyan-200: #9DECF9;
    --cyan-300: #76E4F7;
    --cyan-400: #0BC5EA;
    --cyan-500: #00B5D8;
    --cyan-600: #00A3C4;
    --cyan-700: #0987A0;
    --cyan-800: #086F83;
    --cyan-900: #065666;

    --error: #bf1d11;
    --sucess: #4ad40f;
    --warn: ##f26907;
  
    --background: #f0f2f5;
    --white: #ffffff;
    --black: #000;
   --gray-400: #b0b3b8;
    --gray-600: #4d4c4c;
    --gray-hover: #9c9ea1;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }
    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  body {
    background: var(--black) !important;
    -webkit-font-smoothing: antialiased;
    font-family: 'Poppins', sans-serif;
    height: 100vh;
  }
  
  body, input, textarea, button {
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.24rem;
  }
  
  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.8);
    }
  }
`;
