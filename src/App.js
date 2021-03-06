import Header from "./components/Header";
import Caracter from "./components/Caracter";
// 1. Import the extendTheme function
import { extendTheme, ChakraProvider } from '@chakra-ui/react'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({ colors })
function App() {
  return (
      <ChakraProvider theme={theme}>
        <Header />
        <Caracter />
      </ChakraProvider>
  );
}

export default App;
