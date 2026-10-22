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

console.log(greetStudent("Ayush"))
console.log(greetStudent("Rahul"))

// 3. Hoisting

// Hoisting in terms of functions context means that the function can be called before declaration

// Example -
console.log(add(5,10))

function add(num1, num2){
    return `Addition: ${num1 + num2}`
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

console.log(findPercentage(456, 500))

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

// 11. Function Scope 

// Local Scope: Variables declared inside a function can be accessed only within that function

// Global Scope: Variables declared outside all functions can be accessed throughout the program, including inside functions

// example =>

let x = 10; // Global Scope

function test() {
    let y = 20; // Local Scope
    console.log(x) 
    console.log(y)
}

test()
console.log(x)
console.log(y) // Error 


// b)

let course = "JavaScript";
function displayAge(){
    let age = 20;
};

console.log(age) // Error because it is defined inside a function.


// 12

function analyzeStudent(name, m1, m2, m3){
    let total = m1 + m2 + m3;
    let average = (m1 + m2 + m3) / 3
    return `${name} scored total ${total} with average ${average.toFixed(1)}`

}

result1 = analyzeStudent("Neel",78, 85 ,92)
result2 = analyzeStudent("Ayush",77, 67 ,89)

console.log(result1)
console.log(result2)

// 13
// a) => A nested function is a function defined inside another function
// It can access variables from its outer function

// b)

function studentReport(studentName, marks1, marks2, marks3) {
    function total() {
        let totalMarks = marks1 + marks2 + marks3;
        return totalMarks;
    }

    let sum = total();

    return `${studentName} total marks: ${sum}`;
}

let result = studentReport("Neel", 78, 67, 91);
console.log(result);


 // 14
function generateReport(name, m1, m2, m3) {
    let total = m1 + m2 + m3;
    let average = total / 3;
    let result = average >= 40 ? "Pass" : "Fail";

    return `Student Name: ${name}
Total Marks: ${total}
Average: ${average.toFixed(2)}
Result: ${result}`;
}

console.log(generateReport("Rahul", 80, 75, 90));
console.log(generateReport("Priya", 35, 45, 30));


// 15
function sum(a, b, c) {
    return a + b + c;
}

function average(x, y) {
    return (x + y) / 2;
}

function max(a, b) {
    return a > b ? a : b;
}

function fullName(first, last) {
    return first + " " + last;
}

console.log("Sum:", sum(10, 20, 30));
console.log("Average:", average(40, 60));
console.log("Maximum:", max(25, 15));
console.log("Full Name:", fullName("Neel", "Parmar"));


// 16
const calculateGrade = function (percentage) {
    if (percentage >= 90) {
        return "A+";
    } else if (percentage >= 80) {
        return "A";
    } else if (percentage >= 70) {
        return "B";
    } else if (percentage >= 60) {
        return "C";
    } else if (percentage >= 40) {
        return "D";
    } else {
        return "F";
    }
};


console.log("95%:", calculateGrade(95));
console.log("82%:", calculateGrade(82));
console.log("67%:", calculateGrade(67));
console.log("45%:", calculateGrade(45));
console.log("32%:", calculateGrade(32));


// 17
function calculateFinalPrice(price, discountPercent) {
    let discount = price * discountPercent / 100;
    return price - discount;
}


console.log("Final Price:", calculateFinalPrice(2500, 15));
console.log("Final Price:", calculateFinalPrice(1200, 10));


// 18
const celsiusToFahrenheit = function (c) {
    return (c * 9 / 5) + 32;
};

const fahrenheitToCelsius = function (f) {
    return (f - 32) * 5 / 9;
};


console.log("25°C to Fahrenheit:", celsiusToFahrenheit(25));
console.log("100°C to Fahrenheit:", celsiusToFahrenheit(100));
console.log("98.6°F to Celsius:", fahrenheitToCelsius(98.6));
console.log("32°F to Celsius:", fahrenheitToCelsius(32));


// 19(a)
// No. A const or let function expression cannot be accessed before
// initialization because it is not hoisted like a function declaration


// 19(b)
function calculateRectangle(length, width) {
    function calculateArea() {
        return length * width;
    }

    return calculateArea();
}

console.log("Rectangle Area:", calculateRectangle(10, 5));


// 20
function processStudent(name, m1, m2, m3) {
    function calculateMarks() {
        let total = m1 + m2 + m3;
        let average = total / 3;

        return { total, average };
    }

    let marks = calculateMarks();
    let result = marks.average >= 40 ? "Pass" : "Fail";

    return `Student Name: ${name}
Total Marks: ${marks.total}
Average: ${marks.average.toFixed(2)}
Result: ${result}`;
}

function compareAverages(avg1, avg2) {
    if (avg1 > avg2) {
        return "First average is higher.";
    } else if (avg2 > avg1) {
        return "Second average is higher.";
    } else {
        return "Both averages are equal.";
    }
}

console.log(processStudent("Amit", 85, 90, 80))
console.log(processStudent("Riya", 70, 75, 80))
console.log(processStudent("Karan", 30, 35, 40))

console.log(compareAverages(85, 75))
console.log(compareAverages(60, 60))
console.log(compareAverages(45, 70))