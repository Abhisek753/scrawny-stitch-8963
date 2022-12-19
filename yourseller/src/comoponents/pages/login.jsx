import {AlertIcon,Alert,Text,Divider,Button,Container, Input,Box, useEditable, useConst,CircularProgress} from "@chakra-ui/react"
import { useContext, useRef } from "react"
import { useState } from "react"
import { useEffect } from "react"
import {Navigate} from "react-router-dom"
import { Appcontext } from "../Statemange"
export default function Login(){
 
    const {state,dispatch,loginstate,setloginstate}=useContext(Appcontext)
    


    const timerref=useRef()
    const [count,setCount]=useState(5)
 
    const [logindet,setlogindet]=useState({
        email:"",
        password:""
    })
    const handelChange=(e)=>{
        const{name,value}=e.target
  setlogindet({...logindet,[name]:value})
    }
    const handleSubmit=()=>{
        dispatch({type:"start"})
        GetRes().then((res)=>{
            
        
             if(res.token){
                dispatch({type:"loginsuccess"})
                setloginstate(true)
             } 
             else{
                dispatch({type:"loginfail"})//true
             }
           
           dispatch({type:"finish"})
        }).catch((error)=>{
            
            dispatch({type:"loginfail"})
        })
      
      

    }


   async function GetRes(){
    
       return fetch(`https://reqres.in/api/login`,{
        method:"POST",
        body: JSON.stringify({email:logindet.email,password:logindet.password}),
    
         headers:{
            "content-type":"application/json"
         }
       }).then((res)=>res.json())
       
    }
//wrong Password

    if(loginstate){
        return <Navigate to='/' />
    }
    if(state.wrong&&state.wrong1){
       const id= setTimeout(()=>{ 
            dispatch({type:"reset"})
            if(id){
                clearTimeout(id)
            }

        },3000)

        return <Alert status='error'>
            <AlertIcon />
            Please Enter Correct PassWord or Email
      </Alert>
    }
   

 


 
 

    return <>
    <Container>
        <Box  p={3} m={4} mt="100px" display={"flex"} flexDirection="column" bg="red.100" borderRadius={40} >
            <Text p="20px"  as='b' >{state.wrong==true?"wrong Password":null}</Text>
<Box mt={4} ><Input name='email' value={logindet.email} onChange={handelChange} bg='white' placeholder="Enter Email"  ></Input></Box>
<Box mt={4} ><Input name='password' value={logindet.password} onChange={handelChange}  bg='white' placeholder="Enter PassWord"  ></Input></Box>
<Button  borderRadius={40} mt="20px" onClick={handleSubmit} >{state.isloading?<CircularProgress isIndeterminate color='green.300' />:"Login"}</Button>
<Divider/>
        </Box>
    </Container>
    
    </>
}