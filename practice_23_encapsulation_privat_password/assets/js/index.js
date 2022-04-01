class Human {
    constructor(nama, alamat) {
        this.nama = nama;
        this.alamat = alamat;
    }
    #introduce() {
       console.log(`Hello, my name is ${this.nama} and I live in ${this.alamat}`) ;
    }
    callHuman() {
        this.#introduce();
    }
}
let orang1 = new Human
orang1.nama = "Budi";
orang1.alamat = "Jakarta";
orang1.callHuman();

class User {
    constructor(email, pasword) {
        this.email = email;
        this.pasword = this.#enc(pasword);
    }
    #enc(pasword) {
        return pasword+"__";
    }
    #dec() {
        return this.pasword.split("__")[0];
    }
    auth(pasword) {
        return this.#dec(pasword) === pasword;
    }
}

let user1 = new User

user1.email = "panjiadhipramana@gmail.com";
user1.pasword = "aman12345#";

console.log(user1.auth("aman12345#"));
