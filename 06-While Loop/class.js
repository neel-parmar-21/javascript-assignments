
// while loop Syntax

// while (condition) {
//     // code
//     // update the condition (very important!)
// }

// Example - Countdown from 5;

let i = 5;
while (i > 0) {
    console.log(i)
    i--
}

// Example - Sum of first 10 natural numbers

// a) using for loop

let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum += i
}
console.log(sum)

// b) using while loop

i = 1;
sum = 0;

while (i <= 10) {
    sum += i
    i++
}
console.log(sum)

// Example- Keep printing numbers starting from 1 until the number becomes greater than 50.

let num = 1;
while (num <= 50){
    console.log(num);
    num++;
}

// Reverse a number using only a while loop (Example: 1234 → 4321).

num = 1234;
let reverse = 0;

while (num > 0){
    let digit = num % 10;
    num = Math.floor(num / 10) //123
    reverse = (reverse * 10) + digit
}
console.log(reverse)

// Dry run

// num     reverse   while(num > 0)   digit   num   reverse   print()

// 1234       0       1234 > 0 (T)      4     123      4
//                    123 > 0 (T)       3      12     43
//                     12 > 0 (T)       2       1    432
//                      1 > 0 (T)       1       0   4321
//                      0 > 0 (F) --------------------------> 4321


// do..while syntax

// do {
//   // code
// } while (condition);


// while loop

i = 15;
while (i <= 10) {
    console.log("Hello");
    i++;
} // doesn't print anything



// using do..while loop
i = 15;

do {
    console.log("Hello")
    i++;
} while (i <= 10) // runs the code at least once


// Example- Reverse loop printing 10 to 1

i = 10;

do{
    console.log(i)
    i--
} while (i >= 1);    


// Reverse a number using do..while

num = 1234;
reverse = 0;

do {
    let lastDigit = num % 10;
    num = Math.floor(num / 10);
    reverse = (reverse * 10) + lastDigit
} while (num > 0);

console.log(reverse)
