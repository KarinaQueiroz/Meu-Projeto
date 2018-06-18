import React from 'react'
import Card from '../Card/CardLink'
import gatinho from './gatinho.jpg'
import './Indicacoes.css'


function Indicacoes (props) {
    return(
        <section class="indicacoes" id="id-indicacoes">
            <h2 className="indicacoes-titulo">INDICAÇÕES</h2>  
            
            <div class="indicacoes-cards">
                <Card texto="Lorem Ipsum" imagemCaminho={gatinho} imagemDescricao="gatinho"/>
                <Card texto="Lorem Ipsum" imagemCaminho={gatinho} imagemDescricao="gatinho"/>
                <Card texto="Lorem Ipsum" imagemCaminho={gatinho} imagemDescricao="gatinho"/>
                <Card texto="Lorem Ipsum" imagemCaminho={gatinho} imagemDescricao="gatinho"/>
            </div>
        </section>
        
    )
}

export default Indicacoes