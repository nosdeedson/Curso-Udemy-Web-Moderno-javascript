const produto = new Object

produto.nome = 'cadeira'
produto['marca do produto'] = 'generica' // the same produtoMarcaDoProduto
produto.price = 20

console.log(produto)

delete produto['marca do produto'] // this line does the same as under
delete produto.price // this line delete the atribute od produto

const carro ={
    model: 'a4',
    price: 89000,
    owner:{
        name: 'jose',
        age: 39,
        address:{
            street: "abc",
            number: 123
        }
    },
    drivers:[{
        name:'maria',
        age: 23,
        license: 1234
    },{
        name:'jussara',
        age:32,
        license: 4321
    }
    ]
}

console.log(carro)
console.log("mudanças abaixo " )
carro.owner.age = 24

console.log(carro.owner.age)

const aux = carro.drivers
console.log(aux)
function print(value)
{
    console.log(value)
}

aux.forEach(print)

delete carro.drivers
delete carro.owner
console.log("apos deletar")
console.log(carro)