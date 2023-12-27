import React from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  Grid,
  Image,
  Divider,
  Center,
  Wrap,
  Stack,
  Flex,
  Container,
  Icon,
} from '@chakra-ui/react';
import logo from '../../assets/images/logo.jpg';
import {
    FaHandshake,
    FaPeopleCarry
} from "react-icons/fa";
import {
    IoShieldCheckmarkOutline,
    IoStarOutline
} from "react-icons/io5";
import { HiOutlineLightBulb } from "react-icons/hi2";

const About = () => {
  return (
    <Container maxW="container.xl" py={12}>
    <Box my={8}>
        <Heading as="h1" mb={8} textAlign="center">
          About Us
        </Heading>
  
        <Flex direction={{ base: 'column', md: 'row' }} alignItems="center" justify="center" mb={12}>
          <Box flex="1" pr={{ base: 0, md: 10 }} mb={{ base: 8, md: 0 }}>
            <Image src="" alt="Stay Secure Company logo" rounded="lg" shadow="lg" />
          </Box>
          <Box flex="1">
            <Stack spacing={4}>
              <Text fontSize="lg">
                Stay Secure is a Zambian owned security company specialized in the provision of security solution.
                Based on the ability to integrate various security services, combined with ongoing innovation
              </Text>
              <Text fontSize="lg">
                Stay Secure Security is committed to the principles of best practices and as a result has a strong
                commitment to continuous improvement across all service provisions 
              </Text>
              <Text fontSize="lg">
                this forms an integral foundation of our business relationships with our clients.
              </Text>
            </Stack>
          </Box>
        </Flex>

      <VStack spacing={4}>
        <Text textAlign="center">
          At Stay Secure, we believe in a world where everyone feels safe and secure.
          That's why we're dedicated to providing cutting-edge security solutions and
          services that protect our clients' most valuable assets.
        </Text>

        <Divider />

        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <Box>
            <Heading as="h2" size="md">Our Mission</Heading>
            <Text pt={2}>
              At STAY SECURE, our mission is deeply rooted in showcasing values and performance that position us as the foremost choice among companies in our field.
            </Text>
            <br />
            <Text>
              We pursue this mission by consistently delivering innovative solutions that lead the industry
              and by offering exceptional customer service. We are committed to providing our employees with
              engaging and rewarding work environments. Simultaneously, we strive to ensure sustainable growth
              and generate favorable returns for our shareholders. Our dedication to these principles drives our
              relentless pursuit of excellence.
            </Text>
          </Box>
          <Box>
            <Heading as="h2" size="md">Our Vision</Heading>
            <Text pt={2}>
              Our vision is to be the leading integrated security company and the trusted partner of choice in our industry.
            </Text>
            <br />
            <Text>
              Stay Secure prioritizes investment in technology, our workforce, and our core values.
              Additionally, we dedicate significant attention to delivering exceptional customer service
              and fostering strong customer relationships. This strategic focus empowers us to offer cutting-edge
              solutions within the industry, safeguarding and enhancing the value we provide to our esteemed customers.
            </Text>
          </Box>
        </Grid>

        <Divider />

        <Heading as="h2" size="md">Our Values</Heading>
        <Wrap spacing={4}>
          <Stack spacing={4}>
            <Icon as={IoShieldCheckmarkOutline} name="shield-check" w={6} h={6} color="green.500" />
            <Text>Integrity</Text>
          </Stack>
          <Stack spacing={4}>
            <Icon as={HiOutlineLightBulb} name="lightbulb" w={6} h={6} color="yellow.400" />
            <Text>Innovation</Text>
          </Stack>
          <Stack spacing={4}>
            <Icon as={FaHandshake} name="handshake" w={6} h={6} color="blue.500" />
            <Text>Client Focus</Text>
          </Stack>
          <Stack spacing={4}>
            <Icon as={FaPeopleCarry} name="people" w={6} h={6} color="purple.500" />
            <Text>Teamwork</Text>
          </Stack>
          <Stack spacing={4}>
            <Icon as={IoStarOutline} name="star" w={6} h={6} color="orange.500" />
            <Text>Excellence</Text>
          </Stack>
        </Wrap>

        {/* Continue adding sections for Team, Services, Commitment, Contact Us, etc. using Chakra UI components as needed */}
      </VStack>
    </Box>
    </Container>
  );
};

export default About;

// import React from 'react'
// import {
//     Box,
//     Divider,
//     Image,
//     Flex,
//     Card,
//     CardHeader,
//     CardBody,
//     CardFooter,
//     Stack,
//     Heading,
//     Text
// } from '@chakra-ui/react'
// import Cassper from '../../assets/images/cassper.jpg';
  

// function About() {
//   return (
//     <Box w='70%'>
//       <div>
//          <h1 className='About-heading'>About Us</h1>
//          <hr className='About-hr' />
//       </div>

//       <div className='paragraph'>
//           <p className='About-text'>
        //   Stay Secure is a Zambian owned security company specialized in the provision of security solution.
        //   Based on the ability to integrate various security services, combined with ongoing innovation,
        //   Stay Secure Security is committed to the principles of best practices and as a result has a strong
        //   commitment to continuous improvement across all service provisions, this forms an integral
        //   foundation of our business relationships with our clients.
//           </p>
//       </div>

//       <div className='About-content'>
//       <Stack spacing='4'>
//         <Card
//             direction={{ base: 'column', sm: 'row' }}
//             overflow='hidden'
//             variant='outline'
//         >
//             <Image
//             objectFit='cover'
//             maxW={{ base: '100%', sm: '200px' }}
//             src={Cassper}
//             alt='Caffe Latte'
//             />
        
//             <Stack>
//             <CardBody>
//                 <Heading size='md'>Our Mission</Heading>

//                 <Text py='2'>
//                 “Our mission is to demonstrate the values
//                     and performance that make STAY SECURE the
//                     company of choice.”
//                 </Text>

//                 <Text py='2'>
//                 We aim to do this by delivering industry-leading innovative
//                 solutions and an outstanding customer service, by providing
//                 engaging and rewarding work to employees whilst generating
//                 sustainable growth and returns for our shareholders.
//                 </Text>
//             </CardBody>
//             </Stack>
//         </Card>


//         <Card
//             direction={{ base: 'column', sm: 'row' }}
//             overflow='hidden'
//             variant='outline'
//             // pt={10}
//         >
        
//             <Stack>
//             <CardBody>
//                 <Heading align={'right'} size='md'>Our Vision</Heading>

//                 <Text align={'right'} py='2'>
//                     “Our vision is to be the leading integrated
//                     security company and the trusted partner of
//                     choice in our industry.”
//                 </Text>

//                 <Text align={'right'} py='2'>
//                     At Stay Secure we are diﬀerent because we invest in
//                     technology, our people and our values, but also in
//                     delivering customer service and building customer
//                     relationships. This enables us to provide
//                     industry-leading solutions that protect and add value
//                     to our esteemed customers.
//                 </Text>
//             </CardBody>
//             </Stack>

//             <Image
//             objectFit='cover'
//             maxW={{ base: '100%', sm: '200px' }}
//             src={Cassper}
//             alt='Caffe Latte'
//             />
//         </Card>
//       </Stack>
        
//         {/* <div className='image-one'>
//           <Image
//           borderRadius='10%'
//           h='20%'
//           w='20%'
//           src={Cassper}
//           />
//         </div>

//         <div className='mission'>
//             <h2>Our Mission</h2>
//             <hr />

//             <h3>
//                 “Our mission is to demonstrate the values
//                 and performance that make STAY SECURE the
//                 company of choice.”
//             </h3>

//             <p>
//                 We aim to do this by delivering industry-leading innovative
//                 solutions and an outstanding customer service, by providing
//                 engaging and rewarding work to employees whilst generating
//                 sustainable growth and returns for our shareholders.
//             </p>
//         </div> */}

//         {/* <div className='vision'>
//             <h2>Our Vision</h2>
//             <hr />

//             <h3>
//                 “Our vision is to be the leading integrated
//                 security company and the trusted partner of
//                 choice in our industry.”
//             </h3>

//             <p>
//             At Stay Secure we are diﬀerent because we invest in
//             technology, our people and our values, but also in
//             delivering customer service and building customer
//             relationships. This enables us to provide
//             industry-leading solutions that protect and add value
//             to our esteemed customers.
//             </p>
//         </div>

//         <div className='vision-image'>
//           <Image
//           borderRadius='10%'
//           h='20%'
//           w='20%'
//           src={Cassper}
//           />
//         </div> */}
//       </div>

//        {/* <Box>
//             <Flex>
//             <Box w='50%'>
//                 <h2 className='About-subheading'>Our Mission</h2>
//                 <p className='About-text'>
//                 To provide our clients with the best security services in the industry, while maintaining a personal relationship with each client, and ensuring their security needs are met.
//                 </p>
//             </Box>
//             <Box w='50%'>
//                 <h2 className='About-subheading'>Our Vision</h2>
//                 <p className='About-text'>
//                 To be the most trusted and respected security company in the world.
//                 </p>
//             </Box>
//             </Flex>
//         </Box> */}
//     </Box>
//   )
// }

// export default About;


// import {
//     Box,
//     Container,
//     Heading,
//     Text,
//     Image,
//     Flex,
//     Stack,
//   } from '@chakra-ui/react';
  
//   const About = () => {
//     return (
//         <Container maxW="container.xl" py={12}>
        // <Heading as="h1" mb={8} textAlign="center">
        //   About Our Security Company
        // </Heading>
  
        // <Flex direction={{ base: 'column', md: 'row' }} alignItems="center" justify="center" mb={12}>
        //   <Box flex="1" pr={{ base: 0, md: 10 }} mb={{ base: 8, md: 0 }}>
        //     <Image src="/security-image.jpg" alt="Security Company" rounded="lg" shadow="lg" />
        //   </Box>
        //   <Box flex="1">
        //     <Stack spacing={4}>
        //       <Text fontSize="lg">
        //         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla
        //         ullamcorper lectus at vestibulum. Vestibulum ante ipsum primis in faucibus
        //         orci luctus et ultrices posuere cubilia Curae; Proin ut ligula vitae erat
        //         convallis tincidunt.
        //       </Text>
        //       <Text fontSize="lg">
        //         Nullam vel justo in lectus convallis accumsan. Pellentesque habitant morbi
        //         tristique senectus et netus et malesuada fames ac turpis egestas.
        //       </Text>
        //       <Text fontSize="lg">
        //         Fusce tristique justo id mauris condimentum, sed ultricies purus blandit.
        //         Integer sit amet feugiat arcu. Proin convallis, justo nec convallis
        //         convallis, purus dui accumsan elit.
        //       </Text>
        //     </Stack>
        //   </Box>
        // </Flex>
  
//         <Box mb={12}>
//           <Flex alignItems="center" justify="center" flexDir={{ base: 'column', md: 'row' }} mb={8}>
//             <Box flex={{ base: '1', md: '1' }} order={{ base: '2', md: '1' }} pr={{ base: 0, md: 8 }}>
//               <Text fontSize="lg">
//                 Our Mission: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla
//                 ullamcorper lectus at vestibulum.
//               </Text>
//             </Box>
//             <Box flex={{ base: '1', md: '1' }} order={{ base: '1', md: '2' }} pl={{ base: 0, md: 8 }}>
//               <Image src="/mission-image.jpg" alt="Mission" rounded="lg" shadow="lg" boxSize="300px" />
//             </Box>
//           </Flex>
//         </Box>
  
//         <Box mb={12}>
//           <Flex alignItems="center" justify="center" flexDir={{ base: 'column', md: 'row-reverse' }} mb={8}>
//             <Box flex={{ base: '1', md: '1' }} order={{ base: '2', md: '2' }} pr={{ base: 0, md: 8 }}>
//               <Text fontSize="lg">
//                 Our Vision: Nullam vel justo in lectus convallis accumsan. Pellentesque habitant morbi
//                 tristique senectus et netus et malesuada fames ac turpis egestas.
//               </Text>
//             </Box>
//             <Box flex={{ base: '1', md: '1' }} order={{ base: '1', md: '1' }} pl={{ base: 0, md: 8 }}>
//               <Image src="/vision-image.jpg" alt="Vision" rounded="lg" shadow="lg" boxSize="300px" />
//             </Box>
//           </Flex>
//         </Box>
  
//         <Box mb={12}>
//           <Flex alignItems="center" justify="center" flexDir={{ base: 'column', md: 'row' }} mb={8}>
//             <Box flex={{ base: '1', md: '1' }} order={{ base: '2', md: '1' }} pr={{ base: 0, md: 8 }}>
//               <Text fontSize="lg">
//                 Our Values: Fusce tristique justo id mauris condimentum, sed ultricies purus blandit.
//                 Integer sit amet feugiat arcu. Proin convallis, justo nec convallis
//                 convallis, purus dui accumsan elit.
//               </Text>
//             </Box>
//             <Box flex={{ base: '1', md: '1' }} order={{ base: '1', md: '2' }} pl={{ base: 0, md: 8 }}>
//               <Image src="/values-image.jpg" alt="Values" rounded="lg" shadow="lg" boxSize="300px" />
//             </Box>
//           </Flex>
//         </Box>
//       </Container>
//     );
//   };
  
//   export default About;
  