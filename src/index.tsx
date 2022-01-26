import { ColorModeScript } from "@chakra-ui/react"
import * as React from "react"
import ReactDOM from "react-dom"
import  GlobalStyle    from './Components/Styles'
import { BrowserRouter } from "react-router-dom"
import Rotas from "./routes"




ReactDOM.render(
  <React.StrictMode>
  <ColorModeScript />
  <BrowserRouter />
  <Rotas />
  <BrowserRouter />
  <GlobalStyle />
  
  </React.StrictMode>,
    
  document.getElementById("root"),
)

