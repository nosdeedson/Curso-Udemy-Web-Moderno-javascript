// Arrow Function
// arrow function sempre serão funções anonimas, deve atribuí-las a 
// uma constante para ser acessada
const soma = (a,b) => a + b 
console.log(soma(3,2))
// quando colocamos chaves temos que colocar a palavra reservada return
// exemplo
const soma1 = (a,b) =>{ a+ b}
console.log(soma1(9,8))// o resultado não será retornado correção abaixo
const soma2 = (a, b) =>{ return a + b}// agora o valor é retornado
console.log(soma2(9,8))

// quando temos apenas um parâmetro não precisa dos parenteses
const soma3 = a => a + 4
console.log(soma3(2))

const soma4 = () => 4 + 4
console.log(soma4())

// Arrow Function ( this)

const lexico1 = () => console.log( this === exports) 
// this aponta para o contexto ao qual pertence não para o global
const lexico2 = lexico1.bind({}) // nesta linha o this aponta para o objeto, no caso o par de chaves
lexico1()
lexico2()
console.log( lexico2 === exports)
console.log( lexico2 === this)

// para entender melhor lexico1 em uma função normal

function lexico1_2(){
    console.log("função normal")
    console.log( this === exports)
    console.log(this === global)
}
lexico1_2()

// setando parametros default na declaração da função
// se nenhum valor for passado será impresso o valor padrão
// caso contrario o valor passado como parâmetro
function log( texto = 'sem parâmetros'){
    console.log(texto)
}
log()
log("edson")
const log1 = (texto = 'outra forma')=> texto

console.log(log1())
console.log(log1("jose"))
// vale para ambos os exemplo undefined retorna o valor padrão
// null retorna null
console.log(log1(undefined))
console.log(log1(null))

// operador rest ( ...valores)

function teste( ...valores){
    let total = 0
    valores.forEach(element => {
        total += element
    });
    return total
}
console.log( teste(1,2,3,4,5))

const teste1 = (...valores) =>{
    let total = 0
    valores.forEach( element =>{
        total += element
     })
     return total
}
console.log( teste1(1,2,3,4,5,6))
