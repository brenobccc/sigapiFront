import React from "react";
import { useContext } from "react";
import AuthContext from "../../../../../contextos/AuthContext";
import './HomeBody.css'
import MenuOption from "./MenuOption";

const wallpapers = 
    {
        'home':1,
        'calendarioacademico':2,
        'diario':3,
        'horarioindividual':4,
        'boletim':5
    }

const colors = ['#A9BB97','#D7F9D4','#D8EAF8','#BDDF9B',
                '#ABE6FF','94F945','#C8E1EC','#C1C6D9']



export default function HomeBody(){
       

    let lista = [
        <MenuOption wallpaperIndex={wallpapers.home} screen="aluno/home" backgroundColor={colors[0]} nome="HOME"/>,
        <MenuOption wallpaperIndex={wallpapers.calendarioacademico} screen="aluno/calendarioacademico" backgroundColor={colors[1]} nome="CALENDÁRIO ACADEMICO"/>,
        <MenuOption wallpaperIndex={wallpapers.diario} screen="aluno/diario" backgroundColor={colors[2]} nome="DIÁRIO"/>,
        <MenuOption wallpaperIndex={wallpapers.horarioindividual} screen="aluno/horarioindividual" backgroundColor={colors[3]} nome="HORÁRIO INDIVIDUAL"/>,
        <MenuOption wallpaperIndex={wallpapers.boletim} screen="aluno/boletim" backgroundColor={colors[4]} nome="BOLETIM"/>,
        <MenuOption/>,
        <MenuOption/>,
        <MenuOption/>,
    ]

    return (
        <div id="home-body">
            <div id="home-body-img">
                <div id="body-logo" >
                </div>
            </div>
            <div id="home-body-nav">
                    {lista.map((l) => l)}
            </div>
        </div>
    )
}