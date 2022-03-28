class Human {
    //opsi 1
    constructor(nama, alamat) {
        this.nama = nama;
        this.alamat = alamat;
    }
    //opsi 2
    // constructor(nama, alamat) {
    //    nama;
    //    alamat;
    // }

    introduce() {
       console.log(`Hello, my name is ${this.nama} and I live in ${this.alamat}`) ;
    }
}

let orang1 = new Human
orang1.nama = "Budi";
orang1.alamat = "Jakarta";

orang1.introduce();