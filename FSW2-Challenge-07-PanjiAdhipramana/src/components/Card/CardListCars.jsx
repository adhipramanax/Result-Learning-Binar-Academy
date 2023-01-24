import React from "react";
import calendar from "../../assets/img/fi_calendar.png";
import settings from "../../assets/img/fi_settings.png";
import users from "../../assets/img/fi_users.png";

export default function CardListCars(props) {
  props = props.cars;
  return (
    <div className="card-tampil-mobil col-4">
      <div className="card-img-top">
        <img
          src={
            "https://res.cloudinary.com/dhuvbrmgg/image/upload/v1653569034/Car%20Binar/" +
            props.image.split("/")[2]
          }
          className="card-img-top"
          alt={props.image.split("/")[2]}
        />
      </div>
      <div className="card-body tampil-mobil">
        <h3 className="car-title" style={{ fontWeight: "bold" }}>
          {props.manufacture + " " + props.model}
        </h3>
        <h4 className="car-price">{props.rentPerDay} /hari</h4>
        <p className="car-subtitle">{props.description}</p>
        <div className="car-detail">
          <div className="detail-item">
            <img
              src={users}
              style={{
                width: "20px",
                height: "20px",
                marginRight: "5px",
              }}
            />
            <p>{props.capacity}</p>
          </div>
          <div className="detail-item">
            <img src={settings} />
            <p>{props.transmission}</p>
          </div>
          <div className="detail-item">
            <img src={calendar} />
            <p>{props.year}</p>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-primary btn-register"
          style={{ width: "100%" }}
        >
          Pilih Mobil
        </button>
      </div>
    </div>
  );
}
