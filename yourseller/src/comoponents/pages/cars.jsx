

import { useEffect } from "react"
import { useState } from "react"
import { useContext } from "react"
import { Appcontext } from "../Statemange"
import { Box,Grid,GridTemplate,Image,Text,SkeletonCircle,Skeleton,SkeletonText } from "@chakra-ui/react"
import {Link} from "react-router-dom"

export default function Cars(){
    

    const {state,dispatch}=useContext(Appcontext)
   
    async function GetCars(){
        return fetch(`http://localhost:3001/random?category=Car`).then((res)=>res.json())
    }

    useEffect(()=>{
        dispatch({type:"start"})
GetCars().then((res)=>{
   
   dispatch({type:"cardata",payload:res})
   
dispatch({type:"finish"})
}).catch((error)=>{
    dispatch({type:"loginfail"})
})

    },[])

    return <>
    {
        
        state.isloading?<Skeleton startColor='green.500' endColor='black.500' height='20px' />:  <Grid templateColumns='repeat(5, 1fr)' gap={6} bg='gray.100'  >

        
        
        {  state.cardata&&state.cardata.map((elm)=>
       
        <Box key={elm.id} > 
        <Image src={elm.image} width='300px' h='300px' ></Image>
        <Text>{elm.category}</Text>
        <Text>{elm.price}</Text>
        <Link to={`/${elm.id}`} >More Details</Link></Box>)
        
        
       }
       
       </Grid>
}
    </>

}