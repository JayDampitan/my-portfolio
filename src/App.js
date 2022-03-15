import React, {useState} from "react";
import GlobalStyle from "./globalStyle.js";

import { ThemeProvider } from "styled-components";
import { lightMode, darkMode } from "./components/Theme.js";

import Main from "./components/Main/Main.js";
import Navbar from "./components/Navbar/Navbar.js";
import About from "./components/About/About.js";

function App() {
  const [switchActive, setSwitchActive] = useState(true);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={switchActive ? darkMode : lightMode}>
        <Navbar switchActive={switchActive} setSwitchActive={setSwitchActive}/>
        <Main />
        <About />
      </ThemeProvider>
    </>
  );
}

export default App;
