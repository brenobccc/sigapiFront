import React from "react";
import {
    BrowserRouter, Routes, Route, Navigate
  } from 'react-router-dom';
import TelaApresentacao from '../components/Apresentacao/TelaApresentacao';
import TelaCadastro from '../components/TelaCadastro';
import TelaDiario from '../components/TelaDiario/TelaDiario';
import TelaLogin from '../components/Login/TelaLogin';
import Home from "../components/Home/Home.jsx";
import CalendarioAcademico from '../components/CalendarioAcademico/CalendarioAcademico';
import HorarioIndividual from '../components/HorarioIndividual/HorarioIndividual';
import Boletim from '../components/Boletim/Boletim';

let privateControll = true;/*Método de controle temporário para rota privada*/
/*em breve será sofisticado para um controle local ou usando redux/useContext*/

const rotas =  () => {
  
    return (
      <BrowserRouter>
        <Routes>
          
          {/*Se o usuário estiver logado ele irá habilitar as demais rotas
           e caso ele tente acessar qualquer outra rota, ele irá redirecionar para o /*/}
          {privateControll ? 
              (
                <>
                  <Route path="/diario" element={<TelaDiario/>} />
                  <Route path="/calendarioacademico" element={<CalendarioAcademico/>}/>
                  <Route path="/horarioindividual" element={<HorarioIndividual/>}/>
                  <Route path="/boletim" element={<Boletim/>}/>
                  <Route path="/home" element={<Home/>}/>
                  <Route path="*" element={<Navigate replace to="/home"/>}/>
                </>
              ) 
              : (<>
                    <Route path="/" exact element={<TelaApresentacao/>} />
                    <Route path="/Login" element={<TelaLogin/>} />
                    <Route path="/TelaCadastro" element={<TelaCadastro/>} />
                    <Route path="*" element={<Navigate replace to="/"/>}/>
                </>)
          }

        </Routes>
      </BrowserRouter>
    )
}

export default rotas