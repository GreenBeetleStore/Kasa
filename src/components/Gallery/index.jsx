// Gallery 🎨 src/components/Gallery/index.jsx

import React from 'react'
import '../../styles/style.css'
import PropTypes from 'prop-types'
import DefaultPicture from '../../assets/images/profile.png'

const galleryAparts = [
   {
      title: 'Appartement cosy',
      pictures: DefaultPicture,
   },
   {
      title: 'Magnifique appartement proche Canal Saint Martin',
      pictures: DefaultPicture,
   },
   {
      title: 'Studio de charme - Buttes Chaumont',
      pictures: DefaultPicture,
   },
]

function Gallery({ title, pictures }) {
   return (
      <section className="sectionGallery">
         <div className="k-gallery">
            <div className="k-gallery__container container">
               <a href="../pages/Card">
                  <article className="k-gallery__container__article article">
                     {galleryAparts.map((apart, index) => (
                        <div
                           key={`${apart.title}-${index}`}
                           pictures={apart.pictures}
                           title={apart.title}
                        />
                     ))}
                     <img
                        className="k-gallery__container__article__apartImage article__apartImage"
                        src={pictures}
                        alt="Intérieur d'appartement"
                     />
                     <span className="k-gallery__container__article__title article__title">
                        {title}
                     </span>
                  </article>
               </a>
            </div>
         </div>
      </section>
   )
}

Gallery.propTypes = {
   title: PropTypes.string.isRequired,
   pictures: PropTypes.string.isRequired,
}

Gallery.defaultProps = {
   title: '',
   pictures: DefaultPicture,
}

export default Gallery
