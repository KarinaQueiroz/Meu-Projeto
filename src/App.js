import React, { Component } from 'react';
import Navbar from './Componentes/Navbar/Navbar'
import Secao from './Componentes/Secao/Secao'
import Curiosidades from './Componentes/Curiosidades/Curiosidades'
import gatinho from './gatinho.jpg'
import Recicle from './Componentes/Recicle/Recicle'
import Materias from './Componentes/Materias/Materias'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Secao
          texto={
            <p>
              O Sustencicla foi idealizado pela estudante de Desenvolvimento Front-End Karina, como apresentação do projeto
              final para a conclusão do curso oferecido pela Reprograma. Desenvolver este projeto foi uma experiência incrível!
              <br/>Pensar em sustentabilidade, reciclagem e consumismo hoje é mais que pensar além do presente, é um ato
              de empatia. Atualmente no mundo bilhões de toneladas de lixo são meramente descartados no planeta, sem preocupação
              e sem investimento em ideias que auxiliem em concientização e melhorias Apesar de ser um tema atual, ainda
              se faz muito pouco. Pensando nisso, aqui apresentamos ideias simples que podem ajudar a fazer a diferença.
              Vamos juntxs!
            </p>   
        }
        imagem={gatinho}
      />
      <Curiosidades/>
      <Secao 
          texto={
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea quaerat blanditiis corrupti dolorem aperiam. Doloribus impedit culpa totam error expedita quos nam facere eligendi ab     dolores voluptas, eveniet accusantium earum?
            </p> 
          }
          imagem={gatinho}
      />
      <Recicle/>
      <Materias/>
      </div>
    );
  }
}

export default App;