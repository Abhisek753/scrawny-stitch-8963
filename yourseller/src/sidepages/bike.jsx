
import { useState } from "react"
import { useContext } from "react"
import { useEffect } from "react"
import { Appcontext } from "../comoponents/Statemange"
import { Box,Grid,GridTemplate,Image,Text,SkeletonCircle,Skeleton,SkeletonText } from "@chakra-ui/react"
import {Link} from "react-router-dom"
export default function Bikes (){

   
   const {state,dispatch}=useContext(Appcontext)

   
    async function Getbikes(){
        return fetch(`http://localhost:3001/random?_page=1&limit=10&category=bikes`).then((res)=>res.json())
    }

    useEffect(()=>{
dispatch({type:"start"})
        Getbikes().then((res)=>{
dispatch({type:"bikedata",payload:res})
dispatch({type:"finish"})
}).catch((error)=>{
    dispatch({type:"loginfail"})
})
    },[])

    console.log(state);


    return <>
     {
        
        state.isloading?<Skeleton startColor='green.500' endColor='black.500' height='20px' />:  <Grid templateColumns='repeat(5, 1fr)' gap={6} bg='gray.100'  >

        
        
        { state.bikedata&& state.bikedata.map((elm)=>
       
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