//Q1 Variable Declaration Practice

var name = "Neel"
let age = 18
const pi = 3.14159

console.log(name)
console.log(age)
console.log(pi)

//Q2 Changing and Not Changing Values

let score = 0;
console.log(score)
score += 10;
console.log(score)
score -= 3;
console.log(score)

// const maxScore = 120;
// maxScore += 95;
// console.log(maxScore)

//Q3 Primitive Data Types
let myNumber = 42;
console.log("myNumber:", myNumber, "Type:", typeof myNumber);

let myDecimal = 3.14;
console.log("myDecimal:", myDecimal, "Type:", typeof myDecimal);

let myText = "Hello";
console.log("myText:", myText, "Type:", typeof myText);

let isReady = true;
console.log("isReady:", isReady, "Type:", typeof isReady);

let notReady = false;
console.log("notReady:", notReady, "Type:", typeof notReady);

let nothing;
console.log("nothing:", nothing, "Type:", typeof nothing);

let emptyValue = null;
console.log("emptyValue:", emptyValue, "Type:", typeof emptyValue);

let myBigInt = 123456789012345678901234567890n;
console.log("myBigInt:", myBigInt, "Type:", typeof myBigInt);

//Q4 Understanding undefined vs null

var x;
let y = null;

console.log("x =", x);
console.log("y =", y);

console.log("typeof x:", typeof x);
console.log("typeof y:", typeof y);

console.log("x == y:", x == y);
console.log("x === y:", x === y);

// when we just declare the variable without assigning a value to it.
// when we have to assign an absence of a value to a variable

//Q5 Objects, Arrays, and Functions

// Part A – Object

let student = {
  name: "YourName",
  age: 17,
  isEnrolled: true
};

console.log(student)
console.log(student.age)
console.log(student.isEnrolled)

// Part B – Array
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "hello", true, null];

console.log(numbers[0,-1])
console.log(mixed)

// Keeping arrays restricted to a single data type makes your code faster, uses less computer memory, and prevents unexpected bugs.

// Part C - Function
var name = "Neel"

function greet(name) {
    return `Hello ${name} !`
}

let message1 = greet(name)
console.log(message1)

name = "Daksh"

function greet(name) {
    return `Hello ${name} !`
}

let message2 = greet(name)
console.log(message2)

// Q6 Using typeof Operator
let a = 10;
let b = "10";
let c = true;
let d;
let e = null;
let f = { name: "Ali" };
let g = [1, 2, 3];
let h = function() { return 5; };

console.log("a =", a, "Type:", typeof a);
console.log("b =", b, "Type:", typeof b);
console.log("c =", c, "Type:", typeof c);
console.log("d =", d, "Type:", typeof d);
console.log("e =", e, "Type:", typeof e);
console.log("f =", f, "Type:", typeof f);
console.log("g =", g, "Type:", typeof g);
console.log("h =", h, "Type:", typeof h);

// e gives "object" even though it is “empty"
// h  gives "function"

// Q7 Variable Naming Rules

let firstName;
let _private;
let $element;
let user123;

// let 123user;   // Starts from number so invalid
// let my-var;    // Contains hyphen which JS considers as subtraction operator so invalid
// let function;  // it is JS keyword so invalid

// Q8 Declaration and Assignment Practice

let message;
console.log(message)

message = "Hello, World!"
console.log(message)

var name = "Alice";
let Age = 25;
let isStudent = true;
const maxUsers = 100

console.log(name)
console.log(Age)
console.log(isStudent)
console.log(maxUsers)

// Q9 Best Practices Refactoring

var x = 12;
count = x;  //Initialized x with a meaningful default value and renamed it to count

let firstNumber = 1; // Added meaningful name to variable
let secondNumber = 2; // Added meaningful name to variable
let thirdNumber = 3; // Added meaningful name to variable
const PI = 3.14159; // Changed pi to const and rename to PI (uppercase).
let userName = "John"; // Renamed username to userName (camelCase).
let itemCount = 0; // Renamed itemcount to itemCount (camelCase).