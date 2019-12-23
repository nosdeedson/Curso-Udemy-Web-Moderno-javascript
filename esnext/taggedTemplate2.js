function real( partes, ...valores){
    const resultado = []
    valores.forEach( (valor, i)=>{
        valor = isNaN(valor)? valor : `R$${valor.toFixed(2)}`
        resultado.push(partes[i], valor)
    })
    return resultado.join('')
}

const valor = 10.9
const valorParcela = 4

console.log(real `1x de ${valor} ou 3 x de ${valorParcela}`)