const ferrari ={
    model: 'F40',
    maxSpeed: 324
}

const volvo = {
    model : 'V40',
    maxSpeed: 200
}

console.log(ferrari.__proto__) // used to access the father of the heritage
console.log(ferrari.__proto__ === Object.prototype)
console.log(ferrari.__proto__ === volvo.__proto__)

function myObject(){}
console.log( typeof Object, typeof myObject)
console.log( Object.prototype, myObject.prototype)