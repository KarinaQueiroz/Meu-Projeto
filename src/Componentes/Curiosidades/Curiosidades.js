import React from 'react'
import Card from '../Card/Card'
import copo from '../../Imagens/copos.jpg'
import oleo from '../../Imagens/oleos.jpg'
import lixoEletronico from '../../Imagens/lixo-eletronico.jpg'
import canudo from '../../Imagens/canudo.jpg'
import './Curiosidades.css'


const cards = [
    {
        id: 'card1',
        texto: "Algo muito simples, habitual, muito usado, e que demora pelo menos entre 250 a 400 anos para se decompor. Sim! Além de ser utilizado 3 litros de água na produção de cada copo.",
        imagemCaminho: copo,
        imagemDescricao: "imagem copo descartável"
    },
    {
        id: 'card2',
        texto: "O óleo de cozinha contamina milhares de litros de água se descartado de maneira incorreta. Com o descarte correto, é possível fazer sabão, tintas e até combustível.",
        imagemCaminho: oleo,
        imagemDescricao: "imagem oleo de cozinha sendo descartado"
    },
    {
        id: 'card3',
        texto: "O problema do lixo eletrônico é ainda maior, os aparelhos eletrônicos são compostos por substâncias tóxicas como chumbo, mercúrio e berílio. Além de contaminar o ambiente, causa problemas de saúde pública.",
        imagemCaminho: lixoEletronico, 
        imagemDescricao: "lixo eletronico"
    },
    {
        id: 'card4',
        texto: "O canudinho plástico representa 4% de todo o lixo plástico do mundo, não é biodegradável e por ser plástico pode levar até mil anos para se decompor, além dos microplásticos que já estão presentes nos alimentos, no sal e até na água potável do mundo inteiro.",
        imagemCaminho: canudo,
        imagemDescricao: "canudos"
    }
]

function Curiosidades(props){
    return (
        <section className="curiosidades" id="id-curiosidades">
            <h1 className="curiosidades-titulo">INFORMATIVO</h1>
            
            <div className="curiosidades-cards">
                {cards.map(item => (
                    <Card key={item.id} texto={item.texto} imagemCaminho={item.imagemCaminho} imagemDescricao={item.imagemDescricao} />
                ))}
            </div>
        </section>
    )
}

export default Curiosidades