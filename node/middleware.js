// middleware patterns ( chain of responsibility)
const passo1 = (contexto, next)=>{
    contexto.valor1 = 'passo1'
    next()
}

const passo2 = ( contexto, next)=>{
    contexto.valor2= 'passo2'
    next()
}

const passo3 = ( contexto) => contexto.valor3 = 'passo3'

const executa = ( contexto, ...middlewares)=>{
    const executaPasso = indice =>{
        middlewares && indice < middlewares.length &&
        middlewares[indice](contexto, () => executaPasso(indice + 1))
    }
    executaPasso(0)
}

const contexto= {}

executa(contexto, passo1, passo2, passo3)

console.log(contexto)