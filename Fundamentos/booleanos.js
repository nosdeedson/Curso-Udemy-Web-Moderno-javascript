let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)
isAtivo = 1  // aqui o javascript considera a variável isAtivo como number
console.log(isAtivo)

console.log("um " + !!isAtivo)

isAtivo = 2
console.log("dois "  + !!isAtivo)

isAtivo = 0;

console.log('zero ' + !!isAtivo)
