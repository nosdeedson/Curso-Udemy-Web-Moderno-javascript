import React, { Component, Fragment } from 'react';
import axios from 'axios';

const baseUrl = 'http://localhost:3001/users';
const initialState = {
    user: { name: '', email: '' },
    list: [],
}

export default class TableUsers extends Component {
    state = { ...initialState }

    constructor(props){
        super(props)
        this.cadastrar = this.cadastrar.bind(this);
    }

    componentWillMount() {
        axios.get(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    load(user){
        alert(user.name);
    }

    getUpdatedList(user, add = true) {
        const list = this.state.list.filter(u => u.id !== user.id);
        if (add) list.unshift(user)
        return list;
    }

    remove(user) {
        axios.delete(`${baseUrl}/${user.id}`)
            .then(resp => {
                const list = this.getUpdatedList(user, false);
                this.setState({ list })
            });
    }

    cadastrar(){
        
    }

    render() {
        return (
            <Fragment>
                <table className="table table-striped table-bordered table-hover mt-2"
                 id="lista_usuarios" >
                    <thead className="thead-dark">
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>E-mail</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    {this.state.list.map(user => {
                        return (
                            <tbody>
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <button className="btn btn-warning"
                                            onClick={() => this.load(user)}>
                                            <i className="fa fa-pencil"></i>
                                        </button>
                                        <button className="btn btn-danger ml-2"
                                            onClick={() => this.remove(user)}>
                                            <i className="fa fa-trash"></i>
                                        </button>
                                    </td>
                                </tr >
                            </tbody>
                        )
                    })}
                </table>
                {/* <div className="d-flex justify-content-end">
                <hr />
                    <button className="btn btn-success"
                    onClick={this.cadastrar}>Cadastrar Usuário</button>
                </div> */}
            </Fragment>
        );
    }


}

