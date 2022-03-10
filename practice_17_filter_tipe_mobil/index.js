function filterType(mobil, tipe) {
    let result = [];
    for (let i = 0; i < mobil.length; i++) {
      if (mobil[i].type === tipe) {
        result.push(mobil[i]);
      }
    }
    return result;
  }
  

  let mobil = [
      {
        name: 'Avanza',
        type: 'Sedan',
        price: 10000000,
      },
      {
        name: 'sorento',
        type: 'udang',
        price: 10000000,
      },
      {
        name: 'Avanza',
        type: 'Sedan',
        price: 10000000,
      }
  ];


console.log(filterType(mobil, 'Sedan'));
