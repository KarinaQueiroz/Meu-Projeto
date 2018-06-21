import React from 'react'
import './Materias.css'
import Card from '../Card/Card'
import tartaruga from '../../Imagens/tartaruga.png'
import longaVida from '../../Imagens/embalagens.jpg'
import lixoGerado from '../../Imagens/1lixo-gerado-brasil.jpg'
 

let cards = [
    {
        id: 'card1',
        imagemCaminho: tartaruga,
        imagemDescricao: 'tartaruga-com-plástico',
        texto: 'Atualmente nos oceanos temos cerca de 8 milhões de toneladas de plástico descartados anualmente nos mares pelo mundo. Pesquisas apontam que se não mudarmos a forma como usamos descartáveis teremos mais plástico do que peixes no oceano até 2050. Isso só confirma que pouco é investido em gestão de resíduos sólidos nas cidades, e o desinteresse de indústrias e governantes. A grande quantidade de poluentes fez com que a composição da água do mar se alterasse, amostras de água coletadas chegam a conter 1.000 partes de plástico para cada plâncton. Levando em conta que seis partes de plástico para cada plâncton já caracterizam um ambiente poluído, o que dá o tom da gravidade do problema, sem contar que o microplástico é tão abundante que esta se tornando abundante, intoxicando de pequenos crustáceos ao próprio ser humano.'
    },
    {
        id: 'card2',
        imagemCaminho: longaVida,
        imagemDescricao: 'imagem-embalagem-loga vida',
        texto: 'As caixinhas longa vida são as principais embalagens de armazenamento de leite, presentes também em outro produtos, como creme de leite, sucos e molhos, por exemplo, tamanhos diferentes e necessidades diferentes. São feitas, geralmente, de 75% de papel cartão, 20% plástico e 5% alumínio. As caixas são 100% recicláveis, porém em 2015 por exemplo, cerca de 59 mil toneladas dessas embalagens foram recicladas, parece muito, mas isso representa cerca de 21% do total, sendo que quase 80% não chegou a reciclagem, lembrando que o desinteresse de cada consumidor em separar o lixo contribue para que materias como esse sejam cada vez menos reciclado.'
    },
    {
        id: 'card3',
        imagemCaminho: lixoGerado,
        imagemDescricao: 'imagem-lixos-recicláveis',
        texto: 'Conforme relatório da Associação Brasileira de Empresas de Limpeza Pública e Resíduos Especiais (ABRELPE), a situação é critica. No Brasil 3.326 municípios brasileiros destinam seus resíduos sólidos para locais impróprios, isso equivale a 59,7% dos municípios. O que mostra que 76,5 milhões de pessoas sofrem os impactos causados pela destinação inadequada. Somamos cerca de 7 milhões de toneladas de resíduos sólidos por ano que não são coletados e não recebem o destino adequado, só em São Paulo, lixões e unidades inadequadas geram um prejuizo de 420 milhões anualmente para tratamento de saúde e recuperação ambiental.'
    }
]

function Materias(props) {
    return(
        <section className="materias" id="id-materias">
            <h2 className="materias-titulo">MATÉRIAS</h2>

            <div className="materias-cards">
                {cards.map(card => (
                    <Card 
                        key={card.id}
                        imagemCaminho={card.imagemCaminho}
                        imagemDescricao={card.imagemDescricao}
                        texto={card.texto}
                    />
                ))}
            </div>           
        </section>
    )
}


export default Materias