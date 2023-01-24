import { FILTER_CAR } from "./../actions";

let cars = [];

export default function carsReducers(state = [], action) {
  switch (action.type) {
    case FILTER_CAR:
      console.log("filter_car", action.payload);
      let showCars = true;
      if (action.payload.dateTime == "" && action.payload.capacity == "") {
        showCars = false;
      }
      return {
        cars: cars.filter(
          (cars) =>
            cars.capacity >= action.payload.capacity ||
            new Date(cars.availableAt) >= action.payload.dateTime
        ),
        showCars: showCars,
      };
    case "ADD_CAR":
      console.log(action.payload);
      cars = action.payload;
      return { cars: action.payload, showCars: false };
    default:
      return state;
  }
}
