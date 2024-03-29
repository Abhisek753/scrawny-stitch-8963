// import { Box,Image,Text } from '@chakra-ui/react'
// import {Link } from "react-router-dom"
// import React from 'react'

// const CardContainer = ({image,category,id,display,date,price,chipset,location,seller_name}) => {
//   return (
//     <>
//          <Box key={id}>
//               <Image src={image} width="300px" h="300px"></Image>
//               <Text>{category}</Text>
//               <Text>{price}</Text>
//               <Link to={`/${id}`}>More Details</Link>
//             </Box>
//     </>
//   )
// }

// export default CardContainer
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function CardContainer({mobilename,model,bikename,image,category,id,display,date,price,chipset,location,seller_name}) {
  return (
    <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'340px'}
        h={"500px"}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        >
        <Box
          rounded={'lg'}
           pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${image})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'cover'}
            src={image}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            {category}
          </Text>
          
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'xl'}>
              {price}
            </Text>
            {/* <Text textDecoration={'line-through'} color={'gray.600'}>
              $199
            </Text> */}
          </Stack>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'15px'}>
              {bikename||mobilename||model}
            </Text>
            {/* <Text textDecoration={'line-through'} color={'gray.600'}>
              $199
            </Text> */}
          </Stack>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500} mb={"20px"} >
          <Link to={`/${id}`} >More Details</Link>
          </Heading>
        </Stack>
      
      </Box>
    </Center>
  );
}