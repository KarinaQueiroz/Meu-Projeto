import React from 'react'
import logo from './logo.png'
import './Navbar.css'


function Navbar(props) {
    return (
        <header className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="logo" />
            </div>

            <nav>
                <ul className="navbar-links">
                    <li>
                        <a href="#id-banner">Home</a>
                    </li>
                    <li>
                        <a href="#id-curiosidades">Informativo</a>
                    </li>
                    <li>
                        <a href="#id-indicacoes">Indicações</a>
                    </li>
                    <li>
                        <a href="#id-materias">Matérias</a>
                    </li>
                    <li>
                        <a href="#id-busca">Recicle</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar