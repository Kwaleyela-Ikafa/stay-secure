import React from 'react'
import logo from '../../assets/images/logo.svg'
import {
  Flex,
  Box,
  Icon,
  Text,
  Button,
  Spacer,
  HStack,
  Divider,
  Image
} from '@chakra-ui/react'
import { 
  PhoneIcon,
  EmailIcon,
  ArrowForwardIcon
} from '@chakra-ui/icons'

function NavBar() {
  return (
    <header>
        <Box>
          <Flex as="nav" pb={5} pt={5} alignItems="center">
            <Box boxSize='74px'>
              <Image src={logo} alt='Stay Secure Logo' />
            </Box>
              <Spacer />
  
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
                  <Button borderRadius='50px' rightIcon={<ArrowForwardIcon />} colorScheme='blue' variant='outline'>Logout</Button>
              </HStack>
          </Flex>
          <Divider pt={6} />
        </Box>
    </header>
  )
}

export default NavBar;
