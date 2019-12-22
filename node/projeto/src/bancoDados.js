const sequence={
    _id: 1,
    get id(){
        return this._id++
    }
    
}
// o objeto sequence não é visto fora do modulo pois não foi expotado
const produtos={}

function salvarProduto(produto){
    if(!produto.id){
        produto.id = sequence.id
    }
    produtos[produto.id] = produto
    return produto
}

function getProduto(id){
    return produtos[id] || {}
}
function getProdutos(){
    return Object.values(produtos)
}
function deleteProduto(id){
    const p = produtos[id]
    delete produtos[id]
    return p
}

/// exportando o modulo
module.exports = { salvarProduto, getProduto, getProdutos, deleteProduto}