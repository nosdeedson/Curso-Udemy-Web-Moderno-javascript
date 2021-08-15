
export default function Titulo(props) {
    return (
        <div className="flex flex-col justify-center w-full">
            <h1 className="px-5 py-2 text-4xl fle">{props.children}</h1>
            <hr className="border-2 border-purple-500" />
        </div>
    )
}