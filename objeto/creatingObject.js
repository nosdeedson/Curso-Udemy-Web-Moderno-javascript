// thel literal cration

const obj1 = {}

console.log(obj1)

//Object em JS

console.log( typeof Object, typeof new Object) // it shows that Object is a function

const obj2 = new Object

console.log(obj2)

// construct function

function Product(name, price, discount){
    this.name = name
    this.getDiscount = () =>{
        return price * ( 1 - discount)
    }
}

const p1 = new Product('caneta', 7, 0.15)
console.log(p1.getDiscount())
p1.name = 'pencil' // I can access just the name because is public
                    // the operator "this" made the atribute public
                    // the others atributes " price and discount is private"
                    // can't be accessed

// factory function

function createWorker( name, salary, dayOff){
    return {
        name,
        salary,
        dayOff,
        getSalary(){
            return ( salary / 30) * ( 30 - dayOff)
        }
    }
}

const worker1 = new createWorker( "maira", 1500, 5)
const worker2 = new createWorker(' jussara', 8000, 4)

console.log( worker1)
console.log( worker2)
console.log(worker1.getSalary())
console.log(worker2.getSalary())

// ObjectCreate

const filha = Object.create(null)
filha.name = 'ana'
console.log(filha)

// return object

const fromJSOn = JSON.parse('{"info": "sou um json"}')

console.log(fromJSOn.info)