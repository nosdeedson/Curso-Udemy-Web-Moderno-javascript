const porta = 3003
const express = require('express')
const bodyparser = require('body-parser')
const bancoDados = require('./bancoDados')

const app = express()

app.use(bodyparser.urlencoded({ extended: true}))

app.get('/produtos', (requisicao, resposta, next) =>{
    //resposta.send({nome: 'notebook', preco: 123.45})
    resposta.send(bancoDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next)=>{
    res.send(bancoDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next)=> {
    const produto = bancoDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})
app.put('/produtos/:id', (req, res, next)=> {
    const produto = bancoDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})
app.delete('/produtos/:id', (req, res, next)=> {
    const produto = bancoDados.deleteProduto(req.params.id)
    res.send(produto)
})
app.listen(porta, ()=> {
    console.log(`servidor está conectado a porta: ${porta}`)
})