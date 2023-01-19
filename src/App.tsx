import React from "react";
import { BrowserRouter } from "react-router-dom";
//import { CartProvider } from "react-use-cart";
import { ThemeProvider } from "styled-components";
import { CartContextProvider } from "./Context/CoffeeContext";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
 

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
      <CartContextProvider>
        <Router />
     </CartContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
