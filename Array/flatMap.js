const school =
    [
        {
            nome: ' turma m1',
            alunos:
                [
                    {
                        nome: 'edson',
                        nota: 9.9
                    },
                    {
                        nome: 'jose',
                        nota: 9.1
                    }
                ]
        },
        {
            nome: 'turma m2',
            alunos:
                [
                    {
                        nome: 'jussara',
                        nota: 8.3
                    },
                    {
                        nome: 'lucineia',
                        nota: 9.3
                    }
                ]
        }
    ]

const getAlunos = alunos => alunos.nota
const getTurmas = turmas => turmas.alunos.map(getAlunos)

const notas = school.map( getTurmas)

console.log(notas)
Array.prototype.flatMap = function( callback){
    return Array.prototype.concat.apply([], this.map(callback))
    // the "[]" is an object, and "this.map(callback)" will return an array of notas
}

console.log( school.flatMap(getTurmas))


