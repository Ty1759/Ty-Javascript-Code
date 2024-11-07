//alert("hello jsclass");
console.log ("welcome to my website");

//var
//let
//const

var name = "Lekan";
console.log(name)

let age = 50;
age = 70
console.log(age);

const email = "oyelekanoyebisi@gmail.com";
console.log(email);



//datatypes
//Premitive Data type..can hold only one data
// PDT=String
let name2 ="Segun";
console.log (name2);

//Number...two types, Integer and floating

let age2 = "100"
console.log(age2);
let myNumber =0.8136127616
console.log(myNumber);

//Boolean
//true or false
let isMarried = false;
let isGoodMan = true;

//undefined
let notAssigned;
console.log(notAssigned);

//null
let isActive = null;
console.log(isActive);

//Non premitive data type...can hold multiple data
//Array

let products = ["bags", "shoes", "cloths", "phones", "laptops"];
console.log(products [3] [2]);

//object
let user = {
    name: "Lekan",
    age: 35,
    email: "oyelekanoyebisi@gmail.com",
    isStudent: false
    

};

console.log(user);

const user2 = {
    id: 1,
    firstName: "Abiola",
    lastName: "Oyebisi",
    username: "lordzeus",
    email: "oyelekanoyebisi@gmail.com",
    password: "securePassword123",
    phone: "+2348136127616",
    address: {
        street: "1 sir matt busby way, Greater Manchester",
        city: "Manchester",
        state: "London",
        postalCode: "200001",
        country: "Nigeria",
    },
    dateOfBirth: "1900-01-01",
    isActive: "true",
    roles: ["user", "admin"],
    lastLogin: "2024-10-14T10:30:00Z"
};

console.log(user2)

let user3 = {
    id: 2,
    firstName: "Zeus",
    lastName: "Lord",
    username: "ty1759",
}

console.log (user3);