// Home 🏠 src/pages/Home/index.jsx

import React from 'react'
import '../../styles/style.css'
import Header from '../../components/Header/index'
import Banner from '../../components/Banner/index'
import Gallery from '../../components/Gallery/index'
import Footer from '../../components/Footer/index'


const Home = () => {
   return (
      <div>
         <h1> Page d'accueil 🏠 </h1>
         <Header />,
         <Banner />,
         <Gallery />,
         <Footer />,
      </div>
   )
}

export default Home
