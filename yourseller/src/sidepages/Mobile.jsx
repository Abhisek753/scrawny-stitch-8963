
import { useEffect } from "react"
import { useContext } from "react"
import { Appcontext } from "../comoponents/Statemange"
import { Box,Grid,GridTemplate,Image,Text,SkeletonCircle,Skeleton,SkeletonText, SimpleGrid } from "@chakra-ui/react"
import {Link} from "react-router-dom"
import CardContainer from "../comoponents/pages/CardContainer"
import { Searchcontext } from "../comoponents/pages/Searchcontext"

export default function Mobile(){
const {state,dispatch}=useContext(Appcontext)
const {sdata}= useContext(Searchcontext)


async function Mobile(){
    return fetch(`https://mysterious-goat-windbreaker.cyclic.app/random?_page=1&limit=10&category=Mobile&q=${sdata}`).then((res)=>res.json())
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
   
   state.isloading?<Skeleton startColor='green.500' endColor='black.500' height='20px' />:  <SimpleGrid columns={[1,1,2,4]} gap={6} bg='gray.100'  >

   
   
   {  state.mobiledata&&state.mobiledata.map((elm)=>
  
//    <Box key={elm.id} > 
//    <Image src={elm.image} width='300px' h='300px' ></Image>
//    <Text>{elm.category}</Text>
//    <Text>{elm.price}</Text>
//    <Link to={`/${elm.id}`} >More Details</Link></Box>
<CardContainer {...elm}/>
        
   )}
  
  </SimpleGrid>
}

</>
}