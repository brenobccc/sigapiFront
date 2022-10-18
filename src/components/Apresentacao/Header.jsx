import React from "react";
import "./Header.css"
export default function Header(){
    return (
    <>
        <div className="header">
            <div class="header-nav"> 
                <div class="logo" onClick={() => alert("teste")}></div>
                <nav>  
                    <ul>
                        <li class="botao1"> Entrar </li>
                        <li class="botao2"> Notícias </li>
                    </ul>
                </nav>
            </div>
            <div class="banner">
                <div className="banner-box">
                    <h1>Sistema SiGAPI  </h1>
                    <br></br>
                    <div id="banner-id"> 
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived no
                    </div>
                </div>
            </div>
           { /*<div class="logo"></div>
            <ul>
                <li> item 1 </li>
                <li> item 2 </li>
                <li> item 3 </li>
            </ul> */}
        </div>
    </>);
    //return <h1>Header</h1>
}