// operador spread com objetos
const funcionario = { nome:'ana', salario: 1234}
const clone= { ativo : true, ...funcionario}
console.log(clone)

// com arrays

const grupoA = ['joao', 'jose', 'edson']

const grupoFinal = [ 'ana', ...grupoA, 'rafaela']
console.log(grupoFinal)