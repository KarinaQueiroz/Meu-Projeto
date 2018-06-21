import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'

class NavMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      aberto: false
    }
  }

  handleAbreOuFecha = e => {
    this.setState(prevState => {
        return { aberto: !prevState.aberto }
    })
  }


  render () {
    let classesDasOpcoes = "navbar-menu__opcoes"
    let classesDoBotao = "navbar-menu__botao"

    if (this.state.aberto) {
        classesDasOpcoes += " navbar-menu__opcoes--aberto"
        classesDoBotao += " navbar-menu__botao--aberto"
    } 

    return (
      <div className="navbar-menu navbar-links">
        <a className={classesDoBotao} onClick={this.handleAbreOuFecha}> 
          Menu 
        </a>
        <ul className={classesDasOpcoes}>
          <li>
            <Link to="/" activeClassName="navbar-links__ativo" >Home</Link>
          </li>
          <li>
            <Link to="/Informativo" activeClassName="navbar-links__ativo" >Informativo</Link>
          </li>
          <li>
            <Link to="/indicacoes" activeClassName="navbar-links__ativo" >Indicações</Link>
          </li>
          <li>
            <Link to="/materias" activeClassName="navbar-links__ativo" >Materias</Link>
          </li>
          <li>
            <Link to="/recicle" activeClassName="navbar-links__ativo" >Recicle</Link>
          </li>
         
          
        </ul>
      </div>
    )
  }
}

export default NavMenu