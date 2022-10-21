import React from "react";
import './HomeBody.css'
import MenuOption from "./MenuOption";
export default function HomeBody(){
    let lista = [
        <MenuOption backgroundColor="orange" nome="HOME"/>,
        <MenuOption backgroundColor="orange" nome="CALENDÁRIO ACADEMICO"/>,
        <MenuOption backgroundColor="pink" nome="DIÁRIO"/>,
        <MenuOption backgroundColor="green" nome="HORÁRIO INDIVIDUAL"/>,
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