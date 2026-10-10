if (3) {
    console.log(true)
}



age = 100;

if (age < 13) {
    console.log("Child")
}

else if (age < 18) {
    console.log("Teen")
}

else if (age < 60) {
    console.log("Adult")
}

else {
    console.log("Senior Citizen")
}



marks = 101;

if (marks >= 75 && marks <= 100) {
    console.log("Distinction")
}

else if (marks >= 60 && marks < 35) {
    console.log("1st Class")
}

else if (marks >= 35 && marks < 0) {
    console.log("2nd Class")
}

else if (marks < 35 && marks > 0) {
    console.log("Fail")
}

else {
    console.log("Invalid marks!")
}




let age = 101;

if (age < 0 || age > 100) {
    console.log("Invalid age!")
}

else if (age < 12) {
    console.log("Ticket Price : ₹100")
}

else if (age <= 60) {
    console.log("Ticket Price : ₹200")
}

else (age > 60) (
    console.log("Ticket Price : ₹150")
)

num1 = 1;
num2 = 1;
num3 = 2;

if (num1 == num2 == num3) {
    console.log("All numbers are equal")
}
else if (num1 > num2 && num1 > num3){
    console.log(`${num1} is the largest number.`)
}
else if (num2 > num1 && num2 > num3){
    console.log(`${num2} is the largest number.`)
}

else {
    console.log(`${num3} is the largest number.`)
}

number = 2

if (number > 0 && number % 2 === 0) {
    console.log("The number is positive and even.")
}

else {
    console.log("The number is positive and odd.")
}

marks = 100;

if (marks >= 35) {
    console.log("Pass")
    if (marks >= 90) {
        console.log("Excellent")
    }
}


let day = 0;

switch (day) {
    case 1:
        console.log("Monday");
    break;

    case 2:
    console.log("Tuesday");
    break;

    case 3:
    console.log("Wednesday");
    break;

    case 4:
    console.log("Thursday");
    break;

    case 5:
    console.log("Friday");
    break;

    case 6:
    console.log("Saturday");
    break;

    case 7:
    console.log("Sunday");
    break;

    default:
    console.log("Invalid day")

}

let operator = "/";
a = 10;
b = 20;

switch(operator){
    case "+":
        console.log(a + b);
        break;

    case "-":
        console.log(a - b);
        break;

    case "*":
        console.log(a * b);
        break;

    case "/":
        console.log(a / b);
        break;

    case "%":
        console.log(a % b);
        break;

    case "**":
        console.log(a ** b);
        break;

    default:
        console.log("Invalid operator!");

}

let selectedItem = 1;

switch(selectedItem){
    case 1:
        console.log("Pizza");
        break;
    case 2:
        console.log("Burger");
        break;
    case 3:
        console.log("Pasta");
        break;
    default:
        console.log("Enter invalid item number!")

}

let a = 6;
let b = 2;
let c = 5;

switch (true) {
    case a >= b && a >= c:
        console.log("Largest:", a);
        break;

    case b >= a && b >= c:
        console.log("Largest:", b);
        break;

    default:
        console.log("Largest:", c);
}

marks = 101;

switch(true){

    case marks >= 90 && marks <= 100:
        console.log("A");
        break;

    case marks >= 75 && marks <= 90:
        console.log("B");
        break;

    case marks >= 60 && marks <= 75:
        console.log("C");
        break;

    case marks >= 35 && marks <= 60:
        console.log("D");
        break;

    case marks < 35:
        console.log("F");
        break;

    default:
        console.log("Enter valid marks!");
    }

let number = 999999999999999999999999999999999999999999

result = number % 2 == 0 ? "Even" : "Odd";
console.log(result)

num = 0;

console.log(num < 0 ? "negative" : "positive")

num = 0;

if (num > 0) {
    console.log("Positive")
}

else if (num < 0) {
    console.log("Negative")
}

else {
    console.log("Zero")
}

let n = -99;

let result = n > 0 ? "Positive" : n < 0 ? "Negative" : "Zero";

console.log(result);

let marks = 34;

result = marks > 35 ? "Pass!" : marks == 35 ? "Just Passed!" : "Fail!"

console.log("Result:", result)

let num1 = 23;
let num2 = 12;

console.log(num1 > num2 ? `${num1} is greater` : `${num2} is greater`);
