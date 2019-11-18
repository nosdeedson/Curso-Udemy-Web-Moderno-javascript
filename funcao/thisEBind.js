const pessoa = 
{   
    saudacao: 'bom dia',
    falar()
    {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar

falar() // conflito entre paradigmas funcional e OO, falar não tem o atributo saudadacao
        // this aponta agora para falar, que não tem o atributo saudacao
        // a função falar está em um outro contexto, diferente do contexto de pessoa que é o 
        // o contexto que tem o atributo saudacao
        // só o contexto de pessoa tem o atributo saudacao

const falarDePessoa = pessoa.falar.bind(pessoa) // falarDePessoa tem o atributo saudacao
                                                // graças a função bind que recebeu o objeto pessoa
falarDePessoa()                                 // e agora o this sempre vai apontar para pessoa