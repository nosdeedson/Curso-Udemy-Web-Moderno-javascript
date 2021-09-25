module.exports = (app, texto) =>{
    function salvar(req, res){
        res.send("produto salvar " + texto);
    }

    function obter (req, res){
        res.send("devolvendo produdo " +texto);
    }

    app.post('/produtos', salvar)
    app.get('/produtos', obter)

    return { salvar, obter}
}