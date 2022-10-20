import React from "react";
import "./Home.css"
export default function Home(){
    
    return (

        <div id="body">
            <div className="body-img">
                <div id="body-ifce-logo">
                </div>
            </div>
            <div className="body-content">
                <div className="body-grid">
                    <h1>Festa de Halloween</h1>
                    <p>Os alunos do curso Técnico em Eventos do campus de Aracati do IFCE organizaram uma festa de Halloween (Dia das Bruxas) na noite de 7 de novembro. A festa Halloween tem como objetivo ...</p>
                    <div id="imgHALLW"></div>
                </div>
                <div className="body-grid">
                <h1>Criadores SIGAPI</h1>
                <p>5 estudantes do IFCE Campus 
Aracati se juntaram e criaram 
uma ferramenta auxiliar para a 
gestão dos institutos Federais,
no qual pode ser feito vários 
tipos de ...</p>
                <div id="imgIFCE"></div>
                </div>
            </div>
        </div>
    );
}