import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';

const theme = extendTheme(
  withDefaultColorScheme({
    colorScheme: 'teal',
  }),
  {
    components: {
      Input: {
        variants: {
          outline: {
            field: {
              borderColor: 'teal.500',
              _hover: {
                borderColor: '#6A8000',
              },
            },
          },
        },

        defaultProps: {
          focusBorderColor: '#808000',
        },
      },
    },
  },
);
export default theme;
