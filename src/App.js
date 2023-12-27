import React from 'react';
import './assets/css/header.css'
import './assets/css/about.css'
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import About from './components/About/About';
import {
  Box,
} from '@chakra-ui/react'

function App() {
  return (
    <>
      <div className='header-center' >
        <Box w='70%'>
            <NavBar />
            <Header />
        </Box>
      </div>

      <div className='about-center' >
        <About />
      </div>
    </>
  );
}

export default App;
