import React, { Component, useEffect } from "react";
import Header from "../components/Content/Header";
import FIndCard from "../components/Card/FIndCard";
import CardListCars from "../components/Card/CardListCars";
import axios from "axios";
import { addCar } from "../store/actions/CarActions";
import { connect } from "react-redux";
class RentalCar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      showCars: false,
    };
  }

  componentDidMount() {
    document.title = "Rental Car";
    axios
      .get(
        "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json"
      )
      .then((response) => {
        this.props.dispatch(addCar(response.data));
        this.setState({
          isLoading: false,
        });
      });
  }

  render() {
    return (
      <div>
        <Header />
        <FIndCard />
        <div className="container-sm ">
          <div className="row">
            {this.props.showCars
              ? this.props.cars.map((car) => (
                  <CardListCars key={car.id} cars={car} />
                ))
              : ""}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { cars: state.cars, showCars: state.showCars };
}

export default connect(mapStateToProps)(RentalCar);
