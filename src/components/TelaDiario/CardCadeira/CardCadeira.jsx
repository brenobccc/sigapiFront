import React from "react";

export default function CardCadeira(props){
    return (<div class="cadeira">

        <div class="cards" id="codigo-cadeira">{props.codigoCadeira}</div>
        <div class="cards" id="nome-cadeira">{props.nomeCadeira}</div>
        <div class="cards" id="nome-professor-cadeira">{props.nomeProfessorCadeira}</div>


    </div>)
}