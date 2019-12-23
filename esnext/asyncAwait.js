const http = require('http')
const getTurma = letra =>{
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise( (resolve, reject) =>{
        http.get(url, res =>{
            let resultado = []
            res.on('data', dados=>{
                resultado += dados
            })
    
            res.on('end', ()=>{
                try{
                    resolve(JSON.parse(resultado))
                } catch(erro){
                    reject(erro)
                }
            })
        })
    })
}

let obterAlunos = async() => {
    const recebeTurmaA = await( getTurma('A'))
    const recebeTurmaB = await( getTurma('B'))
    const recebeTurmaC = await( getTurma('C'))
    return [].concat( recebeTurmaA, recebeTurmaB, recebeTurmaC)
}

obterAlunos().then( alunos => alunos.map( a => a.nome))
.then( nomes => console.log(nomes))