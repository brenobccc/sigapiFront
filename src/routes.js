import React from "react";
import {
    BrowserRouter, Routes, Route,
  } from 'react-router-dom';

import TelaApresentacao from './components/Apresentacao/TelaApresentacao';
import TelaCadastro from './components/TelaCadastro';
import TelaDiario from './components/TelaDiario';
import TelaLogin from './components/Login/TelaLogin';
import Teste from './components/Teste';
import Home from "./components/Home";

const rotas =  () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<TelaApresentacao/>} />
          <Route path="/TelaCadastro" exact element={<TelaCadastro/>} />
          <Route path="/Diario" exact element={<TelaDiario/>} />
          <Route path="/Login" exact element={<TelaLogin/>} />
          <Route path="teste" element={<Teste/>} />
          <Route path="/Home" element={<Home/>}/>
          
        </Routes>
      </BrowserRouter>
    )
}

export default rotas