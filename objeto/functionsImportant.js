const person = {
    name:'mary',
    age: 23,
    weight:50
}

console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))
console.log( "abaixo")
Object.entries(person).forEach(element => {
    console.log(`${element[0]}: ${element[1]}`)
});

// do the same as above but using destructering
console.log("second example")
Object.entries(person).forEach(([chave, valor])=> {
    console.log(`${chave} : ${valor}`)
})

// define the properties of the object
Object.defineProperty( person, 'dataNascimento', {
    enumerable: true, // show the property
    writable: false, // define if is mutable
    value: '01/01/2019' // sets the value
})
person.dataNascimento = '02/02/20'
console.log(person.dataNascimento)

const destiny= { a : 1}
const o1 = { b : 2 }
const o2 = { c : 3, a : 4}

Object.assign(destiny, o1, o2) // the object destiny will
                                // receive the values of
                                // o1 and o2
console.log( destiny)
console.log( Object.entries(destiny))
console.log(Object.values(destiny))

destiny.a= 6
console.log(Object.values(destiny))

Object.freeze(destiny) // destiny cannot be changed anymore
destiny.b = 10
console.log(Object.values(destiny))