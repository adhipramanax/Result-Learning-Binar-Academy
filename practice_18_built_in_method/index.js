// buuilt in method
let arr = 10;
console.log(arr);
console.log(arr.toString());

// Deklarasi Variabel array matrix 3x3
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix[0][2]);

// 1 0 0
// 0 1 0
// 0 0 1

// let matrixY = [];

for (let arrRow = 0; arrRow < 3; arrRow++) {
    for (let arrCol = 0; arrCol < 3; arrCol++) {
        matrix[arrRow][arrCol] = 0;
        // console.log(matrixY[arrRow][arrCol]);
    }    
    // matrixY[arrRow] = 0;
}

console.log(matrix);