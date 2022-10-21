import React from "react";
import './TelaDiario.css'
import CardCadeira from "./CardCadeira/CardCadeira";

export default function TelaDiario(){
   // alert("Diário");
   
    let listaCadeiras = [
        <CardCadeira/>,
        <CardCadeira/>,
        <CardCadeira/>,
        <CardCadeira/>,
        <CardCadeira/>,
        <CardCadeira/>
    ]

    return (
            <div id="diario">
                <div id="diario-nav"></div>

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