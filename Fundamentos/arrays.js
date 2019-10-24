const valores = [ 7.7, 8.9, 0.9, 4.5]

console.log(valores)
console.log(valores[0], valores[3])

console.log(valores[4])
valores[4] = 10
valores[6] = 20
console.log(valores)
valores[5] = 15
console.log(valores)
console.log(valores.length)
valores.push({nome: 'edson'}, 'aqui', ['eu' , 67], false, null, undefined)
console.log(valores)
console.log(valores.pop());
delete valores[7]

console.log(valores)