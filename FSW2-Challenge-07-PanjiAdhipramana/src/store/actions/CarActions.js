export const FILTER_CAR = "FILTER_CAR";
export const ADD_CAR = "ADD_CAR";

export const filterByInput = ({ dateTime, capacity }) => ({
  type: FILTER_CAR,
  payload: {
    dateTime: new Date(dateTime),
    capacity: parseInt(capacity),
  },
});

export const addCar = (cars) => ({
  type: ADD_CAR,
  payload: cars,
});
