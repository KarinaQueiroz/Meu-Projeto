import React from 'react'
import './Card.css'


function CardLink (props){
    return (
        <div className="card">
            <img className="card-imagem" src={props.imagemCaminho} alt={props.imagemDescricao} />
            <p className="card-texto">{props.texto}</p>
            <a className="card" href="https://www.menos1lixo.com.br/">Conheça Aqui</a>
        </div>
    )
}

export default CardLink