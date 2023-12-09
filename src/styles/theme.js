import { theme as DefaultTheme, extendTheme } from '@chakra-ui/react'

const fonts = {
  heading: `'Plus Jakarta Sans', ${DefaultTheme.fonts.heading}`,
  body: `'Plus Jakarta Sans', ${DefaultTheme.fonts.body}`
}

const colors = {
  brand: {
    dark: '#0d1117',
    softDark: '#161b22',
    border: '#21262d',
    light: '#e6edf3'
  }
}

const breakpoints = {
  sm: '450px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
}

export const theme = extendTheme({ fonts, colors, breakpoints })
