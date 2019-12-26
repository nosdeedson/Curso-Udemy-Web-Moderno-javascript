const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))
// na linha abaixo o padrão são três atributos "req, res, next" neste exemplo
// foi omitido o next pois este não é usado, podemos omitir os parâmetros que
// não vão ser usados
app.post('/usuarios', (req, resp) => {
    console.log(req.body)
    resp.send('<h1>usuario incluido</h1>')
})
app.post('/usuarios/:id', (req, resp) =>{
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>usuario alterado</h1>')
})
app.listen(3003)
console.log("esperando...")