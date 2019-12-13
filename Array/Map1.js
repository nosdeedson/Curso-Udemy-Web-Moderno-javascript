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
// diferença entre JSON e objeto

const obj = {
    nome: 'jussara',
    idade: 32,
    sobrenome: "vasconcelos"
}
// em objetos os chaves ou nome dos atributos não ficam entre aspas duplas
console.log(obj)
const Json = '{"nome": "lucineia", "idade": 32, "sobrenome": "vasconcelos"}'
console.log(Json)
// no JSON as chaves ou nome dos atributos tem que estar entre aspas duplas
