import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../../../contextos/AuthContext";

import "./HomeHeader.css"
export default function HomeHeader(){
    let navigate = useNavigate();
    const {auth,setAuth} = useContext(AuthContext);
    return (
    <>
        <div className="header">
            <div className="header-nav"> 
                <div className="logo" onClick={() => alert("teste")}></div>
                <nav>  
                    <ul>
                        <li className="botao2" onClick={()=>{
                            localStorage.setItem('acessos','{"alunoAcesso": false, "professorAcesso": false}')
                            let acessos = localStorage.getItem('acessos');
                            //let a = JSON.parse('{"breno":"b"}')
                            setAuth(acessos);
                            console.log(JSON.parse(acessos))
                            navigate('/');
                        }}> Sair </li>
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