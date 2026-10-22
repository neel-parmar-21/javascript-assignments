// Function Declaration


// function addition (p1,p2,...) {
//     return 
// }

// Example:

function printHello() {
    console.log("Hello, World!");
};

printHello();

// Eg-
function greeting(name) {
    return `Welcome ${name} to CodingGita!`
};

console.log(greeting("Neel"));

function average(n1, n2, n3) {
    let avg =(n1 + n2 + n3) / 3;
    return avg;
};

console.log(average(5,10,15))

let ans = average(5,10,15);
console.log(ans)


function isEven(num) {
    return num % 2 == 0;
}

console.log(isEven(5));


// Function Expression

let add = function(a,b) {
    return a + b;
}
console.log(add(20,40))

// Declaration v/s Expression

function percent(marks, total) { // function declaration
    return (marks / total)* 100
}

console.log(percent(475, 500)) // calling the function

let percentage = function(marks, total) { // function expression
    return (marks / total)* 100
}

console.log(percentage(475, 500)) // calling the function

// Parameters vs Arguments

// Variables defined inside the function definition(declaration)

function greet(name) { // name => parameter
    return `Welcome to Codinggita, ${name}!`;
}

console.log(greet("Neel")); // Neel => argument
console.log(greet("Rohit")); // Rohit => argument

function addition(a, b) {
    return `Addition: ${a + b}`;
}

console.log(addition(10, 20));

function multiplication(a, b) {
    return `Multiplication: ${a * b}`;
}

console.log(multiplication(5, 7)); 

console.log(multiplication(10,11));


// Return Statement => return sends a value back from the function.

function division(a, b) {
    return a / b;
}

console.log(division(10, 5))

function average(x, y, z) {
    let avg = (x + y + z) / 3;
    return avg.toFixed(2);
}

let marksOfStudent1 = average(66 , 87 ,95);
let marksOfStudent2 = average(77, 89, 76);
console.log(marksOfStudent1, marksOfStudent2);


// Function Scope

// Inside a function, any variable you declare
// becomes local to that function.

function myFunction(){
    let x = 10;
    console.log(x)
};

myFunction();

// Global Scope:
// Variables declared outside any function are accessible everywhere.

let marks = 90;

function showmarks(marks) {
    console.log(marks);
}
showmarks(marks);
console.log(marks);


function isEven(num) {
    return num % 2 == 0;
}

console.log(isEven(23));

function fullName (first, last) {
    return first +" "+ last
}

console.log(fullName("Neel","Parmar"))

function sumOfThree (a, b, c) {
    return a + b + c
}

console.log(sumOfThree(10, 20 ,30))

function averageOfTwo (x, y) {
    return (x + y) / 2
}

let average = averageOfTwo(50, 70)
console.log(`Average: ${average}`)



function displayAge (){
    let age = 20;
    console.log(age);
};

displayAge();
console.log(age)


let course = "JavaScript";

function studentCourse () {
    console.log(course);
};

studentCourse();


function analyzeStudent(m1, m2, m3) {
    let totalMarks = m1 + m2 + m3;
    let averageMarks = (m1 + m2 + m3) / 3

    console.log(`Total Marks: ${totalMarks}`)
    console.log(`Average Marks: ${averageMarks.toFixed(1)}`)

}

analyzeStudent(90, 80 ,75)


function reportCard(name, m1, m2) {
    let totalMarks = m1 + m2;
    let averageMarks = (m1 + m2) / 2

    return `${name} gets a total ${totalMarks} marks and average ${averageMarks.toFixed(1)} marks.`

}

console.log(reportCard("Neel", 97, 66))

function checkPass(m1, m2, m3) {
    let avg = (m1 + m2 + m3) / 3;
    return avg >= 40 ? "Pass" : "Fail"
}
result = checkPass(50, 70, 90);

console.log(result);

// Nested Functions (function inside a function)

function studentReport(name, m1, m2) {
    function total (m1, m2) {
        return m1 + m2;
    };
    let totalMarks = total(m1, m2);
    return `${name} gets total marks = ${totalMarks}`
};

console.log(studentReport("Ayush", 78, 65))

function main() {
    function helper() {
        return "Helper function called!"
    };
    let result = helper();
    return result;
};

console.log(main());

function processMarks (m1, m2){
    function sum(){
        let total = m1 + m2;
        return total;
    }

    return sum();
};

console.log(processMarks(10, 20))

// OR

function processMarks (m1, m2){
    function sum(){
        let total = m1 + m2;
        return total;
    }

    return sum();
};

let result = processMarks(10, 20);
console.log(result)


function studentSummary(name, m1, m2, m3) {
    function findTotal() {
        let total = m1 + m2 + m3;
        return total;
    }

    function findAverage() {
        let average = (m1 + m2 + m3) / 3;
        return average;
    }

    return `Student Name: ${name}
Average Marks: ${findAverage()}
Total Marks: ${findTotal()}`
    ;
}

result = studentSummary("Neel", 75, 68, 79);

console.log(result)


// Scope in JavaScript => defines where we can access the variables in our program

// 1. Global Scope
// 2. Functional Scope

// Global Scope => variables declared outside the function are in global scope and can be accessed everywhere

var college = "CodingGita"

function showCollege() {
    console.log(college)
}

showCollege();
console.log(college);


// Function Scope => variable inside the function are in functional scope, can access inside the function only.


function myFunc() {
    var x = 10;
    console.log(x)
};

myFunc();
console.log(x) //Error => ReferenceError 

// Block Scope => variable inside any {} not belonging to a function are in a block scope and can access inside the block only
// (if is not declared with var);

// var = > totally ignores the block scope


if (true) {
    let y = 20;
    console.log(y); // 20
}

console.log(y); // ReferenceError: y is not defined


if (true) {
    const y = 20;
    console.log(y); // 20
}

console.log(y); // ReferenceError: y is not defined


if (true) {
    var y = 20;
    console.log(y); // 20
}

console.log(y); // 20


function myFunc(){

    for(var i=1; i<=5; i++) {
        console.log("Inner i", i) // prints from 1-5
    };
    console.log("Outer i", i) // prints from 1-5
}

myFunc();