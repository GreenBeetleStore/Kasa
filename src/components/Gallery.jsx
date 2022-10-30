// Gallery · src/components/Gallery.jsx

import React from 'react'
import '../styles/style.css'

const Gallery = () => {
   return (
      <section className="sectionGallery">
         <div className="k-gallery">
            <div className="k-gallery__container container">
               <a href="../pages/Fitxa">
                  <div className="k-gallery__container__article article">
                     <img
                        className="k-gallery__container__article__apartImage article__apartImage"
                        src="../assets/images/aparts/accommodation-20-1.webp"
                        alt="Intérieur de l'appartement"
                     />
                     <h3 className="k-gallery__container__article__title article__title">
                        Titre de la location
                     </h3>
                  </div>
               </a>
            </div>
         </div>
      </section>
   )
}

export default Gallery
