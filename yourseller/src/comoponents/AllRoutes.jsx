import {Routes,Route} from "react-router-dom"
import Navbar from "./Navbar"
import Buypage from "./pages/buypage"
import Login from "./pages/login"
import Cars from "./pages/cars"
import DetailsPage from "./pages/DetailsPage"
import MainPage from "./pages/mainpage"
import Mobile from "../sidepages/Mobile"
import Bikes from "../sidepages/bike"
import Private from "../sidepages/privateRoute"
export default function Allroutes(){

    return <Routes>
        <Route path='/' element={
       <MainPage/>
    } ></Route>
        <Route path='/login' element={<Login/>} ></Route>
        <Route path='/buy' element={<Buypage/>} ></Route>
        <Route path='/cars' element={
    <Private><Cars/></Private>
        } ></Route>
        <Route path='/mobile' element={
       <Mobile/>
        } ></Route>
        <Route path='/bike' element={
        <Bikes/>
        } ></Route>
        <Route path='/:id' element={<DetailsPage/>} ></Route>
    </Routes>
}