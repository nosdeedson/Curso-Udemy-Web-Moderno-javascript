const fs = require('fs')

const produto ={
    nome: 'celular',
    preco: 1234.54,
    desconto: 0.15
}
/*
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), (err)=>{
    console.log(err || 'arquivo salvo')
})
*/
const lendoArquivoJSON = require('./arquivoGerado.json')
console.log(lendoArquivoJSON)