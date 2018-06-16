import React, {Component} from 'react'
import './Card.css'



function Card (props){
    return (
        <div>
            <div className="card">
                    <img src={props.imagemCaminho} alt={props.imagemDescricao}/>
                    <p>{props.texto}</p>
                    <a className="card-botao" href="#">Ler mais</a>
            </div>

            <div className="toggle">



            </div>
        </div>    
    )
}

export default Card





