// Footer · src/components/Footer.jsx

import React from 'react'
import '../styles/style.css'
import logo from '../assets/logo.svg'

const Footer = () => {
   return (
      <footer>
         <div className="k-footer">
            <a href="../pages/Accueil">
               <img
                  className="k-footer__logo"
                  src={logo}
                  alt="Logo de l'immobilier Kasa"
               />
            </a>
            <h3 className="k-footer__copyright">
               © 2020 Kasa. All rights reserved
            </h3>
         </div>
      </footer>
   )
}

export default Footer
