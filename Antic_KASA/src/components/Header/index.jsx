// Header 🤯 src/components/Header/index.jsx

import '../../styles/style.css'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

function Header() {
   return (
      <div>
         <a href="../pages/Home">
            <img
               src={logo}
               alt="Logo de l'immobilier Kasa"
               className="k-logo"
            />
         </a>
         <nav className="k-header__menu">
            <ul className="k-header__menu__ul">
               <li>
                  <Link to="/">Accueil</Link>
               </li>
               <li>
                  <Link to="/About">A Propos</Link>
               </li>
            </ul>
         </nav>
      </div>
   )
}

export default Header
