const obj = { a: 1, b : 2, c : 3, soma(){ return a + b + c}}

console.log( JSON.stringify(obj))

//console.log( JSON.parse("{ a: 1, b: 2, c : 3}")) JSON not valid
//console.log( JSON.parse("{ 'aj 1, 'b': 2, 'c' : 3}")) JSON not valid

console.log( JSON.parse('{"a": 1, "b": 2, "c": 3}'))

const obj1 = JSON.parse('{"a": "as", "b": "is", "c": "to"}')
console.log(obj1)
console.log(obj1.a)
console.log( JSON.parse('{ "nome": "edson", "age":39, "vehicle": {"nome":"motocicle"}, "vetor": [1,2,3,4.5]   } '))

