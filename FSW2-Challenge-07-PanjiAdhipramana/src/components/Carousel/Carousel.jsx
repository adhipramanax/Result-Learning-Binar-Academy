import React, { Component } from "react";
import img1 from "../../assets/img/img_photo-1.png";
import img2 from "../../assets/img/img_photo-2.png";
import imgRate from "../../assets/img/Rate.png";

class Carousel extends Component {
  render() {
    return (
      <>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="container-sm desk">
            <h4>Testimonial</h4>
            <p>Berbagai review positif dari para pelanggan kami</p>
          </div>

          <div className="carousel-inner caro-row">
            <div className="carousel-item active">
              <div className="row">
                <div className="col-4 card-aja">
                  <div className="card">
                    <div className="card-caro">
                      <img src={img1} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <img src={imgRate} className="img-rate" alt="..." />
                        <p className="card-text">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Maxime facilis corporis sapiente? Minima
                          eligendi doloremque aspernatur illo vero cum incidunt?
                          Veritatis nulla laboriosam praesentium magni deserunt
                          alias tempora voluptas impedit.
                        </p>
                        <h6>John Dee 32, Bromo</h6>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-4  card-aja">
                  <div className="card">
                    <div className="card-caro">
                      <img src={img2} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <img src={imgRate} className="img-rate" alt="..." />
                        <p className="card-text">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Suscipit cupiditate, voluptates quis asperiores
                          amet ipsa perferendis, cumque perspiciatis quia iste
                          placeat tempora nulla, deleniti fuga non illo!
                          Doloribus, eius aut?
                        </p>
                        <h6>John Dee 32, Bromo</h6>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-4 card-aja">
                  <div className="card">
                    <div className="card-caro">
                      <img src={img1} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <img src={imgRate} className="img-rate" alt="..." />
                        <p className="card-text">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Assumenda distinctio dolore provident commodi
                          dolorem ad, ut quam consectetur nesciunt. Repudiandae,
                          autem. Error vero nisi veritatis aut beatae ipsa sunt
                          molestiae.
                        </p>
                        <h6>John Dee 32, Bromo</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="row">
                <div className="col-4 card-aja">
                  <div className="card">
                    <div className="card-caro">
                      <img src={img2} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <img src={imgRate} className="img-rate" alt="..." />
                        <p className="card-text">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Deserunt facilis quae autem quia sapiente
                          laudantium corporis rerum sed vitae ullam delectus
                          doloribus nobis itaque nisi earum perferendis, dicta
                          maxime quis.
                        </p>
                        <h6>John Dee 32, Bromo</h6>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-4 card-aja">
                  <div className="card">
                    <div className="card-caro">
                      <img src={img1} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <img src={imgRate} className="img-rate" alt="..." />
                        <p className="card-text">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Repudiandae commodi animi adipisci facilis
                          minus, delectus aspernatur assumenda excepturi quasi
                          eaque explicabo quidem ipsum! Similique incidunt
                          dolores reiciendis sint minima illum?
                        </p>
                        <h6>John Dee 32, Bromo</h6>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-4 card-aja">
                  <div className="card">
                    <div className="card-caro">
                      <img src={img2} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <img src={imgRate} className="img-rate" alt="..." />
                        <p className="card-text">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Fugiat asperiores omnis mollitia veritatis.
                          Suscipit, optio? Nulla nemo debitis deserunt, aliquid
                          rerum cupiditate voluptatem sapiente, reprehenderit
                          pariatur nam id alias accusamus!
                        </p>
                        <h6>John Dee 32, Bromo</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- button carousel --> */}
        <div className="btn-carousel container-sm">
          <button
            className="carousel-control"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon tombol-crsl"
              aria-hidden="true"
            ></span>
            {/* <span className="visually-hidden"><img src="images/Right button.png" alt=""></span> */}
            {/* <!-- <span className="visually-hidden">Previous</span> --> */}
          </button>
          <button
            className="carousel-control"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon tombol-crsl"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </>
    );
  }
}

export default Carousel;
