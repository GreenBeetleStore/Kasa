// index 🧿 src/index.jsx

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './components/App'
import Header from './components/Header'
import './styles/style.css'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
      <React.StrictMode>
         <App />
      </React.StrictMode>,

document.getElementById('root')
)

// Si voleu començar a mesurar el rendiment a la vostra aplicació, passeu una funció
// per registrar els resultats (per exemple: reportWebVitals(console.log))
// o enviar a un punt final d'anàlisi. Més informació: https://bit.ly/CRA-vitals
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
