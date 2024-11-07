// control structure in JS is essential for controlling the flow of execution in your code.
// They alow you to dictate how your programme should respond based on conditons.

// 1. conditional statement 
// conditonal statement execute a block of code if the specified condition is true or false.

//a. If statement
let temperature = 30;

if( temperature > 25) {
    console.log('it is a hot day!')
} else {
    console.log('it is a cold day')
}

const isAdmin = true;
const isSuperUser = false;

if ( isAdmin || isSuperUser) {
    console.log("you can have access to the app")
} else {
    console.log("you are not allowed to have access to the app")
}

// write if statement that checks if someone has paid school fees and also has good health before the person can have access to the class
// else the person should go back home.

//your output should be: welcome to class or go back home

const hasPaidSchoolFees = true;
const hasGoodHealth = true

if (hasPaidSchoolFees && hasGoodHealth) {
    console.log("Welcome to the class")
} else {
    console.log("Go back home")
}