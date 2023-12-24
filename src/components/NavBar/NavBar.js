import React from 'react';
import logo from '../../assets/images/logo.svg';
import {
  Flex,
  Box,
  Icon,
  Text,
  Button,
  Spacer,
  HStack,
  Image,
  useMediaQuery,
} from '@chakra-ui/react';
import {
  PhoneIcon,
  EmailIcon,
  ArrowForwardIcon,
  HamburgerIcon,
} from '@chakra-ui/icons';
import NavMenu from './components/Menu';

function NavBar() {
  const [isSmallerThan768] = useMediaQuery('(max-width: 768px)');

  return (
    <Box p="4" color="white">
      <Flex as="nav" pb={5} pt={5} alignItems="center">
        <Box boxSize={isSmallerThan768 ? '50px' : '80px'}>
          <Image src={logo} alt="Stay Secure Logo" />
        </Box>
        <Spacer />

        {isSmallerThan768 ? (
          <NavMenu />
        ) : (
          <HStack spacing="20px">
            <Button
              color="white"
              variant="link"
              display="flex"
              alignItems="center"
              p="10px"
              as="a"
              href="tel:+260977269184"
            >
              <Icon boxSize={3.5} as={PhoneIcon} />
              <Text pl={3}>+260 977 269 184</Text>
            </Button>

            <Button
              color="white"
              variant="link"
              display="flex"
              alignItems="center"
              p="10px"
              as="a"
              href="mailto:staysecure@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon boxSize={3.5} as={EmailIcon} />
              <Text pl={3}>staysecure@gmail.com</Text>
            </Button>
            <Button
              borderRadius="50px"
              rightIcon={<ArrowForwardIcon />}
              colorScheme="blue"
              variant="outline"
            >
              Request a Quote
            </Button>
          </HStack>
        )}
      </Flex>
      {!isSmallerThan768 && <hr />} {/* Render the divider for larger screens */}
    </Box>
  );
}

export default NavBar;
