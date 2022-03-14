import React from "react";
import GlobalStyle from "./globalStyle.js";

import { ThemeProvider } from "styled-components";
import { lightMode, darkMode } from "./components/Theme.js";

import Main from "./components/Main/Main.js";
import Navbar from "./components/Navbar/Navbar.js";
import About from "./components/About/About.js";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={darkMode}>
        <Navbar />
        <Main />
        <About />
      </ThemeProvider>
    </>
  );
}

export default App;
