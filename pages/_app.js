import '../styles/globals.css'

import {ChakraProvider} from '@chakra-ui/react';
import {extendTheme} from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    
  },
  primary: {
    "orange": "#f312337",
    "gray": "#42312",
    "white": "#fffff"
  }
})

function MyApp({ Component, pageProps }) {
  return (
  <ChakraProvider theme={theme}>
  <Component {...pageProps} />
  </ChakraProvider>
  )
}

export default MyApp
