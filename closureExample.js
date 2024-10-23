/*
A closure is a function that returns a function. (Gross oversimplification).
Why would we want to return a function from a function?
The inner function preserves readability into the outer function's scope,
when using it from outside the outer function's scope.
*/

/**
 * A closure example.
 * @returns innerFunction, which has visibility to the outerFunction() scope.
 */
function outerFunction() {
    let specialMessage = "You are awesome! ⭐" // only visible inside this function
    
    const innerFunction = function() {
        console.log(specialMessage)
    }
    
    return innerFunction
}

// 
const returnedFunction = outerFunction()
returnedFunction() // specialMessage is printed to the console!

console.log(specialMessage) // this throws an error, because specialMessage doesn't exist in this global context.