import React from "react";
import k1RespondeIcon from "/public/k1-responde-icon.png";

function Rodape() {
    return (
        <footer className="bg-pri py-10">
            {/* 1 - Logo | paginas | linguagens | contato
            2 - //Direitos
            3 - //Desenvolvedor */}
            <nav className="flex justify-around"> 
                <img src={k1RespondeIcon} alt="Icon do K1 Responde" />
                <div className="text-gray-300">
                    <h3 className="text-xl mb-2 font-ter">Descubra</h3>
                    <ul className="font-pri">
                        <li>Home</li>
                        <li>Exercícios</li>
                        <li>Sobre</li>
                    </ul>
                </div>
                <div className="text-gray-300">
                    <h3 className="text-xl mb-2 font-ter">Linguagens</h3>
                    <ul className="font-pri">
                        <li>C</li>
                    </ul>
                </div>
            </nav>
            <div className="text-center text-gray-300">
                <p>© 2024 <a href="https://www.linkedin.com/in/kauan-guilherme-santos">Kauan Guilherme Santos</a>. Todos os direitos reservados.</p> 
            </div>
        </footer>
    )
}

export default Rodape