import React, { Component } from "react";
import imgFb from "../../assets/img/icon_facebook.png";
import imgIg from "../../assets/img/icon_instagram.png";
import imgTw from "../../assets/img/icon_twitter.png";
import imgMail from "../../assets/img/icon_mail.png";
import imgTwc from "../../assets/img/icon_twitch.png";

export default class Footer extends Component {
  render() {
    return (
      <>
        {/* <!-- Footer --> */}
        <footer>
          <div className="container-sm footer">
            <div className="row row-f">
              <div className="col-lg-3 col-12 col-footer">
                <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                <p>binarcarrental@gmail.com</p>
                <p>081-233-334-808</p>
              </div>

              <div className="col-lg-2 col-12 col-footer">
                <h5>Our Service</h5>
                <h5>Why Us</h5>
                <h5>Testimonial</h5>
                <h5>FAQ</h5>
              </div>

              <div className="col-lg-3 col-12 col-footer footer-icon ">
                <div>
                  <h5>Connect US</h5>
                </div>

                <img src={imgFb} alt="facebook" />
                <img src={imgIg} alt="instagram" />
                <img src={imgTw} alt="twitter" />
                <img src={imgMail} alt="email" />
                <img src={imgTwc} alt="twitch" />
              </div>

              <div className="col-lg-3 col-12 col-footer">
                &copy; Copyright Binar 2022
                <section className="kotak">&nbsp;</section>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}
