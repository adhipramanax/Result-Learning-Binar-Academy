import React, { Component } from "react";
import imgComplete from "../../assets/img/icon_complete.png";
import imgPrice from "../../assets/img/icon_price.png";
import imgHrs from "../../assets/img/icon_24hrs.png";
import imgPro from "../../assets/img/icon_professional.png";

class WhyUs extends Component {
  render() {
    return (
      <>
        <div className="container-sm why-us" id="whyUs">
          <div>
            <h1>Why Us</h1>
            <p>Mengapa harus pilih Binar Car Rental?</p>
          </div>

          <div className="card-area card-area-whyus">
            <div className="card">
              <div className="card-body">
                <img src={imgComplete} alt="img-service" />
                <h5 className="card-title">Mobil Lengkap</h5>
                <p className="card-text">
                  Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                  terawat
                </p>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <img src={imgPrice} alt="img-service" />
                <h5 className="card-title">Harga Murah</h5>
                <p className="card-text">
                  Harga murah dan bersaing, bisa bandingkan harga kami dengan
                  rental mobil lain
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <img src={imgHrs} alt="img-service" />
                <h5 className="card-title">Layanan 24 Jam</h5>
                <p className="card-text">
                  Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                  tersedia di akhir minggu
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <img src={imgPro} alt="img-service" />
                <h5 className="card-title">Sopir Profesional</h5>
                <p className="card-text">
                  Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
                  tepat waktu
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default WhyUs;
