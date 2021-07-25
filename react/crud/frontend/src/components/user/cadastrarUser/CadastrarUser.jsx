import axios from 'axios';
import React, { Component } from 'react';

const baseUrl = 'http://localhost:3001/users'
const initialState = {
    user: { name: '', email: '' },
    list: []
}
let showCadastrar = true;

export default class CadastrarUser extends Component{
    state = { ...initialState}

    constructor(props){
        super(props)
        this.clear = this.clear.bind(this);
        this.updateField = this.updateField.bind(this);
        this.save = this.save.bind(this);
    }

    updateField(event){
        const user = { ...this.state.user};
        user[event.target.name] = event.target.value;
        this.setState({user})
    }

    clear(){
        this.setState({user: initialState.user})
    }

    save(){
        const user = {...this.state.user};
        const method = user.id ? 'put' : 'post';
        const url = user.id ? `${baseUrl}/${user.id}/` : baseUrl;
        axios[method](url, user)
        .then( resp => {
            this.setState({user: initialState.user, list : resp.data})
        })
        .then(window.location.reload());
    }

    render(){
        return (
            <div className="form mt-5 border border-success rounded p-2">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="">Nome</label>
                            <input type="text" className="form-control"
                            name="name" value={this.state.user.name} 
                            onChange={this.updateField}
                            placeholder="Digite o nome..."/>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="">Email</label>
                            <input type="email" className="form-control"
                            name="email" value={this.state.user.email}
                            onChange={this.updateField}
                            placeholder="Digite o email..." />
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary" data-toggle="tooltip" data-placement="top" title="Salvar"
                            onClick={this.save}>
                            <i className="fa fa-save"></i>
                        </button>
                        <button className="btn btn-danger ml-2" data-toggle="tooltip" data-placement="top" title="Limpar formulário"
                            onClick={this.clear}>
                            <i className="fa fa-eraser"></i>
                            
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}