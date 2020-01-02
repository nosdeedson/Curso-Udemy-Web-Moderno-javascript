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
            //if(cruzouMeio)
              //  notificarPonto()
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
        const novoY = this.getY() + (voando ? 8 : -5)
        let alturaMaxima = alturaJogo - this.elemento.clientHeight
        console.log(alturaMaxima)
        if(novoY <= 0 ){
            this.setY(0)
        }else if(novoY >= alturaMaxima){
            this.setY(alturaMaxima)
        }
        else{
            this.setY(novoY)
        }
    }

    this.setY( alturaJogo -10)
}


const barreiras = new Barreiras(700, 1200, 350, 400)
const areaDoJogo = document.querySelector('[wm-flappy]')
const bird = new Passaro(700)
areaDoJogo.appendChild(bird.elemento)
barreiras.pares.forEach( par => areaDoJogo.appendChild(par.elemento))

setInterval(() => {
    barreiras.animar()
    bird.animar()
}, 20);


















