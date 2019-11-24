const fabricantes= [ 'mercedes', 'audi', "bmw"]

function imprimir(nome, indice)
{
    console.log( `${indice +1}.${nome}`)
}

fabricantes.forEach(imprimir)// o foreach percorre todo o vetor imprimindo seu conteúdo

fabricantes.forEach((fabrincante)=>{console.log(fabrincante)})
