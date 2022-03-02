//Materi tentang squens, selection, repetition

// Deklarasi variable
var a = "Teh", b = "Jus", c;

// Initial state
console.log(a, b, c)

// algoritma
c = a
a = b
b = c

c = "kosong"

// Output
console.log(a, b, c)

// //////////////////////////////////////////////////////////////////////////////

// menukar nilai hanya dengan 2 variable
var d = 5, e = 10;
console.log(d, e);

[d, e] = [e, d];
console.log(d, e);

// //////////////////////////////////////////////////////////////////////////////

// Jika saya jomblo maka saya tidak akan malam mingguan
// Jika saya tidak malam mingguan maka saya nonton netflix
// Jika saya tidak jomblo maka saya pergi ke taman lalulintas
// Jomblonya => 1 & 0

var jomblo = 1, kondisi;

if (jomblo == 1) {
    console.log("saya Jomblo");
    console.log("saya tidak akan malam mingguan");
    kondisi = "malming"
    
    if (kondisi == "malming") {
        console.log("maka saya nonton netflix");
    }
} else if (jomblo == 0) {
    console.log("saya tidak jomblo");
    console.log("maka pergi ke taman lalulintas");
}else {
    console.log("saya tidak berstatus");}

    // algoritma lain
    
var kondisia;
if (jomblo == 1) {
    console.log("saya Jomblo jadi");
    kondisia = "saya tidak malming"
    if (kondisia == "saya tidak malming") {
        console.log(kondisia);
        kondisia="saya nonton netflix";
        console.log("dan", kondisia);
    }
} else if (jomblo == 0) {
    console.log("saya tidak jomblo jadi");
    kondisia = "saya pergi ke taman lalulintas";
    console.log(kondisia, "ahhaha");
}
else {
    console.log("saya tidak berstatus");
}


// //////////////////////////////////////////////////////////////////////////////

// perulangan

for (var i = 1; i <= 10; i++) {
    console.log("saya tidak akan mencontek kembali",i);
}

for (var i = 10; i >= 1; i--) {
    console.log("saya tidak akan mencontek kembali",i);
}

// perularan sampai memenuhi syarat menggunakan while dan do while
let nilai = 70
while (nilai <= 90) {
    console.log(nilai);
    console.log("belajar");
    nilai = nilai + 5;
}

do {
    console.log("belajar", nilai);
    nilai = nilai + 5;
}while  (nilai <= 90)

// //////////////////////////////////////////////////////////////////////////////
// deklarasi array
let array_data = ["A", "B", "C", "D", "E"];
// pemanggilan array
console.log(array_data[3]);

// //////////////////////////////////////////////////////////////////////////////
// deklarasi object
let mobil = {
    ban : "Toyota",
    merk : "Avanza",
    tahun : "2018",
    harga : "Rp. 1.000.000"
}
// pemanggilan object
console.log(mobil.ban);
console.log("merk");

