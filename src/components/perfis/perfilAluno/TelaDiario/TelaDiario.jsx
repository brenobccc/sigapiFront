import React from "react";
import './TelaDiario.css'
import CardCadeira from "./CardCadeira/CardCadeira";

export default function TelaDiario(){
   // alert("Diário");
   
    let listaCadeiras = [
        <CardCadeira codigoCadeira={'0001'} nomeCadeira={"Desenvolvimento Web"}
        nomeProfessorCadeira={"Felipe Bastos"} />,
        <CardCadeira codigoCadeira={'0002'} nomeCadeira={"Compiladores"}
        nomeProfessorCadeira={"Diego"} />,
        <CardCadeira codigoCadeira={'0003'} nomeCadeira={"Teoria da Computação"}
        nomeProfessorCadeira={"Henrique"} />,
        <CardCadeira codigoCadeira={'0004'} nomeCadeira={"Trabalho de Conclusão de Curso (TCC)"}
        nomeProfessorCadeira={"Diego"} />,
        <CardCadeira codigoCadeira={'0005'} nomeCadeira={"Compiladores"}
        nomeProfessorCadeira={"Diego"} />,
        <CardCadeira codigoCadeira={'0006'} nomeCadeira={"Computação Gráfica"}
        nomeProfessorCadeira={"Ricardo Lenz Cezar"} />,
    ]

    return (
            <div id="diario">
                <div id="diario-nav">
                    <div id="diario-nav-logo"></div>
                    <div id="diario-nav-menus">
                 
                    </div>
                </div>

                <div id="diario-content">
                    <div id="diario-content-top"></div>
                  
                    <div id="diario-content-show">
                            <div id="diario-content-semestre">
                                <div id="detalhamento-semestre">
                                    <div class="semestre-box" id="box1">SEMESTRE:</div>
                                    <div class="semestre-box" id="box2">2022.1</div>
                                </div>
                            </div>
                            <div id="diario-content-cadeiras">
                                     {listaCadeiras.map((l) => l)}
                            </div>
                    </div>
                </div>
            </div>
        
    )
}   