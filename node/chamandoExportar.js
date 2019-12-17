const exportar = require('./exportar')

console.log(exportar.publico)
console.log(exportar.exports, "valor de b em exportar: ", exportar.b)
// the value of "b" will just nbe returned if the line seventeen in
// exportar is commented, otherwise will be returned publico