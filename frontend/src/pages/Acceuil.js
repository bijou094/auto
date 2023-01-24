
//import { Link } from 'react-router-dom';<Link to=""> Ajouter un article</Link><Link to=""> Trouver un article</Link>

import Footer from "../compenents/Footer";
import Header from "../compenents/Header";



const Acceuil = () => {

    return (
        <>
            <div className='Acceuil'>
                <Header />
               <h1>pieces detachées</h1>               
                <Footer/>
            </div>

        </>   
        )
}

export default Acceuil;