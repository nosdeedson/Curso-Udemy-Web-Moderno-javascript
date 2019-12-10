// prototype chain

const avo={
    atribute1: 'A'
}

const pai= {
    __proto__: avo,
    atribute2: 'B'
}

const filho = {
    __proto__: pai,
    atribute3: 'C'
}

console.log(filho.atribute1)

const car = {
    currentySpeed : 0,
    maxSpeed : 200,
    acelerate(delta){
        if( this.currentySpeed + delta < this.maxSpeed){
            this.currentySpeed += delta
        }
        else{
            this.currentySpeed = this.maxSpeed
        }
    },
    status(){
        return `${this.currentySpeed} km/h de ${this.maxSpeed} km/h`
    }
}

const ferrari = {
    model: 'F40',
    maxSpeed: 324
}

const volvo = {
    model : 'v40',
    status(){
        return `${this.model} : ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari,car) // another way to set a prototype
Object.setPrototypeOf(volvo, car)

volvo.acelerate(250)
ferrari.acelerate(300)

console.log( volvo.maxSpeed)
console.log( volvo.status())
console.log(ferrari.status())