import React from 'react';
import './assets/css/header.css'
import NavBar from './components/NavBar/NavBar';
import {
  Box,
} from '@chakra-ui/react'

function App() {
  return (
    <div className='header-center' >
      <Box w='70%' h='20%' bg='tomato' p='4' color='white'>
        <NavBar />
      </Box>
    </div>
  );
}

export default App;
