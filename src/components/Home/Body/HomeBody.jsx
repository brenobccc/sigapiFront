import React from "react";
import './HomeBody.css'
import MenuOption from "./MenuOption";

const wallpapers = 
    {
        'home':1,
        'calendarioacademico':2,
        'diario':3,
        'horarioindividual':4
    }

const colors = ['#A9BB97','#D7F9D4','#D8EAF8','#BDDF9B',
                '#ABE6FF','94F945','#C8E1EC','#C1C6D9']

export default function HomeBody(){
    let lista = [
        <MenuOption wallpaperIndex={wallpapers.home} screen="home" backgroundColor={colors[0]} nome="HOME"/>,
        <MenuOption wallpaperIndex={wallpapers.calendarioacademico} screen="calendarioacademico" backgroundColor={colors[1]} nome="CALENDÁRIO ACADEMICO"/>,
        <MenuOption wallpaperIndex={wallpapers.diario} screen="diario" backgroundColor={colors[2]} nome="DIÁRIO"/>,
        <MenuOption wallpaperIndex={wallpapers.horarioindividual} screen="horarioindividual" backgroundColor={colors[3]} nome="HORÁRIO INDIVIDUAL"/>,
        <MenuOption/>,
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