const students = [
    { name: 'Pedro', score: 7.3, scholarship: true},
    { name: 'maria', score: 9.3, scholarship: false},
    { name: 'joao', score: 9.8, scholarship: false},
    { name: 'carlos', score: 7.8, scholarship: true}
]

const resTodosBolsistas = ( acumulator, atual) => acumulator && atual
const resAoMenosUmBolsista = ( acumulator, atual) => acumulator || atual

let resultado = students.map( aluno => aluno.scholarship).reduce(resTodosBolsistas)

console.log( resultado)

resultado = students.map( aluno => aluno.scholarship).reduce(resAoMenosUmBolsista)
console.log(resultado)