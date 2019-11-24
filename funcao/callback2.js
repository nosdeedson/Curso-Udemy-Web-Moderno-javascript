const notas = [ 7.7, 8.9, 6.7 , 9.4, 4.3, 5.1 ]

// sem callback

let notasBaixas = []

for( let i in notas)
{
    if( notas[i] < 7)
    {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)
notas.push(0.9)
notasBaixas = notas.filter( function(nota){
    return nota < 7
})

console.log(notasBaixas)
notas.push(3.3)

const notasBaixas2 = notas.filter((nota)=> nota < 7)

console.log(notasBaixas2)