import React from 'react'
import './Navbar.css'


function Navbar (props){
    return (
        <header>
        <div className="logo">
            <img src="" alt=""/>
        </div>

        <nav>
            <ul>
                <li>
                    <a href="index.html">Home</a>
                </li>
                <li>
                    <a href="#">Você sabia?</a>
                </li>
                <li>
                    <a href="sobre.html">Recicle</a>
                </li>
                <li>
                    <a href="perfis.html">Matérias</a>
                </li>
                <li>
                    <a href="#">Vale Conhecer</a>
                </li>
            </ul>
        </nav>
    </header>
    )
}

export default Navbar