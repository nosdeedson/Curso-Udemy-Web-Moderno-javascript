Array.prototype.reduce2 = function( callback, valorInicial){
    let acumulator = valorInicial || 0
    for( let i = 0; i < this.length; i++){
        acumulator = callback(acumulator, this[ i ], this)
    }
    return acumulator
}

const soma = ( acumulator , atual) => acumulator + atual
const valores = [1,2,3,4,5,6]
console.log( valores.reduce2(soma, 10))