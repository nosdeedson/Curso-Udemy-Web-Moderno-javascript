// my version
const valores = [1,2,3,4,5,6]

function myForEach( array){
    for( let x in array){
        console.log(array[x])
    }
}
myForEach(valores)
// the teachers version

Array.prototype.forEach2 = function(callBack){
    for( let i = 0; i < this.length; i++){
        callBack(this[i], i, this)
    }
}

const names = [ 'ana', 'carlos', 'joao', 'lucas', 'jussara']

names.forEach2( function( name, index){
    console.log(`${index+1} : ${name}`)
})
