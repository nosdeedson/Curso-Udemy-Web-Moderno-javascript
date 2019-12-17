console.log( module.exports === this)
console.log(module.exports === exports)

this.a = 1 // "a" is visible outside the module
exports.b = 2 // "b" is visible outside the module
// "this and exports" are two reference to the same objects
// that case the module.exports
module.exports.c = 3 // "c" is visible outside the module

exports = null
console.log( module.exports)

exports = { // this object will not be exported to this happen I must use module.exports
    nome:'teste'
}
console.log( exports)
console.log( module.exports)

//module.exports= { publico: true}// now this object will be returned when called