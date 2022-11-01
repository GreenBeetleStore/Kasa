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

// import React from 'react'
// import ReactDOM from 'react-dom'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import Home from './pages/Home'
// import Survey from './pages/Survey'
// import Results from './pages/Results'
// import Freelances from './pages/Freelances'
// import Header from './components/Header'
// import Error from './components/Error'
// import Footer from './components/Footer'
// import GlobalStyle from './utils/style/GlobalStyle'
// import { ThemeProvider, SurveyProvider } from './utils/context'

// ReactDOM.render(
//    <React.StrictMode>
//       <Router>
//          <ThemeProvider>
//             <SurveyProvider>
//                <GlobalStyle />
//                <Header />
//                <Switch>
//                   <Route exact path="/">
//                      <Home />
//                   </Route>
//                   <Route path="/survey/:questionNumber">
//                      <Survey />
//                   </Route>
//                   <Route path="/results">
//                      <Results />
//                   </Route>
//                   <Route path="/freelances">
//                      <Freelances />
//                   </Route>
//                   <Route path="*">
//                      <Error />
//                   </Route>
//                </Switch>
//             </SurveyProvider>
//             <Footer />
//          </ThemeProvider>
//       </Router>
//    </React.StrictMode>,
//    document.getElementById('root')
// )
