const schedule = require('node-schedule')
//scheduleJob( intervalo, qualquer minuto ( por isto o *), hora,dia, mes, dia da semana  começa 
//no zero para domingo, o asterisco omite o valor do atributo)
// 22 dia, 12 mes, 18 horas 
const tarefa1 = schedule.scheduleJob('*/2 * 18 22 12 0', function(){
    console.log("executando tarefa um ", new Date().getSeconds())
})

const tarefa2 = schedule.scheduleJob('*/5 * 18 * * 0', ()=>{
    console.log("executando tarefa dois: ", new Date().getSeconds())
})
setTimeout( ()=>{
    tarefa1.cancel()
    tarefa2.cancel()
    console.log("cancelado!!")
}, 20000)


const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(0,5)]
regra.hour = 18
regra.second = 11

const tarefa3 = schedule.scheduleJob(regra, ()=>{
    console.log( 'executando a tarefa 3', new Date().getSeconds())
})