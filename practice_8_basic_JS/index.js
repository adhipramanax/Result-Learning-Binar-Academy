// external JS
console.log('External JS');

// //////////////////////////////////////////////////////////////////////////////

// deklarasi variabel
var value

value = 'panji adhipramana'
console.log(typeof value)

value = 10
console.log(typeof value)

var arrayA = [1,2,"panji",4,5]

console.log(arrayA)

// aturan variabel
// 1. tidak boleh diawali angka
// 2. tidak boleh mengandung spasi
// 3. tidak boleh mengandung karakter khusus
// 4. tidak boleh menggunakan simbol
// 5. tidak boleh menggunakan kata kunci
// 6. tidak boleh menggunakan kata bahasa
// 7. case sensitive
// 8. selain simbol _ itu bisa membatu membuat variabel

/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus debitis quaerat cum hic impedit? 
Error totam omnis, reiciendis consequuntur dolores, inventore corporis earum facilis modi quam beatae mollitia repellat perferendis?
*/

// ////////////////////////////////////////////////////////////////////////////////
// Global Variabel
let varA = 'variabel global'

function operasi_bilangan (){
    // Local Variabel
    let varB = 'variabel local'
    console.log(varB)
}

console.log(varA)

// ////////////////////////////////////////////////////////////////////////////////

// const tidak dapat di assign
// let tidak daapat redeklarasi variable
// var dapat redeklarasi variable

var variableA
variableA = 'variable A'
console.log(variableA)

var variableA = 'redeklar variable A'
console.log(variableA)

// let variableA
// variableA = 'variable A'
// console.log(variableA)

// let variableA = 'redeklar variable A'
// console.log(variableA)

// ////////////////////////////////////////////////////////////////////////////////