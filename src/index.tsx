import { ColorModeScript } from "@chakra-ui/react"
import * as React from "react"
import ReactDOM from "react-dom"
import  Main  from './Components/Pages/Main'
import  Teste  from "./Components/Pages/Teste"
import  GlobalStyle    from './Components/Styles'

import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom"
import App from "./App"


ReactDOM.render(
  <React.StrictMode>
  <ColorModeScript />
  <BrowserRouter />
  <Main />
  <Teste />
  <GlobalStyle />
  
  </React.StrictMode>,
    
  document.getElementById("root"),
)

