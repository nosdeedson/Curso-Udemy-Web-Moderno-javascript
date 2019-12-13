const valores = [1,2,3,4,5,6,7,8,9]
let res = valores.map(function(element){
    return 2 * element
})
console.log(res)
const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => ` R$ ${parseFloat(e).toFixed(2).replace('.',',')}`
const res1 = valores.map(soma10).map(triplo).map(paraDinheiro)
console.log(res1)