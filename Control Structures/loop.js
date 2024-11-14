//Loops are used to execute a block of code repeatedly until specific condtions are met
// This is For Loop.

for (let i = 1; i < 11; i++) {
    console.log("hello from Loop" + i);
};

const colors = ["red", "blue", "green", "yellow"]

for (let i = 0; i < colors.length; i++){
    console.log("Color:", colors[i]);
}

const fruits = ["Apple", "Banana", "Cherry", "Strawberry", "Carrot"]

for (let i = 0; i < fruits.length; i++){
    console.log("fruit:", fruits[i]);
}

const students = [
    {name: "Rambo", grade: 94},
    {name: "JohnWick", grade: 92},
    {name: "Statham", grade: 90},
    ]

    for (let i = 0; i < students.length; i++) {
        console.log ("student:", students[i].name, "Grade:", students[i].grade);
    }


const aboutMe = [
    {Name:"Oyebisi Oyelekan,", school:"New Horizon,", Course:"Front End Web Development,"}
]

for (let i = 0; i < aboutMe.length; i++) {
    console.log ("My Name is", aboutMe[i].Name, "I school in", aboutMe[i].school, "i'm currently studying", aboutMe[i].Course);
}

//while loop
let i = 0; 
while (i < 5){
    console.log("count is: " + i)
    i++
}

const colors1 = ["red,", "blue,", "green,", "yellow,"]
while ( i = 0) i < colors1;{
    console.log("count is: " + "red,", "blue,", "green,", "yellow")
    i++
}

//Have array of class list , including age, gender, name, course. using For loop and add comments.