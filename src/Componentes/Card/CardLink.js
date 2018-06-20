import React from 'react'
import './Card.css'


function CardLink (props){
    return (
        <div className="card">
            <img className="card-imagem" src={props.imagemCaminho} alt={props.imagemDescricao} />
            <p className="card-texto">{props.texto}</p>
        </div>
    )
}

export default CardLink