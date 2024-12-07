import React from "react";
import k1RespondeLogo from "../assets/k1-responde-logo.png"

function Navbar () {
    return (
        <nav className="flex justify-between items-center py-1 px-20 shadow-md bg-gray-200">
            <img src={k1RespondeLogo} alt="Logo do K1 Responde" className="w-72"/>
            <div>
                <ul className="font-ter text-xl text-pri flex justify-between gap-20">
                    <li>Home</li>
                    <li>Exercícios</li>
                    <li>Sobre</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar