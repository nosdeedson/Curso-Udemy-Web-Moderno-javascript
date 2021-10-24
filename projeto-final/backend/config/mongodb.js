const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/knowledge_stats', {useNewUrlParser: true,
 useUnifiedTopology: true })
    .catch( e =>{
        const message = 'ERRO! Não foi possível conectar ao Mongodb'
        console.log('\x1b[41m%s\x1b[37m', message, '\x1b[0m');
    })