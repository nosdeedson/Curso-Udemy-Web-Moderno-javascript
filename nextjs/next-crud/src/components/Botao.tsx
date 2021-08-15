
interface BotaoProps{
    cor?: 'green' | 'blue' | 'red',
    children : any,
    onClick?: () => void
}

export default function Botao(props: BotaoProps){

    return(
        <button onClick={props.onClick}
        className={`px-2 py-2 h-10 bg-gradient-to-r from-${props.cor}-200 
        to-${props.cor}-400 rounded-md overflow-hidden mr-3`}>
             {props.children}
         </button>
    )
}