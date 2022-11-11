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

let privateControll = true;/*Método de controle temporário para rota privada*/
/*em breve será sofisticado para um controle local ou usando redux/useContext*/

const rotas =  () => {
  
    return (
      <BrowserRouter>
        <Routes>
                {/* Perfil de Aluno*/}
                 <Route path="/aluno/diario" element={<TelaDiario/>} />
                  <Route path="/aluno/calendarioacademico" element={<CalendarioAcademico/>}/>
                  <Route path="/aluno/horarioindividual" element={<HorarioIndividual/>}/>
                  <Route path="/aluno/boletim" element={<Boletim/>}/>
                  <Route path="/aluno/home" element={<Home/>}/>

                  <Route path="/aluno/TelaCadastro" element={<TelaCadastro/>} />
                  <Route path="/aluno/Login" element={<TelaLogin/>} />

                {/* Perfil de Professor*/}
                  <Route path="/professor/home" element={<HomeProfessor/>}/>
              
                  <Route path="/" exact element={<TelaApresentacao/>} />
          {/*Se o usuário estiver logado ele irá habilitar as demais rotas
           e caso ele tente acessar qualquer outra rota, ele irá redirecionar para o /*/}
          {/*privateControll ? 
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
                */
          }

        </Routes>
      </BrowserRouter>
    )
}

export default rotas