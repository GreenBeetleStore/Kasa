// App 🥏 src/components/App.jsx

import '../styles/style.css'

import Header from '../src/components/Header/index'
import Banner from '../src/components/Banner'
import Gallery from '../src/components/Gallery'
import Footer from '../src/components/Footer'
import ApartList from '../src/components/ApartList'

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
         </Header>
         ,
         <Banner />,
         <Gallery />,
         <Footer />,
         <ApartList />,
      </div>
   )
}

export default App
