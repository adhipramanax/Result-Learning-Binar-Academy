import React, { Component } from "react";

class CardRentalCar extends Component {
  render() {
    return (
      <>
        {/* <!-- Card sewa mobil --> */}
        <div className="container-sm card-mobil">
          <div className="dec-card">
            <h2>Sewa Mobil di (Lokasimu) Sekarang</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <br />
            <button type="button" className="btn btn-primary btn-register">
              Mulai Sewa Mobil
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default CardRentalCar;
