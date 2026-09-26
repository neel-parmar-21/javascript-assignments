console.log("Hello JavaScript!")
console.log(7 == "07")

let storedPIN = 1243;
let enteredPIN = 1243;
let checkPIN = storedPIN === enteredPIN;

console.log(checkPIN)


let savedTheme = "white";
let selectedTheme = "dark";
let checkTheme = savedTheme == selectedTheme;

console.log(checkTheme)

let savedLanguageCode = "HI"
let browserLanguageCode = "EN"
let checkLanguageCode = savedLanguageCode != browserLanguageCode

console.log(`Is saved language code not equal to browser language code? ${checkLanguageCode}`)

let userAge = 19
let verifyAge = userAge != 18

console.log(`Is user age not equal to 18? ${verifyAge}`)

// true => 1
var num = Number(true)
console.log(num)

// false => 0
var num = Number(false)
console.log(num)

// null => 0
var num = Number(null)
console.log(num)

// undefined => NaN
var num = Number(undefined)
console.log(num)

// empty array [] => 0
var num = Number([])
console.log(num)

// empty object {} => NaN 
var num = Number({})
console.log(num)

// Symbol => NaN
var num = Number(Symbol)
console.log(num)

// BigInt => NaN
var num = Number(BigInt)
console.log(num)

let isNewUser = true;
let ifUserNotPurchased = false;
let eligibleForOffer = osNewUser || ifUserNotPurchased;

console.log(`Is user eligible for special offer? ${eligibleForOffer}`)

let isUserLoggedIn = false;
let showSignUp = !isUserLoggedIn;
console.log(`Is sign up visible? => ${showSignUp}`)


let x = 5;
let y = x++;
console.log(y,x);

x = 5;
y = ++x;
console.log(y,x);

x = 5;
y = x--;
console.log(y,x);

x = 5;
y = --x;
console.log(y,x);

let userClickstoLike = 1
let increaseLikeCount = ++ userClickstoLike // Increases likes count

console.log(`${increaseLikeCount} likes`) 

let countdownTime = 90;
let updatedCountdownTime = -- countdownTime // Decreases countdown time

console.log(`Time left: ${updatedCountdownTime} seconds`)