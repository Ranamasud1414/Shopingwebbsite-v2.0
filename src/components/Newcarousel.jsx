import React from "react";
import "./Newcarousel.css";
import pic1 from "../assets/newcarousel/pic4.jpg";
import pic2 from "../assets/newcarousel/pic5.jpg";
import pic3 from "../assets/newcarousel/pic6.jpg";
import pic4 from "../assets/newcarousel/pic3.jpg";
const Newcarousel = () => {
  return (
    <div>
      <div id="carouselExampleAutoplaying" className="carousel slide slide1" data-bs-ride="carousel">
        <div className="carousel-inner inner1">
          <div className="carousel-item active">
            <img src={pic1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={pic2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={pic3} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={pic4} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Newcarousel;
