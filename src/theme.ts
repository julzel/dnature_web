import { extendTheme, ThemeConfig } from '@chakra-ui/react';

// Your brand colors
const colors = {
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
  brand: '#29434e',
  borderColor: '#e9e9e9',
};

// Theme configuration for color modes
const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

// Extending the theme
const theme = extendTheme({
  ...config,
  colors: {
    ...colors, // Spreading your brand colors directly into the theme's colors
  },
  styles: {
    global: ({ colorMode }: { colorMode: 'light' | 'dark' }) => ({
      body: {
        bg: colorMode === 'dark' ? 'gray.900' : '#fdfdfd',
        color: colorMode === 'dark' ? 'white' : 'black',
      },
    }),
  },
  components: {
    Button: {
      // Here you can add additional variants or override existing ones
      baseStyle: ({ colorMode }: { colorMode: 'light' | 'dark' }) => ({
        fontFamily: 'Montserrat, sans-serif', // Set Montserrat globally for all buttons
        color: colorMode === 'dark' ? 'black' : 'white',
      }),
      variants: {
        solid: ({ colorMode }: { colorMode: 'light' | 'dark' }) => ({
          bg: 'cyan.500',
          color: colorMode === 'dark' ? 'black' : 'white',
          _hover: {
            bg: 'cyan.600',
          },
        }),
        secondary: ({ colorMode }: { colorMode: 'light' | 'dark' }) => ({
          bg: 'orange.500',
          color: colorMode === 'dark' ? 'black' : 'white',
          _hover: {
            bg: 'orange.600',
          },
        }),
        outline: () => ({
          bg: 'transparent',
          borderColor: 'cyan.500',
          color: 'cyan.500',
          _hover: {
            bg: 'cyan.100',
          },
        }),
        'secondary-ol': () => ({
          bg: 'transparent',
          border: '1px solid',
          borderColor: 'orange.500',
          color: 'orange.500',
          _hover: {
            bg: 'orange.100',
          },
        }),
        'secondary-ol-white': () => ({
          bg: 'transparent',
          border: '1px solid',
          borderColor: 'white.500',
          color: 'white.500',
          _hover: {
            bg: 'white.100',
          },
        }),
        link: () => ({
          color: 'cyan.500',
        }),
      },
    },
    Input: {
      // Define default styles for the Input component
      baseStyle: ({ colorMode }: { colorMode: 'light' | 'dark' }) => ({
        field: {
          color: colorMode === 'dark' ? 'white' : 'black',
          _placeholder: {
            color: 'gray.500',
          },
        },
      }),
      variants: {
        outline: {
          field: {
            borderColor: 'cyan.500',
            _hover: {
              borderColor: 'cyan.600',
            },
            _focus: {
              borderColor: 'cyan.600',
              boxShadow: '0 0 0 1px var(--chakra-colors-cyan-600)',
            },
          },
        },
        filled: {
          field: {
            bg: 'cyan.100',
            borderColor: 'transparent',
            _hover: {
              bg: 'cyan.200',
            },
            _focus: {
              bg: 'cyan.300',
            },
          },
        },
      },
      defaultProps: {
        variant: 'outline',
      },
    },
  },
});

export default theme;
