const father = { name: 'peter', colorHair: 'black'}

const daughter = Object.create(father) // create an object and sets the father, class above
                                        // define the prototype in other words
daughter.name = " Mary"
console.log( daughter.name)

// another way 

daughter2 = Object.create(father, {
    name: { value: 'kate', writable: false, enumerable: true}
})

console.log( daughter2)
console.log(Object.keys(daughter2))
daughter2.name = "jessica"

for( let key in daughter2){
    daughter2.hasOwnProperty(key) ? 
    console.log(key) : console.log(`por herança ${key}`)
}
