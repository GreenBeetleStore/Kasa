// ApartList 📜 src/components/ApartList/index.jsx

import React from 'react'
import '../../styles/style.css'
import { apartList } from '../../mocks/apartList'
import ApartItem from '../ApartItem/index'

function ApartList() {
   const descriptions = apartList.reduce(
      (acc, apart) =>
         acc.includes(apart.description) ? acc : acc.concat(apart.description),
      []
   )

   return (
      <div className="k-favorits-list">
         <ul>
            {descriptions.map((desc) => (
               <li key={desc}>{desc}</li>
            ))}
         </ul>
         <ul className="k-apart-list">
            {apartList.map(
               ({
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
               }) => (
                  <div key={id}>
                     <ApartItem
                        id={id}
                        title={title}
                        cover={cover}
                        pictures={pictures}
                        description={description}
                        host={host}
                        rating={rating}
                        location={location}
                        equipments={equipments}
                        tags={tags}
                     />
                  </div>
               )
            )}
         </ul>
      </div>
   )
}

export default ApartList
