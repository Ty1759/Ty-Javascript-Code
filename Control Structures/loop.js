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

//ASSIGNMENT...Have array of class list , including age, gender, name, course. using For loop and add comments.

//ClassDetails array: An array of student objects, where each object contains the details of a student (name, age, school, course, location, and sex).
const ClassDetails = [
{Name: "Oyebisi Oyelekan", Age: 35, School: "New Horizon College", Course: "FullStack Web Development", Location: "Lagos Nigeria", Sex:"Male"},
{Name: "John Rambo", Age: 45, School: "New Horizon College", Course: "Cybersecurity", Location: "Lagos Nigeria", Sex:"Male"},
{Name: "John Wick", Age: 55, School: "New Horizon College", Course: "UI/UX", Location: "Lagos Nigeria", Sex:"Male"},
{Name: "Michelle Yeoh", Age: 65, School: "New Horizon College", Course: "Data Analysis", Location: "Lagos Nigeria", Sex:"Female"},
{Name: "Maggie Q", Age: 25, School: "New Horizon College", Course: "Ethical Hacking", Location: "Lagos Nigeria", Sex:"Female"},
{Name: "Scarlet Johansson", Age: 40, School: "New Horizon College", Course: "Product Design", Location: "Lagos Nigeria", Sex:"Female"},
]

// for loop indicates logging each student's information to the console and after which the details will be console logged for each of the student.
for ( let i = 0; i < ClassDetails.length; i++) {
    
    console.log("Class Details:", "Name:",  ClassDetails[i].Name, " Age:",    ClassDetails[i].Age, " School:", ClassDetails[i].School, 
        " Course:", ClassDetails[i].Course, " Address:", ClassDetails[i].Location, " Gender:", ClassDetails[i].Sex) }
