import React from 'react'
import Card from '../Card/CardLink'
import CardLink from '../Card/CardLink'
import menos from '../../Imagens/menos1lixo.png'
import pensamento from '../../Imagens/pensamentoverde.jpg'
import cataki from '../../Imagens/cataki.png'
import camon from '../../Imagens/camismonteiro.jpg'
import './Indicacoes.css'


function Indicacoes (props) {
    return(
        <section class="indicacoes" id="id-indicacoes">
            <h2 className="indicacoes-titulo">INDICAÇÕES</h2>
            <h3 className="vale-conhecer">Vale a pena conhecer!</h3>  
            
            <div className="indicacoes-cards">
                <CardLink texto="O Menos um lixo, nasceu após a idealizadora Fe Cortez assistir um documentário que mudou sua vida, o movimento surgiu com o desafio pessoal de produzir menos lixo, e mostrar que atitudes individuais somadas constroem um mundo mais sustentável. " link="https://www.menos1lixo.com.br/" imagemCaminho={menos} imagemDescricao="site menos 1 lixo" />

                <Card texto="O Pensamento Verde é um portal com a missão de informar, conscientizar e promover ações focados no meio ambiente e Sustentabilidade, no site você encontra informações diversas de alimentação a arquitetura, tudo voltado para iniciativas e tecnologias sustentavéis." link="http://www.pensamentoverde.com.br/" imagemCaminho={pensamento} imagemDescricao="site pensamento verde"/>

                <Card texto="O Cataki é um app de reciclagem que simplesmente cadastra catadores autônomos para coletas. Chamando a atenção para o setor não regulamentado e pouco reconhecido, o app pretende aproximar os dois lados, entre geradores e catadores aliando reciclagem e renda." link="http://www.cataki.org/#/" imagemCaminho={cataki} imagemDescricao="imagem aplicativo cataki"/>

                <Card texto="O CaMon Ecofashion é uma marca criada por Camila Moteiro, visando o Zero Waste, ou seja o desperdício zero. Camila sempre se preocupou com o número de tecidos descartados por industrias, através de parceiros com a sua marca, ela desenvolve modelos incríveis." link="https://www.facebook.com/camonecofashion/" imagemCaminho={camon} imagemDescricao="imagem marca Camon"/>
            </div>
        </section>
        
    )
}

export default Indicacoes