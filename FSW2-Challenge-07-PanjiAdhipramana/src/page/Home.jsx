import React, { Component } from "react";
import Header from "../components/Content/Header";
import OurService from "../components/Content/OurService";
import WhyUs from "./../components/Content/WhyUs";
import Carousel from "./../components/Carousel/Carousel";
import CardRentalCar from "./../components/Card/CardRentalCar";

export default class extends Component {
  render() {
    return (
      <div>
        <Header />
        <OurService />
        <WhyUs />
        <Carousel />
        <CardRentalCar />
      </div>
    );
  }
}
