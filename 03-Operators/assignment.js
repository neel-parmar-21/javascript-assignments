// JavaScript Operators Assignment

// Part A: Arithmetic Operators

// 1. Addition +

// Q1
let firstClassCollection = 15000;
let secondClassCollection = 12500;
let totalCollection = firstClassCollection + secondClassCollection;
console.log(`The total collection is ${totalCollection} rs.`);

// Q2
let morningPages = 18;
let eveningPages = 25;
let totalPages = morningPages + eveningPages;
console.log(`The total pages read in a day are ${totalPages} pages.`);

// Q3
let mondayItems = 125;
let tuesdayItems = 178;
let totalItems = mondayItems + tuesdayItems;
console.log(`The total items sold are ${totalItems}.`);

// Additional Questions (Addition +)

// Q4
// Output: "105"
// "10" + 5 = "105"

// Q5
// Output: "53"
// 5 + "3" = "53"

// Q6
// Output: "Hello World"
// "Hello" + " " + "World" = "Hello World"

// Q7
// Output: 0
// 0 + false = 0

// Q8
// Output: "100200"
// 100 + "200" = "100200"


// 2. Subtraction -

// Q1
let totalSeats = 80;
let occupiedSeats = 53;
let emptySeats = totalSeats - occupiedSeats;
console.log(`The total number of empty seats are ${emptySeats}.`);

// Q2
let totalMarks = 500;
let lostMarks = 35;
let finalMarks = totalMarks - lostMarks;
console.log(`The final marks are ${finalMarks}.`);

// Q3
let totalBoxes = 2500;
let sentBoxes = 875;
let remainingBoxes = totalBoxes - sentBoxes;
console.log(`The remaining boxes are ${remainingBoxes}.`);

// Additional Questions (Subtraction -)

// Q4
// Output: 7
// "10" - 3 = 7

// Q5
// Output: 15
// "20" - "5" = 15

// Q6
// Output: NaN
// "abc" - 1 = NaN

// Q7
// Output: Infinity
// 10 / 0 = Infinity

// Q8
// Output: NaN
// 0 / 0 = NaN


// 3. Multiplication *

// Q1
let notebookCost = 45;
let numberOfNotebooks = 8;
let totalCost = notebookCost * numberOfNotebooks;
console.log(`The total cost of buying 8 notebooks is ${totalCost} rs.`);

// Q2
let bottlesPerHour = 120;
let numberOfHours = 6;
let totalProduction = bottlesPerHour * numberOfHours;
console.log(`The total production in 6 hours is ${totalProduction} bottles.`);

// Q3
let numberOfRows = 7;
let plantsPerRow = 15;
let totalPlants = numberOfRows * plantsPerRow;
console.log(`The total number of plants are ${totalPlants}.`);

// Additional Questions (Multiplication *)

// Q4
// Output: 20
// "5" * 4 = 20

// Q5
// Output: 20
// "10" * "2" = 20

// Q6
// Output: NaN
// "hello" * 2 = NaN

// Q7
// Output: 0
// 5 * "0" = 0

// Q8
// Output: 12
// 3 * "4" = 12


// 4. Division /

// Q1
let totalPencils = 144;
let numberOfStudents = 12;
let pencilsPerStudent = totalPencils / numberOfStudents;
console.log(`The number of pencils each student receives is ${pencilsPerStudent}.`);

// Q2
let totalDistance = 360;
let totalHours = 6;
let distancePerHour = totalDistance / totalHours;
console.log(`The average distance travelled per hour is ${distancePerHour} km.`);

// Q3
let totalAmount = 72000;
let numberOfDepartments = 9;
let amountPerDepartment = totalAmount / numberOfDepartments;
console.log(`The amount received by each department is ${amountPerDepartment} rs.`);

// Additional Questions (Division /)

// Q4
// Output: 5
// "20" / 4 = 5

// Q5
// Output: 20
// "100" / "5" = 20

// Q6
// Output: Infinity
// 10 / 0 = Infinity

// Q7
// Output: -Infinity
// -10 / 0 = -Infinity

// Q8
// Output: NaN
// 0 / 0 = NaN


// 5. Modulus %

// Q1
let totalStudents1 = 53;
let groupSize = 5;
let studentsLeft = totalStudents1 % groupSize;
console.log(`The number of students left over are ${studentsLeft}.`);

// Q2
let totalCandies1 = 128;
let candiesPerBox = 10;
let candiesLeft = totalCandies1 % candiesPerBox;
console.log(`The number of candies left unpacked are ${candiesLeft}.`);

// Q3
let number = 12;
if (number % 2 === 0) {
    console.log(`${number} is Even.`);
} else {
    console.log(`${number} is Odd.`);
}

// Q4
let totalToys = 237;
let toysPerBox = 6;
let toysLeft = totalToys % toysPerBox;
console.log(`The total number of toys left after packing full boxes are ${toysLeft}.`);

// Q5
let busCapacity = 40;
let totalPassengers = 185;
let passengersLeft = totalPassengers % busCapacity;
console.log(`The number of people left after filling as many full buses as possible are ${passengersLeft}.`);

// Additional Questions (Modulus %)

// Q6
// Output: NaN
// 10 % 0 = NaN

// Q7
// Output: 0
// 0 % 5 = 0

// Q8
// Output: -1
// -10 % 3 = -1

// Q9
// Output: 1
// 10 % -3 = 1

// Q10
// Output: -1
// -10 % -3 = -1


// 6. Exponentiation **

// Q1
let cubeSide = 6;
let cubeVolume = cubeSide ** 3;
console.log(`The volume of a cube is ${cubeVolume} cm^3.`);

// Q2
let initialBacteria = 1;
let bacteriaHours = 4;
let bacteria = initialBacteria * 2 ** bacteriaHours;
console.log(`The number of bacteria after 4 hours will be ${bacteria}.`);

// Q3
let cellSide = 9;
let totalCells = cellSide ** 2;
console.log(`The total number of cells in a square arrangement are ${totalCells}.`);

// Q4
let powerFive = 5 ** 4;
console.log(`5^4 = ${powerFive}.`);

// Q5
let imagePixelsPerSide = 1024;
let totalPixels = imagePixelsPerSide ** 2;
console.log(`The total number of pixels are ${totalPixels}.`);

// Additional Questions (Exponentiation **)

// Q6
// Output: 4
// (-2) ** 2 = 4

// Q7
// Output: 0.5
// 2 ** -1 = 0.5

// Q8
// Output: 0.25
// 2 ** -2 = 0.25

// Q9
// Output: 9
// 3 ** 2 = 9

// Q10
// Output: 1
// 10 ** 0 = 1



// Part B: Assignment Operators

// 1. Simple Assignment =

// Q1
let studentAge = 17;
console.log(`The student's age is ${studentAge} years.`);

// Q2
let penPrice = 15;
console.log(`The price of the pen is ${penPrice} rs.`);

// Q3
let daysInWeek = 7;
console.log(`There are ${daysInWeek} days in a week.`);

// Q4
let city = "Pali";
console.log(`The city is ${city}.`);

// Q5
let piValue = 3.14159;
console.log(`The value of Pi is ${piValue}.`);

// Additional Questions (Simple Assignment =)

// Q6
// Output: 10 10 10
// a = b = c = 10

// Q7
// Output: 10 5
// x = 10 and y remains 5

// Q8
// Output: 100 100 100
// p = q = r via chained copy, all equal 100

// Q9
// Output: World Hello
// m is reassigned to "World" after n already copied "Hello"

// Q10
// Output: 25 25 25
// val1 = val2 = val3 via chained copy, all equal 25


// 2. Add and Assign +=

// Q1
let currentStudentMarks = 200;
let extraStudentMarks = 35;
currentStudentMarks += extraStudentMarks;
console.log(`The student's marks after adding ${extraStudentMarks} marks are ${currentStudentMarks}.`);

// Q2
let currentBalance = 5000;
let depositedAmount = 1200;
currentBalance += depositedAmount;
console.log(`The balance after depositing ${depositedAmount} rs is ${currentBalance} rs.`);

// Q3
let currentBatteryPercentage = 45;
let chargingPercentage = 30;
currentBatteryPercentage += chargingPercentage;
console.log(`The battery percentage after charging is ${currentBatteryPercentage}%.`);

// Q4
let currentGameScore = 1250;
let extraGamePoints = 375;
currentGameScore += extraGamePoints;
console.log(`The game score after adding ${extraGamePoints} points is ${currentGameScore}.`);

// Q5
let currentBookCount = 840;
let newlyAddedBooks = 160;
currentBookCount += newlyAddedBooks;
console.log(`The total number of books after adding ${newlyAddedBooks} books is ${currentBookCount}.`);

// Additional Questions (Add and Assign +=)

// Q6
// Output: "105"
// "10" += 5 -> "10" + 5 = "105"

// Q7
// Output: "53"
// 5 += "3" -> 5 + "3" = "53"

// Q8
// Output: 0
// 0 += false -> 0 + false = 0

// Q9
// Output: 11
// 10 += true -> 10 + true (true becomes 1) = 11

// Q10
// Output: "HelloWorld"
// "Hello" += "World" = "HelloWorld"


// 3. Subtract and Assign -=

// Q1
let totalWater = 1000;
let consumedWater = 375;
totalWater -= consumedWater;
console.log(`The remaining water is ${totalWater} litres.`);

// Q2
let availableMoney = 500;
let moneySpent = 180;
availableMoney -= moneySpent;
console.log(`The remaining money is ${availableMoney} rs.`);

// Q3
let currentBattery = 90;
let batteryUsed = 45;
currentBattery -= batteryUsed;
console.log(`The remaining battery percentage is ${currentBattery}%.`);

// Q4
let availableBoxes = 2400;
let dispatchedBoxes = 950;
availableBoxes -= dispatchedBoxes;
console.log(`The remaining boxes are ${availableBoxes}.`);

// Q5
let currentScore = 2000;
let deductedPoints = 625;
currentScore -= deductedPoints;
console.log(`The remaining score is ${currentScore}.`);

// Additional Questions (Subtract and Assign -=)

// Q6
// Output: 15
// "20" -= 5 -> "20" - 5 = 15

// Q7
// Output: 50
// "100" -= "50" -> "100" - "50" = 50

// Q8
// Output: NaN
// 10 -= "abc" -> 10 - "abc" = NaN

// Q9
// Output: 4
// 5 -= true -> 5 - true (true becomes 1) = 4

// Q10
// Output: 20
// 20 -= false -> 20 - false (false becomes 0) = 20


// 4. Multiply and Assign *=

// Q1
let currentPopulation = 5000;
let populationGrowthMultiplier = 3;
currentPopulation *= populationGrowthMultiplier;
console.log(`The new population is ${currentPopulation}.`);

// Q2
let currentDailyProduction = 120;
let productionGrowthMultiplier = 4;
currentDailyProduction *= productionGrowthMultiplier;
console.log(`The new daily production is ${currentDailyProduction} units.`);

// Q3
let currentSavings = 2000;
let savingsGrowthMultiplier = 2;
currentSavings *= savingsGrowthMultiplier;
console.log(`The new savings amount is ${currentSavings} rs.`);

// Q4
let currentPlantCount = 50;
let plantGrowthMultiplier = 5;
currentPlantCount *= plantGrowthMultiplier;
console.log(`The total number of plants is ${currentPlantCount}.`);

// Q5
let currentGamePoints = 150;
let gameScoreMultiplier = 3;
currentGamePoints *= gameScoreMultiplier;
console.log(`The new game score is ${currentGamePoints}.`);

// Additional Questions (Multiply and Assign *=)

// Q6
// Output: 20
// "10" *= 2 -> "10" * 2 = 20

// Q7
// Output: 20
// "5" *= "4" -> "5" * "4" = 20

// Q8
// Output: NaN
// "hello" *= 2 -> "hello" * 2 = NaN

// Q9
// Output: 0
// 5 *= "0" -> 5 * "0" = 0

// Q10
// Output: 12
// 3 *= "4" -> 3 * "4" = 12


// 5. Divide and Assign /=

// Q1
let totalClothLength = 1200;
let clothPartsCount = 4;
totalClothLength /= clothPartsCount;
console.log(`The length of one part is ${totalClothLength} metres.`);

// Q2
let totalProjectBudget = 80000;
let projectCount = 8;
totalProjectBudget /= projectCount;
console.log(`The budget per project is ${totalProjectBudget} rs.`);

// Q3
let totalSugar = 960;
let sugarPacketCount = 6;
totalSugar /= sugarPacketCount;
console.log(`The sugar in one packet is ${totalSugar} grams.`);

// Q4
let totalTravelDistance = 450;
let tripCount = 5;
totalTravelDistance /= tripCount;
console.log(`The distance per trip is ${totalTravelDistance} km.`);

// Q5
let totalStudentMarks = 2500;
let studentCount = 10;
totalStudentMarks /= studentCount;
console.log(`The marks per student are ${totalStudentMarks}.`);

// Additional Questions (Divide and Assign /=)

// Q6
// Output: 20
// "100" /= 5 -> "100" / 5 = 20

// Q7
// Output: 50
// "200" /= "4" -> "200" / "4" = 50

// Q8
// Output: Infinity
// 10 /= 0 -> 10 / 0 = Infinity

// Q9
// Output: -Infinity
// -10 /= 0 -> -10 / 0 = -Infinity

// Q10
// Output: NaN
// 0 /= 0 -> 0 / 0 = NaN


// 6. Modulus and Assign %=

// Q1
let totalCandies = 137;
let boxCapacity = 10;
totalCandies %= boxCapacity;
console.log(`The candies left are ${totalCandies}.`);

// Q2
let totalStudents = 250;
let teamCapacity = 7;
totalStudents %= teamCapacity;
console.log(`The students left are ${totalStudents}.`);

// Q3
let totalDays = 1000;
let weekLength = 7;
totalDays %= weekLength;
console.log(`The days left after full weeks are ${totalDays}.`);

// Q4
let totalChairs = 89;
let rowCapacity = 5;
totalChairs %= rowCapacity;
console.log(`The chairs left are ${totalChairs}.`);

// Q5
let totalMonths = 365;
let yearLengthInMonths = 12;
totalMonths %= yearLengthInMonths;
console.log(`The months left after full years are ${totalMonths}.`);

// Additional Questions (Modulus and Assign %=)

// Q6
// Output: NaN
// 10 %= 0 -> 10 % 0 = NaN

// Q7
// Output: 0
// 0 %= 5 -> 0 % 5 = 0

// Q8
// Output: -1
// -10 %= 3 -> -10 % 3 = -1

// Q9
// Output: 1
// 10 %= -3 -> 10 % -3 = 1

// Q10
// Output: -1
// -10 %= -3 -> -10 % -3 = -1


// 7. Exponentiation and Assign **=

// Q1
let gardenSide = 10;
gardenSide **= 2;
console.log(`The area of the garden is ${gardenSide} square metres.`);

// Q2
let cubeEdge = 4;
cubeEdge **= 3;
console.log(`The volume of the cube is ${cubeEdge} cubic centimetres.`);

// Q3
let growthFactor = 3;
growthFactor **= 2;
console.log(`The total area growth factor is ${growthFactor}.`);

// Additional Questions (Exponentiation and Assign **=)

// Q4
// Output: 4
// (-2) **= 2 -> (-2) ** 2 = 4

// Q5
// Output: 0.5
// 2 **= -1 -> 2 ** -1 = 0.5

// Q6
// Output: 0.25
// 2 **= -2 -> 2 ** -2 = 0.25

// Q7
// Output: 1
// 3 **= 0 -> 3 ** 0 = 1

// Q8
// Output: 10
// 10 **= 1 -> 10 ** 1 = 10



// Part C: Comparison & Relational Operators


// 1. Loose Equality ==

// Q1
let storedPasswordLoose = 1234;
let enteredPasswordLoose = "1234";
console.log(`Are the stored password and entered password loosely equal? ${storedPasswordLoose == enteredPasswordLoose}`);

// Q2
let userAnswerLoose = 0;
let defaultAnswerLoose = false;
console.log(`Are the user answer and default answer loosely equal? ${userAnswerLoose == defaultAnswerLoose}`);

// Q3
let userInputLoose = "";
let submittedFlagLoose = false;
console.log(`Are the user input and submitted flag loosely equal? ${userInputLoose == submittedFlagLoose}`);

// Q4
let backendValueLoose = null;
let frontendValueLoose = undefined;
console.log(`Do the backend and frontend values both mean "no value"? ${backendValueLoose == frontendValueLoose}`);

// Q5
let firstScoreLoose = 500;
let secondScoreLoose = "500";
console.log(`Are the two device scores loosely equal? ${firstScoreLoose == secondScoreLoose}`);

// Additional Questions (Loose Equality ==)

// Q6
// Output: true
// 0 == false -> true

// Q7
// Output: true
// "" == false -> true

// Q8
// Output: true
// "0" == 0 -> true

// Q9
// Output: true
// [] == 0 -> true

// Q10
// Output: true
// [] == false -> true


// 2. Loose Inequality !=

// Q1
let firstDiscountLoose = "SAVE10";
let secondDiscountLoose = "SAVE20";
console.log(`Are the two discount codes different? ${firstDiscountLoose != secondDiscountLoose}`);

// Q2
let userRoleLoose = "admin";
let defaultRoleLoose = "guest";
console.log(`Is the user role different from the default role? ${userRoleLoose != defaultRoleLoose}`);

// Q3
let correctAnswerLoose = 42;
let userAnswerDifferentLoose = "40";
console.log(`Is the correct answer different from the user answer? ${correctAnswerLoose != userAnswerDifferentLoose}`);

// Q4
let emailLoose = "";
let emptyFlagLoose = false;
console.log(`Is the email input not equal to the empty flag? ${emailLoose != emptyFlagLoose}`);

// Q5
let userIDLoose = null;
let validIDLoose = 101;
console.log(`Is the user ID different from the valid ID? ${userIDLoose != validIDLoose}`);

// Additional Questions (Loose Inequality !=)

// Q6
// Output: false
// 0 != false -> false

// Q7
// Output: false
// "" != false -> false

// Q8
// Output: false
// "0" != 0 -> false

// Q9
// Output: false
// null != undefined -> false

// Q10
// Output: false
// [] != 0 -> false


// 3. Strict Equality ===

// Q1
let storedPasswordStrict = 1234;
let enteredPasswordStrict = "1234";
console.log(`Are the stored and entered passwords strictly equal? ${storedPasswordStrict === enteredPasswordStrict}`);

// Q2
let accountNumber1Strict = 1234567890;
let accountNumber2Strict = 1234567890;
console.log(`Are the two account numbers strictly equal? ${accountNumber1Strict === accountNumber2Strict}`);

// Q3
let featureFlagStrict = true;
let requiredStateStrict = 1;
console.log(`Are the feature flag and required state strictly equal? ${featureFlagStrict === requiredStateStrict}`);

// Q4
let databaseValueStrict = null;
let cacheValueStrict = undefined;
console.log(`Are the database and cache values strictly equal? ${databaseValueStrict === cacheValueStrict}`);

// Q5
let firstScoreStrict = 85;
let secondScoreStrict = 85;
console.log(`Are the two scores strictly equal? ${firstScoreStrict === secondScoreStrict}`);

// Additional Questions (Strict Equality ===)

// Q6
// Output: false
// 0 === false -> false

// Q7
// Output: false
// "" === false -> false

// Q8
// Output: false
// "0" === 0 -> false

// Q9
// Output: false
// null === undefined -> false

// Q10
// Output: false
// NaN === NaN -> false


// 4. Strict Inequality !==

// Q1
let stringIdStrictInequality = "101";
let numberIdStrictInequality = 101;
console.log(`Are the string ID and number ID strictly not equal? ${stringIdStrictInequality !== numberIdStrictInequality}`);

// Q2
let booleanStatusStrictInequality = true;
let numericStatusStrictInequality = 1;
console.log(`Are the boolean status and numeric status strictly not equal? ${booleanStatusStrictInequality !== numericStatusStrictInequality}`);

// Q3
let passwordStrictInequality = "abc123";
let confirmPasswordStrictInequality = "abc124";
console.log(`Are the password and confirm password strictly not equal? ${passwordStrictInequality !== confirmPasswordStrictInequality}`);

// Q4
let serverDataStrictInequality = null;
let localDataStrictInequality = undefined;
console.log(`Are the server data and local data strictly not equal? ${serverDataStrictInequality !== localDataStrictInequality}`);

// Q5
let playerId1StrictInequality = 10;
let playerId2StrictInequality = 20;
console.log(`Are the two player IDs strictly not equal? ${playerId1StrictInequality !== playerId2StrictInequality}`);

// Additional Questions (Strict Inequality !==)

// Q6
// Output: true
// 0 !== false -> true

// Q7
// Output: true
// "" !== false -> true

// Q8
// Output: true
// "0" !== 0 -> true

// Q9
// Output: true
// null !== undefined -> true

// Q10
// Output: true
// NaN !== NaN -> true


// 5. Greater Than >

// Q1
let personAgeGreater = 20;
let votingAgeGreater = 18;
console.log(`Can the person vote? ${personAgeGreater > votingAgeGreater}`);

// Q2
let cartTotalGreater = 650;
let freeShippingLimitGreater = 500;
console.log(`Is shipping free? ${cartTotalGreater > freeShippingLimitGreater}`);

// Q3
let playerScoreGreater = 1200;
let requiredScoreGreater = 1000;
console.log(`Is the level unlocked? ${playerScoreGreater > requiredScoreGreater}`);

// Q4
let monthlyIncomeGreater = 40000;
let minimumIncomeGreater = 30000;
console.log(`Is the loan approved? ${monthlyIncomeGreater > minimumIncomeGreater}`);

// Q5
let stepsTodayGreater = 11000;
let stepTargetGreater = 10000;
console.log(`Is the step target exceeded? ${stepsTodayGreater > stepTargetGreater}`);

// Additional Questions (Greater Than >)

// Q6
// Output: false
// 5 > 5 -> false

// Q7
// Output: false (string comparison: "10" comes before "2")
// "10" > "2" -> false

// Q8
// Output: false
// "5" > 10 -> false

// Q9
// Output: false
// null > 0 -> false

// Q10
// Output: false
// undefined > 0 -> false


// 6. Less Than <

// Q1
let marksLess = 30;
let failThresholdLess = 35;
console.log(`Has the student failed? ${marksLess < failThresholdLess}`);

// Q2
let expensesLess = 8000;
let budgetLess = 10000;
console.log(`Are the expenses under budget? ${expensesLess < budgetLess}`);

// Q3
let itemsLeftLess = 7;
let lowStockLimitLess = 10;
console.log(`Is the stock low? ${itemsLeftLess < lowStockLimitLess}`);

// Q4
let vehicleSpeedLess = 40;
let minimumSpeedLess = 50;
console.log(`Is the vehicle too slow? ${vehicleSpeedLess < minimumSpeedLess}`);

// Q5
let remainingTimeLess = 4;
let warningLimitLess = 5;
console.log(`Is a warning needed? ${remainingTimeLess < warningLimitLess}`);

// Additional Questions (Less Than <)

// Q6
// Output: false
// 5 < 5 -> false

// Q7
// Output: true (string comparison: "10" comes before "2")
// "10" < "2" -> true

// Q8
// Output: true
// null < 1 -> true

// Q9
// Output: false
// null < 0 -> false

// Q10
// Output: false
// undefined < 0 -> false


// 7. Greater Than or Equal >=

// Q1
let personAgeGreaterEqual = 18;
let votingAgeGreaterEqual = 18;
console.log(`Is the person eligible to vote? ${personAgeGreaterEqual >= votingAgeGreaterEqual}`);

// Q2
let percentageGreaterEqual = 75;
let minimumRequiredGreaterEqual = 75;
console.log(`Is the scholarship granted? ${percentageGreaterEqual >= minimumRequiredGreaterEqual}`);

// Q3
let userAgeGreaterEqual = 14;
let minimumAgeGreaterEqual = 13;
console.log(`Is the subscription allowed? ${userAgeGreaterEqual >= minimumAgeGreaterEqual}`);

// Q4
let currentScoreGreaterEqual = 500;
let minimumScoreGreaterEqual = 500;
console.log(`Can the player proceed? ${currentScoreGreaterEqual >= minimumScoreGreaterEqual}`);

// Q5
let experienceGreaterEqual = 3;
let requiredExperienceGreaterEqual = 2;
console.log(`Is the candidate eligible? ${experienceGreaterEqual >= requiredExperienceGreaterEqual}`);

// Additional Questions (Greater Than or Equal >=)

// Q6
// Output: true
// 5 >= 5 -> true

// Q7
// Output: true
// null >= 0 -> true

// Q8
// Output: false
// undefined >= 0 -> false

// Q9
// Output: true
// "5" >= 5 -> true

// Q10
// Output: true
// "10" >= 5 -> true


// 8. Less Than or Equal <=

// Q1
let liftPeopleLessEqual = 7;
let liftCapacityLessEqual = 8;
console.log(`Is it safe to add one more person to the lift? ${liftPeopleLessEqual <= liftCapacityLessEqual}`);

// Q2
let fileSizeLessEqual = 5;
let maxFileSizeLessEqual = 5;
console.log(`Is the upload allowed? ${fileSizeLessEqual <= maxFileSizeLessEqual}`);

// Q3
let participantAgeLessEqual = 12;
let maxJuniorAgeLessEqual = 12;
console.log(`Does the participant qualify as junior? ${participantAgeLessEqual <= maxJuniorAgeLessEqual}`);

// Q4
let dataUsedLessEqual = 9.5;
let dataLimitLessEqual = 10;
console.log(`Is the user within the data limit? ${dataUsedLessEqual <= dataLimitLessEqual}`);

// Q5
let classStrengthLessEqual = 40;
let maxClassCapacityLessEqual = 40;
console.log(`Is the class at valid capacity? ${classStrengthLessEqual <= maxClassCapacityLessEqual}`);

// Additional Questions (Less Than or Equal <=)

// Q6
// Output: true
// 5 <= 5 -> true

// Q7
// Output: true
// null <= 0 -> true

// Q8
// Output: false
// undefined <= 0 -> false

// Q9
// Output: true
// "5" <= 5 -> true

// Q10
// Output: true
// "3" <= 5 -> true



// Part D: Logical Operators


// 1. Logical AND &&

// Q1
let storedUsernameAnd = "admin";
let storedPasswordAnd = 1234;
console.log(`Are both the username and password valid? ${storedUsernameAnd === "admin" && storedPasswordAnd === 1234}`);

// Q2
let isLoggedInAnd = true;
let hasPermissionAnd = true;
console.log(`Can the user access the page? ${isLoggedInAnd && hasPermissionAnd}`);

// Q3
let inStockAnd = true;
let priceAnd = 800;
console.log(`Can the product be bought? ${inStockAnd && priceAnd < 1000}`);

// Q4
let marksAnd = 75;
let attendanceAnd = 80;
console.log(`Does the student pass? ${marksAnd > 65 && attendanceAnd > 70}`);

// Q5
let isWeekendAnd = true;
let isHolidayAnd = false;
console.log(`Does the party happen? ${isWeekendAnd && isHolidayAnd}`);

// Additional Questions (Logical AND &&)

// Q6
// Output: 0
// a && b = 0 && 10 = 0 (short-circuits and returns the falsy value 0)

// Q7
// Output: 10
// (x > 3 && y) || 0 = (5 > 3 && 10) || 0 = 10

// Q8
// Output: ""
// p && q && r = "Hello" && "" && "World" = "" (short-circuits at the falsy empty string)

// Q9
// Output: 0, then 0
// First console.log(condition) => 0
// Second console.log(val) => 0

// Q10
// Output: false
// (x && y) && (x > y) = (10 && 20) && (10 > 20) = false


// 2. Logical OR ||

// Q1
let passwordCorrectOr = true;
let otpValidOr = false;
console.log(`Is login allowed? ${passwordCorrectOr || otpValidOr}`);

// Q2
let isMemberOr = false;
let hasCouponOr = true;
console.log(`Does the discount apply? ${isMemberOr || hasCouponOr}`);

// Q3
let ageOr = 16;
let heightOr = 155;
console.log(`Is entry allowed? ${ageOr > 18 || heightOr > 150}`);

// Q4
let emailGivenOr = true;
let phoneGivenOr = false;
console.log(`Is the form valid? ${emailGivenOr || phoneGivenOr}`);

// Q5
let scoreOr = 900;
let timeBonusOr = true;
console.log(`Does the game level open? ${scoreOr > 1000 || timeBonusOr}`);

// Additional Questions (Logical OR ||)

// Q6
// Output: 42
// a || b || c || d || e = 0 || false || "" || null || 42 = 42 (first truthy value)

// Q7
// Output: "Hello" "Hi"
// x = "Hello" || 0 = "Hello" (first truthy)
// y = 0 || "Hi" = "Hi" (0 is falsy, so returns "Hi")

// Q8
// Output: true
// (a < 5) || (b > 15) = (10 < 5) || (20 > 15) = true

// Q9
// Output: 5, then 5
// First console.log(condition) => 5
// Second console.log(val) => 5

// Q10
// Output: "OK"
// "" || 0 || false || null || undefined || "OK" = "OK" (first truthy value)


// 3. Logical NOT !

// Q1
let isBannedNot = false;
console.log(`Can the user login? ${!isBannedNot}`);

// Q2
let isCompletedNot = false;
console.log(`Is the task still pending? ${!isCompletedNot}`);

// Q3
let isOnNot = true;
console.log(`Is the light off? ${!isOnNot}`);

// Q4
let isActiveNot = false;
console.log(`Is the user unable to access premium content? ${!isActiveNot}`);

// Q5
let isReadOnlyNot = false;
console.log(`Can the file be edited? ${!isReadOnlyNot}`);

// Additional Questions (Logical NOT !)

// Q6
// Output: true false
// !a, !b = !0, !1 = true false

// Q7
// Output: false true
// !x, !y = !"Hello", !"" = false true

// Q8
// Output: false
// !val = !5 = false

// Q9
// Output: false
// !(a && b) = !(10 && 20) = !(20) = false

// Q10
// Output: false
// !(x || y) = !(0 || 1) = !(1) = false


// 4. Mixed Logical Operators (&&, ||, !)

// Q1
let isMemberMixed = true;
let isBannedMixed = false;
console.log(`Can the user enter? ${isMemberMixed && !isBannedMixed}`);

// Q2
let isStudentMixed = true;
let isSeniorMixed = false;
let isBannedForDiscountMixed = true;
console.log(`Is the discount given? ${(isStudentMixed || isSeniorMixed) && !isBannedForDiscountMixed}`);

// Q3
let nameGivenMixed = true;
let emailGivenMixed = false;
let phoneGivenMixed = true;
console.log(`Is the form valid? ${nameGivenMixed && (emailGivenMixed || phoneGivenMixed)}`);

// Q4
let isAdminMixed = true;
let hasTokenMixed = false;
let isSuspendedMixed = false;
console.log(`Is access allowed? ${(isAdminMixed || hasTokenMixed) && !isSuspendedMixed}`);

// Q5
let scoreMixed = 1200;
let timeBonusMixed = false;
let extraLifeMixed = true;
console.log(`Does the game level open? ${scoreMixed > 1000 && (timeBonusMixed || extraLifeMixed)}`);

// Additional Questions (Mixed Logical Operators)

// Q6
// Output: 20
// a || b && c = 0 || (10 && 20) = 20

// Q7
// Output: true
// (p && q) || r = (true && false) || true = true

// Q8
// Output: true
// !(x && y) || (x > 5 && y < 30) && true = !(10 && 20) || (10 > 5 && 20 < 30) && true = true

// Q9
// Output: 10
// a && b || c = (5 && 0) || 10 = 10

// Q10
// Output: true
// !(val1 || val2) && val3 || true = !(false || true) && false || true = true



// Part E: Increment / Decrement Operators (++ / --)

// Part A:

// Q1

let counter = 5;
let updatedCounter = ++ counter;

console.log(`The updated counter is ${updatedCounter}.`);

// Q2

let lives = 3;
let remainingLives = -- lives;

console.log(`The remaining lives are ${remainingLives}.`);

// Q3

let score = 10;
score ++;

console.log(`The player's updated score is ${score}.`);

// Q4
let items = 8;
items --;

console.log(`The updated items are ${items}`);

// Q5

let count = 0;
count += 2;

console.log(`The final count is ${count}`);


// Part B:

// Q6

let x = 5;
let y = x++;

console.log(x,y); // Because post increment doesn't update the variable value too.


// Q7

let a = 5;
let b = ++a;

console.log(a,b); // Because post increment updates the variable value too.

// Q8

lives = 3;
let previousLives = lives-- ;

console.log(previousLives,lives);

// Q9

let attempts = 9;
let currentAttempts = ++attempts;

console.log(currentAttempts, attempts);

// Q10

let points = 100;
++ points;
-- points;

console.log(points);


// Part C:

// Q11

// Output - 12 10 12

// Q12

// Output - 5 7

// Q13

// Output - 7 13

// Q14

// Output - 5 13

// Q15

// Output - 2



// Part F: typeof Operator


// Part A:

// Q1

let name = "Rahul";
console.log(typeof name);

// Q2

let age = 25;
console.log(typeof age);

// Q3

let isStudent = true;
console.log(typeof isStudent);

// Q4

city;
console.log(typeof city);

// Q5

let emptyValue = null;
console.log(typeof emptyValue)


// Part B:

// Q6

// Output - number
// Output - string
// Output - boolean
// Output - undefined

// Q7

// Output - object
// Output - object
// Output - object

// Q8

// Output - number
// Output - number
// Output - function

// Q9

let price = 99.99;
let message = "Welcome";
let isActive = false;

console.log(`The data-type of price is: ${typeof price}`)
console.log(`The data-type of message is: ${typeof message}`)
console.log(`The data-type of active status is: ${typeof isActive}`)

// Q10

// Output - object
// Output - true


// Part C:

// Q11

// Output - string
// Output - string
// Output - string

// Q12

// Output - false
// Output - false

// Q13

// Output - true
// Output - true
// Output - true

// Q14

// Output - undefined
// Output - object
// 
// Q15

// Output - true
// Output - true
// Output - number


// Part G: Type Coercion

// Part A:

// Q1

let string = "25";
number = Number(string);

console.log(number);

// Q2

number = 100;
string = String(number);

console.log(string);

// Q3

let value = 0;
let bool = Boolean(value);

console.log(bool);

// Q4

bool = Boolean("Hello");
console.log(bool);

// Q5
number = + "50" * 2
console.log(typeof number)


// Part B

// Q6

// Output - 5
// Output - 105
// Output - 20
// Output - 5

// Q7

// Output - 3
// Output - 52
// Output - 10
// Output - 2.5

// Q8
// Output - 123
// Output - NaN
// Output - 1
// Output - 0
// Output - 0
// Output - NaN

// Q9
// Output - false
// Output - false
// Output - true
// Output - true
// Output - true
// Output - false

// Q10
// Output - 100
// Output - true
// Output - null
// Output - undefined
// Output - 100