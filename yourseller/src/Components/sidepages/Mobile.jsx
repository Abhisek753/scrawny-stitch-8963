
import { useEffect } from "react"
import { useContext } from "react"
import { Appcontext } from "../comoponents/Statemange"
import { Box,Grid,GridTemplate,Image,Text,SkeletonCircle,Skeleton,SkeletonText } from "@chakra-ui/react"
import {Link} from "react-router-dom"

export default function Mobile(){
const {state,dispatch}=useContext(Appcontext)

async function Mobile(){
    return fetch(`http://localhost:3001/random?_page=1&limit=10&category=Mobile`).then((res)=>res.json())
}

useEffect(()=>{
    dispatch({type:"start"})
    Mobile().then((res)=>{
dispatch({type:"mobiledata",payload:res})
dispatch({type:"finish"})
    }).catch((error)=>{
        dispatch({type:"loginfail"})
    })
},[])


return <>
{
   
   state.isloading?<Skeleton startColor='green.500' endColor='black.500' height='20px' />:  <Grid templateColumns='repeat(5, 1fr)' gap={6} bg='gray.100'  >

   
   
   {  state.mobiledata&&state.mobiledata.map((elm)=>
  
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