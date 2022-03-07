// mencoba membuat fungsi untuk menghitung bilangan genap dan ganjil
// genap : 0  ganjil : 10

// let jumlah_genap = 0
// let jumlah_ganjil = 0

// function printArray(arrayNumber) {
//     for (let index = 0; index < arrayNumber.length; index++) {
//         console.log(arrayNumber[index]);
//         let a = arrayNumber[index];

//         if (a % 2 === 0) {
//             console.log("genap");
//             jumlah_genap += 1;
//         }else{
//             console.log("ganjil");
//             jumlah_ganjil++;w
//         }
//     }
// }
// let array_number = [10,5,2,3,20,10]
// printArray(array_number);

// console.log("jumlah genap " +jumlah_genap);
// console.log("jumlah ganjil " +jumlah_ganjil);

// /////////////////////////////////////////////////////////////////////////////////////////////////
let arayNumberData = [12,10,3,22,10,5, 20]
function printAray(arayNumberData) {
    let habis = 0;
    let tidak_habis = 0;
    for (let index = 0; index < arayNumberData.length; index++) {
          if (arayNumberData[index] % 5 === 0) {
            habis++;
        }else{
            tidak_habis++;
        }
    }
    return {habis,tidak_habis};
}
console.log(printAray(arayNumberData));

// /////////////////////////////////////////////////////////////////////////////////////////////////
function printArray(array_number) {
    for (let index = 0; index < array_number.length; index++) {
        console.log(array_number[index]);
    }
}
let array_number = [10,5,2,3,20,10]
printArray(array_number);