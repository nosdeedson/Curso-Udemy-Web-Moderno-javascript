function Pessoa()
{
    this.idade = 0

    setInterval( () => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}// o 'this' que está dentro do contexto de Pessoa não vai variar, porque está dentro do 
 // e porque foi usado uma função Arrow dentro de Pessoa
 // contexto léxico do objeto Pessoa

new Pessoa