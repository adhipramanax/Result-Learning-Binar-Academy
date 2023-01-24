class App {
  constructor() {
    this.clearButton = document.getElementById("clear-btn");
    this.loadButton = document.getElementById("load-btn");
    this.carContainerElement = document.getElementById("cars-container");
  }

  async init() {
    await this.load();

    // Register click listener
    // this.clearButton.onclick = this.clear;
    // this.loadButton.onclick = this.run;
    this.run;
  }

  run = () => {
    Car.list.forEach((car) => {
      const node = document.createElement("div");
      node.classList.add("col-lg-4");
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
  };

// ====
  // filter (cars) {
  //   if(Object.keys(params).length === 0) {
  //     return true
  //   } else {
  //     return cars.capacity >= params.passenger;
  //   }
  // }

  async load() {
    const cars = await Binar.listCars(function(car) {
      return false
    });
    Car.init(cars);
  }

  async loadCars(input) {
    await this.clear()

    const cars = await Binar.listCars(function(car) {
      // if (input.jumlahPenumpang === "") {
      //   return car.available && car.availableAt.toLocaleDateString() == (new Date(input.tanggal)).toLocaleDateString();
      // } else {
      //   return car.available && car.availableAt.toLocaleDateString() == (new Date(input.tanggal)).toLocaleDateString() && car.capacity >= input.jumlahPenumpang;
      // }
      if (input.jumlahPenumpang != "" && input.tanggal != "") {
        return car.available && car.availableAt.toLocaleDateString() == (new Date(input.tanggal)).toLocaleDateString() && car.capacity >= input.jumlahPenumpang;
      } else if (input.jumlahPenumpang != "") {
        return car.available && car.capacity >= input.jumlahPenumpang;
      } else if (input.tanggal != "") {
        return car.available && car.availableAt.toLocaleDateString() == (new Date(input.tanggal)).toLocaleDateString();
      } else if (input.waktuAmbil != "") {
        let splitted = input.waktuAmbil.split(":")
        return car.available && parseInt(splitted[0]) == parseInt(car.availableAt.getHours());
      }
    });
    Car.init(cars);

    this.run();
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}
