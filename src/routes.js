import React from "react";
import {
    BrowserRouter, Routes, Route,
  } from 'react-router-dom';

import TelaApresentacao from './components/TelaApresentacao';
import Teste from './components/Teste';

const rotas =  () => {
    return (
        <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<TelaApresentacao/>} />
        <Route path="teste" element={<Teste/>} />
      </Routes>
    </BrowserRouter>
    )
}

export default rotas