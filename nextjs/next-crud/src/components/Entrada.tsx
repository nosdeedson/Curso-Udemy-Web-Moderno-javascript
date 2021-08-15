interface EntradaProps{
    texto : string,
    tipo?: "text" | "number",
    valor: any,
    somenteLeitura?: boolean,
    valorMudou?: (valor: any) => void,
}

export default function Entrada(props: EntradaProps){
    
    return (
        <div className={`flex flex-col` }>
            <label className={`text-black my-2`} >{props.texto}</label>
            <input type={props.tipo ?? 'text'}
            onChange={e => props.valorMudou?.(e.target.value)}
            value={props.valor} readOnly={props.somenteLeitura}
            className={`border-2 border-purple-500 rounded-lg 
             px-4 py-2 ${props.somenteLeitura ? 'bg-gray-400' : 'bg-white'}`} />
        </div>
    )
}