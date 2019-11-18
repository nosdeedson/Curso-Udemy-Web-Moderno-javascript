function Pessoa()
{
    this.idade = 0

    /*setInterval( function(){
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000 )*/ // o trecho comentado faz o "this" apontar para o objeto pessoa

    // outra forma de fazer o this apontar para Pessoa, mas não é correto
    // não importa quem chama a função sempre vai aportar para Pessoa
    const self = this

    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }, 1000)
}

new Pessoa