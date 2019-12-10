function Aula( name, videoID){
    this.name = name
    this.videoID = videoID
}

const a = new Aula( 'qualquer', 123)

console.log(a)
const a1 = new Aula()

console.log(a1)

function novo(f, ...params){
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo( Aula, "jjj" ,123)

console.log( aula3)