class Pessoa{
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log( `meu nome: ${this.nome}`)
    }
}

const p = new Pessoa('jose')
p.falar()

const createPeople = nome =>{
    return { falar: () => { console.log( `neu nome ${nome}`)}}
}


const p2 = createPeople('jussara')
p2.falar()
