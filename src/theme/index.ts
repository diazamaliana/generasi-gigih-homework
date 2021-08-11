import { extendTheme,    theme as defaultTheme,    withDefaultColorScheme,  } from '@chakra-ui/react'
import { brand, navy } from './colors'
  
  const Input = {
    defaultProps: {
      variant: "filled",
    },
  }
  
  const Button = {
    baseStyle: {
      borderRadius: '5px',
    },
  }
  
  const theme = extendTheme(
    {
      components: {
        Input,
        Button,
      },
      fonts: {
        body: `'Inter', ${defaultTheme.fonts.body}`,
        heading: `'Inter', ${defaultTheme.fonts.heading}`,
      },
      colors: { brand, navy },
      styles: {
        global: () => ({
          html: {
            scrollBehavior: 'smooth',
          },
          body: {
            bg: "navy.300",
            color: "navy.900"
          }
        }),
      },
    },
    withDefaultColorScheme({ colorScheme: 'brand' })
  )
  
  export default theme