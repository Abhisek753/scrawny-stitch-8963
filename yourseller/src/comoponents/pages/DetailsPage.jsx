import { Container,Box,Image,Text } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { Appcontext } from "../Statemange";
export default function DetailsPage(){
const {state,dispatch}=useContext(Appcontext)
const [data,setdata]=useState(null)
    const params=useParams()
     
    const getdata=async()=>{
       return fetch(`http://localhost:3001/random/${params.id}`).then((res)=>res.json())
    }

    useEffect(()=>{
        dispatch({typr:"start"})
getdata().then((res)=>{
    setdata(res)
dispatch({type:"singleuserdata",payload:res})
dispatch({type:"finish"})
}).catch((error)=>{

    dispatch({type:"loginfail"})

})

    },[])



   return <Container mt='30px' h='400px' bg='#E6FFFA' >
 {data&&data? < Box display={'flex'} flexDirection='column' justifyContent='center' alignItems={'center'}  mt='20px' >
<Image src={data.image}  w='100px' h='200px' mt='20px' />
<Text>Category:-{data.category}</Text>
<Text> cash on delivery:- {data.cod}</Text>
<Text>{data.display||data.date}</Text>
<Text>{data.fuel||data.chipset}</Text>
<Text>{data.location}</Text>
<Text>{data.seller_name}</Text>
</Box>:null}
   </Container>
}