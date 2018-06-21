import React from 'react'
import './CardLink.css'


function CardLink (props){
    return (
        <div className="card">
            <img className="card-imagem" src={props.imagemCaminho} alt={props.imagemDescricao} />
            <p className="card-link-texto">{props.texto}</p>
            <a className="card-link" href={props.link} target="_blank">Vem ver!</a>
        </div>
    )
}

export default CardLink