import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#006093',
    secondary: '#CA6C39',
    background: '#dce1de',
    white: '#FFF',
    black: '#000',
  },
  fonts: ['sans-serif', 'Roboto'],
  fontSizes: {
    xsmall: '1rem',
    small: '1.5rem',
    medium: '2rem',
    large: '3rem',
  },
};

const Theme = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
