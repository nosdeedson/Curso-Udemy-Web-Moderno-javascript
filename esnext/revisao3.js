// Object.values and Object.entries
const obj ={ a: 1, b: 2, c: 3}
console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))
// melhorias na notação

const nome = 'joao'
const pessoa = {
    nome,
    saudacao(){
        return "ola pessoal!"// forma de criar função dentro do objeto
    }
}

console.log(pessoa.nome, pessoa.saudacao())
// class

class Animal  {}

class Cachorro extends Animal{
    falar(){
        return "au au"
    }
}

const c = new Cachorro()
console.log(c.falar())






