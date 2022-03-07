// Soal 1
// Latihan membuat minimal 5 fungsi untuk operasi aritmatika & Logika
// Catatan : Gunakan Strict Perbandingan

// perkalian 3 bilangan
function perkalian(a, b, c) {
    return a * b * c;
}
console.log(perkalian(2, 3, 4));

// modulus
function modulus(x, y) {
    return x % y;
}
console.log(modulus(3, 3));

// perpangkatan 
function pangkat(a) {
    return a ** 2;
}
console.log(pangkat(4));

//  perbandingan
function perbandingan(x, y) {
    return x === y;
}
console.log(perbandingan(1, 2));

// fungsi ngecek genap
function ganjilGenap(x) {
    if (x % 2 === 0) {
        return true;
    }else {
        return false;
    }
}
console.log(ganjilGenap(6));


// Soal 2
// Latihan membuat fungsi untuk menampilkan dalam suatu array berdasarkan index
// let ArrayData = [10, 15, 25, 33, 20, 21, 27, 18]

let arrayData = [10, 15, 25, 33, 20, 21, 27, 18]
let arrayNum = 4

function printArray(arrayData, arrayNum) {
    return arrayData[arrayNum]
}
// printArray(arrayData, arrayNum);
console.log(printArray(arrayData, arrayNum));

// Soal 3
// Latihan membuat fungsi untuk menampilkan value dalam suatu object berdasarkan key Object
/* 
  let ObjectData = {
    nama : "Reka Alamsyah",
    kelas : "FSW-2"
    alamat : "Bandung",
    asal_sekolah : {
      sd : "Rancaekek",
      smp : "Bandung",
      sma : "Antapani"
    }
  } 
*/

let objectData = {
    nama : "Reka Alamsyah",
    kelas : "FSW-2",
    alamat : "Bandung",
    asal_sekolah : {
      sd : "Rancaekek",
      smp : "Bandung",
      sma : "Antapani"
    }
  } 
  function printObjec(objectData,key) {
    return objectData[key]
  }

  console.log(printObjec(objectData, "nama"));