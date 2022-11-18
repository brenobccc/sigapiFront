import React from "react";
import axios from "axios";
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
  
  const [token,setToken] = useState('');
  const urlBase = "http://localhost:8000";
 
  useEffect(()=>{ 
    if(localStorage.getItem('acessos') === null){
      localStorage.setItem('acessos','{"alunoAcesso": false, "professorAcesso": false}')
      setAuth(JSON.parse(localStorage.getItem('acessos')));
      return;
    }
    setAuth(JSON.parse(localStorage.getItem('acessos')))
    return;

  },[]);
  /*useEffect(()=>{
 
    axios.get(urlBase+"/sigapi/api/users/",{
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
    .then((response)=> console.log(response.data))
    .catch((err)=> {
      let codigoErro = err.response.status;
      console.log("Código: " + codigoErro);
 
      if(codigoErro === 401){
        
        console.log("REQUEST DNV")
 
        axios.post(urlBase+"/api/token/", {  
           username:"rond.nely",
           password:"123"
        })
        .then((r)=> {
          console.log(r.data.access)
          let novotoken = r.data.access;
          setToken(novotoken);
 
          axios.get(urlBase+"/sigapi/api/users/",{
            headers:{
              Authorization: `Bearer ${novotoken}`
            }
          })
          .then((rp)=> console.log(rp.data))
        })
        .catch((err)=> {
          console.error("Erro na autenticação!")
        });
      }
 
    });
    /*
    //GET USUARIO
    axios.get(urlBase+"/sigapi/api/users/",
    {
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
    .then((response)=> console.log(response.data))
    .catch((err)=> {
      console.error("Erro!")
    });
    //POST USUARIO
    axios.post(urlBase+"/sigapi/api/users/",
    {
      username: "br",
    password: "123",
    email: "brit@gmail.com"
    },
    {
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
    .then((response)=> console.log(response.data))
    .catch((err)=> {
      console.error("Erro!")
    });
     //GET ALUNO
     axios.get(urlBase+"/sigapi/api/aluno/",
     {
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
    .then((response)=> console.log(response.data))
    .catch((err)=> {
      console.error("Erro!")
    });
    //POST ALUNO
    axios.post(urlBase+"/sigapi/api/aluno/",
    {
      user: "http://127.0.0.1:8000/sigapi/api/users/7/",
      matricula: 222,
      cpf: 22,
      born: "2022-10-11",
      endereco: "aracati",
      nome_pai: "qrq",
      nome_mae: "qwq",
      sexo: "f",
      telefone: "9985742",
      estado_civil: "C",
      rg: "11"
    },
    {
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
    .then((response)=> console.log(response.data))
    .catch((err)=> {
      console.error("Erro!")
    });
     //GET PROFESSOR
     axios.get(urlBase+"/sigapi/api/professor/",
     {
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
    .then((response)=> console.log(response.data))
    .catch((err)=> {
      console.error("Erro!")
    });
    //POST PROFESSOR
    axios.post(urlBase+"/sigapi/api/professor/",
    {
      "user": "http://127.0.0.1:8000/sigapi/api/users/4/",
      "cpf": 22,
      "born": "2022-10-11",
      "endereco": "aracati",
      "salario": 100,
      "alvos":"b",
      "grau":"B"
    },
    {
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
    .then((response)=> console.log(response.data))
    .catch((err)=> {
      console.error("Erro!")
    });

   /*axios.create({
      baseURL: "localhost:8000",
    })
    .post(urlBase+"/sigapi/api/users/",{
      headers:{
        Authorization: `Bearer ${token}`
      }
    }, {
      username: "c",
    password: "123",
    email: "mar@gmail.com"
    })
    .then((response)=> console.log(response.data))
    .catch((err)=> {
      console.error("Erro!")
    });*/

    /*if(localStorage.getItem('acessos') === null){
      localStorage.setItem('acessos','{"alunoAcesso": false, "professorAcesso": false}')
      setAuth(JSON.parse(localStorage.getItem('acessos')));
      return;
    }
    setAuth(JSON.parse(localStorage.getItem('acessos')))
    return;
  },[]);*/
  
  function rotas(){
    return auth.alunoAcesso ? rotasAlunos.map((l) => l) : auth.professorAcesso ? rotasProfessor.map((l) => l) : ""
  }
  
  return (
    <AuthContext.Provider value={{auth,setAuth, token, setToken}}>
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
