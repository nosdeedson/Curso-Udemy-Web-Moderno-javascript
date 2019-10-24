const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)

console.log(typeof peso1)
console.log(typeof peso2)

console.log(Number.isInteger(peso1));


const avalicao1 = 9.87
const avaliacao2 = 6.87

const total = avalicao1 * peso1 + avaliacao2 * peso2

const media = total / (peso1 + peso2)
console.log(Number.isInteger(media))
console.log("media " + media.toFixed(2))

console.log("media " + media.toPrecision(3))

console.log("10" / 2)
console.log("10.2" / 2)

console.log("show" * 2)


const nome= 'rebeca'
const concatenacao = 'ola' + nome + "!"

const template = `
ola 
    ${nome}!`

    console.log( concatenacao +"\n")
    console.log(concatenacao, template)

console.log(`1 + 1 = ${ 1 + 1}`) //o sifrão e as chaves fazem com que o javascript execute o codigo dentro da chave

const up = texto => texto.toUpperCase() // esta linha é uma função

console.log(`chamando a função dentro do template ${up('resultado')}!`) 
/*
* o template fica detro do sinal de aspas 
* e o que fica dentro das chaves após o sifrão o javascript interpreta como código
*/

