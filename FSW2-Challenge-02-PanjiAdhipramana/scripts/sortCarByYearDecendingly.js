function sortCarByYearDescendingly (cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  let arr = [...cars];
  for (let i = 0; i < cars.length; i++) {
    for (let j = 0; j < cars.length - 1; j++) {
      if (arr[j].year < arr[j + 1].year) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  // Rubah code ini dengan array hasil sorting secara descending
  return arr;
} 