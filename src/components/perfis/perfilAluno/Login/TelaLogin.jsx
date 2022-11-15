import React from "react";
import {redirect, useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../../../contextos/AuthContext";
import './TelaLogin.css'

export default function TelaLogin(){
    let navigate = useNavigate();
    const {auth,setAuth} = useContext(AuthContext);

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