import { Link } from "react-router-dom";
import "../styles/navigator.css"

const Navigator = ()=>{
    return(
        <>
        <nav>
            <ul>
                <li><Link to="/">Acceuil</Link></li>
                <li></li>
                <li></li>
            </ul>
        </nav>
        </>
    )
}
export default Navigator;