import React from "react";
import ReactDOM from "react-dom";

// import App
import App from "./App";

// import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";

// global styles
import { GlobalStyle } from "./assets/styles/glogbalStyles";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
      <GlobalStyle />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
