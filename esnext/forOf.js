const nome = 'edson'
for (const letra of nome) {
    console.log(letra)
}

const assuntoEcma = [ 'map', 'set', 'promise']

for( let i in assuntoEcma){
    console.log("i recebe os índices ", i, 'para acessar o conteudo do array usa-se o i como abaixo' )
    console.log(" o valor contido no array no indice i: ",assuntoEcma[i])
}
// com o forOf será mostrado o conteúdo do array direto
// o forOf também percorre o Set
for (const assunto of assuntoEcma) {
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', { abordado: true}],
    ['Set', {abordado: true}],
    ['Promise', {abordado: false}]
])

for( let assunto of assuntosMap){
    console.log(assunto)
}
for (const assunto of assuntosMap.keys()) {
     console.log(assunto)
}
for (const assunto of assuntosMap.values()) {
    console.log(assunto)
}
for (const assunto of assuntosMap.entries()) {
    console.log(assunto)
    
}
for (const [ch, vl] of assuntosMap.entries()) {
    console.log( ch, ":", vl)
    console.log(ch)
    console.log(vl.abordado)
}