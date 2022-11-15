import React from "react";
import {useNavigate } from "react-router-dom";
import './TelaLoginProfessor.css'

export default function TelaLoginProfessor(){
    let navigate = useNavigate();
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

                                            if(userProf === 'adminprofessor@gmail.com' && passProf === '1234'){
                                                localStorage.setItem('acessos','{"alunoAcesso": false, "professorAcesso": true}')
                                            }else{
                                                alert("Tente novamente!!");
                                            }
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