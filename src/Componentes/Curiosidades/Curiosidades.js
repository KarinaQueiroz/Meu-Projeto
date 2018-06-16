import React from 'react'
import Card from '../Card/Card'
import gatoGalactico from './gato-galactico.jpg'
import gatoRuivo from './gato-ruivo.jpg'
import gatoVoando from './gato-voando.jpg'
import gatoCoroa from './gatoCoroa.jpg'
import gatoComBola from './gato-com-bola.jpg'
import gatoDormindo from './gato-dormindo.jpg'
import './Curiosidades.css'




function Curiosidades(props){
    return (
        <section className="voce-sabia">
            <h1>Você Sabia?</h1>
            <div class="sabia">
                <Card texto="lorem" imagemCaminho={gatoGalactico} imagemDescricao="gato-maneiro"/>
                <Card texto="Isildur" imagemCaminho={gatoRuivo} imagemDescricao="gatinho-fofo"/>
                <Card texto="Phoebe" imagemCaminho={gatoVoando} imagemDescricao="gatinho-voador"/>
                <Card texto="Sustentabilidade" imagemCaminho={gatoCoroa} imagemDescricao="gatinho-com-coroa"/>
                <Card texto="Reciclagem" imagemCaminho={gatoComBola} imagemDescricao="gato-com-bola"/>
                <Card texto="Marcelo" imagemCaminho={gatoDormindo} imagemDescricao="gato-dormindo"/>
            </div>
        </section>


    )
}

export default Curiosidades