import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/style.css'
import App from './components/App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <BrowserRouter>
      <React.StrictMode>
         <App />
      </React.StrictMode>
   </BrowserRouter>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
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
