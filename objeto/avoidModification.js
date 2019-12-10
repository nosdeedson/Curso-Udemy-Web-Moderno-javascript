// object.preventExtenions
// the object will not receive atribute anymore
// but it is possible to delete
// you can change the value of the atibute
const obj = {
    name: 'qualquer',
    price: 2,
    tag: 'promotion'
}

const product = Object.preventExtensions(obj)

console.log(' extensible: ' , Object.isExtensible(product))
console.log(product)
product.weight= '100'
product.name = "pen"
delete product.tag
console.log("after deletation\n", product)

// Object.Seal
// you cannot to add atribute and delete
// but it is possible to modify the values of the atributes

const obj1 = {
    name: 'juliana',
    age: 23
}

Object.seal(obj1)
obj1.weight= 56
delete obj1.name
console.log(obj1)
console.log( Object.isExtensible(obj1))
// Object.Freeze
// the object is unchanging
const car = {
    model: 'f40',
    maxSpeed : 250
}
Object.freeze(car)

car.model= 'v40'
delete car.maxSpeed
console.log( car)



























