const funcs = []
for( var i = 0; i < 10; i++)
{
    funcs.push( function(){
        console.log("valor de i " , i)
    })
}
funcs[2]()
funcs[8]()

const funcs2 = []
for( let j = 0; j < 10; j ++){
    funcs2.push( function(){
        console.log( "valor de j ", j)
    })
}

funcs2[2]()
funcs2[8]()