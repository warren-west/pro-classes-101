// In JavaScript, we have "first class" functions,
// meaning that they are treated like variables.
// They can be passed into other functions as parameters,
// and they can be returned by functions.

// A function receiving a function as a parameter
function modifyNumber(number, process) {
    return process(number)
}

// A function receiving two functions as a parameter
function modifyNumberTwice(number, process1, process2) {
    return process1(process2(number))
}

// A function expression (treating it like a variable)
const multiplyByTwo = (num) => {
    return num * 2
}

// A function expression (treating it like a variable)
const multiplyByFour = (num) => {
    return num * 4
}


console.log(modifyNumber(50, multiplyByTwo))
console.log(modifyNumber(50, multiplyByFour))

console.log(modifyNumberTwice(10, multiplyByFour, multiplyByTwo))
console.log(modifyNumberTwice(10, multiplyByFour, multiplyByFour))