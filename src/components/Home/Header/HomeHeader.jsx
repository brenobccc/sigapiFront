import React from "react";

import "./HomeHeader.css"
export default function HomeHeader(){
    return (
    <>
        <div className="header">
            <div className="header-nav"> 
                <div className="logo" onClick={() => alert("teste")}></div>
                <nav>  
                    <ul>
                        <li className="botao1"> Entrar </li>
                        <li className="botao2"> Sair </li>
                    </ul>
                </nav>
            </div>
            <div className="banner">
                <div className="banner-box">
                   {/* <h1>Sistema SiGAPI  </h1>
                    <br></br>
                    <div id="banner-id"> 
                    </div> */}
                </div>
            </div>
        </div>
    </>);
}