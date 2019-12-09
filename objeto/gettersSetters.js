const sequence = {
    _valor: 1, // convention the atribute _valor is considered private but everyone can access
    get valor(){ return this._valor++},
    set valor( valor){ 
        if( valor > this._valor){
            this._valor = valor
        }
    }
}

console.log( sequence.valor+"\n",sequence.valor)

sequence.valor = 3
console.log( sequence.valor)