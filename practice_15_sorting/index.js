// sorting ascending
let sortAsen = [1, 7, 8, 5, 3, 2, 10, 4, 9];
for(let i = 0; i < sortAsen.length; i++){
    for(let j = 0; j < sortAsen.length; j++){
        if(sortAsen[j] > sortAsen[j+1]){
            let temp = sortAsen[j];
            sortAsen[j] = sortAsen[j+1];
            sortAsen[j+1] = temp;
        }
    }
}
console.log(sortAsen);
// sorting descending
let sortDsen = [1, 7, 8, 5, 3, 2, 10, 4, 9];
for(let i = 0; i < sortDsen.length; i++){
    for(let j = 0; j < sortDsen.length; j++){
        if(sortDsen[j] < sortDsen[j+1]){
            let temp = sortDsen[j];
            sortDsen[j] = sortDsen[j+1];
            sortDsen[j+1] = temp;
        }
    }
}
console.log(sortDsen);
