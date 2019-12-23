function falarDepoisDe(segundos, frase){
    return new Promise( (resolve, reject)=>{
        setTimeout(() =>{
            resolve(frase)
            //reject(frase) usado quando acontece erro
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'que legal').then(frase => frase.concat('?!?') )
.then(outraFrase => console.log(outraFrase))
.catch( e => console.log(e))