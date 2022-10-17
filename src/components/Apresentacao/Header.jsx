import React from "react";
import "./Header.css"
export default function Header(){
    return (
    <>
        <div className="header">
            <div class="header-nav"> 
                <div class="logo" onClick={() => alert("teste")}></div>
                <nav>  
                    <ul>
                        <li> teste 1 </li>
                        <li> teste 2</li>
                    </ul>
                </nav>
            </div>
            <div class="banner">

            </div>
           { /*<div class="logo"></div>
            <ul>
                <li> item 1 </li>
                <li> item 2 </li>
                <li> item 3 </li>
            </ul> */}
        </div>
    </>);
    //return <h1>Header</h1>
}