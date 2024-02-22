import { Route, Routes } from "react-router-dom"
import { SignLog } from "../bhawesh/SignLog"

export const AllRoutes=()=>{
 return(
    <>
        <Routes>
            <Route path='/login' element={<SignLog/>}/>
            <Route />
        </Routes>
    </>
 )   
}