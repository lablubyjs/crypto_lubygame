import {createGlobalStyle} from 'styled-components';

import theme from './theme';

export const GlobalStyle = createGlobalStyle`
   html {
      width: 100vw;
      height: 100vh;
   }

   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   body {
      background: ${theme.colors.white};
      font-family: ${theme.fonts.montserrat};
   }

   body::-webkit-scrollbar {
      width: 0.75rem;
   }

   body::-webkit-scrollbar-track {
      background-color: ${theme.colors.lightYellow};
   }

   body::-webkit-scrollbar-thumb {
      background-color: ${theme.colors.yellow};
      border-radius: 20px;
      border: 3px solid ${theme.colors.lightYellow};
   }

   button, a {
      cursor: pointer;
   }

   a {
      text-decoration: none;
   }

   img {
      display: block;
      max-width: 100%;
   }

   p {
      color: red;
   }

   @media (max-width: 1080px) {
      html {
         font-size: 93.75%;
      }
   }

   @media (max-width: 720px) {
      html {
         font-size: 87.5%;
      }
   }
`;
