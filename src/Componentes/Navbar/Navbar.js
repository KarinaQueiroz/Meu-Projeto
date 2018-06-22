import React from 'react'
import logo from './logo.png'
import NavMenu from './Menu/Menu'
import { Link } from 'react-router-dom'
import './Navbar.css'


     class Navbar extends React.Component {
            constructor(props) {
              super(props)
              
            }
          
            render =  () => {
             
              return (
                <nav className="navbar">
                  <div>
                      <Link to="/"> <img className="navbar-logo" src={logo} alt="Logotipo do Sustencicla" /> </Link>
                  </div>
                  <NavMenu />
              </nav>
              )
            }
        }


export default Navbar