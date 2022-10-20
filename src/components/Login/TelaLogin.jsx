import React from "react";
import './TelaLogin.css'

export default function TelaLogin(){
    return <div id="login">
                <div class="side-one">
                    <h2> Seja bem vindo!</h2>
                    <div id="ifce-logo"></div>
                </div>
                <div class="side-two">
                   <div className="side-two-content">
                        <div id="login-logo">

                        </div>
                        <div id="login-form">
                                <form id="login-content">
                                    <label>
                                        <input type="text" placeholder=" Matrícula "/>
                                    </label>
                                    <label>
                                        <input type="password" placeholder=" Senha "/>
                                    </label>
                                    <div>
                                        <p id="forgot-passwd"> <a href="">Esqueceu a senha?</a> </p>
                                        <button type="submit">Entrar</button>
                                    </div>
                                </form>
                        </div>
                   </div> 
                </div>
            </div>
    
    //<div><h1>Tela de Login</h1></div>
}   