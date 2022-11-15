import React from "react";
import { useNavigate } from "react-router-dom";

import "./Header.css"
export default function Header(){
    let navigate = useNavigate();
    const listaPerfis = [
        <li onClick={()=> { navigate(`/aluno/login`);}}> Aluno </li>,
        <li onClick={()=> {  navigate(`/professor/login`);}}> Professor </li>
    ];

    return (
    <>
        <div className="header">
            <div className="header-nav"> 
                <div className="logo" onClick={() => alert("teste")}></div>
                <nav>  
                    <ul id="botoes">
                        <li className="botao1" onClick={()=>{ }}> 
                            <a> Login </a> 
                            <ul>
                               {listaPerfis.map((l) => l)}
                            </ul>
                        </li>
                        <li className="botao2"> Cursos </li>
                        <li className="botao2"> Disciplinas </li>
                    </ul>
                </nav>
            </div>
            <div className="banner">
                <div className="banner-box">
                    <h1>Sistema SiGAPI  </h1>
                    <br></br>
                    <div id="banner-id"> 
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived no
                    </div>
                </div>
            </div>
           { /*<div className="logo"></div>
            <ul>
                <li> item 1 </li>
                <li> item 2 </li>
                <li> item 3 </li>
            </ul> */}
        </div>
    </>);
    //return <h1>Header</h1>
}