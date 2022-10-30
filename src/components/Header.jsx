import '../styles/style.css'
import logo from '../assets/logo.png'

function Header() {
   return (
      <div className="k-header">
         <a href="../pages/Accueil">
            <img
               src={logo}
               alt="Logo de l'immobilier Kasa"
               className="k-logo"
            />
         </a>
         <nav className="k-header__menu">
            <ul className='k-header__menu__ul'>
               <li>
                  <a href="../pages/Accueil">Accueil</a>
               </li>
               <li>
                  <a href="../pages/A-Propos.jsx">A Propos</a>
               </li>
            </ul>
         </nav>
      </div>
   )
}

export default Header
