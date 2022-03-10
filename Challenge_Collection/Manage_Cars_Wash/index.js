// ////////////////////////////////////////////////////////////////////////////////
// https://codesandbox.io/s/kelompok-01-le7l7b
// sampe jam 09.30 WIB
/*
Antrian Pencucian Mobil
- menampilkan list yang sedang sedang antri (lidya)
- menampilkan antrian selanjutnya (arvendo)
- memasukan mobil kedalam antrian (amalia)
- menampilkan list mobil yang sudah selesai antri (adrian)
- menampilkan filter mobil berdasarkan tipe mobil (panji)

Struktur data (objek)
mobil
- tipe
- platnomor
- nama_pemilik
*/

// data array mobil
let mobil = [
    {
      tipe: "",
      platnomor: "",
      nama_pemilik: ""
    }
  ];
  
  // memasukkan mobil ke dalam antrian [Amalia]
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
  function antrian_sekarang() {
    return mobil[head];
  }
  
  // Menampilkan List yang sedang Antri [Lidya]
  function list(mobil) {
    for (let i = 0; i < mobil.length; i++) {
      return mobil;
    }
  }
  
  //menampilkan antrian selanjutnya [arvendo]
  function menampilkan_list_antrian_selanjutnya(mobil) {
    return mobil[0];
  }
  
  // mobil selesai antri [Adrian]
  let mobil_selesai = [];
  function dequeue() {
    mobil_selesai.push(mobil.shift());
    return mobil_selesai;
  }
  
  // filter tipe mobil [Panji]
  function filterType(mobil, type) {
    let result = [];
    for (let i = 0; i < mobil.length; i++) {
      if (mobil[i].type === type) {
        result.push(mobil[i]);
      }
    }
    if (result.length == 0) {
      return console.log("type tidak ditemukan");
    }
    return result;
  }

// ////////////////////////////////////////////////////////////////////////////////
// input mobil 
  console.log("Memasukkan Mobil di dalam antrian");
  enqueue(input_new_car("BMW", "BG 1234 LN", "Amalia Ananda Khalisa"));
  enqueue(input_new_car("Fortuner", "BG 5678 LN", "Lidya Dwi"));
enqueue(input_new_car("Avanza", "BG 9012 LN", "Adrian"));
  enqueue(input_new_car("BMW", "BG 1234 LN", "Ananda Khalisa"));
  enqueue(input_new_car("Avanza", "BG 1515 LN", "Arvendo"));
  enqueue(input_new_car("Pajero", "BN 1234 KL", "Arvendo"));
  enqueue(input_new_car("Fortuner", "BG 5678 LN", "Adrian"));
  enqueue(input_new_car("Avanza", "BG 1515 LN", "Panji"));
  console.log(mobil);
// list mobil
  console.log("List Antrian:", mobil);
// menghapus mobil dari
  dequeue();
  dequeue();
  console.log("list selesai", mobil_selesai);
// list antrian mobil sekarang
console.log("List Antrian sekarang:", mobil);
// mobil selanjut nya
  console.log("Antrian Selanjutnya:",
  menampilkan_list_antrian_selanjutnya(mobil));
// filter 
  console.log("Filter Tipe", filterType(mobil, "Avanza"));
  
  // function antrian_selanjutnya(mobil_selanjutnya, tipe, platnomor, nama_pemilik) {
//   mobil_selanjutnya.push({
//     tipe: tipe,
//     platnomor: platnomor,
//     nama_pemilik: nama_pemilik
//   });

//   return mobil_selanjutnya;
// }

// let mobilSelesai = [];
// function listMobilYangSelesai(mobilSelesai) {
//   mobilSelesai.push(mobil[head]);
//   // mobil.shift(); 
//   return mobilSelesai;
// }