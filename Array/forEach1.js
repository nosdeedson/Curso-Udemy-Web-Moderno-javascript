const aproved = [ 'pedro', 'ana', 'joao', 'carlos', 'israel']

aproved.forEach( function(nome, indice){
    console.log( `${indice + 1} : ${nome}`)
});

aproved.forEach( nome => { console.log( nome)})

const a = ( nome, indice1) => {console.log( `${indice1 +1 } : ${nome}`)}
aproved.forEach(a)

 aprovados =  ( nome, indice2) => { console.log("\n",  `${indice2 + 1} :  ${nome}`)}
aproved.forEach(aprovados)

// the function called no foreach receive three parameters de value of the 
// array and the index and the own array like

const numeros = [1,2,3,4,5,6]

numeros.forEach( function( valoresDoArray, indice3, vetor){
    console.log( `${indice3 + 1} : ${valoresDoArray}`)
    console.log(vetor)
})
