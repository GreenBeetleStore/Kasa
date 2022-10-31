// App 🥏 src/components/App.jsx

import '../styles/style.css'
import logo from '../assets/images/logo.png'
import Header from './Header'
import Banner from './Banner'
import Gallery from './Gallery'
import Footer from './Footer'
import ApartList from './ApartList'

function App() {
   return (
      <div>
         <Header>
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
                     <a href="../pages/Home">Home</a>
                  </li>
                  <li>
                     <a href="../pages/APropos.jsx">A Propos</a>
                  </li>
               </ul>
            </nav>
         </Header>,
         <Banner />,
         <Gallery />,
         <Footer />,
         <ApartList />,
      </div>
   )
}

export default App
