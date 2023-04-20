import { Box,Image,Text } from '@chakra-ui/react'
import {Link } from "react-router-dom"
import React from 'react'

const CardContainer = ({image,category,id,display,date,price,chipset,location,seller_name}) => {
  return (
    <>
         <Box key={id}>
              <Image src={image} width="300px" h="300px"></Image>
              <Text>{category}</Text>
              <Text>{price}</Text>
              <Link to={`/${id}`}>More Details</Link>
            </Box>
    </>
  )
}

export default CardContainer