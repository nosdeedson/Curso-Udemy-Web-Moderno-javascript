function getPrice( taxes = 0, currency ='R$'){
    return `${currency} ${this.price * ( 1 - this.discount ) * ( 1 + taxes)}`
}

const product= {
    name: 'notebook',
    price: 20,
    discount: 0.1,
    getPrice
}
//global.currency = 20
//global.discount = 0.1
console.log(product.getPrice())
console.log(product.getPrice(0.5))