import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="area-nav">
          <div className="container-sm navigasi-area">
            <div className=" row area-fnav">
              <div className="area-logo col-2">
                <div className="logo">&nbsp;</div>
              </div>
              <ul className="col-10">
                <li>
                  <a className="nav-link" href="#ourService">
                    Our Service
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#whyUs">
                    Why Us
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#testimonial">
                    Testimonial
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#faq">
                    FAQ
                  </a>
                </li>
                <button type="button" className="btn btn-primary btn-register">
                  Register
                </button>
              </ul>
              <div className="humberger-icon" id="humberger-icon">
                <i className="fas fa-bars"></i>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
