// Banner 🍌 src/components/Banner.jsx

import React from 'react'
import '../styles/style.css'
import banner01 from '../assets/images/banner01.webp'

const Banner = () => {
   return (
      <section className="sectionBanner">
         <div className="k-banner">
            <img
               src={banner01}
               alt="Falaises en bord de mer"
               className="k-banner__img"
            />
            <h1 className="k-banner__title">Chez vous, partout et ailleurs</h1>
         </div>
      </section>
   )
}

export default Banner
