function soma()
{   
    let soma = 0
    if( arguments.length > 1)
    {
        for( i in arguments)
        {
            soma += arguments[i];
        }
    }else if( arguments.length == 1)
    {
        soma = arguments[0]
    }

    return soma
}

console.log(soma())
console.log(soma(4))
console.log( soma(2,2,2,2,2,2))

console.log( soma('teste'))

console.log(soma(2,2, ' numero'))

console.log(soma(3,3,'tres'))
console.log(soma(5,5,'5'))
