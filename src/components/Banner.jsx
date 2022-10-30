// Banner · src/components/Banner.jsx

import banner01 from '../assets/banner01.webp'
import '../styles/style.css'
import { Component } from 'react'

export default class Banner extends Component {
   render() {
      if (this.props.origin === 'Accueil') {
         return (
            <div className="k-banner">
               <img
                  src={banner01}
                  alt="Falaises en bord de mer"
                  className="k-banner__img"
               />
               <h1 className="k-banner__title">
                  Chez vous, partout et ailleurs
               </h1>
            </div>
         )
      } else if (this.props.origin === 'A-Propos') {
         return <div className="k-banner__A-Propos"></div>
      }
   }
}
