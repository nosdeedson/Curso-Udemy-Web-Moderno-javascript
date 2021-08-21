import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Formulario from '../components/Formulario'
import Botao from "../components/Botao"
import useClientes from '../hooks/useClientes'

export default function Home() {

  const {
    tabelaVisivel, 
    exibirFormulario,
    exibirTabela, 
    cliente, 
    clientes, 
    excluirCliente, 
    selecionarCliente, 
    salvarCliente,
    novoCliente,
    formularioVisivel
  } = useClientes();
  
  return (
    <div className={`
    flex h-screen justify-center items-center
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white`}>
      
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ? (
          <>
            <div className="flex justify-end mt-0 mb-2">
              <Botao cor='green' onClick={ novoCliente} >
                Novo cliente
              </Botao>
            </div>
            <Tabela clientes={clientes}
            clienteSelecionado={selecionarCliente} 
            clienteExcluido={excluirCliente}></Tabela>
          </>
        ):
          (
            <Formulario cliente={cliente}
              clienteMudou={salvarCliente}
              cancelado={exibirTabela}
            />
          )}
      </Layout>
    </div>
  )
}
