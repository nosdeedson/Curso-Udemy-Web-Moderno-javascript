class Avo{
    constructor(sobrenome){
        this.sobrenome= sobrenome
    }
}

class Pai extends Avo{
    constructor( sobrenome, profissao = 'professor'){
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai{
    constructor(profissao){
        if( profissao != null)
            super("silva", profissao)
        else
            super("silva")
    }
}

const filho = new Filho('mecanico')
console.log(filho)