import React from 'react'
import './Toggle.css'


function ActionLink (props){
  function handleClick(e){
    e.preventDefault();

  }

  return(
    <a href="#" onClick={handleClick}>Ler mais</a>
  );
}
  
  