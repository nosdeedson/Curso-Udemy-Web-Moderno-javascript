function getPreco( imposto = 0, moeda = 'R$'){
    return `${moeda} ${ this.preco * ( 1 - this.desc) * ( 1 + imposto) }`
}

const produto = {
    nome: 'notbook',
    preco: 4589,
    desc: 0.15,
    getPreco
}
global.preco =20
global.desc = 0.2
console.log(getPreco())
console.log( produto.getPreco())
// using the function call
// a função call chama a função getpreco
const carro = { preco: 10000, desc: .20}
console.log(getPreco.call(carro)) 
// another way
// in the call function we pass the parameters in the usual way, like a commom function
// the first parameter is the object which will be the this on the context of the function
// in this case in the function getPreco
console.log( getPreco.call(carro, 0.5, '$'))
console.log(getPreco.call(produto, 0.34, '$'))

// using the function apply
// the diference between call and apply is the way we pass the parameters
console.log('using apply:\n',getPreco.apply(carro))// here is equal, but there is another way
//another way
// the apply function alowed us to pass parameters in an array
// the first parameter is the object which will be the this on the context of the function
// in this case in the function getPreco
console.log(getPreco.apply(carro, [0.40, '#'])) // here the diference the parameters are in an array
console.log(getPreco.apply(produto, [.20, '!']))
