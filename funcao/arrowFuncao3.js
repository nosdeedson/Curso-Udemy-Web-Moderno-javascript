let comparaComThis = function(param)
{
    console.log( this === param)
}

comparaComThis(global)

const obj = { id: 'eu'}
comparaComThis = comparaComThis.bind(obj)

comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param) // esta função é exatamente igual 
                                                      // a primeira função, mas agora o this 
                                                      // não aponta para o atributo global 
                                                      // porque criei uma função Arrow  
                                                      // o 'this' aponta para o atributo global
                                                      // em uma função comum e ele varia
comparaComThisArrow(global)
comparaComThisArrow(module.exports)// estou enviando o this do contexto da segunda função
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow()
comparaComThisArrow(module.exports)