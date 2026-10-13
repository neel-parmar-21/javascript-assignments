// Assignment: JS Functions

// 1. Conceptual Understanding

// A function is a reusable block of code designed to perform a specific task

// Functions help in:

// Reusability
// Cleaner code
// Reduced repetition
// Better structure
// Easier debugging

// 2. Function Declaration

function greetStudent(name) {
    return `Hello ${name}, welcome to CodingGita!`;
}

console.log(greetStudent("Ayush"));
console.log(greetStudent("Rahul"));

// 3. Hoisting

// Hoisting in terms of functions context means that the function can be called before declaration

// Example -
console.log(add(5,10));

function add(num1, num2){
    return `Addition: ${num1 + num2}`;
}

// 4. Function Expression

function calculateAverage(a, b, c) {
    return (a + b + c) / 3;
}

console.log(calculateAverage(80, 90, 70));

// 5. Parameters vs Arguments

function multiply(x, y) {  // x and y => parameters
    return x * y;
}
console.log(multiply(12, 5)); // 12 and 5 => arguments

// 6. Return Statement

function isEven(num) {
    return num % 2 == 0;
}

console.log(isEven(4));

// 7. Multiple Parameters

function findPercentage(obtainedMarks, totalMarks) {
    return `${obtainedMarks / totalMarks * 100} %`;
}

console.log(findPercentage(456, 500));

// 8. Function Without Return

// It returns undefined because return keyword is used to return something and if we don't use it then it returns undefined.

// Example-

function subtraction (a, b) {
    console.log(a - b);
}

console.log(subtraction(12, 10));

// 9. Practical Application

function calculateSimpleInterest (principal, rate, time) {
    let SI = (principal * rate * time) / 100;
    return SI;
}

console.log(calculateSimpleInterest(10000, 5, 2));

// 10. Mixed Concept Question

// a) Function declaration supports hoisting but function expression doesn't support hoisting

// b)

function studentScorecard (studentName, studentMarks) {
    return `Student ${studentName} has scored ${studentMarks} marks.`;
}

console.log(studentScorecard("Jitesh", 83))
console.log(studentScorecard("Piyush", 67))








