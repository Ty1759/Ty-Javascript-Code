// function
// function is a block of code that performs an actions and is reusable.

//types of function
// function declaration
//function expression
//arrow function

// 1. function declaration
function add(a, b ){ //parameters or arguement
    return(a+b)
}

const sum =  add(2,4);
console.log(sum)

function mult(a, b){
    return(a*b)
}
const product = mult(5,6);
console.log(product)

function greet(name){
    console.log(`Hello ${name} Welcome to our app`)
}
greet("Tayo")

const name = "Tayo"
console.log(`hello ${name} `)

function info(name, course){
    console.log(`My name is ${name}, I am studying ${course} at New horizon`)

}
info("Tayo", "FrontEnd Web Dev")

//function Expression.
const add2 = function (a, b) {
    return a + b
}
const sum2 = add(1, 2)
console.log(sum2)

const greet2 = function (name) {
    console.log(`Hello ${name}`)
}
greet2("John Wick")

const info3 = function(name, course, school){
    console.log(`My name is ${name}, I am studying ${course} at ${school},`)
}
info3("Tayo", "FrontEnd Web Dev", "New Horizon")