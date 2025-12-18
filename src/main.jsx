import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import App from './App'

// Custom theme with Classic Blue (Pantone 2020 Color of the Year)
const theme = extendTheme({
  colors: {
    primary: {
      50: '#e6f0f7',
      100: '#b3d1e5',
      200: '#80b2d3',
      300: '#4d93c1',
      400: '#1a74af',
      500: '#0f4c81', // Classic Blue
      600: '#0c3d67',
      700: '#092e4d',
      800: '#061f33',
      900: '#031019',
    },
  },
  fonts: {
    heading: '"Saira Extra Condensed", sans-serif',
    body: '"Muli", sans-serif',
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'gray.800',
      },
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
)

