console.log( typeof Array, typeof new Array)

// array literal []
console.log( typeof [])

// how to create arrays

let aproved = new Array(" carlos", "ana", 'joao')

console.log(aproved)

// the way recomended to isntaciate arrays

aproved = ['maira', 'juvenal', 'jose']
console.log(aproved[0], aproved[1], aproved[2])
console.log(aproved[3]) // if I try to access a position that doesn't exist in an 
                        // array this will be undefined an error will not occur
// ways to add elements to an array

aproved[3] = 'edson'
aproved.push('jussara') // this function adds an element in the last position of the array
console.log(aproved)
console.log("elements in my Array: ", aproved.length)
aproved[9]= 'pedro'
console.log("my array ",aproved.length)

for( let x in aproved){
    console.log(aproved[x])
}

console.log(aproved)
aproved.sort()// this function alter the array ordering
console.log(" ordered:\n ",aproved)

// deleting elements in the array

delete aproved[2]
console.log( "after deletation\n", aproved)

aproved = ['maira', 'juca', 'pedro']
aproved.splice( 1 ,2) // with this  I can Add or delete elements
                    // the first number indicate the position to start deleting
                    // the second number indicate how nany elements will be deleted
console.log("\n", aproved)
aproved.splice(1, 0,  "marcos")// marcos will be put in the index one
console.log( aproved)
while( aproved.length < 5){
    let aux = aproved.length *10
    let word = aux.toString()
    aproved.push(word)
}

console.log( "\n", aproved)











