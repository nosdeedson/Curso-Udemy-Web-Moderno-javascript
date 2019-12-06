// simple factory

function createPeople()
{
   return{nome:'ana',
   sobrenome:'souza',
    idade:30
    }
}

console.log(createPeople())
// my factory I did this version 
function factoryCreatePeople( name, lastName, age){
    return{
        name,
        lastName,
        age
    }
}

const person = factoryCreatePeople('jose', 'silva', 23)

console.log(person)
const person1 = { nome:'maria', sobrenome:'gomes'}
console.log(person1)