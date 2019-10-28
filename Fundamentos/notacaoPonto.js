function Obj(nome){
    this.nome = nome 
    this.exec = function(){
        console.log(this.nome)
    }
    var atributoPrivado = " inacessivel" // ao acessar fora da função da undefined

    this.executaPrivado = function(){
        console.log( "atirbuto privado ", atributoPrivado )
    }

    function naoFazNada()
    {
        console.log("nao faz nada")
    }

    naoFazNada() // é executada no momento que criamos um objeto 
}
// o this faz com que o atributo nome fique visivel fora da função, 
// ou seja, public se fosse do tipo var seria visível apenas dentro na função

const obj2 = new Obj('cadeira')
const obj3 = new Obj("mesa")

console.log(obj2.nome)
console.log(obj3.nome)
obj2.exec()
console.log(obj2.atributoPrivado) // vai imprimir undefined
obj2.executaPrivado()
//  obj2.naoFazNada() // aqui da erro de compulação diz que não é uma função