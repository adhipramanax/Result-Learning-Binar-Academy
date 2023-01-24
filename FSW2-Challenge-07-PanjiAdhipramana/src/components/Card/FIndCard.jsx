import React, { Component } from "react";
import { connect } from "react-redux";
import { filterByInput } from "../../store/actions/CarActions";

class FIndCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      capacity: "",
      tipeDriver: "-1",
      dateTime: "",
    };
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(this.state);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;

    if (target.name === "jumlah-penumpang") {
      if (isNaN(value)) {
        return;
      }
      this.setState({
        capacity: value,
      });
    }

    if (target.name === "tipe-driver") {
      this.setState({
        tipeDriver: value,
      });
    }

    if (target.name === "tanggal") {
      this.setState({
        dateTime: value,
      });
    }
  }

  render() {
    return (
      <>
        <div className="container-sm card-cari-cars">
          <div className="row row-cari-cars">
            <div className="col-lg-11 col-12">
              <div className="row">
                <div className="col-lg-3 col-6 card-cari">
                  <p>Tiper Driver</p>
                  <select
                    name="tipe-driver"
                    id="tipe-driver"
                    className="form-select menu"
                    onChange={(e) => this.handleInputChange(e)}
                    value={this.state.tipeDriver}
                  >
                    <option value="-1" selected>
                      Pilih Tipe Driver
                    </option>
                    <option value="1">Dengan Sopir</option>
                    <option value="0">Tanpa Sopir (Lepas Kuncil)</option>
                  </select>
                </div>
                <div className="col-lg-3 col-6 card-cari">
                  <p>Tanggal</p>
                  <input
                    type="date"
                    id="tanggal"
                    name="tanggal"
                    className="form-control menu"
                    onChange={(e) => this.handleInputChange(e)}
                  />
                </div>
                <div className="col-lg-3 col-6 card-cari">
                  <p>Waktu Jemput/Ambil</p>
                  <input
                    type="time"
                    id="waktu-ambil"
                    name="waktu"
                    className="form-control menu"
                  />
                </div>
                <div className="col-lg-3 col-6 card-cari">
                  <p>Jumlah Penumpang (optional)</p>
                  <input
                    type="text"
                    id="jumlah-penumpang"
                    name="jumlah-penumpang"
                    className="form-control menu"
                    placeholder="Jumlah Penumpang"
                    value={this.state.capacity}
                    onChange={(e) => this.handleInputChange(e)}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-1 col-12 btn-cari-mobil">
              <button
                id="cari-mobil"
                type="button"
                className="btn btn-primary btn-register"
                onClick={() => this.props.onFindCar(this.state)}
              >
                Cari Mobil
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onFindCar: (data) => {
      dispatch(filterByInput(data));
    },
  };
}

export default connect(null, mapDispatchToProps)(FIndCard);
