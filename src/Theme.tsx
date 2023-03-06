import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#3383D3',
    primary60: '#66A2DE',
    secondary: '#FF8B33',
    background: '#dce1de',
    white: '#FFF',
    black: '#000',
    border: '#E7E7E7',
    neutra80: '#404040',
    neutra5: '#F3F3F3',
  },
  fonts: ['Work Sans', 'sans-serif', 'Roboto'],
  fontSizes: {
    xsmall: '1rem',
    small: '1.2rem',
    regular: '1.4rem',
    medium: '2rem',
    mediumLarge: '2.4rem',
    large: '3.2rem',
  },
  zIndex: {
    awaysOnTop: '999',
    dropdown: '10',
  },
};

const Theme = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
