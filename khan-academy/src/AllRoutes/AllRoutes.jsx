import { Route, Routes } from "react-router-dom"
import { SignLog } from "../bhawesh/SignLog"
import { SignIn } from "../bhawesh/SignIn"

export const AllRoutes=()=>{
 return(
    <>
        <Routes>
            <Route path='/login' element={<SignLog/>}/>
            <Route />
            <Route path="/signin2" element={<SignIn/>} />
            <Route path="/signup" element={<SignLog/>} />
        </Routes>
    </>
 )   
}