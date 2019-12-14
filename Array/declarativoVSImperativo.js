const alunos = [
    { nome: 'joao', nota: 8.1},
    { nome: 'maira', nota: 9.7}
]

// Imperativo: mais preocupado em como deve ser feito
// se preocupa com o passo a passo

let total1 = 0
for( let i = 0; i < alunos.length; i++){
    total1 += alunos[i].nota
}

console.log(total1 / alunos.length)

// Declarativo: mais preocupado em o que deve ser feito
// como foi feito não importa

let total2 = 0
const getNotaAluno = aluno => aluno.nota
const getSoma = ( total, atual) => total + atual
const media = alunos.map(getNotaAluno).reduce(getSoma)

console.log(media / alunos.length)