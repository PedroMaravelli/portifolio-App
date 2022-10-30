import { Route, Routes } from "react-router-dom";
import Home from '../views/Home'
import Sobre from "../views/Sobre";

function AppRouter (){
    return(
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/sobre" element={<Sobre></Sobre>}></Route>

            

        </Routes>
    )

}

export default AppRouter