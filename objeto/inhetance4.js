function myObject(){}
console.log(myObject.prototype)

const obj1 = new myObject // the father is myObject, not ObjectPrototype
const obj2 = new myObject

console.log( obj1, obj2) 
console.log( obj1.__proto__ === obj2.__proto__)
console.log( obj1.__proto__ === myObject.prototype)

myObject.prototype.nome = 'anônimo'
myObject.prototype.falar = function(){
    console.log(`meu nome é ${this.nome}`)
}

obj1.falar()
obj2.nome = 'jose'
obj2.falar()
const obj3 = {}

obj3.__proto__ = myObject.prototype

obj3.nome = 'tres'
obj3.falar()