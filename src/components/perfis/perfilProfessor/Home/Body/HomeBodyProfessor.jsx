import React from "react";
import './HomeBodyProfessor.css'
import MenuOptionProfessor from "./MenuOptionProfessor";

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
        <MenuOptionProfessor wallpaperIndex={wallpapers.home} screen="professor/home" backgroundColor={colors[0]} nome="HOME"/>,
        <MenuOptionProfessor wallpaperIndex={wallpapers.calendarioacademico} screen="professor/calendarioacademico" backgroundColor={colors[1]} nome="CALENDÁRIO ACADEMICO"/>,
        <MenuOptionProfessor wallpaperIndex={wallpapers.diario} screen="professor/diario" backgroundColor={colors[2]} nome="DIÁRIO"/>,
        <MenuOptionProfessor wallpaperIndex={wallpapers.horarioindividual} screen="professor/horarioindividual" backgroundColor={colors[3]} nome="HORÁRIO INDIVIDUAL"/>,
        <MenuOptionProfessor wallpaperIndex={wallpapers.boletim} screen="professor/boletim" backgroundColor={colors[4]} nome="BOLETIM"/>,
        <MenuOptionProfessor/>,
        <MenuOptionProfessor/>,
        <MenuOptionProfessor/>,
    ]

    return (
        <div id="home-professor-body">
            <div id="home-professor-body-img">
                <div id="professor-body-logo" >
                </div>
            </div>
            <div id="home-professor-body-nav">
                    {lista.map((l) => l)}
            </div>
        </div>
    )
}