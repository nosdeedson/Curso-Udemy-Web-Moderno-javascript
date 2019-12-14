Array.prototype.filter2 = function(callback) {
    const valores =[]
    for( let i = 0; i < this.length; i++){
        if( callback(this[i], i, this))
            valores.push(this[i])
    }
    return valores
}

const products = [
    { name: 'notebook', price: 2499, fragile: false},
    { name: 'iPadPro', price: 4000, fragile: true},
    { name: 'glass cup', price: 5.9, fragile: true},
    { name: 'plastic cup', price: 3.3, fragile: false}
]

console.log( products.filter2(function(p){
    return p.fragile
}))
console.log( products.filter2( function(p){
    return p.price < 100
}))
