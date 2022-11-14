// index 🧿 src/index.jsx

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './pages/About/index'
import Card from './pages/Card/index'
import Desktop from './pages/Desktop/index'
import Header from './components/Header/index'
import Home from './pages/Home/index'
import Error from './components/Error/index'
import './styles/style.css'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
   <React.StrictMode>
      <Router>
         <Desktop />
         <Header />
         <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Card" element={<Card />} />
            <Route path="*" element={<Error />} />
         </Routes>
      </Router>
   </React.StrictMode>,

   document.getElementById('root')
)

// Més informació: https://bit.ly/CRA-vitals
reportWebVitals()
