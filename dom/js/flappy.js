function novoElemento( tagName, className){
    const elemento = document.createElement(tagName)
    elemento.className= className
    return elemento
}

function Barreira( reversa = false){
    this.elemento = novoElemento('div', 'barreira')

    const borda = novoElemento('div', 'borda')
    const corpo = novoElemento('div', 'corpo')

    this.elemento.appendChild( reversa ? corpo : borda)
    this.elemento.appendChild(reversa ? borda : corpo)

    this.setAltura = altura => corpo.style.height = `${altura}px`
    
}

//const b = new Barreira(true)
// b.setAltura(200)
// document.querySelector('[wm-flappy]').appendChild(b.elemento)// b.elemento faz referência a this.elemento

function ParDeBarreiras( altura, abertura, x){

    this.elemento = novoElemento('div', 'par-de-barreiras')

    this.superior = new Barreira(true)
    this.inferior = new Barreira(false)

    this.elemento.appendChild(this.superior.elemento)
    this.elemento.appendChild(this.inferior.elemento)
    
    // o this torna os atrubutos e funções públicos, ou seja, visíveis fora da função
    // const torna os atributos e funções privados
    // ok até aqui
    this.sortearAbertura = () =>{
        const alturaSuperior = Math.random() * ( altura - abertura)
        const alturaInferior = altura - abertura - alturaSuperior
        this.superior.setAltura(alturaSuperior)
        this.inferior.setAltura(alturaInferior)
        
    }
    
    this.getX = () => parseInt(this.elemento.style.left.split('px')[0])
    this.setX = (x) => this.elemento.style.left = `${x}px`
    this.getLargura = () => this.elemento.clientWidth

    this.sortearAbertura()
    this.setX(x)
    
}

// const b = new ParDeBarreiras(700, 300, 400)
// document.querySelector('[wm-flappy]').appendChild(b.elemento)
function Barreiras( altura, largura, abertura, espaco, notificarPonto){
    // espaco é o valor em pixel entre os pares de barreiras
    this.pares =[
        new ParDeBarreiras( altura, abertura, largura),
        new ParDeBarreiras( altura, abertura, largura + espaco),
        new ParDeBarreiras( altura, abertura, largura + espaco * 2),
        new ParDeBarreiras( altura, abertura, largura + espaco * 3)
    ]
    const deslocamentoEmPixel = 3
    this.animar = () =>{
        
        this.pares.forEach(par => {
            par.setX(par.getX() - deslocamentoEmPixel)
            
            // quando o elemento sair da área do jogo
            if(par.getX() < -par.getLargura() ){
                par.setX( par.getX() + espaco * this.pares.length)
                par.sortearAbertura()
            }

            const meio = largura / 2 // quando a barreira passa pelo meio incrementa a pontuação
            const cruzouMeio = par.getX() + deslocamentoEmPixel >= meio && par.getX() < meio
            if(cruzouMeio){
               notificarPonto()
            }
        });
    }

}


function Passaro(alturaJogo){
    let voando = false
    this.elemento = novoElemento('img', 'passaro')
    this.elemento.src = 'imgs/passaro.png'
    this.getY = () => parseInt( this.elemento.style.bottom.split('px')[0])
    this.setY = y => this.elemento.style.bottom = `${y}px`

    window.onkeydown = e => voando = true
    window.onkeyup = e => voando = false

    this.animar = () => {
        const novoY = this.getY() + (voando ? 4 : -4)
        const alturaMaxima = alturaJogo - this.elemento.clientHeight
        
        if(novoY <= 0 ){
            this.setY(0)
        }else if(novoY >= alturaJogo - this.elemento.clientHeight){
            this.setY(alturaJogo - this.elemento.clientHeight - 8)
        }
        else{
            this.setY(novoY)
        }
    }

    this.setY( alturaJogo / 2)
}

function estaoSobrepostos( elementoA, elementoB){
    const a = elementoA.getBoundingClientRect()
    const b = elementoB.getBoundingClientRect()

    const horizontal = a.left + a.width >= b.left && b.left + b.width >= a.left
    const vertical = a.top + a.height >= b.top && b.top + b.height >= a.top

    return horizontal && vertical
}
function colidiu( passaro, barreiras){
    let colidiu = false

    barreiras.pares.forEach( parDeBarreiras =>{
        if(!colidiu){ 
            const superior = parDeBarreiras.superior.elemento
            const inferior = parDeBarreiras.inferior.elemento
            
            colidiu = estaoSobrepostos(passaro.elemento, superior)
            || estaoSobrepostos(passaro.elemento, inferior)
        }
    })
    return colidiu
}
// const barreiras = new Barreiras(700, 1200, 350, 400)
// const areaDoJogo = document.querySelector('[wm-flappy]')
// const bird = new Passaro(700)
// const progresso = new Progresso()
// areaDoJogo.appendChild(bird.elemento)
// areaDoJogo.appendChild(new Progresso().elemento)
// barreiras.pares.forEach( par => areaDoJogo.appendChild(par.elemento))

// setInterval(() => {
//     barreiras.animar()
//     bird.animar()
// }, 20);

function Progresso(){
    this.elemento = novoElemento('span', 'progresso')
    this.atualizarPontos = pontos => {
        this.elemento.innerHTML = pontos
    }

    this.atualizarPontos(0)
}

// A variável foi declarada fora pois quanto maior os pontos maior a velocidade
// A variável velocidade deve ser decrementada para por isto está aqui
var pontos = 0
var velocidade = 20
var distanciaBarreiras = 250

function Speed(){
    this.elemento = novoElemento('span', 'velocidade')
    this.atualizaVelocidade = (velocidade) => this.elemento.innerHTML = `SPEED: ${velocidade}`
    this.atualizaVelocidade(velocidade)
}

function FlappyBird(){
    
    const areaDoJogo = document.querySelector('[wm-flappy]')
    const altura = areaDoJogo.clientHeight
    const largura = areaDoJogo.clientWidth

    const progresso = new Progresso()
    
    const barreiras = new Barreiras( altura, largura, distanciaBarreiras, 400, 
        () => progresso.atualizarPontos(++pontos)
    )
    const passaro = new Passaro(altura)

    areaDoJogo.appendChild(progresso.elemento)
    
    areaDoJogo.appendChild(passaro.elemento)

    barreiras.pares.forEach( par => areaDoJogo.appendChild(par.elemento))

    this.start = () =>{
        const temporizador = setInterval( () =>{
            barreiras.animar()
            passaro.animar()
            
            if(colidiu(passaro, barreiras)){
                clearInterval(temporizador)
                alert("PRESSIONE F5 PARA REINICIAR O JOGO")
            }
        }, velocidade)
    }
}



new FlappyBird().start()












