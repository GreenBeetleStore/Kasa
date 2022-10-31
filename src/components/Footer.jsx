// Footer · src/components/Footer.jsx

import '../styles/style.css'
import logoB from '../assets/images/logoB.png'

function Footer() {
   return (
      <footer className="k-footer">
         <a href="../pages/Accueil">
            <img
               className="k-footer__logo"
               src={logoB}
               alt="Logo de l'immobilier Kasa"
            />
         </a>
         <h3 className="k-footer__copyright">
            © 2020 Kasa. All rights reserved
         </h3>
      </footer>
   )
}

export default Footer
