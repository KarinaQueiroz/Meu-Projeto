import React from 'react'
import './Secao.css'



function Secao (props){
    return(
        <section>
        <div className="secao">
            {props.texto}
            <img src={props.imagem} alt=""/>

        </div>
    </section>
    )
}

export default Secao