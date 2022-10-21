import React from "react";

export default function MenuOption(props){
    let estilo = {
        "background-color": props.backgroundColor === undefined ? "blue" : props.backgroundColor,
        "width": "200px",
        "height": "200px",
        "border-radius": "30px",
        "display":"flex",
        "justify-content":"center",
        "align-items":"center",
        "font-size":20,
        "margin":"10px",
        "cursor":"pointer"
    }
    return <div style={estilo} onClick={()=>{
        return alert("clicado");
    }}>
        {props.nome === undefined ? 'Vazio' : props.nome}
    </div>
}