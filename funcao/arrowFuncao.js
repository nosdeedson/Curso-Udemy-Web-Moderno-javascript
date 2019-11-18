let dobro = function(a)
{
    return a * 2
}

console.log(dobro(5))

dobro = (a) => { // sobrescreve o atributo dobro
    return 2 * a
}

console.log(dobro(5))

dobro = a => 2 * a // esta linha é uma função Arrow, o return é implícito

console.log(dobro(4))
console.log(dobro(Math.PI))

ola = () => 'hello' // também é uma função Arrow sem parametro

console.log(ola())