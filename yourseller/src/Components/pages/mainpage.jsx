import { Button, Container, Grid,GridItem, useConst,Skeleton ,Box,Tabs,TabPanel,Tab,TabList,TabPanels,Progress,Stack,Checkbox} from "@chakra-ui/react"
import { useContext, useState } from "react"
import { useEffect } from "react"
import CardMapping from "./Cardmapping"

import { Appcontext } from "../Statemange"


export default function MainPage(){

const {state,dispatch}=useContext(Appcontext)

const [checkvalue,setCheckValue]=useState("")
const [mobidata,setmobidata]=useState("")
  const [data,setdata]=useState([])
const [page,setPage]=useState(1)



async function FetchRandom(p){
  return  fetch(`http://localhost:3001/random?_page=${p.page}&_limit=10`).then((res)=>{
   return res.json()
  })
 }

 async function Alldata(){
  return fetch(`http://localhost:3001/random`).then((res)=>res.json())
 }
 

    useEffect(()=>{
Alldata().then((res)=>dispatch({type:"search",payload:res}))



dispatch({type:"start"})
FetchRandom({page:page}).then((res)=>{
  
dispatch({type:"finish",payload:res})
}).catch((error)=>{
  dispatch({type:"loginfail"})
})
    },[page])


const tabChange=(e)=>{
  setCheckValue(e.target.checked)

  async function sortdata(){
return fetch(`http://localhost:3001/random?_sort=price&order=desc`).then((res)=>res.json())
  }
  
  if(checkvalue==false){
   sortdata().then((res)=>dispatch({type:"finish",payload:res}))
  }
  else{
    FetchRandom({page:page}).then((res)=>dispatch({type:"finish",payload:res}))
  }
}
async function mobiledata(){
  return fetch(`http://localhost:3001/random?category=Mobile`).then((res)=>res.json())
    }

async function mobilesort(e){

if(e.target.checked){
  mobiledata().then((res)=>dispatch({type:"finish",payload:res}))
}
else{
  FetchRandom({page:page}).then((res)=>dispatch({type:"finish",payload:res}))
}
}



    return(<>

{ state.isloading?<Progress size='lg' isIndeterminate />: <Grid
  h='200px'
  templateRows='repeat(2, 1fr)'
  templateColumns='repeat(5, 1fr)'
  gap={4} mt={4}
>
  <GridItem rowSpan={2} colSpan={1}>
<Box   bg='grey.100' h='200px'  display={'flex'} justifyContent={'center'} >

<Stack spacing={[1, 5]} direction={['column', 'row']}>
  
  <Checkbox size='md' colorScheme='green' onChange={tabChange} >
   Price
  </Checkbox>
  <Checkbox size='lg' colorScheme='orange' onChange={mobilesort}  >
   Mobile
  </Checkbox>
</Stack>

</Box>

  </GridItem>

  <GridItem colSpan={4} bg='gray.100' >
   <CardMapping  page={page} data={state.data} fn={setPage} />
  </GridItem>
  

</Grid>}


    </>)

}