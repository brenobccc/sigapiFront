import React from "react";

import "./HomeHeaderProfessor.css"
export default function HomeHeaderProfessor(){
    return (
    <>
        <div className="header-professor">
            <div className="header-professor-nav"> 
                <div className="logo" onClick={() => alert("teste")}></div>
                <nav>  
                    <ul>
                        <li className="botao1"> Entrar </li>
                        <li className="botao2"> Sair </li>
                    </ul>
                </nav>
            </div>
            <div className="professor-banner">
                <div className="professor-banner-box">
                   {/* <h1>Sistema SiGAPI  </h1>
                    <br></br>
                    <div id="banner-id"> 
                    </div> */}
                </div>
            </div>
        </div>
    </>);
}