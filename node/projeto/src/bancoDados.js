const sequence={
    _id: 1,
    get id(){ this._id++}
}
// o objeto sequence não é visto fora do modulo pois não foi expotado
const produtos={}

function salvarProduto(produto){
    if(!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto
}

function getProduto(id){
    return produto[id] || {}
}
function getProdutos(){
    return Object.values(produtos)
}


/// exportando o modulo
module.exports = { salvarProduto, getProduto, getProdutos}