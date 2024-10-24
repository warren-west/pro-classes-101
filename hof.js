// What is a HOF?
// A function that receives a function as a parameter.

let array = [1, 2, 3, 4]
// indexes = 0, 1, 2, 3

// .reduce()
// A HOF that accumulates elements of an array, 
// and returns A SINGLE VALUE 
let reducedArray = array.reduce((prev, curr) => {
    // console.log(`prev: ${prev} + curr: ${curr}`)
    return prev * curr
}, 1)
// console.log(reducedArray)

// .map()
// Is a HOF, that will ALWAYS return an array with the SAME LENGTH as the original.

let mappedResult = array
                    .map((num) => num * 2) // double each number in array
                    .map(num => num * 0.5) // then halve each number

// console.log(mappedResult)

// .filter()
// In each case where the item used in the expression evaluates to true,
// that item is added to the filtered list. Else, it's excluded.

let filteredNumbers = array.filter((num) => {
    return num % 2 == 0
})
// console.log(filteredNumbers)

// .every()
// Checks each item in the array with the predicate function you provide
// If at any point, FALSE is the result of the predicate,
// the every() function returns false.

let everyResult = array.every((num) => {
    return num / 1 === num
})
// console.log("Every:", everyResult)

// .some()
// Checks each item in the array with the predicate function you provide
// If at any point, TRUE is the result of the predicate,
// the some() function returns true.

let someResult = array.some((num) => {
    return num === 3
})
// console.log("Some:", someResult)