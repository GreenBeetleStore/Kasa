// ApartRating ⭐ src/components/ApartRating/index.jsx

import React from 'react'
import '../../styles/style.css'
import Star from '../../assets/images/star.svg'

function ApartRating () {
   const range = [1, 2, 3, 4, 5]
   const scaleRate = <img src={Star} alt='star-icon' className='starRating' />
   
   return (
      <div>
         {range.map((rangeElem) =>
            scaleRate >= rangeElem ? (
               <span key={rangeElem.toString()}>{Star}</span>
            ) : null
         )}
      </div>
   )
}

export default ApartRating
