import React, { Component } from 'react';
import Navbar from './Componentes/Navbar/Navbar'
import Home from './Componentes/Home/Home'
import Curiosidades from './Componentes/Curiosidades/Curiosidades'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Home/>
        <Curiosidades/>

      </div>
    );
  }
}

export default App;
