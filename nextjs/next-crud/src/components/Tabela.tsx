import Cliente from "../core/Cliente";
import { IconeEdicao, IconeExclusao } from "./Icones";

interface TabelaProps{
    clientes: Cliente[]
    clienteSelecionado?: (cliente: Cliente )=> void
    clienteExcluido?: (cliente: Cliente )=> void
}


export default function Tabela(props: TabelaProps){
    const exibirAcoes = props.clienteExcluido || props.clienteSelecionado;
    function renderizaCabecalho(){
        return(
            <tr>
                <th className="p-3 text-left">Código</th>
                <th className="p-3 text-left">Nome</th>
                <th className="p-3 text-left">Idade</th>
                {exibirAcoes ? (<th className="p-3 text-center">Ações</th>):false }
            </tr>)
    }

    function renderizarAcoes(cliente : Cliente){
        return (
            <td className="text-center">
                {
                    props.clienteSelecionado ?
                        (
                            <button onClick={() => props.clienteSelecionado?.(cliente)}
                                className={`mr-3 text-green-600
                        rounded-2xl hover:bg-gray-400`}
                            >{IconeEdicao}</button>
                        ) : false
                }
                {
                    props.clienteExcluido ?
                        (
                            <button onClick={() => props.clienteExcluido?.(cliente)}
                                className={`mr-3 text-red-600
                            rounded-2xl hover:bg-gray-400`}>{IconeExclusao}</button>
                        ) : false
                }
            </td>
        )
    }

    function renderizarDados(){
        return props.clientes?.map( (cliente, i) => {
            return (
                <tr key={cliente.id}
                className={`${i % 2 === 0 ? 'bg-purple-100' : 'bg-purple-200'}`}>
                    <td className="p-5 text-left">{cliente.id}</td>
                    <td className="p-5 text-left">{cliente.nome}</td>
                    <td className="p-5 text-left">{cliente.idade}</td>
                    { exibirAcoes ? (renderizarAcoes(cliente)) : false}
                </tr>
            )
        })
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`bg-gradient-to-r from-purple-400 to-purple-800
            text-green-100`}>
                {renderizaCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )
}