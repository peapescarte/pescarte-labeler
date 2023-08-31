import React from 'react';
import { ThemeProvider } from 'styled-components';

export const breakpoints = {
  mobile: '320px',
  tablet: '768px',
  desktop: '992px',
  fullscreen: '1280px',
  ultrawide: '1400px',
  xl: '1800px',
};

export const theme = {
  colors: {
    primary100: '#0064C8',
    primary80: '#3383D3',
    primary60: '#66A2DE',
    primary20: '#CCE0F4',
    secondary: '#FF8B33',
    background: '#dce1de',
    white: '#FFF',
    black: '#000',
    border: '#E7E7E7',
    neutra80: '#404040',
    neutra20: '#CFCFCF',
    neutra5: '#F3F3F3',
    success: '#33C383',
    error: '#FB5B5B',
    warning: '#FFD35B',
  },
  fonts: 'Work Sans, sans-serif, Roboto',
  fontSizes: {
    xsmall: '1rem',
    small: '1.2rem',
    regular: '1.4rem',
    regularMedium: '1.6rem',
    medium: '2rem',
    mediumLarge: '2.4rem',
    large: '3.2rem',
  },
  zIndex: {
    awaysOnTop: '999',
    modal: '20',
    dropdown: '10',
    firstLayer: '0',
    secondLayer: '1',
  },
  devices: {
    mobile: `(min-width: ${breakpoints.mobile})`,
    tablet: `(min-width: ${breakpoints.tablet})`,
    desktop: `(min-width: ${breakpoints.desktop})`,
    fullscreen: `(min-width: ${breakpoints.fullscreen})`,
    ultrawide: `(min-width: ${breakpoints.ultrawide})`,
    xl: `(min-width: ${breakpoints.xl})`,
  },
};

/**
 * Theme provider, fornece o tema definido acima para o filho recebido.
 * @param React.ReactNode children - um filho do tipo react node que recebera o tema.
 */
const Theme = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
