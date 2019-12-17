const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = p => p.pais=== 'China'
const mulheres = p => p.genero ==='F'
const menorSalario = ( func, funcAtual)=> {
    return func.salario < funcAtual ? func : funcAtual
}
axios.get(url).then(response => {
    let func = response.data
    const res = func.filter(chineses).filter(mulheres).reduce(menorSalario)
    console.log(res)
})
