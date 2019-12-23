// let e const
/* a variável declarada com o let tem escopo de bloco,
a variável só é acessada na bloco a qual pertence
*/
/*enquanto uma variável criada com o var não tem escopo de bloco
pode ser acessada de qualquer lugar
*/
// template String é criada entre sinais de crase
// as variáveis podem ser acessadas atráves do uso do cifrão
// que antecede um par de chaves onde vai a variável a ser exibida como no exemplo

const produto = 'iPad'
console.log(`\t mostrando o tab nesta linha, \nteste produto é caro ${produto}\n, mostrando a quebra de linha`)
// outra forma de quebrar a linha
console.log(`SEGUNDO EXEMPLO\n${produto} este
produto 
é caro`)

// destructuring

const [ l, e, ...tras] = 'edson'
console.log( l, e, tras)

const [ x, , y] = [ 1, 2, 3]
console.log(x , y)

const { idade : i, nome} = { nome: 'jose', idade: 12}

console.log(i)// é variável 
console.log(nome)