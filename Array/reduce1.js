const students = [
    { name: 'Pedro', score: '7.3', scholarship: true},
    { name: 'maria', score: '9.3', scholarship: false},
    { name: 'joao', score: 9.8, scholarship: false},
    { name: 'carlos', score: 7.8, scholarship: true}
]

console.log(students.map( a => a.score) )

const result = students.map(a => a.score).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    acumulador += atual
    return acumulador
}, 0)

console.log( result)