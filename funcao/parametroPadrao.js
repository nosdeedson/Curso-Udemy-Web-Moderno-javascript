// estrategia um para gerar valor padrão

function soma( a, b, c)
{
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma(), soma(1), soma( 2, 5), soma( 3,3,3), soma(0,0,2), soma(0,0,0))

// estrategia 2,3,4 para valores padrão

function soma2( a, b, c)
{
    a = a !== undefined ? a: 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}

console.log(soma2(), soma2(1), soma2( 2, 5), soma2( 3,3,3), soma2(0,0,3), soma2(0,0,0))

// valor padrao predefinido da linguagem javascript

function soma3( a = 1, b = 1, c = 1)
{
    return a + b + c
}

console.log(soma3(), soma3(1), soma3( 2, 5), soma3( 3,3,3), soma3(0,0,3), soma3(0,0,0))












