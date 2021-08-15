import { useState } from "react";
import Cliente from "../core/Cliente";
import Botao from "./Botao";
import Entrada from "./Entrada";

interface FormularioProps{
    cliente: Cliente,
    cancelado?: () => void,
    clienteMudou?: (cliente: Cliente) => void
}


export default function Formulario( props: FormularioProps){
    const id = props.cliente?.id;
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)
    const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela');
    return ( 
        <div>
            {id ? (
                <Entrada 
                texto='Id' 
                somenteLeitura 
                valor={id}/>
            ) : false}
            <Entrada
                texto='Nome'
                valor={nome}
                valorMudou={setNome}
            />    
            <Entrada 
                texto='Idade' 
                tipo='number' 
                valor={idade}
                valorMudou={setIdade}
            />
            <div className={`flex justify-end mt-5`}>
                <Botao onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))} > 
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao onClick={props.cancelado} cor='red'>Cancelar</Botao>
            </div>
        </div>
    )
}