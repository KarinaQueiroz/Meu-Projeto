import React, { Component } from 'react';
import Navbar from './Componentes/Navbar/Navbar'
import { Link } from 'react-router-dom'
import Banner from './Componentes/Banner/Banner'
import Curiosidades from './Componentes/Curiosidades/Curiosidades'
import Secao from './Componentes/Secao/Secao'
import Indicacoes from './Componentes/Indicacoes/Indicacoes'
import Materias from './Componentes/Materias/Materias'
import Busca from './Componentes/Busca/Busca'
import horta from '../src/Imagens/horta.jpg'
import Footer from './Componentes/Footer/Footer'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        
        <Banner />
        
        <Curiosidades />
        
        <Secao
          imagem={horta}
          texto={ 
            <p>
              As hortas urbanas, vem ganhando força em São Paulo, por inúmeras iniciativas que ajudam a reestabelecer a biodiversidade proporcionando mais qualidade de vida.
              Entre os inúmeros benefícios estão: destino de resíduos orgânicos por meio de compostagem, maior biodiversidade já que as plantas se relacionam entre si, integração com a natureza, e melhora da qualidade alimentar. Além de ser ótimo para crianças e pets interagirem, ter contato com plantas melhora a qualidade do ar e desestressa. Faça o teste!
            </p>   
          }
        />
        
        <Indicacoes />

        <Materias />
            
        <Busca />

        <Footer />

      </div>
    );
  }
}

export default App;
