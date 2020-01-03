const bodyParser = require('body-parser')
const express = require('express')

const app = express()
app.use(express.static('.'))

app.use(bodyParser.urlencoded({extended: true}))// antes de bodyParser pode ver o nome da requisição como abaixo
//app.use('/login',bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get('/teste', (requisicao, resposta) => resposta.send('OK') )

app.listen( 8080, () => console.log( " servidor rodando"))