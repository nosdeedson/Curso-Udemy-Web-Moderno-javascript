const bodyParser = require('body-parser')
const express = require('express')
const multer = require('multer')

const app = express()
app.use(express.static('.'))

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//app.get('/teste', (requisicao, resposta) => resposta.send('OK') )
//como criar uma nova página o que vai ser madando é o ok

const storage = multer.diskStorage({
    destination: function(requisicao, file, callback){
        callback(null, './upload')
    },
    filename: function(requisicao,file, callback){
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({storage}).single('arquivo')

app.post('/upload', (req, resp) => {
    upload(req, resp, err =>{
        if(err){
            return resp.end('OCORREU UM ERRO')
        }
        resp.end('CONCLUÍDO COM SUCESSO')
    })
})

app.post('/formulario', (requisicao, resposta) =>{
    // resposta.send({
    //     ...requisicao.body,
    //     id: 1
    // })
    const json = requisicao.body
    
    let nome = json.nome
    let sobrenome = json.sobrenome
    
    json.id= 1
    nome = nome.toUpperCase()
    sobrenome = sobrenome.toUpperCase()
    json.nome = nome
    json.sobrenome = sobrenome
    json.ajax = false
        
    resposta.send(json)
    
})

app.get('/parOuImpar', ( requisicao, resposta) =>{
    // formas de receber requisição no NODE
    //requisicao.body
    //requisicao.query
    //requisicao.params

    const par = parseInt(requisicao.query.numero) % 2 === 0
    resposta.send( {
        resultado: par ? 'par' : 'impar'
    })
})
app.listen( 8080, () => console.log( " servidor rodando"))

