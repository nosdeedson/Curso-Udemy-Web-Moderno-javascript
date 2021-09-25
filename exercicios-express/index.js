const express = require('express');
const app = express();
const saudacao = require('./saudacao')

const produto = require('./api/produto')
const usuario = require('./api/usuario')

produto(app, " teste produto")

app.get( "/", (req, res, next) =>{
    res.send("hello world!!");
    next()
})

app.get("/usuarios", usuario.obter)
app.post("/usuarios", usuario.salvar)

app.use(saudacao("edson jose"))

app.use("/espera-json", express.json(), (req, res) =>{
    const teste = req.body
    console.log(teste.nome)
    res.send(req.body.nome)
})
app.use("/espera-texto", express.text(), (req, res) =>{
    res.send(req.body)
})

app.use("/espera-urlencoded", express.urlencoded({extends:true}), (req, res) =>{
    res.send(`${req.body.nome} seu id é ${req.body.id} e sua idade ${req.body.age}`)
})

app.get('/clientes/relatorios', (req, res) =>{
    res.send(`cliente relatorio: completo = ${req.query.completo} ano = ${req.query.ano}`)
})

app.post('/corpo', (req, res)=>{
    let corpo = 'no backend '
    req.on('data', function(parte){
        corpo += parte
    })
    req.on('end', function(){
        res.send(corpo)
    })
    // res.send(corpo)
})


app.listen(3000, () =>{
    console.log("executando backend....")
});