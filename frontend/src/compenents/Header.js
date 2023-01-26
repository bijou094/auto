import Navigator from "./Navigator";
import logo from '../images/logo.jpg'
import '../styles/header.css'
const Header =()=>{

    return(
        <>
            <div className='header' >
                <div className='header_navigation' >
                
                    <div className='header_image'>
                        <img src={logo} className='logo' alt='header_logo' />
                    </div>
                </div>
                <Navigator/>
            </div>
            
        </>
    )
}
export default Header;