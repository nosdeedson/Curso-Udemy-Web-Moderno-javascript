import axios from 'axios';
import React, { Component, Fragment } from 'react';
import Main from '../template/Main';
import TableUsers from './tableUsers/TableUsers';
import CadastrarUser from './cadastrarUser/CadastrarUser';

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar, Excluir.'
}

const baseUrl = 'http://localhost:3001/users';
const initialState = {
    user: { name: '', email: '' },
    list: []
}

export default class UserCrud extends Component {
    state = { ...initialState }
    render() {
        return (
            <Fragment>
                <Main {...headerProps}>
                    <TableUsers />
                    <hr />
                    <CadastrarUser/>
                </Main>
            </Fragment>
        );
    }
}