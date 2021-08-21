import ClienteRepository from "../core/ClienteRepository";
import Cliente from "../core/Cliente";
import ColecaoCliente from "../backend/bd/ColecaoCliente";
import { useEffect, useState } from "react";
import useTableOuForm from "./useTabelaOuForm";

export default function UseClientes() {
    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
    const [clientes, setClientes] = useState<Cliente[]>([]);

    const {
        tabelaVisivel,
        formularioVisivel,
        exibirFormulario,
        exibirTabela
    } = useTableOuForm();

    const repo: ClienteRepository = new ColecaoCliente();

    useEffect(() => { obterTodos() }, [])

    function obterTodos() {
        repo.obterTodos().then(clientes => {
            setClientes(clientes)
            exibirTabela()
        })
    }

    function selecionarCliente(cliente: Cliente) {
        setCliente(cliente)
        exibirFormulario()
    }

    async function excluirCliente(cliente: Cliente) {
        await repo.excluir(cliente)
        obterTodos()
    }

    async function salvarCliente(cliente: Cliente) {
        await repo.salvar(cliente)
        obterTodos()
    }

    function novoCliente() {
        setCliente(Cliente.vazio())
        exibirFormulario()
    }

    return {
        novoCliente,
        salvarCliente,
        selecionarCliente,
        excluirCliente,
        obterTodos,
        tabelaVisivel,
        cliente,
        clientes,
        setCliente,
        setClientes,
        exibirFormulario,
        exibirTabela,
        formularioVisivel
    }
}