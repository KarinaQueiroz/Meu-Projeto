import React from 'react'
import './Home.css'
import gatinho from './gatinho.jpg'


function Home (props){
    return(
        <section>
        <div className="home">

            <p>O Sustencicla foi idealizado pela estudante de Desenvolvimento Front-End Karina, como apresentação do projeto
                final para a conclusão do curso oferecido pela Reprograma. Desenvolver este projeto foi uma experiência incrível!
                <br/>Pensar em sustentabilidade, reciclagem e consumismo hoje é mais que pensar além do presente, é um ato
                de empatia. Atualmente no mundo bilhões de toneladas de lixo são meramente descartados no planeta, sem preocupação
                e sem investimento em ideias que auxiliem em concientização e melhorias Apesar de ser um tema atual, ainda
                se faz muito pouco. Pensando nisso, aqui apresentamos ideias simples que podem ajudar a fazer a diferença.
                Vamos juntxs!</p>
            <img src={gatinho} alt=""/>

        </div>
    </section>
    )
}

export default Home