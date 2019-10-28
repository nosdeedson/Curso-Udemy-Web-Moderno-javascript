// se eu não passar o segundo valor b vale valer zero
// se passar o segundo valor b passa a valer o valor recebido
// in javascript the quantity o parameters doesn't matter I can pass zero or more 
// without geting worried about the parameters and the type doesn't matter
function imprimiSoma( a, b = 0)
{
    console.log( a + b)
}

imprimiSoma(2,3)
// keeping the function at a variabel
const variavelQueRecebeFuncao = function(a, b){
    console.log( a +b)
}

variavelQueRecebeFuncao(6,8)

// armazenando uma função arrow em uma variavel
// o simbolo "=>" substitui a palavra reservada function
const funcaoArrow = (a,b) =>{
    return a +b
}
console.log(funcaoArrow(12,5))

// retorno implícito

const subtracao = (a,b) => a-b
console.log(subtracao(10,6))
// variaveis "var" no javascript são todas globais 
// só não serão se estiver dentro de um escopo de uma função
// o definidor var permite variáveis com o mesmo nome, coisa que o let não permite
var numero = 1
{
    var numero =2
    console.log("dentro " , numero)
}
console.log("fora ", numero)
console.log("agora com o let")
let valor = 1
// para o let o o que está dentro das chaves abaixo é um bloco
// o let considera qualquer tipo de bloco
{
    let valor = 1
    console.log("dentro " , valor)
}
console.log("fora " , valor)

let a = 10
let a = 60// vai gerar erro pois a foi declarado na linha 48