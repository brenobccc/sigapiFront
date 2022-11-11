import React from "react";

import diario from "./diario.svg";
import home from "./home.svg";
import calendarioacademico from "./calendarioacademico.svg";
import horarioindividual from "./horarioindividual.svg";
import boletim from "./boletim.svg";
import { useNavigate } from "react-router-dom";

export default function MenuOption(props){

    let image;//irá pegar a imagem importada de acordo com indice passado via props
    switch(props.wallpaperIndex){
        case 1: image = home; break;
        case 2: image = calendarioacademico; break;
        case 3: image = diario; break;
        case 4: image = horarioindividual; break;
        case 5: image = boletim; break;
    }
    
    const estilo = {
        width: "180px",
        height: "180px",
        borderRadius: "30px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        fontSize:20,
        margin:"10px",
        cursor:"pointer",
        backgroundColor: props.backgroundColor === undefined ? '#D9D9D9' : props.backgroundColor,
        backgroundImage: `url(${image})`,
        backgroundSize: '40%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        filter: 'drop-shadow(2.9px 2px 5px gray)'
    }

    let navigate = useNavigate();

    return <div id={props.wallpaperIndex} style={estilo} onClick={()=> { navigate(`/${props.screen}`);}}>
        {/*props.nome === undefined ? '' : props.nome*/}
    </div>
}