import React from 'react'
import Card from '../Card/CardLink'
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
            
            <div class="indicacoes-cards">
                <Card texto=
                "O Menos um lixo, é um movimento idealizado pela Fe Cortez, que surgiu com o desafio de produzir menos lixo, e mostrar que atitudes individuais somadas constroem um mundo mais sustentável. Vem ver: https://www.menos1lixo.com.br/" imagemCaminho={menos} imagemDescricao="site menos 1 lixo"/>

                <Card texto=
                "O Pensamento Verde é um portal com a missão de informar, conscientizar e promover ações focados no meio ambiente e Sustentabilidade, no site você encontra informações diversas de alimentação a arquitetura, tudo voltado para iniciativas e tecnologias sustentavéis. Vem ver:" 
                 imagemCaminho={pensamento} imagemDescricao="site pensamento verde"/>

                <Card texto="O Cataki é um app de reciclagem que simplesmente cadastra catadores autônomos para coletas. Chamando a atenção para o setor não regulamentado e pouco reconhecido, o app pretende aproximar os dois lados, entre geradores e catadores aliando reciclagem e renda. Vem ver: http://www.cataki.org/#/" imagemCaminho={cataki} imagemDescricao="imagem aplicativo cataki"/>

                <Card texto="O CaMon Ecofashion é uma marca criada por Camila Moteiro, visando o Zero Waste, ou seja o desperdício zero. Camila sempre se preocupou com o número de tecidos descartados por industrias, através de parceiros com a sua marca, ela desenvolve modelos incríveis. Vem Ver: https://www.facebook.com/camonecofashion/" imagemCaminho={camon} imagemDescricao="imagem marca Camon"/>
            </div>
        </section>
        
    )
}

export default Indicacoes