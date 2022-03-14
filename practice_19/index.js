// let score = 10;

// if (score >= 90){
//     console.log ("Selamat! Anda mendapatkan nilai A.")
//   }
// else if (score >= 80){
//     console.log ("Anda mendapatkan nilai B.")
//   }
// else if (score >= 70){
//     console.log ("Anda mendapatkan nilai C.")
//   }
// else if (score >= 60){
//     console.log ("Anda mendapatkan nilai D.")
//   }
// else {
//     console.log ("Anda mendapatkan nilai E.")
//     }

function calculate(value) {
    return value < 2 ? value : (calculate(value - 1) + calculate(value - 2));
}

console.log(calculate(3));