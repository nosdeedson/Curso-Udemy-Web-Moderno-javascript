// first class object citizens
// higher order function

// funcão literal

function func1()
{
    return 'funcao como parametro'
}

// armazenar em uma variavel

const func2 = function(){}

// armazenar em um array

const array = [function( a,  b){ return a + b}, func1, func2]

console.log(array[0](5,6))

// armazenar em um atributo de objeto
const obj= {}
obj.falar= function(){ return 'opa legal'}

console.log(obj.falar())

function run(funcao)
{
    console.log(funcao())
}

run(func1);

// uma funcão pode retornar ou conter uma função
function soma(a, b)
{
    return function(c){ console.log( a + b + c)}
}

soma(3,5)(8)

function soma1(a, b)
{
    return function(c){ return a + b + c }
}

const res = soma1(2 , 4)(4)

console.log(res)

const res2 = soma1(20,20)

console.log(res2(4))