import React from 'react'
import CardLink from './CardLink'
import './Card.css'


class Card extends React.Component {
    state={
        aberto:false
    }

    handleClick = e => {
        e.preventDefault()
        this.setState(prevState =>{
            return {aberto:!prevState.aberto}
        })
    }

    render(){
        let cardTextoClasses = 'card-texto'

        if(this.state.aberto){
            cardTextoClasses+='card-texto-aberto'
        }

        return(
        <div className="card">
            <img className="card-imagem" src={this.props.imagemCaminho} alt={this.props.imagemDescricao} />
            <p className={cardTextoClasses}>{this.props.texto}</p>
            <a className="card-botao" onClick = {this.handleClick}>
                {this.state.aberto ? 'Ocultar' : 'Ler mais'}
            </a>
        </div>
        )
    }
}

export default Card





