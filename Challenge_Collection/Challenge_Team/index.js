// https://codesandbox.io/s/kelompok-01-le7l7b
/*
Antrian Pencucian Mobil
- menampilkan list yang sedang sedang antri (lidya)
- menampilkan antrian selanjutnya (arvendo)
- memasukan mobil kedalam antrian (amalia)
- menampilkan list mobil yang sudah selesai antri (adrian)
- menampilkan filter mobil berdasarkan tipe mobil (panji)

Struktur data (objek)
- mobil
- tipe
- platnomor
- nama_pemilik
*/

///////////////////////////////// PENCUCIAN MOBIL SUMBER REZEKY //////////////////////////////////////
// data
let mobil = [];
let mobilSelesai = [];

// memasukkan mobil ke dalam antrian (Amalia)
let tail = 0;
let head = 0;

function enqueue(element) {
  mobil[tail] = element;
  tail++;
  return mobil;
}
function input_new_car(a, b, c) {
  let array_input = {
    type: a,
    plate_numbers: b,
    owner: c
  };
  return array_input;
}

// Menampilkan List yang sedang Antri [Lidya]
function list(mobil) {
  return mobil;
}

//menampilkan antrian selanjutnya  [Arvendo]
function nextQueue(array) {
  return array[head + 1];
}

//list mobil yang sudah selesai antri Adrian
function dequeue() {
  mobilSelesai.push(mobil[head]);
  mobil.shift();
  return mobilSelesai;
}

// filter type mobil [panji]
function filterType(mobil, type) {
  let result = [];
  //untuk array mobil
  for (let i = 0; i < mobil.length; i++) {
    if (mobil[i].type === type) {
      result.push(mobil[i]);
    }
  }
  if (result.length === 0) {
    return console.log("type tidak ditemukan");
  }
  return result;
}

///////////////////////// BATAS SUCI ////////////////////////
// input mobil
console.log("Memasukkan Mobil di dalam antrian");
enqueue(input_new_car("BMW", "BG 1234 LN", "Amalia Ananda Khalisa"));
enqueue(input_new_car("Fortuner", "BG 5678 LN", "Lidya Dwi"));
enqueue(input_new_car("Avanza", "BG 9012 LN", "Adrian"));
enqueue(input_new_car("Xenia", "BG 2 MN", "Lisa"));
enqueue(input_new_car("Avanza", "BG 1515 LN", "Arvendo"));
enqueue(input_new_car("Pajero", "BN 1234 KL", "Jenny"));
enqueue(input_new_car("Fortuner", "B 5678 XY", "Rose"));
enqueue(input_new_car("Avanza", "BG 1515 LN", "Jiso"));
enqueue(input_new_car("Innova", "B 0 ZZ", "Panji"));
enqueue(input_new_car("Fortuner", "B 8823 KL", "Adrian"));
enqueue(input_new_car("BMW", "B 8823 KL", "reka"));
enqueue(input_new_car("Innova", "B 8823 KL", "ujang"));
enqueue(input_new_car("Avanza", "B 8823 KL", "udin"));
enqueue(input_new_car("Fortuner", "B 8823 KL", "alamsyah"));

// list mobil
console.log("List Antrian:", list(mobil));

// antrian selanjutnya
console.log("Antrian Selanjutnya:", nextQueue(mobil));

// menampilkan antrian yang sudah selesai
dequeue();
dequeue();
console.log("list selesai:", dequeue());

// Filter tipe mobil
console.log("Filter:", filterType(mobil, "BMW"));

// GG 
// Thankyou ALL
// 👍