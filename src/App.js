import React from 'react';
import GlobalStyle from './globalStyle.js'


import { ThemeProvider } from 'styled-components';
import { lightMode, darkMode } from './components/Theme.js';


import Main from './components/Main/Main.js';
import Navbar from './components/Navbar/Navbar.js'

function App() {
  return (
    <>
    <GlobalStyle />
    <ThemeProvider theme={darkMode}>
      <Navbar/>
      <Main/>

    </ThemeProvider>
    </>
  );
}

export default App;
