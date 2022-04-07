const path = require('path');
const fs = require('fs');

function getHtml(nameFile){
    const indexHtml = path.join(`./${nameFile}`);

    // membaca file
    return fs.readFileSync(indexHtml, 'utf8');
}

module.exports ={
    getHtml
}