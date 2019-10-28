const pessoa = {
    nome: 'ana',
    idade: 15,
    endereco: {
        logradouro:'rua abc',
        numero: 100
    }
}

const { nome, idade} = pessoa // com esta linha desmanchamos a estrutura de pessoa
// para objetos aninhados, ou seja objeto dentro de objeto, o caminho não pode estar nulo
// ou undefined, só o último atributo pode estar nulo ou undefined, ou seja,
// durante o caminho todos os atributos devem ter valores
// o dado deve estar setado até você pegar o último dado, este pode ser nulo
// agora as variáveis nome e idade de pessoa são duas
// variáveis comuns podem ser usadas no código normalmente
console.log(nome)
const { endereco} = pessoa

console.log(endereco)
// agora endereco é um objeto, mas não pertence a pessoa

endereco.numero= 150
console.log(pessoa.endereco.numero) 
// as mudanças feitas nos atributos fora do objeto refletem no objeto

// agora com array

const vetor = [ 'jose', 150, 'zequinha luiz']
console.log('agora array')
console.log(vetor)

const [n1, n2] = vetor
console.log(vetor[0])
console.log(n1, n2)

const [, [, , nota]] = [ [, 8, 8], [9, 6, 8] ]
// 

console.log("pega o valor 8" , nota)