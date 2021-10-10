import { createTheme } from '@shopify/restyle';

const theme = createTheme({
  colors: {
    purpleLight: '#8C6FF7',
    purplePrimary: '#5A31F4',
    purpleDark: '#3F22AB',

    greenLight: '#56DCBA',
    greenPrimary: '#0ECD9D',
    greenDark: '#0A906E',

    black: '#0B0B0B',
    white: '#F0F2F3',
  },
  spacing: {
    none: 0,
    xxs: 4,
    xs: 8,
    s: 12,
    m: 16,
    l: 24,
    xl: 32,
    xxl: 48,
  },
  borderRadii: {
    s: 4,
    m: 6,
    l: 10,
    xl: 20,
  },
  breakpoints: {},
  cardVariants: {},
  textVariants: {
    body: {
      fontSize: 16,
      lineHeight: 24,
      color: 'black',
    },
    buttonPrimary: {
      fontSize: 16,
      lineHeight: 24,
      color: 'purpleDark',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    buttonSecondary: {
      fontSize: 16,
      lineHeight: 24,
      color: 'greenLight',
      fontWeight: 'bold',
      textAlign: 'center',
    },
  },
  buttonVariants: {
    buttonPrimary: {
      backgroundColor: 'greenLight',
      borderRadius: 'l',
      paddingVertical: 'xs',
      paddingHorizontal: 'm',
    },
    buttonSecondary: {
      backgroundColor: 'purpleDark',
      borderRadius: 'l',
      paddingVertical: 'xs',
      paddingHorizontal: 'm',
    },
  },
});

export type Theme = typeof theme;
export default theme;
