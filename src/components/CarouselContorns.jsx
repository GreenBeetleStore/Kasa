/* Carousel 🎠 src/components/Carousel.jsx */

import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import logements from '../mocks/logements.json'
import ArrowRight from '../assets/icons/arrowRight.svg'
import ArrowLeft from '../assets/icons/arrowLeft.svg'

import Photo from '../assets/images/Background.png'

const Carousel = () => {
   // Captura de l'id a l'URL.
   const { id } = useParams()

   const { pictures } = logements.map((pictures) => pictures.id === id)

   // Modificador d'estat.
   const [expose, isExpose] = useState(0)

   // Si és la última foto -1 passa a la primera 0, sinó passa a la següent +1.
   const nextPicture = () => {
      isExpose(expose === pictures.length - 1 ? 0 : expose + 1)
   }
   // Si és a la primera posició passa a la última, sinó passa a l'anterior.
   const previousPicture = () => {
      isExpose(expose === 0 ? pictures.length - 1 : expose - 1)
   }

   return (
      <section className="K-Sheet__carousel k-carousel">
         <div className="K-Sheet__carousel__arrows k-arrows">
            <img
               className="K-Sheet__carousel__arrows__arrowLeft k-carousel__arrowLeft"
               src={ArrowLeft}
               alt="flèche gauche"
               onClick={previousPicture}
            />
            <img
               className="K-Sheet__carousel__arrows__arrowRight k-carousel__arrowRight"
               src={ArrowRight}
               alt="flèche droite"
               onClick={nextPicture}
            />
         </div>
         <>
            <img
               src={Photo}
               alt="foto apart"
               className="K-Sheet__carousel__picture k-carousel__picture"
            />
         </>
      </section>
   )
}

export default Carousel
