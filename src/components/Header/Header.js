import React from 'react';
import '../../assets/css/header.css';
import { Box, Button, useMediaQuery } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

function Header() {
  const [isSmallerThan768] = useMediaQuery('(max-width: 768px)');

  return (
    <Box
      h="80%"
      p="4"
      pt="20"
      color="white"
      textAlign={isSmallerThan768 ? 'center' : 'left'} // Center text on smaller screens
    >
      <div className="header-title">
        <h1 className="header-text" style={{ fontSize: isSmallerThan768 ? '2.5rem' : '4rem' }}>
          Stay Secure <br /> Security
        </h1>
        <h2
          className="header-sub-text"
          style={{
            fontSize: isSmallerThan768 ? '1.2rem' : '1.5rem',
            textAlign: isSmallerThan768 ? 'center' : 'left', // Align center on smaller screens
            margin: '20px 0', // Add margin for better readability
          }}
        >
          Your security requires an innovative, <br />
          well-equipped and well-trained partner.<br />
          We are that partner!.
        </h2>
        <Box pt={10}>
          <Button rightIcon={<ArrowForwardIcon />} colorScheme="blue" variant="solid">
            Request a Quote
          </Button>
        </Box>
      </div>
    </Box>
  );
}

export default Header;
