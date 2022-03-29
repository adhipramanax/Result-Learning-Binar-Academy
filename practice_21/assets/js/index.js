// Objek mobil nama mobil, cc, warna mobil, harga
// kemampuan maju, mundur, berhenti, profil
// mobil ada 5 mobil

class Car {
    constructor(nama, cc, warna, harga) {
        this.nama = nama;
        this.cc = cc;
        this.warna = warna;
        this.harga = harga;
    }
    //methode
    maju() {
        console.log(`${this.nama} sedang maju`);
    }
    mundur() { 
        console.log(`${this.nama} sedang mundur`);
    }
    berhenti() {
        console.log(`${this.nama} berhenti`);
    }
    profil() {
        console.log(`Nama mobil: ${this.nama}
        CC: ${this.cc}
        Warna: ${this.warna}
        Harga: ${this.harga}`);
    }
}

let car1 = new Car
car1.nama = "avanza";
car1.cc = "250cc";
car1.warna = "Merah";
car1.harga = "Rp. 1.000.000";

let car2 = new Car
car2.nama = "inova";
car2.cc = "1250cc";
car2.warna = "putih";
car2.harga = "Rp. 3.000.000";

let car3 = new Car
car3.nama = "honda";
car3.cc = "2250cc";
car3.warna = "hijau";
car3.harga = "Rp. 5.000.000";


car1.maju();