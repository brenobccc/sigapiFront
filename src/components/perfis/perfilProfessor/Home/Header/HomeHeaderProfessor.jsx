import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../../../contextos/AuthContext";
import "./HomeHeaderProfessor.css"
export default function HomeHeaderProfessor(){
    let navigate = useNavigate();
    const {auth,setAuth} = useContext(AuthContext);
    return (
    <>
        <div className="header-professor">
            <div className="header-professor-nav"> 
                <div className="logo" onClick={() => alert("teste")}></div>
                <nav>  
                    <ul>
                        <li className="botao2" onClick={()=>{
                             localStorage.setItem('acessos','{"alunoAcesso": false, "professorAcesso": false}')
                             setAuth(JSON.parse(localStorage.getItem('acessos')));
                             navigate('/')
                        }}> Sair </li>
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