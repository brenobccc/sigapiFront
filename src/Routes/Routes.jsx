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
import { useEffect } from "react";
import TelaLoginProfessor from "../components/perfis/perfilProfessor/Login/TelaLoginProfessor.jsx";

const alunoAcesso = !true;
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
                  <Route path="*" element={<Navigate replace to="/aluno/home"/>}/>
                ];

  const rotasProfessor = [
                  <Route path="/professor/home" element={<HomeProfessor/>}/>,
                  <Route path="*" element={<Navigate replace to="/professor/home"/>}/>
  ];

  const [auth,setAuth] = useState({
    alunoAcesso: false,
    professorAcesso: false
  });
  
  
  useEffect(()=>{
    if(localStorage.getItem('acessos') === null){
      localStorage.setItem('acessos','{"alunoAcesso": false, "professorAcesso": false}')
      setAuth(JSON.parse(localStorage.getItem('acessos')));
      return;
    }
    setAuth(JSON.parse(localStorage.getItem('acessos')))
    return;
  },[]);
  
  
  
  function rotas(){
    return auth.alunoAcesso ? rotasAlunos.map((l) => l) : auth.professorAcesso ? rotasProfessor.map((l) => l) : ""
  }
  
  return (
    <AuthContext.Provider value={{auth,setAuth}}>
            <BrowserRouter>
              <Routes>
                      {(auth.alunoAcesso || auth.professorAcesso) ? 
                         rotas()
                        : <>
                         (<Route path="/" exact element={<TelaApresentacao/>} />  
                         <Route path="*" element={<Navigate replace to="/"/>}/>
                         <Route path="/aluno/Login" element={<TelaLogin/>} />,
                         <Route path="/professor/Login" element={<TelaLoginProfessor/>} />,
                          )</>
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
