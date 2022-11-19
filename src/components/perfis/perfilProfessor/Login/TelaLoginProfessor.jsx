import React from "react";
import {useNavigate } from "react-router-dom";
import axios from "axios";
import './TelaLoginProfessor.css'
import { useContext } from "react";
import AuthContext from "../../../../contextos/AuthContext";

export default function TelaLoginProfessor(){
    let navigate = useNavigate();
    const urlBase = "http://localhost:8000";
    const {token, setToken} = useContext(AuthContext);
    const {auth, setAuth} = useContext(AuthContext);
    

    function login(userProf, userPass){
        /*Validações*/
        if (userProf.trim().length === 0) {
          alert("Informe uma matrícula!");
          return;
        } 
        if (userPass.trim().length === 0) {
          alert("Informe uma senha!");
          return;
        } 
        axios.post(urlBase+"/api/token/", {  
          username:`${userProf}`,
          password:`${userPass}`
      })
      .then((response)=> {
        console.log("entrou");  
        console.log("deu certo");
        console.log(response.data);
    
        let token = response.data.access;
        setToken(token);/*aproveita que já  tem um token e seta o token de acesso sendo o de aluno
        mas o recomendado seria uso do token do user admin. cenas dos próximos capitulos*/ 
        
        localStorage.setItem('acessos','{"alunoAcesso": false, "professorAcesso": true}')
        setAuth(JSON.parse(localStorage.getItem('acessos')));
      })
      .catch((err)=> {
        console.error("Erro na autenticação!")
      });
    }

    return <div id="login">
                <div className="side-one">
                    <h2> Seja bem vindo!</h2>
                    <div id="ifce-logo"></div>
                </div>
                <div className="side-two">
                   <div className="side-two-content">
                        <div id="login-logo">

                        </div>
                        <div id="login-form">
                                <div id="login-content">
                                    <label>
                                        <input type="text" placeholder=" Matrícula " id="lp"/>
                                    </label>
                                    <label>
                                        <input type="password" placeholder=" Senha " id="pp"/>
                                    </label>
                                    <div>
                                        <p id="forgot-passwd"> <a href="">Esqueceu a senha?</a> </p>
                                        <button type="submit" onClick={() => {
                                            let userProf = document.getElementById("lp").value;
                                            let passProf = document.getElementById("pp").value;
                                            login(userProf, passProf);
                                        }}>Entrar</button>
                                    </div>
                                </div>
                        </div>
                   </div> 
                </div>
            </div>
    
    //<div><h1>Tela de Login</h1></div>
}   