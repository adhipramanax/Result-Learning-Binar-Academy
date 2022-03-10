function printAray(arayNumberData) {
    let habis = 0;
    let tidak_habis = 0;
    for (let index = 0; index < arayNumberData.length; index++) {
          if (arayNumberData[index] % 5 === 0) {
            habis++;
        }else{
            tidak_habis++;
        }
    }
    return {habis,tidak_habis};
}
