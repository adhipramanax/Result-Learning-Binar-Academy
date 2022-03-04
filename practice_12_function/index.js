function penjumlahan(a, b) {
    return a + b;
    // return "hello";
    
}

console.log(penjumlahan(1, 2));
console.log(penjumlahan(10, 22));

// ////////////////////////////////////////////////////////////////////////////////
function pengurangan(c, d) {
    return c - d;
}
console.log(pengurangan( 13, 21));

function perkalian(e, f) {
    return e * f;
}
console.log(perkalian(13, 22));

function pangkat(a) {
    return a ** 2;
}
console.log(pangkat(4));

// function lingkaran(k) {
//     let k
//     let z = 3.14;
//     let y = y ** 2;
//     let k = z * y;
//     return k;
// }
// console.log(lingkaran(7));

function luasPersegi(u) {
    return u * u;   
}
// console.log(luasPersegi(5));

// function lingkaranA(r) {
//     const phi = 3.14;
//     let l = phi * pangkat(r,2);
//     return l;
// }
// let r = 21;
// let luasLingkaran = lingkaranA(r);
// console.log("ligkaranA "+ luasLingkaran);

// ////////////////////////////////////////////////////////////////////////////////

function printArray(array_data) {
    for (let index = 0; index < array_data.length; index++) {
        console.log(array_data[index]);
    }
}
let arrayData = ["satu", "dua", "tiga", "empat", "lima"];
printArray(arrayData);

// ////////////////////////////////////////////////////////////////////////////////
function printArray(array_dota) {
    let stackDota = array_dota[0];
    for (let index = 0; index < array_dota.length; index++) {
        stackDota = stackDota + " " + array_dota[index];
    }
    console.log(stackDota);
}
let arrayDota = ["satu", "dua", "tiga", "empat", "lima"];
console.log(printArray(arrayDota));