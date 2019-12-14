const products = [
    { name: 'notebook', price: 2499, fragile: false},
    { name: 'iPadPro', price: 4000, fragile: true},
    { name: 'glass cup', price: 5.9, fragile: true},
    { name: 'plastic cup', price: 3.3, fragile: false}
]

console.log( products.filter( function(p){
    return p.fragile == true
}))

let vector = products.filter(function(p){
    return p.price > 10
})

//console.log(vector)

function productsFragile( p){
    return p.fragile == true
}
// using function arrow
const functionFragile = products => products.fragile
// using productsFragile
vector = products.filter(productsFragile)
console.log( "using function normal ", vector)
// using function arrow
vector = products.filter(functionFragile)
console.log(" using function arrow",vector)

// function normal
function productsExpensive( p ){
    return p.price > 1000
}
// using function arrow
const functionExpensive = products => products.price > 500


// using function productsExpensive
vector = products.filter(productsExpensive)
console.log("using function normal ", vector)
// usning function arrow
vector = products.filter(functionExpensive)
console.log( "using function arrow ", vector)
// using the normal function
vector = products.filter(productsExpensive).filter(productsFragile)
console.log(" last print again ", vector)
// using the function arrow
vector = products.filter(functionExpensive).filter(functionFragile)
console.log("using arrow function", vector)





