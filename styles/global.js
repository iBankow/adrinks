import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
      --yellow: #ffd659;
      --green: #61821f;
      --text-light: #707070;
      --color-text: #222222;
      --white: #ffffff;
    }

    body::-webkit-scrollbar {
    width: 8px;
    }
    body::-webkit-scrollbar-track {
      background: ${(props) => props.theme.colors.background}; 
      box-shadow: inset 0 0 5px rgb(0, 0, 0, 0.1);
      border-radius: 10px;
    }
    body::-webkit-scrollbar-thumb {
      background: rgb(0, 0, 0, 0.1);
      border-radius: 10px;
    }
    body::-webkit-scrollbar-thumb:hover {
      background: ${(props) => props.theme.colors.secondary};
    }

    @font-face {
      font-family: Balbeer;
      src: url('/assets/fonts/Balbeer-Rustic.ttf');
    }

    @font-face {
      font-family: SantElia;
      src: url('/assets/fonts/santelia-rough.otf');
    }

    * {
      padding: 0;
      margin: 0;
      border: 0;
      box-sizing: border-box;
    }

    @media (max-width: 1080px) {
      html {
        font-size: 93.75%;
      }
    }

    @media (max-width: 500px) {
      html {
        font-size: 75%;
      }
    }


    html,
    body {
      padding: 0;
      margin: 0 auto;
      font-family: "Lato", sans-serif;
      scroll-behavior: smooth;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    .fadeIn {
      animation: fadeIn 500ms linear;
    }

    .fadeOut {
      animation: fadeOut 500ms linear;
    }

    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @keyframes fadeOut {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    .slide-container {
      z-index: -1;
    }
`;
