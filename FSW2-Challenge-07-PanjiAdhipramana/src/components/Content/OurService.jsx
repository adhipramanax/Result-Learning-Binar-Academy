import React, { Component } from "react";
import img from "../../assets/img/img_service.png";
import icon from "../../assets/img/Group-53.png";

export default class OurService extends Component {
  render() {
    return (
      <>
        <div className="container-fluid our-serv" id="ourService">
          <div className="container-sm service">
            <div className="row ">
              <div className="col-lg-6 col-12 img-ser">
                <img src={img} alt="img-service" />
              </div>
              <div className="col-lg-6 col-12 our-ser">
                <h2>Best Car Rental for any kind of trip in (Lokasimu)!</h2>
                <p>
                  Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan
                  harga lebih murah dibandingkan yang lain, kondisi mobil baru,
                  serta kualitas pelayanan terbaik untuk perjalanan wisata,
                  bisnis, wedding, meeting, dll.
                </p>
                <li>
                  <img src={icon} alt="img-service" />
                  Sewa Mobil Dengan Supir di Bali 12 Jam
                </li>
                <li>
                  <img src={icon} alt="img-service" />
                  Sewa Mobil Lepas Kunci di Bali 24 Jam
                </li>
                <li>
                  <img src={icon} alt="img-service" />
                  Sewa Mobil Jangka Panjang Bulanan
                </li>
                <li>
                  <img src={icon} alt="img-service" />
                  Gratis Antar - Jemput Mobil di Bandara
                </li>
                <li>
                  <img src={icon} alt="img-service" />
                  Layanan Airport Transfer / Drop In Out
                </li>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
