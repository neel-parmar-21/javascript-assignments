// hoisting => JavaScript moves variable declaration to the top of their scope before executing code.

// var => hoisted with undefined
// let & const => hoisted with TDZ(Temporary Dead Zone)

console.log(x);
// console.log(y); => Error
// console.log(z); => Error

var x;
let y; 
// const z; => Error

// function declaration hosting => function declarations are fully hoisted.

x()

function x(){
    console.log("Hello");
};


// function expression hosting => function expressions are not fully hoisted.


// a)
// console.log(func) // error

let func = function z(){
    console.log("Hello World!")
}

// b)
// console.log(func) // undefined

// var func = function z(){
//     console.log("Hello World!")
// }

// Avoid declaring functions expressions with var!


// Scope Chain

let a = 7;
function outer(){
    let b = 8;
    function inner(){
        let c = 9;
        console.log(a);
        console.log(b);
        console.log(c);
    }
    inner();
}
outer();



// When accessing a variable:

// 1. JavaScript looks inside the current scope
// 2. If not found, goes to the next outer scope
// 3. Continues until global scope
// 4. If not found anywhere → error

let name = "Ayush";

function myFunc(){
    let age = 21;
    if(age == 21){
        let isStudent = true;
        console.log(isStudent);
        console.log(age);
        console.log(name);
    }
    // console.log(isStudent) => ReferenceError: isStudent is not defined
}

// console.log(age) => ReferenceError: age is not defined
myFunc();

// Outer regions cannot access inner scopes!


// Variable Shadowing

let name1 = "Daksh";

function studentInfo(){
    let name1 = "Darshan";
    console.log(name1) // this name variable overrides the global variable name
}

studentInfo() 

console.log(greet);
var greet = function() {
    console.log("Hi");
};




