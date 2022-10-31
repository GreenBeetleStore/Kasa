// ApartItem 🈴 src/components/ApartItem.jsx

import React from 'react'
import ApartRating from './ApartRating'
import '../styles/style.css'

function handleClick(apartTitle) {
   alert(`Vous allez visiter ${apartTitle} ? Bienvenue à Kasa ✨🏡✨`)
}

function ApartItem({
   id,
   title,
   cover,
   pictures,
   description,
   host,
   rating,
   location,
   equipments,
   tags,
}) {
   return (
      <li key={id} className="k-apart-item" onClick={handleClick(title)}>
         <img
            className="k-apart-item-cover"
            src={cover}
            alt={`${title} cover`}
         />
         {title}
         <div>
            <ApartRating scaleRate />
         </div>
      </li>
   )
}

export default ApartItem
