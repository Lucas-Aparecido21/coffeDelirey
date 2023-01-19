import React from "react";
import { BrowserRouter } from "react-router-dom";
//import { CartProvider } from "react-use-cart";
import { ThemeProvider } from "styled-components";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
// import { CoffeeContext } from "./Context/CoffeeContext";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        {/* <CoffeeContext>*/}
        <Router />
        {/*  </CoffeeContext> */}
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
