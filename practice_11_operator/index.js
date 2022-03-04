// + penjumlahan
// - pengurangan
// * perkalian
// / pembagian
// % modulus

// binary operator 2 operan
console.log(2 / 3);

// unary operator 1 operan
console.log(typeof "hello");

// assignment operator 3 operan
console.log(2 < 3 ? true : false);

// assignment operator
var x = 10;

// addition assignment 
x += 10; // a = a + 10
x -= 10; // a = a - 10
// logical assignment
let c = 2 < 3;
console.log(x);

// comparison operator
let varA = 10;
let varB = 30;
let varC = varA > varB;
console.log(varC);

// ////////////////////////////////////////////////////////////////////////////////////////////////
// strict maksud nya tidak harus sama tipe data nya
// == equal tapi tidak strict
// != not equal tapi tidak strict
// === strict equal
// !== strict not equal
// < > 
// <= >=

console.log(10 == "10"); // true
console.log(10 === "10"); // false
console.log(10 != "10"); // false
console.log(10 !== "10"); // true

// ////////////////////////////////////////////////////////////////////////////////////////////////
// modulus % (sisa dari pembagian bilangan bulat)
console.log(10 % 3); // 1

// increment dan decrement
let inc = "4";
console.log(+inc); // 4
console.log(-inc); // -4

// pangkat **
console.log(2 ** 3); // 8

// ////////////////////////////////////////////////////////////////////////////////////////////////
// Challenge
// 1. Coba membuat operasi bilangan f(x) = (2x +5) + 100 /25x
x = 10;
console.log((2*x +5) + 100 /25*x);

// 2. Coba membuat operasi bilangan komparasi ((kusing === tikus) !== false) // false
console.log(("kucing" === "tikus") !== false);

// truthy dan falsy
// && = AND , || = OR , ! = NOT
console.log(true && !false);
console.log(true || false);
console.log(!true);

// console.log(true && false);
console.log(1 && 0);

// operasi string unik
let varE = 3 + "3";
console.log(varE);// 33

// operasi string aneh
let varF = "3" * 3;
console.log(varF); // 9

// operasi string lain nya
var varM = "john";
var varN = "wikx";
varM += "naaa";
varM += "!";
console.log(varM);// johnnaaa!

// relational operator in
let arrayA = [10,22,33,34,75];
console.log(10 in arrayA);// true
console.log(11 in arrayA);// false

// relational operator in
let objectZ = {
    nama: "john wikx"
}
console.log("nama" in objectZ);// true

// instanceof
let date = new Date();
console.log(date instanceof Date);// true

// binary operator delete
let objectV = {
    nama : "John",
    alamat : "Jakarta",
    umur : 20}
    console.log(objectV);// {nama: "John", alamat: "Jakarta", umur: 20}
delete objectV.alamat;
console.log(objectV);// {nama: "John", umur: 20}

// /////////////////////////////////////////////////////////////////////////////////////////////////
// challenge

// membuat perintah untuk melakuikan pengecekan nilau ganjil atau genap cek apakah dia negatif atau positif, nilai yang dibandingkanya tidak lebih dari 100 dan kurang dari -1000 dilarang input 0
// expected output: ganjil negatif, genap positif, ganjil positif, genap negatif


let varAa = -101;
let varBa = varA;

if (varAa > -1000 && varAa < 1000) {
    if (varAa === 0) {
        console.log('tidak boleh 0');
    }else if (varAa % 2 === 0) {
        if (varAa > 0) {
            console.log("nilai : " + varBa + " genap positif");
        }else if (varA < 0) {
            console.log("nilai : " + varB + " genap negatif");
        }
    }else{
        if (varA > 0) {
            console.log('nilai : ' + varBa + " ganjil positif");
        }else if (varAa < 0) {
            console.log('nilai : ' + varBa + " ganjil negatif");
        }
    }
}else{
    console.log('inputan tidak valid');}