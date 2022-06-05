import React, { Component } from "react";
import ImageOne from "./../assets/images/ied.png";
import { Button } from "react-bootstrap";
// import {
//   Carousel,
//   CarouselIndicators,
//   CarouselItem,
//   CarouselCaption,
//   CarouselControl,
// } from "reactstrap";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1 className="menu-title">Home</h1>
        {/* jenis react-boostrap native way and component way */}
        <Button variant="secondary" className="mx-2">
          Button #2
        </Button>
        {/* <img src={ImageOne} alt="" /> */}
        {/* <img src="https://i.ibb.co/vBDy4rZ/car13-min.jpg" alt="" /> */}
        {/* <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-bs-ride="true"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://i.ibb.co/vBDy4rZ/car13-min.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://i.ibb.co/8Bjjyxj/car14-min.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://i.ibb.co/8Bjjyxj/car14-min.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div> */}

        {/* <Carousel
          activeIndex={0}
          next={function noRefCheck() {}}
          previous={function noRefCheck() {}}
        >
          <CarouselIndicators
            activeIndex={0}
            items={[
              {
                altText: "Slide 1",
                caption: "Slide 1",
                id: 1,
              },
              {
                altText: "Slide 2",
                caption: "Slide 2",
                id: 2,
              },
              {
                altText: "Slide 3",
                caption: "Slide 3",
                id: 3,
              },
            ]}
            onClickHandler={function noRefCheck() {}}
          />
          <CarouselItem
            className="custom-tag"
            onExited={function noRefCheck() {}}
            onExiting={function noRefCheck() {}}
          >
            <CarouselCaption
              captionHeader="Slide 1"
              captionText="Slide 1"
              className="text-danger"
            />
          </CarouselItem>
          <CarouselItem
            className="custom-tag"
            onExited={function noRefCheck() {}}
            onExiting={function noRefCheck() {}}
          >
            <CarouselCaption
              captionHeader="Slide 2"
              captionText="Slide 2"
              className="text-danger"
            />
          </CarouselItem>
          <CarouselItem
            className="custom-tag"
            onExited={function noRefCheck() {}}
            onExiting={function noRefCheck() {}}
          >
            <CarouselCaption
              captionHeader="Slide 3"
              captionText="Slide 3"
              className="text-danger"
            />
          </CarouselItem>
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={function noRefCheck() {}}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={function noRefCheck() {}}
          />
        </Carousel> */}
      </div>
    );
  }
}
