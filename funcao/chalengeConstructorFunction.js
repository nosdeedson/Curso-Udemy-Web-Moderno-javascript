function CreatePeople(name ){
    let currentName = 'without name'
    if( name == null){
        this.name = currentName
    }
    else{
        this.name = name
    }

    this.falar = function(){
        console.log(`meu nome ${this.name}`)
    }   
}

const p = new CreatePeople()
p.falar()

const p1 = new CreatePeople('jussara')
p1.falar()