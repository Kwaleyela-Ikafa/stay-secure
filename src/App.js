import React from 'react';
import './assets/css/header.css'
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import {
  Box,
} from '@chakra-ui/react'

function App() {
  return (
    <div className='header-center' >
      <Box w='70%'>
          <NavBar />
          <Header />
      </Box>
    </div>
  );
}

export default App;
