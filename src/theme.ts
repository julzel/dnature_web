import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

// Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

// extend the theme
const theme = extendTheme({
  ...config,
  colors: {
    orange: {
      50: '#ffedd9', // lightest shade
      100: '#ffdbb7',
      200: '#ffc894',
      300: '#ffb672',
      400: '#ffa44f',
      500: '#ff6f00', // base color
      600: '#cc5800',
      700: '#993e00',
      800: '#662900',
      900: '#331400', // darkest shade
    },
    cyan: {
      50: '#e0f7fb', // lightest shade, adjust as needed
      100: '#b3edf3',
      200: '#80e3ec',
      300: '#4dd9e5',
      400: '#26cfde',
      500: '#07bbc7', // base color
      600: '#06a8b3',
      700: '#058a95',
      800: '#046c77',
      900: '#023e59', // darkest shade, adjust as needed
    },
  },
});

export default theme;
