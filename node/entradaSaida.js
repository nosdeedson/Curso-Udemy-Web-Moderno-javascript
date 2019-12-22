const anonimo = process.argv.indexOf('-a') !== -1
function tarefa(){
    process.stdout.write("não passou parametros\n informe seu nome: ")
    process.stdin.on('data', data =>{
        const nome= data.toString().replace("\n", "")
        process.stdout.write(`fala ${nome}`)
        
    })
}
//console.log( anonimo)
if(anonimo){
    process.stdout.write("fala anonimo\n")
    console.log("saindo!!")
    process.exit()
}
else{
    process.stdout.write('informe seu nome: ')
    process.stdin.on('data', data=>{
        const nome = data.toString().replace('\n', '')
        process.stdout.write(`fala : ${nome}`)
        process.exit()
    })
}

