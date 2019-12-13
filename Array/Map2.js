Array.prototype.map2 = function( callback){
    const novo =[]
    for( let i = 0; i < this.length; i++){
       novo[i] = callback(this[i], i, this)
    }
    return novo
}

const carrinho = [
    '{"nome": "borracha", "preco": 3.35}', // formato JSON
    '{"nome": "caderno", "preco": 8.67}',
    '{"nome": "kit lapis", "preco": 5.90}',
    '{"nome": "caneta", "preco": 1.1}'
]


const paraObjeto = meuObjeto => JSON.parse(meuObjeto)
const preco = oPreco => oPreco.preco
let res = carrinho.map(paraObjeto).map(preco)
console.log(res)

let resultado = carrinho.map2(paraObjeto).map2(preco)
console.log(resultado)