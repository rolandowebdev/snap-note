import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@/styles/theme'
import { App } from '@/App'

import '@fontsource/plus-jakarta-sans/400.css'
import '@fontsource/plus-jakarta-sans/500.css'
import '@fontsource/plus-jakarta-sans/600.css'
import '@fontsource/plus-jakarta-sans/700.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme} resetCSS>
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
