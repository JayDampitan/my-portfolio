import React from 'react';
import GlobalStyle from './globalStyle.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import { ThemeProvider } from 'styled-components';
import { lightMode, darkMode } from './components/Theme.js';


import Main from './components/Main/Main.js';
import Navbar from './components/Navbar/Navbar.js';
import About from './components/About/About.js';

function App() {
  return (
    <>
    <GlobalStyle />
    <ThemeProvider theme={darkMode}>
      <BrowserRouter>
        <Navbar/>
        <Routes>
           <Route path='/' element={<Main/>}/>
           <Route path='/about' element={<About/>}/>
         
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
    </>
  );
}

export default App;
