const tecnologia = new Map()

tecnologia.set('react', {framework: true})
tecnologia.set('angular', {framework: true})

console.log(tecnologia.react)// retorna undefined
console.log(tecnologia.get('react'))// modo correto or
console.log(tecnologia.get('react').framework)

const chavesvariadas = new Map( [
    [function(){ return "deu certo"}, 'funcao'],
    [{}, 'objeto'],
    [123, 'numero']
])

chavesvariadas.forEach((valor, chave)=>{
    console.log(valor, chave)
})

console.log(chavesvariadas.has(123))
console.log(chavesvariadas.delete(123))
console.log(chavesvariadas.has(123))
