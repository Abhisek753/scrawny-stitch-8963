
import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { Appcontext } from "../comoponents/Statemange"
export default function Private({children}){

    const {loginstate,setloginstate}=useContext(Appcontext)
    console.log(loginstate,"%%5");
  if(!loginstate){
    return <Navigate to='/login' />
  }


    return children
}