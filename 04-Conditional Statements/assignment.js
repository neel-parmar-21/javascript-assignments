// // A) If

// //Q1

// let number = 25;

// if (number % 5 == 0) {
//     console.log("Divisible by 5")
// }

// //Q2

// let age = 60;

// if (age >= 60) {
//     console.log("Senior Citizen")
// }

// //Q3

// number = 105;

// if (number > 100) {
//     console.log("Big Number")
// }

// //Q4

// let temp = 8;

// if (temp < 10) {
//     console.log("Very Cold");
// }

// //Q5

// let marks = 100;

// if (marks == 100) {
//     console.log("Perfect Score")
// }


// //Q6

// number = -2;

// if (number < 0){
//     console.log("Negative Number")
// }

// //Q7

// let userInput = "";

// if (userInput == "") {
//     console.log("No input provided!")
// }

// //Q8

// let year = 1900;

// if (year % 100 == 0) {
//     console.log("Century year")
// }

// //Q9

// number = 28;

// if (number > 0 && number % 2 == 0) {
//     console.log("Positive Even Number")
// }

// //Q10

// marks = 40;

// if (marks >= 35 && marks <= 100) {
//     console.log("Valid Marks")
// }


// // B) If/Else

// //Q1

// number = 9;

// if (number % 2 == 0) {
//     console.log("Even")
// } else{
//     console.log("Odd")
// };

// //Q2

// age = 17;

// if (age >= 18) {
//     console.log("Eligible")
// } else{
//     console.log("Not eligible")
// };

// //Q3

// number = -9;

// if (number > 0) {
//     console.log("Positive")
// } else{
//     console.log("Negative")
// };

// //Q4

// let studentMarks = 34;

// if (marks >= 35) {
//     console.log("Pass!")
// } else{
//     console.log("Fail!")
// };

// //Q5

// let ch = 'A';

// if (ch >= 'A' && ch <= 'Z') {
//     console.log("Uppercase letter");
// } else {
//     console.log("Not an uppercase letter");
// };

// //Q6

// let num = 6;

// if (num % 3 == 0) {
//     console.log(num, "is divisible by 3")
// } else {
//     console.log(num, "is not divisible by 3")
// };

// //Q7

// let password = "12ABC"

// if (password == "admin123") {
//     console.log("Login Successful")
// } else {
//     console.log("Incorrect Password")
// };

// // Q8

// year = 2024;

// if (year % 4 == 0) {
//     console.log("Leap year")
// } else {
//     console.log("Not a leap year")
// };

// // Q9

// let num1 = 23;
// let num2 = 14;

// if (num1 > num2){
//     console.log(num1, "is greater")
// } else {
//     console.log(num2, "is greater")
// }

// // Q10

// num = -92

// if (num > 0) {
//     console.log("Positive")
// } else if ( num < 0) {
//     console.log("Negative")
// } else {
//     console.log("Zero")
// }


// // C) If, else if, else Statements

// //Q1

// let month = 12;

// if (month == 12 || month == 1 || month == 2) {
//     console.log("Winter") 
// } else if (month >= 3 && month <= 5) {
//     console.log("Summer")
// } else if (month >= 6 && month <= 8) {
//     console.log("Monsoon")
// } else {
//     console.log("Autumn")
// }

// // Q2

// let income = 1000000;
// let tax = 0;
// let discount = 0;

// if (income < 300000) {
//     tax = 0;
// } else if (income >= 300000 && income <= 700000) {
//     tax = income * 0.05;
// } else if (income >= 700000 && income <= 1000000) {
//     tax = income * 0.1;
// } else {
//     tax = income * 0.15;
// }

// console.log(tax);

// // Q3

// let studentScore = 97;

// if (studentScore >= 90) {
//     console.log("Outstanding")
// } else if (studentScore >= 70 && studentScore <= 89) {
//     console.log("Good")
// } else if (studentScore >= 40 && studentScore <= 69) {
//     console.log("Average")
// } else {
//     console.log("Needs Improvement")
// }

// // Q4

// let speed = 40;

// if (speed < 40) {
//     console.log("Slow")
// } else if (speed >= 40 && speed <= 80) {
//     console.log("Normal")
// } else {
//     console.log("Fast")
// }

// // Q5

// let height = 169;

// if (height < 150) {
//     console.log("Short")
// } else if (height >= 150 && height <= 170) {
//     console.log("Average")
// } else {
//     console.log("Tall")
// }

// // Q6

// let day = 6;

// if (day >= 1 && day <= 5) {
//     console.log("Weekday")
// } else if (day == 6 || day == 7) {
//     console.log("Weekend")
// } else {
//     console.log("Enter a valid day!")
// }

// // Q7

// let units = 140;
// let bill = 0;

// if (units >= 0 && units <= 50) {
//     bill = units * 2
// } else if (units >= 51 && units <= 150) {
//     bill = units * 4
// } else {
//     bill = units * 6 
// }

// console.log(bill)

// // Q8

// let attendance = 97;

// if (attendance >= 90) {
//     console.log("Excellent")
// } else if (attendance >= 75 && attendance <= 89) {
//     console.log("Good")
// } else if (attendance >= 50 && attendance <= 74) {
//     console.log("Satisfactory")
// } else {
//     console.log("Poor")
// }

// // Q9

// let javascript = 87;
// let python = 90;
// let maths = 88;

// if (javascript > python && javascript > maths) {
//     console.log(`Javascript has the highest marks: ${javascript}`)
// } else if (python > javascript && python > maths) {
//     console.log(`Python has the highest marks: ${python}`)
// } else {
//     console.log(`Maths has the highest marks: ${maths}`)
// }

// // Q10

// number = -14;

// if (number > 0) {
//     if (number % 2 == 0) {
//         console.log("Positive Even")
//     } else {
//         console.log("Positive Odd")
//     }
// } else if (number < 0) {
//     if (number % 2 == 0) {
//         console.log("Negative Even")
//     } else {
//         console.log("Negative Odd")
//     }
// } else {
//     console.log("Zero")
// }


// // D) Nested if statement 

// // Q1

// number = 13;

// if (number > 10) {
//     if (number % 3 == 0) {
//         console.log(`${number} is divisible by 3.`)
//     }
//     else {
//         console.log(`${number} is not divisible by 3.`)
//     }
// } else {
//     console.log("Enter a number greater than 10!")
// }

// // Q2

// age = 17;
//  let hasVoterID = true;

// if (age >= 18) {
//     if (hasVoterID) {
//         console.log("Can Vote")
//     } else {
//         console.log("Cannot Vote")
//     }
// }

// // Q3

// marks = 99;

// if (marks >= 40) {
//     if (marks >= 80) {
//         console.log("Passed with Distinction")
//     } else {
//         console.log("Passed")
//     }
// }

// // Q4 

// let pin = 1234;
// let correctpin = 1234;
// let accountBalance = 50000;
// let withdrawal = 55000;

// if (pin == correctpin) {
//     if (accountBalance >= withdrawal) {
//         console.log("Withdrawal Successful")
//     } else {
//         console.log("Insufficient balance")
//     }
// } else {
//     console.log('Incorrect PIN')
// }

// // Q5

// year = 2026;

// if (year % 4 == 0) {
//     if (year % 100 == 0) {
//         console.log("Leap year")
//     } else {
//         console.log("Not a leap year")
//     }
// } else {
//     console.log("Not a leap year")
// }

// // Q6

// let email = "neel@gmail.com";

// if (email.includes("@")) {
//     if (email.endsWith(".com")) {
//         console.log("Valid email")
//     } else {
//         console.log("Invalid email")
//     }
// } else {
//     console.log("Invalid email")
// }

// // Q7

// let cartTotal = 4000;
// let isPremiumMember = true;
// discount = 0;

// if (cartTotal >= 1000 ) {
//     if (isPremiumMember) {
//         discount = cartTotal * 0.2
//         cartTotal -= discount
//         console.log(`Cart Total: ${cartTotal}, Discount: 20%`)
//     } else {
//         discount = cartTotal * 0.1
//         cartTotal -= discount
//         console.log(`Cart Total: ${cartTotal}, Discount: 10%`)
//     }
// } else {
//     console.log(`Cart Total: ${cartTotal}`)
// }

// // Q8

// number = 54;

// if (number > 0) {
//     if (number % 4 == 0) {
//         console.log("Positive Even and divisible by 4")
//     }
// } 

// // Q9

// age = 22;
// let isGraduated = true;
// let experience = 3;

// if (age >= 21 && age <= 30) {
//     if (isGraduated) {
//         if (experience >= 2) {
//             console.log("Eligible for Interview")
//         }
//     }
// }

// // Q10

// let isStudentPresent = true;
// let internalMarks = 31;
// let externalMarks = 36;

// if (isStudentPresent) {
//     if (internalMarks >= 30) {
//         if (externalMarks >= 35) {
//             console.log("Eligible for Final Exam")
//         }
//     }
// }


// // E) switch Statement

// // Q1

// month = 4;

// switch (month) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         console.log("31 days");
//         break;

//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         console.log("30 days");
//         break;

//     case 2:
//         console.log("28 days");
//         break;

//     default:
//         console.log("Invalid month");
// }

// // Q2

// let char = "c";

// switch (char) {
//     case "a":

//     case "e":

//     case "i":

//     case "o":

//     case "u":
//         console.log("Vowel")
//     break;

//     default:
//         console.log("Consonant")
// }

// // Q3

// number = 4;

// switch (number) {
//     case 1:
//     case 2:
//         console.log("Winter")
//     break;

//     case 3:
//     case 4:
//         console.log("Summer")
// }

// // Q4

// marks = 74;

// switch (true) {
//     case marks >= 75:
//         console.log("Distinction")
//     break;

//     case marks >= 60:
//         console.log("1st class")
//     break;

//     case marks >= 50:
//         console.log("2nd class")
//     break;

//     case marks >= 35:
//         console.log("3rd class")
//     break;

//     default:
//         console.log("Failed")

// }

// // Q5

// let role = "admin";
// let action = "edit";

// switch (role) {
//     case "admin":
//         switch (action) {
//             case "create":
//                 console.log("Admin can create")
//             break;

//             case "edit":
//                 console.log("Admin can edit")
//             break;

//             case "delete":
//                 console.log("Admin can delete")
//         }
    
//     default:
//         console.log("Limited Access")
// }

// // Q6

// let fruit = "mango";

// switch (fruit) {
//   case "apple":
//     console.log("Apple is red")
//   break;

//   case "mango":
//     console.log("Mango is yellow")
//   break;

//   case "banana":
//     console.log("Banana is yellow")
//   break;
  
//   default:
//     console.log("Unknown fruit");
// }

// // Q7

// let value = 0;

// switch (value) {
//     case 0:
//         console.log("Number 0")
//     break;

//     case "0":
//         console.log("String 0")
//     break;

//     case false:
//         console.log("Boolean false")
//     break;

//     case null:
//         console.log("Null")
//     break;

//     case undefined:
//         console.log("Undefined")
//     break;

//     default:
//         console.log("No match")

// }

// // Q8

// num1 = 12;
// num2 = 24;
// let operator = "+";

// switch (operator) {
//     case "+":
//         console.log(num1 + num2)
//     break;

//     case "-":
//         console.log(num1 - num2)
//     break;

//     case "*":
//         console.log(num1 * num2)
//     break;

//     case "/":
//         console.log(num1 / num2)
//     break;

//     case "%":
//         console.log(num1 % num2)
//     break;

//     case "**":
//         console.log(num1 ** num2)
//     break;

//     default:
//         console.log("Enter a valid operator!")

// }

// // Q9

// day = 15;

// switch (day) {
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//     case 7:
//     case 8:
//     case 9:
//     case 10:
//         console.log("Beginning of the month")
//     break;

//     case 11:
//     case 12:
//     case 13:
//     case 14:
//     case 15:
//     case 16:
//     case 17:
//     case 18:
//     case 19:
//     case 20:
//         console.log("Middle of the month")
//     break;

//     case 21:
//     case 22:
//     case 23:
//     case 24:
//     case 25:
//     case 26:
//     case 27:
//     case 28:
//     case 29:
//     case 30:
//     case 31:
//         console.log("End of the month")
//     break;

//     default:
//         console.log("Enter a valid day!")
         
    
// }


// // Q10

// let category = "veg";
// let item = "pizza";
// let size = "full";
// let price = 0;

// switch (category) {
//     case "veg":

//         switch (item) {
//             case "pizza":
//                 switch (size) {
//                     case "half":
//                         price = 100
//                         break;

//                     case "full":
//                         price = 180
//                         break;
//                 }
//                 break;

//             case "burger":
//                 switch (size) {
//                     case "half":
//                         price = 60
//                         break;

//                     case "full":
//                         price = 100
//                         break;
//                 }
//                 break;
//         }
//         break;

//     case "nonveg":

//         switch (item) {
//             case "pizza":
//                 switch (size) {
//                     case "half":
//                         price = 150
//                         break;

//                     case "full":
//                         price = 250
//                         break;
//                 }
//                 break;

//             case "burger":
//                 switch (size) {
//                     case "half":
//                         price = 80
//                         break;

//                     case "full":
//                         price = 140
//                         break;
//                 }
//                 break;
//         }
//         break;
// }

// console.log(`Category: ${category}`)
// console.log(`Item: ${item}`)
// console.log(`Size: ${size}`)
// console.log(`Price: ₹${price}`)


// F) Ternary Operator

// Q1

let n4 = 21;
let isDivisibleBy7 = (n4 % 7 == 0) ? "Divisible by 7" : "Not Divisible by 7";

console.log(isDivisibleBy7)

// Q2

let temperature = 30;

console.log((temperature >= 30) ? "Hot Day" : "Pleasant Day")

// Q3

let str3 = "Hello";

console.log((str3 == "") ? "Empty String" : "String has content")

// Q4

let age = 13;

console.log((age < 13) ? "Child" : (age >= 13 && age <= 19) ? "Teenager": "Adult" )

// Q5

let num1 = 25;
let num2 = 34;
let num3 = 40;

console.log((num1 > num2 && num1 > num3) ? `${num1} is greater` : (num2 > num1 && num2 > num3) ? `${num2} is greater` : `${num3} is greater`)

// Q6

let studMarks = 45;

console.log((studMarks >= 75) ? "Distinction" : (studMarks >= 60 && studMarks <= 74) ? "First Class" : (studMarks >= 50 && studMarks <= 59) ? "Second Class" : (studMarks >= 35 && studMarks <= 49) ? "Pass" : "Fail")

// Q7

let num = -7;

let result = num === 0
    ? "Zero"
    : num > 0
        ? num % 2 === 0 ? "Positive Even" : "Positive Odd"
        : num % 2 === 0 ? "Negative Even" : "Negative Odd";

console.log(result);

// Q8

let year = 2024;

let result1 = year % 4 === 0
    ? year % 100 === 0
        ? year % 400 === 0 ? "Leap Year" : "Not a Leap Year"
        : "Leap Year"
    : "Not a Leap Year";

console.log(result1);

// Q9

let role = "admin";
let action = "delete";

let result2 = role === "admin"
    ? action === "delete"
        ? "Admin Delete"
        : action === "edit"
            ? "Admin Edit"
            : "Admin Other"
    : role === "user"
        ? action === "view" ? "User View" : "User Restricted"
        : "Invalid Role";

console.log(result2);

// Q10

let cartTotal = 3500;

let result3 = cartTotal >= 5000
    ? { discount: "20%", finalAmount: cartTotal * 0.80 }
    : cartTotal >= 2000
        ? { discount: "10%", finalAmount: cartTotal * 0.90 }
        : cartTotal >= 1000
            ? { discount: "5%", finalAmount: cartTotal * 0.95 }
            : { discount: "0%", finalAmount: cartTotal };

console.log(result3);







