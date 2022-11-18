import React from "react";
import {redirect, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useEffect } from "react";
import { useContext } from "react";
import AuthContext from "../../../../contextos/AuthContext";
import './TelaLogin.css'

export default function TelaLogin(){
    let navigate = useNavigate();
    const {auth,setAuth} = useContext(AuthContext);
    const {token,setToken} = useContext(AuthContext);
    const urlBase = "http://localhost:8000";
  useEffect(()=>{
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
        /*REQUISITO PRA PEGAR O NOVO TOKEN*/
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
  },[]);
        




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
                                <form id="login-content">
                                    <label>
                                        <input type="text" placeholder=" Matrícula " id="la"/>
                                    </label>
                                    <label>
                                        <input type="password" placeholder=" Senha " id="pa"/>
                                    </label>
                                    <div>
                                        <p id="forgot-passwd"> <a href="">Esqueceu a senha?</a> </p>
                                        <button type="submit" onClick={() => {
                                            let userStudent = document.getElementById("la").value;
                                            let passStudent = document.getElementById("pa").value;

                                            /*Validações*/ 
                                            if(userStudent.trim().length === 0){
                                                alert("Preecha os campos!");
                                                return;
                                            }

                                            if(userStudent !== 'admin@gmail.com'){
                                                alert("Email inválido!!");
                                                return;
                                            }
                                            
                                            if(passStudent !== '1234'){
                                                alert("Senha inválida!!");
                                                return;
                                            }

                                            localStorage.setItem('acessos','{"alunoAcesso": true, "professorAcesso": false}')
                                            setAuth(JSON.parse(localStorage.getItem('acessos')));
                                            navigate('/')
                                            
                                            
                                           //let acessos = localStorage.getItem('acessos');
                                           //console.log(JSON.parse(acessos))
                                        }}>Entrar</button>
                                    </div>
                                </form>
                        </div>
                   </div> 
                </div>
            </div>
    
    //<div><h1>Tela de Login</h1></div>
}   