const pilots = [ 'vettel', 'alonso', 'raikkonen', 'massa']
pilots.pop()// remove the last element
console.log(pilots)
pilots.push('vestappen')
console.log(pilots)
console.log(pilots.shift()) // remove the first element
console.log(pilots)
pilots.unshift('shumacher') // add an element in the first position
console.log(pilots)
//"splice" can add or delete elements in the array
// to add
pilots.splice(2, 0, "massa", 'botas')
// I will add an element in the index two and I won't remove anyone
console.log("\n", pilots)
// to remove and ADD
pilots.splice( 3, 2, "senna", "Prost")
console.log("\n",pilots)
// I will remove the from the third element, and I will remove two elements 
// and I will add two elements from the third element that is the second index
// just to remove
pilots.splice(0, 1)
console.log("removing: \n" ,pilots)
// part of an array
const newArray = pilots.slice( 2,4)// the element in the forth position won't be returned
console.log("part of my array: \n", newArray)
// another way
const newArray2 = pilots.slice(2)
console.log("the part of the array from the third index\n", newArray2)





















