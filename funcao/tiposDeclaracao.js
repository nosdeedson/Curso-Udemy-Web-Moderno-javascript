// function declaration

console.log( sum( 3,4)) /// it works because the javascript load de named function first
//console.log( subtraction(5,2)) // it does'n work because subtraction is not declared before
//console.log(multiplication(5,6))// it dows'n work because multiplication is not declared before 
function sum( a, b)
{
    return a + b
}

// function expression 

const subtraction = function( a, b)
{
    return a - b
}

// named function expression

const multiplication = function multiplication(a ,b)
{
    return a * b
}
console.log( subtraction(5,2)) // now it works

console.log( multiplication(2,5))// now it works













