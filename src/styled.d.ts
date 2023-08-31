import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary100: string;
      primary80: string;
      primary60: string;
      primary20: string;
      secondary: string;
      background: string;
      white: string;
      black: string;
      border: string;
      neutra80: string;
      neutra20: string;
      neutra5: string;
      success: string;
      error: string;
      warning: string;
    };
    fonts: string;
    fontSizes: {
      xsmall: string;
      small: string;
      regular: string;
      regularMedium: string;
      medium: string;
      mediumLarge: string;
      large: string;
    };
    zIndex: {
      awaysOnTop: string;
      modal: string;
      dropdown: string;
      firstLayer: string;
      secondLayer: string;
    };
    devices: {
      mobile: string;
      tablet: string;
      desktop: string;
      fullscreen: string;
      ultrawide: string;
      xl: string;
    };
  }
}
