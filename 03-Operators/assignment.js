// Part A: Arithmetic Operators

// 1. Addition +

// Q1
let firstClassCollection = 15000;
let secondClassCollection = 12500;
let totalCollection = firstClassCollection + secondClassCollection;

console.log(`The total collection is ${totalCollection} rs.`)

// Q2
let morningPages = 18;
let eveningPages = 25;
let totalPages = morningPages + eveningPages;

console.log(`The total pages read in a day are ${totalPages} pages.`)

// Q3
let mondayItems = 125;
let tuesdayItems = 178;
let totalItems = mondayItems + tuesdayItems;

console.log(`The total items sold are ${totalItems}.`)

// 2. Subtraction -

// Q1
let totalSeats = 80;
let occupiedSeats = 53;
let emptySeats = totalSeats - occupiedSeats;

console.log(`The total number of empty seats are ${emptySeats}.`)

// Q2
let totalMarks = 500;
let lostMarks = 35;
let finalMarks = totalMarks - lostMarks;

console.log(`The final marks are ${finalMarks}.`)

// Q3 
let totalBoxes = 2500;
let sentBoxes = 875;
let remainingBoxes = totalBoxes - sentBoxes;

console.log(`The remaining boxes are ${remainingBoxes}.`)

// 3. Multiplication 

// Q1
let notebookCost = 45;
let numberOfNotebooks = 8;
let totalCost = notebookCost * numberOfNotebooks;

console.log(`The total cost of buying 8 notebooks is ${totalCost} rs.`)

// Q2
let bottlesPerHour = 120;
let numberOfHours = 6;
let totalProduction = bottlesPerHour * numberOfHours;

console.log(`The total production in 6 hours is ${totalProduction} bottles.`)

// Q3
let numberOfRows = 7;
let plantsPerRow = 15;
let totalPlants = numberOfRows * plantsPerRow;

console.log(`The total number of plants are ${totalPlants}.`)

// 4. Division 

// Q1
let totalPencils = 144;
let numberofStudents = 12;
let pencilsPerStudent = totalPencils / numberofStudents;

console.log(`The number of pencils each student receives is ${pencilsPerStudent}.`)

//Q2
let totalDistance = 360;
let totalHours = 6;
let distancePerHour = totalDistance / totalHours;

console.log(`The average distance travelled per hour is ${distancePerHour} km.`)

//Q3
let totalAmount = 72000;
let numberOfDepartments = 9;
let amountPerDepartment = totalAmount / numberOfDepartments;

console.log(`The amount received by each department is ${amountPerDepartment} rs.`)

// 5. Modulus % (5 questions)

//Q1
let totalStudents1 = 53
let groupSize = 5
let studentsLeft = totalStudents1 % groupSize

console.log(`The number of students left over are ${studentsLeft}.`)

//Q2
let totalCandies1 = 128
let candiesPerBox = 10
let candiesLeft = totalCandies1 % candiesPerBox

console.log(`The number of candies left unpacked are ${candiesLeft}.`)

//Q3
// Example number
let number = 12;

number = Number(number);

// Check using modulus
if (number % 2 === 0) {
    console.log(`${number} is Even.`);
} else {
    console.log(`${number} is Odd.`);
}

//Q4
let totalToys = 237;
let toysPerBox = 6;
let toysLeft = totalToys % toysPerBox;

console.log(`The total number of toys left after packing full boxes are ${toysLeft}.`)

// Q5
let busCapacity = 185;
let totalPassengers = 40;
let passengersLeft = busCapacity % totalPassengers;

console.log(`The number of people will be left after filling as many full buses as possible are ${passengersLeft}.`)

// 6. Exponentiation **

// Q1
let side = 6
let volume = side ** 3

console.log(`The volume of a cube is ${volume} cm^3`)

// Q2
let initialBacteria = 1
let hours = 4
let bacteria = initialBacteria * 2 ** hours;

console.log(`The number of bacteria after 4 hours will be ${bacteria}.`)

// Q3
let Side = 9
let totalCells = Side ** 2

console.log(`The total number of cells in a square arrangement are ${totalCells}.`)

//Q4
console.log(5 ** 4)

//Q5
let pixels = 1024;
let totalPixels = pixels ** 2

console.log(`The total number of pixels are ${totalPixels}.`)


// Part B: Assignment Operators

// 1. Simple Assignment 
let studentAge = 17;
console.log(studentAge)

let notebookPenPrice = 15;
console.log(notebookPenPrice)

let weeklyDays = 7;
console.log(weeklyDays)

let studentCity = "Pali";
console.log(studentCity)

let circlePiValue = 3.14159;
console.log(circlePiValue)


// 2. Add and Assign 
let currentStudentMarks = 200;
let extraStudentMarks = 35;
currentStudentMarks += extraStudentMarks;

console.log(currentStudentMarks)

let currentBalance = 5000
let depositedAmount = 1200
currentBalance += depositedAmount;

console.log(currentBalance)

let currentBatteryPercentage = 45;
let chargingPercentage = 30;
currentBatteryPercentage += chargingPercentage

console.log(currentBatteryPercentage)

let currentGameScore = 1250;
let extraGamePoints = 375;
currentGameScore += extraGamePoints;

console.log(currentGameScore)

let currentBookCount = 840;
let newlyAddedBooks = 160;
currentBookCount += newlyAddedBooks;

console.log(currentBookCount)


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


// 7. Exponentiation and Assign **=

// Q1
let gardenLength = 10;

gardenLength **= 2;

console.log(`The area of the garden is ${gardenLength} square metres.`);


// Q2
let cubeEdge = 4;

cubeEdge **= 3;

console.log(`The volume of the cube is ${cubeEdge} cubic centimetres.`);


// Q3
let growthFactor = 3;

growthFactor **= 2;

console.log(`The total area growth factor is ${growthFactor}.`);














