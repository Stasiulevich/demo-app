import { extendTheme } from 'native-base';
import { Colors, Fonts } from '@constants/Theme';

export const brandTheme = extendTheme({
  components: {
    Heading: {
      baseStyle: {
        color: Colors.grey.heading,
      },
    },
    FormControlLabel: {
      baseStyle: {
        _text: {
          color: Colors.grey.main,
        },
      },
    },
    FormControlErrorMessage: {
      baseStyle: {
        _text: {
          color: Colors.red.orange,
        },
      },
    },
    Button: {
      variants: {
        solid: {
          height: 44,
          shadow: 4,
          bg: Colors.green.main,
          _pressed: { bg: Colors.green.hover },
          _hover: { bg: Colors.green.hover },
        },
        link: {
          _text: { color: Colors.green.main },
          _hover: { _text: { color: Colors.green.hover, textDecorationLine: 'none' } },
          _pressed: { _text: { color: Colors.green.hover, textDecorationLine: 'none', opacity: 0.5 } },
        },
      },
    },
    Input: {
      variants: {
        outline: {
          color: Colors.grey.dark,
          borderColor: Colors.grey.soft,
          placeholderTextColor: Colors.grey.soft,
          _hover: {
            borderColor: Colors.grey.soft,
          },
          _invalid: {
            bg: 'white',
            borderColor: Colors.red.orange,
          },
          _active: {
            bg: 'white',
            borderColor: Colors.grey.soft,
          },
          _focus: {
            bg: 'white',
            borderColor: Colors.grey.soft,
            _invalid: {
              bg: 'transparent',
              borderColor: Colors.red.orange,
              color: Colors.red.orange,
            },
          },
        },
      },
    },
  },
  fontConfig: {
    Poppins: {
      400: {
        normal: [Fonts.poppins.regular400],
        italic: [Fonts.poppins.regularItalic400],
      },
      500: {
        normal: [Fonts.poppins.medium500],
        italic: [Fonts.poppins.mediumItalic500],
      },
      600: {
        normal: [Fonts.poppins.semiBold600],
        italic: [Fonts.poppins.semiBoldItalic600],
      },
      700: {
        normal: [Fonts.poppins.bold700],
        italic: [Fonts.poppins.boldItalic700],
      },
    },
  },
  colors: {
    brand: {
      primary: Colors.green.main,
      secondary: Colors.grey.heading,
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
    mono: 'Poppins',
  },
  config: {
    useSystemColorMode: false,
    initialColorMode: 'light',
  },
});
