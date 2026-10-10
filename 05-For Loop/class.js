// for (let i = 1; i <= 4;){
//     console.log(i)
// } 

// for (let i = 5; i > 0; i--) {
//     console.log(i)
// }

// for (let i = 1;  i <= 10;i++){
//     console.log(`8 x ${i} = ${i * 9}`)
// }

// let total = 0;
// for (let i = 1; i <= 10; i ++){
//     total += i;
// }
// console.log(total)

// let product = 1;
// for (let i = 1; i <= 10; i ++){
//     product *= i;
// }
// console.log(product)


// for (let i = 1; i <= 5; i++){
//     console.log("*")
// }

// for (let i = 1; i <= 5; i++){
//     process.stdout.write("* ")
// }

// let arr = [1, 2, 3, 4, 5];

// for(let i = 0; i < arr.length; i++){
//     process.stdout.write(String(arr[i] ** 2)+" ")
// }

// let str = 'Coding Gita';

// for (let i = 0; i <str.length; i ++){
//     console.log(str[i]);
//     if(str[i] == "g"){
//         break;
//     }
// }

// let str = 'Coding Gita';

// for (let i = 0; i <str.length; i ++){
//     if (str[i] == " "){
//         continue;
//     }
//     console.log(str[i]);
// }


// for (let i = 1; i <= 30; i++) {
//     console.log(i)
//     if (i % 3 == 0 && i % 7 == 0) {
//         break;
//     }
// };

// for (let i = 1; i <= 15; i++) {
//     if (i % 3 == 0) {
//         continue;
//     }
//     console.log(i)
// }

// for (let i = 1; i <= 20; i++) {
//     if (i % 2 == 0) {
//         continue;
//     }
//     console.log(i)
// };

// for (let i = 1; i <= 25; i++ ) {
//     if (Number.isInteger(Math.sqrt(i)))
//     console.log(i)
// }

// for (let i = 1; i <= 25; i++ ) {
//     if (Number.isInteger(Math.sqrt(i))) {
//         continue;
//     }
//     console.log(i)
// }

// for (let i = 1; i <= 25; i ++) {
//     console.log("")
// }

// for (let i = 5; i >= 1; i--){
//     console.log(i)
// }

// for (let i = 20; i >= 2; i -= 2) {
//     console.log(i)
// }

// for (let i = 10; i >= 1; i --) {
//     console.log(`8 x ${i} = ${i * 8}`)
// }

// let arr = [10, 20, 30, 40, 50];

// for (let i = arr.length ; i > 0; i --) {
//     process.stdout.write(String(i)+" ")
// }

// let factorial = 1;
// for (let i = 5; i >= 1; i --) {
//     factorial *= i
//     console.log(factorial)
// }

// let arr = [1,2,3,4];
// let bag = ""
// for (let i = 0; i <= arr.length-1; i++) {
//     bag += arr[i] + " "
// }
// console.log(bag)

// let mat = [
//           [1,2,3,4],
//           [5,6,7,8],
//           [9,10,11,12]
//           ];

// // console.log(mat[0][0])


// let rows = mat.length;
// let columns = mat[0].length;


// for (let i = 0; i < rows; i ++) {
//     for (let j = 0; j < columns; j++) {
//         console.log(mat[i][j])
//     }
// }
// // To print in loop



// rows = mat.length;
// columns = mat[0].length;
// let bag = ""

// for (let i = 0; i < rows; i ++) {
//     for (let j = 0; j < columns; j++) {
//         bag += mat[i][j] + " "
//     }
// }
// console.log(bag)
// // To print in single line



// rows = mat.length;
// columns = mat[0].length;

// for (let i = 0; i < rows; i ++) {
//     let bag = ""
//     for (let j = 0; j < columns; j++) {
//         bag += mat[i][j] + " "
//     }
//     console.log(bag)
// } // To print in rows and columns


// let matrix = [[1,2,3],[4,5,6],[7,8,9]];

// let m = matrix.length;
// let n = matrix[0].length;

// for (let i = 0; i < m; i++) {
//     let bag = "";
//     for (let j = 0; j < n; j++) {
//         bag += matrix[i][j] + " "
//     }
//     console.log(bag)
// }

let m = 4;
let n = 4;
let mat = [];

for (let i = 0; i < m; i++) {
    let arr = []
    for (let j = 0; j < n; j++) {
        let cellValue = (i+1)*(j+1);
        arr[j] = cellValue;
    }
    mat[i]=arr
}

console.log(mat)














