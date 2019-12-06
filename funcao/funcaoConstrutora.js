function Car( highSpeed = 200, delta = 5)
{
    // private atribute
    let currentSpeed = 0

    // public method

    this.acelera = function()
    {
        if( currentSpeed + delta <= highSpeed)
        {
            currentSpeed += delta
        }else
        {
            currentSpeed = highSpeed
        }
    }

    // public method
    this.getCurrentSpeed = function()
    {
        return currentSpeed
    }
}

const uno = new Car
uno.acelera()
uno.acelera()

console.log(uno.getCurrentSpeed())

const ferrari = new Car(350, 20)

ferrari.acelera()
ferrari.acelera()
ferrari.acelera()

console.log(ferrari.getCurrentSpeed())

console.log( typeof Car)
console.log(typeof uno)
console.log(typeof ferrari)