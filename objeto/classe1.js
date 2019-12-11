class Lancamento{
    constructor( name= 'generico', value = 0){
        this.name = name
        this.value = value
    }
}

class CicloFinanceiro{
    constructor( mounth, year){
        this.year = year
        this.mounth = mounth
        this.lacamentos = []
    }
    adicionaLacamentos( ...lacamentos){
        lacamentos.forEach( l => this.lacamentos.push(l))
    }
    sumario(){
        let valorConsolidado = 0
        this.lacamentos.forEach( l => {
            valorConsolidado += l.value
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('salario', 45000)
const contaDeLuz = new Lancamento('energi', -150)

const contas = new CicloFinanceiro(12, 2019)
contas.adicionaLacamentos(salario, contaDeLuz)
console.log(contas.sumario())