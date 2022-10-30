// Header · src/components/Header.jsx

import React from 'react'
import '../styles/style.css'
import logo from '../assets/logo.svg'

const Header = () => {
   return (
      <header>
         <div className="k-header">
            <a href="../pages/Accueil">
               <img
                  src={logo}
                  alt="Logo de l'immobilier Kasa"
                  className="k-logo"
               />
            </a>
            <nav className="k-header__menu">
               <ul className="k-header__menu__ul">
                  <li>
                     <a href="../pages/Accueil">Accueil</a>
                  </li>
                  <li>
                     <a href="../pages/APropos.jsx">A Propos</a>
                  </li>
               </ul>
            </nav>
         </div>
      </header>
   )
}

export default Header
