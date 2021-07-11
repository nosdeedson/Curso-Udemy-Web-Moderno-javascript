import React, { Component} from 'react';

export default class Saudacao extends Component{

    // pode ficar dentro do constructor
    state = {
        tipo : this.props.tipo,
        nome : this.props.nome
    }

    constructor(props){
        // tem que passar o props para super, neste caso "component ", se não fizer os atributos não existirão
        super(props)
        // nesta linha setamos this como a própria classe
        this.setTipo = this.setTipo.bind(this);
        // state = {
        //     tipo : this.props.tipo,
        //     nome : this.props.nome
        // }
    }

    setTipo(e){
        this.setState({ tipo : e.target.value})
    }

    setNome(e){
        this.setState({ nome : e.target.value })
    }

    render(){
        const { tipo, nome} = this.state;
        return (
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr/>
                {/* neste input pode-se usar apenas a referência de setTipo, pois no constructor setamos 
                this como a própria classe */}
                <input type="text" placeholder="Tipo.." value={tipo} onChange={this.setTipo} />
                {/* aqui temos que enviar a arrow function pois o this deste contexto não é a classe em si */}
                <input type="text" placeholder="nome" value={nome} onChange={e => this.setNome(e)}/>
            </div>
        )
    }

}