
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter} from "react-router-dom";

// Switch foi substituído pelo Routes
import  Main   from "./Components/Pages/Main";
import  Teste  from "./Components/Pages/Teste";


export default function Rotas() {
return(

<BrowserRouter>
<Routes>
<Route path="/" element={<Main />}/>
<Route path="/usuarios" element={<Teste/>}/>  

</Routes>
</BrowserRouter>





);


};






