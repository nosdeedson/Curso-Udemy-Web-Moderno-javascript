import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Cliente from '../core/Cliente'
import Formulario from '../components/Formulario'
import Botao from "../components/Botao"
import { useEffect, useState } from 'react'
import ClienteRepository from '../core/ClienteRepository'
import ColecaoCliente from '../backend/bd/ColecaoCliente'

export default function Home() {

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela');

  const repo : ClienteRepository = new ColecaoCliente();

  useEffect(() =>{ obterTodos() }, [])

  function obterTodos(){
    repo.obterTodos().then( clientes =>{
      setClientes(clientes)
      setVisivel('tabela')
    })
  }

  function clienteSelecionado(cliente: Cliente){
    setCliente(cliente)
    setVisivel('form')
  }

  async function clienteExcluido(cliente: Cliente){
    await repo.excluir(cliente)
    obterTodos()
  }

  async function salvarCliente(cliente: Cliente){
    await repo.salvar(cliente)
    obterTodos()
  }

  function novoCliente(){
    setVisivel('form')
    setCliente(Cliente.vazio())
  }
  return (
    <div className={`
    flex h-screen justify-center items-center
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white`}>
      
      <Layout titulo="Cadastro Simples">
        {visivel === 'tabela' ? (
          <>
            <div className="flex justify-end mt-0 mb-2">
              <Botao cor='green' onClick={ novoCliente} >
                Novo cliente
              </Botao>
            </div>
            <Tabela clientes={clientes}
            clienteSelecionado={clienteSelecionado} 
            clienteExcluido={clienteExcluido}></Tabela>
          </>
        ):
          (
            <Formulario cliente={cliente}
              clienteMudou={salvarCliente}
              cancelado={() =>setVisivel('tabela')}
            />
          )}
      </Layout>
    </div>
  )
}
