import { ChakraProvider ,extendTheme} from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
const theme = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
      // ...
      900: "#1a202c",
    },
  },
})
ReactDOM.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById('root')
);