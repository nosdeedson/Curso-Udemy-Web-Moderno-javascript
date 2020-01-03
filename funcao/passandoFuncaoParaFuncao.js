// function falar(palavra) {
//     console.log(palavra);
//   }
//   function executar(funcao, valor) {
//     funcao(valor);
//   }
//   executar(falar, "Oi JavaScript!");

//   function contar(numero){
//       return ++numero
//   }

//   function imprimir( funcao, valor){
//     console.log(valor)
//     if( valor == 10 )
//     return
//     valor = funcao(valor)
//     imprimir(funcao, valor)
//   }
// imprimir( contar, 1)

let pontos = 0
let espacoBarreiras = 200
let velocidade = 15

const incrementaPontos = () => ++pontos
const diminuiBarreira = () => {
    if( espacoBarreiras < 300)
         espacoBarreiras += 50
}
const diminuiSpeed = () => {
    if( velocidade < 25)
    velocidade += 5
}

function imprimir(funcao){
    return funcao()
}
let cont = 0
while (cont < 100) {
    imprimir(incrementaPontos)
    imprimir(diminuiBarreira)
    imprimir(diminuiSpeed)
    console.log(pontos, espacoBarreiras, velocidade, "\n")
    cont++
}
// uma função que recebe outra função só poderá chamar a função passada se receber os
// valores ou se este forem valores que estejam fora da função a ser chamada