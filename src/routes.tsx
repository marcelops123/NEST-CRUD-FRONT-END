
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Switch foi substituído pelo Routes
import  Main   from "./Components/Pages/Main";
import  Lista  from "./Components/Pages/Lista";


export default function Rotas() {
return(
<Router>
<Routes>
<Route path="/" element={<Main />}/>
<Route path="/lista" element={<Lista/>}/>
  


</Routes>
</Router>




);


};






