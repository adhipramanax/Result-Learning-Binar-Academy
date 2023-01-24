import React, { Component } from "react";
import img from "../../assets/img/img_car.png";
import { Link } from "react-router-dom";

export default class extends Component {
  render() {
    return (
      <>
        <main className="main-area">
          <header className="container-fluid header-area">
            <div className="container-sm dec-area">
              <div className="row">
                <div className=" col-lg-6 col-12 header-content">
                  <section className=" nama">
                    <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                  </section>
                  <section className=" desc">
                    <p>
                      MSelamat datang di Binar Car Rental. Kami menyediakan
                      mobil kualitas terbaik dengan harga terjangkau. Selalu
                      siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
                    </p>
                  </section>
                  <Link to="/cars">
                    <button
                      type="button"
                      className="btn btn-primary btn-register"
                    >
                      Mulai Sewa Mobil
                    </button>
                  </Link>
                </div>
                <div className=" mobil-img img-fluid">
                  <img src={img} alt=",mobil" />
                </div>
              </div>
            </div>
          </header>
        </main>
      </>
    );
  }
}
