function salvar(req, res){
    res.send( "salvando usuário")
}

function obter(req, res){
    res.send("obtendo usuário")
}

module.exports = {salvar, obter}