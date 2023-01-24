import { BrowserRouter, Routes, Route } from "react-router-dom";
import Acceuil from "../pages/Acceuil";


const RouteCompenent = () => {
    return (
        <div>

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Acceuil/>}/>
                   {/* < Route path="" element="{} "/>
                    < Route path="/Pieces" element={<Pieces />}/>*/} 
                    
                </Routes>
            </BrowserRouter>
        </div>
    )

}
export default RouteCompenent;