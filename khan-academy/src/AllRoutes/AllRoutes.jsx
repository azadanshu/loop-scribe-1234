import { Route, Routes } from "react-router-dom"
import { SignLog } from "../bhawesh/SignLog"
import { SignUp } from "../bhawesh/SignUp"

export const AllRoutes=()=>{
 return(
    <>
        <Routes>
            <Route path='/login' element={<SignLog/>}/>
            <Route />
            <Route path="/signUp2" element={<SignUp/>} />
            <Route path="/signup" element={<SignLog/>} />
        </Routes>
    </>
 )   
}