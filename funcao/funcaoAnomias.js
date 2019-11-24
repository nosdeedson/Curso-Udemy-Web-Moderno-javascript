const soma = function(a ,b)
{
    return a + b
}

const imprimirResultado = function(a, b, operacao = soma)
{
    console.log(operacao(a, b))
}

imprimirResultado(2,5)

imprimirResultado(4,6, soma)

imprimirResultado( 2,7, function( x ,y)
{
    return x - y
})

imprimirResultado( 7,6, (g,h)=> g * h)

const pessoa = 
{
    falar: function()
    {
        console.log("falando")
    }
}

pessoa.falar()

const pessoa1 =
{
    falar: function()
    {
        console.log("outra forma de criar uma função")
    }
}







