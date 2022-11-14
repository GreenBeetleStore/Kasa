// Banner 🍌 src/components/Banner/index.jsx

import React from 'react'
import '../../styles/style.css'


function Banner({ cover:{id} }) {
   return (
      <section className="sectionBanner">
         <div className="k-banner">
            <img
               src='cover:{id}'
               alt="Falaises en bord de mer"
               className="k-banner__img"
            />
            <h1 className="k-banner__title">Chez vous, partout et ailleurs</h1>
         </div>
      </section>
   )
}

export default Banner
