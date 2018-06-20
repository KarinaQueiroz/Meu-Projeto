import React from 'react'
import meteoro from '../../Imagens/meteoro.gif'
import norte from '../../Imagens/norte.gif'
import sul from '../../Imagens/sul.gif'
import run from '../../Imagens/run.gif'
import oeste from '../../Imagens/oeste.gif'
import './Busca.css'


class Busca extends React.Component {
    state = {
        zona: '',
        lista: [
            {
                id: 'zona1',
                foto: meteoro,
                zona: 'centro',
                local: 'Recicla Centro',
                endereco: 'Rua do Norte, 1',
                telefone: '(11) 11111-1111',
            },
            {
                id: 'zona2',
                foto: norte,
                zona: 'norte',
                local: 'Recicla Norte',
                endereco: 'Rua do Norte, 1',
                telefone: '(11) 11111-1111',
            },
            {
                id: 'zona3',
                foto: sul,
                zona: 'sul',
                local: 'Recicla Sul',
                endereco: 'Rua do Sul, 2',
                telefone: '(11) 22222-2222',
            },
            {
                id: 'zona4',
                foto: run,
                zona: 'leste',
                local: 'Recicla Leste',
                endereco: 'Rua do Leste, 3',
                telefone: '(11) 33333-3333',
            },
            {
                id: 'zona5',
                foto: oeste,
                zona: 'oeste',
                local: 'Recicla Oeste',
                endereco: 'Rua do Oeste, 4',
                telefone: '(11) 44444-4444',
            }
        ]
    }

    handleChange = evento => {
        this.setState({
            zona: evento.target.value
        })
    }

    render() {
        const lista = this.state.lista.filter(item => item.zona === this.state.zona)
            


        return (
            <section className="busca" id="id-busca">
                <h2 className="busca-titulo">RECICLE</h2>
                <h3 className="busca-subtitulo">
                Se você quer dar o destino certo, mas não conhece, 
                encontre aqui o local de coleta mais próximo de você!
                </h3>

                <form className="busca-formulario">
                    
                    <select id="zona" value={this.state.zona} onChange={this.handleChange}>
                        <option className="opcao" value="">Buscar por</option>
                        <option className="opcao" value="centro">Centro</option>
                        <option className="opcao" value="norte">Zona norte</option>
                        <option className="opcao" value="sul">Zona sul</option>
                        <option className="opcao" value="leste">Zona leste</option>
                        <option className="opcao" value="oeste">Zona oeste</option>
                    </select>
                </form>

                <ul className="busca-lista">
                    {lista.map(item => (
                        <li className="busca-lista-item" key={item.id}>
                            <h4 className="busca-lista-item-titulo">{item.local}</h4>
                            <img className="busca-lista-item-imagem" src={item.foto} alt="Foto do local" />
                            <address>{item.endereco} / {item.telefone}</address>
                        </li>
                    ))}
                </ul>
            </section>
        )
    }
}

export default Busca