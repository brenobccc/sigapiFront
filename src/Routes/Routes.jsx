import React from "react";
import {
    BrowserRouter, Routes, Route, Navigate
  } from 'react-router-dom';
import TelaApresentacao from '../components/Apresentacao/TelaApresentacao.jsx';
import TelaCadastro from '../components/perfis/perfilAluno/TelaCadastro';
import TelaDiario from '../components/perfis/perfilAluno/TelaDiario/TelaDiario';
import TelaLogin from '../components/perfis/perfilAluno/Login/TelaLogin';
import Home from "../components/perfis/perfilAluno/Home/Home.jsx";
import CalendarioAcademico from '../components/perfis/perfilAluno/CalendarioAcademico/CalendarioAcademico';
import HorarioIndividual from '../components/perfis/perfilAluno/HorarioIndividual/HorarioIndividual';
import Boletim from '../components/perfis/perfilAluno/Boletim/Boletim';
import HomeProfessor from "../components/perfis/perfilProfessor/Home/HomeProfessor.jsx";
import { useState } from "react";
import AuthContext from '../contextos/AuthContext.jsx'

const alunoAcesso = true;
const professorAcesso = !true;



export default () => {
  /*{lista.map((l) => l)}*/
  const rotasAlunos = [
                  <Route path="/aluno/diario" element={<TelaDiario/>} />,
                  <Route path="/aluno/calendarioacademico" element={<CalendarioAcademico/>}/>,
                  <Route path="/aluno/horarioindividual" element={<HorarioIndividual/>}/>,
                  <Route path="/aluno/boletim" element={<Boletim/>}/>,
                  <Route path="/aluno/home" element={<Home/>}/>,
                  <Route path="/aluno/TelaCadastro" element={<TelaCadastro/>} />,
                  <Route path="/aluno/Login" element={<TelaLogin/>} />,
                  <Route path="*" element={<Navigate replace to="/aluno/home"/>}/>
  ];

  const rotasProfessor = [
                  <Route path="/professor/home" element={<HomeProfessor/>}/>
  ];

  const [auth,setAuth] = useState(!false);

    return (
      <AuthContext.Provider value={{auth,setAuth}}>
        {console.log(auth)}
            <BrowserRouter>
              <Routes>
                      {auth ? 
                        rotasAlunos.map((l) => l)
                        : <>
                         (<Route path="/" exact element={<TelaApresentacao/>} />  
                         <Route path="*" element={<Navigate replace to="/"/>}/>)</>
                      }
                    { /*:(
                      <Route path="/" exact element={<TelaApresentacao/>} />  
                      <Route path="*" element={<Navigate replace to="/"/>}/>
                    );*/}
              </Routes>
            </BrowserRouter>
      </AuthContext.Provider>
    )
}
