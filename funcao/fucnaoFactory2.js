//first possibility
function factoryProduct( name, price, discount = 0.1){
    return{
        name,
        price,
        discount
    }
}

console.log(factoryProduct('pencil', 0.5))
console.log( factoryProduct('pen', 0.8, 0.3))

// second possibility
function factoryProduct1(name, price){
    return{
        name,
        price,
        discount: 0.2
    }
}

console.log(factoryProduct1('laptop', 1500))





