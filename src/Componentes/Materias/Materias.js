import React from 'react'
import './Materias.css'
import Card from '../Card/Card'
import gatoCoroa from '../Curiosidades/gatoCoroa.jpg'
 


function Materias (props){

  let  materiasCards = [
            {
                    imagemCaminho: gatoCoroa,
                    imagemDescricao: '',
                    texto: 'Lorem Ipsum'

            },{
                    imagemCaminho: gatoCoroa,
                    imagemDescricao: '',
                    texto: 'Lorem Ipsum'
            },
            {
                    imagemCaminho: gatoCoroa,
                    imagemDescricao: '',
                    texto: 'Lorem Ipsum'
            },
                     {
                    imagemCaminho: gatoCoroa,
                    imagemDescricao: '',
                    texto: 'Lorem Ipsum'
            }
        ]

     

    return(
        <section className="materias">
        <h2>Matérias</h2>



        <div className="materias-cards">
            {materiasCards.map((materiasComCards)=>{
                return (
                    <Card imagemCaminho={materiasComCards.imagemCaminho}
                            imagemDescricao=""
                            texto='Lorem Ipsum'
                    />
                )
            })}
         </div>           
        </section>


    )
}


export default Materias