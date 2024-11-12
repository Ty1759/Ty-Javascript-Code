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


let age = 25;
if (age > 25){
    console.log("your age is above 25")
} else if(age < 25){
    console.log("your age is below 25")
} else {
    console.log ("your age is 25")
}

let fruit = "apple";
if(fruit === "banana") {
    console.log( 'we have banana in the store')
} else if(fruit === "orange"){
    console.log ("we have orange in our store")
} else if(fruit === "coconut"){
    console.log("coconut is in our store")
} else if(fruit === "apple"){
    console.log ("we have apple in our store")
} else{
    console.log ("we do not have any fruit")
}

let fruit1 = "apple";

// Switch statement
switch (fruit1) {
    case "banana":
        console.log ("it is banana")
        break;

        case "apple":
            console.log ("it is apple")
            break;

        default:
            console.log("we do not have any fruit")

}

let age1 = 25
switch (age1) {
    case age1 > 25:
        console.log ("your age is above 25");
        break;

        case age1 < 25:
            console.log ("your age is below 25");
            break;

        default:
            console.log("your age is 25")
}
