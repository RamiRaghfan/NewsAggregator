// src/GlobalStyle.tsx

import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './themes';

export const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  body {
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
    transition: all 0.25s linear;
  }

   h1, h2, h3, h4, h5, h6, p {
    font-family: 'Merriweather', serif;
    // ...
  }
`;
