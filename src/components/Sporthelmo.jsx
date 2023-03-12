import React from "react";
import "./Sporthelmo.css";
import shm1 from "../assets/shm/pic1.jpg";
import shm2 from "../assets/shm/pic2.jpg";
import shm3 from "../assets/shm/pic3.jpg";
import shm4 from "../assets/shm/pic4.jpg";
import shm5 from "../assets/shm/pic5.jpg";
import shm6 from "../assets/shm/pic6.jpg";
import shm7 from "../assets/shm/pic7.jpg";
const Sporthelmo = () => {
  let leftslide = () => {
    let left = document.getElementById("slideshm");
    left.scrollLeft = left.scrollLeft - 263;
  };

  let rightslide = () => {
    let right = document.getElementById("slideshm");
    right.scrollLeft = right.scrollLeft + 263;
  };

  return (
    <div>
      <div className="shm">
        <div className="tagshm">
          <p>
            Sports, Healthcare <br /> & more
          </p>
        </div>
        <div className="lbtn">
          <button className="btn  btnleft44 " type="button" onClick={() => leftslide()} id="lbtn">
            <i className="fa-solid fa-less-than"></i>
          </button>
        </div>
        <div className="rbtn">
          <button className="btn  btnleft44 " type="button" onClick={() => rightslide()} id="lbtn">
            <i className="fa-sharp fa-solid fa-greater-than"></i>
          </button>
        </div>
        <div className="shmitem" id="slideshm">
          <div className="shmi">
            <img src={shm1} alt="" />
            <div className="itemdetails">
              <p style={{ color: "black", fontWeight: "500" }}> Printers</p>
              <p style={{ color: "green" }}>Price 5099 rs</p>
              <p>HP</p>
            </div>
          </div>
          <div className="shmi">
            <img src={shm2} alt="" />
            <div className="itemdetails">
              <p style={{ color: "black", fontWeight: "500" }}> Printers</p>
              <p style={{ color: "green" }}>Price 5099 rs</p>
              <p>HP</p>
            </div>
          </div>
          <div className="shmi">
            <img src={shm3} alt="" />
            <div className="itemdetails">
              <p style={{ color: "black", fontWeight: "500" }}> Printers</p>
              <p style={{ color: "green" }}>Price 5099 rs</p>
              <p>HP</p>
            </div>
          </div>
          <div className="shmi">
            <img src={shm4} alt="" />
            <div className="itemdetails">
              <p style={{ color: "black", fontWeight: "500" }}> Printers</p>
              <p style={{ color: "green" }}>Price 5099 rs</p>
              <p>HP</p>
            </div>
          </div>
          <div className="shmi">
            <img src={shm5} alt="" />
            <div className="itemdetails">
              <p style={{ color: "black", fontWeight: "500" }}> Printers</p>
              <p style={{ color: "green" }}>Price 5099 rs</p>
              <p>HP</p>
            </div>
          </div>
          <div className="shmi">
            <img src={shm6} alt="" />
            <div className="itemdetails">
              <p style={{ color: "black", fontWeight: "500" }}> Printers</p>
              <p style={{ color: "green" }}>Price 5099 rs</p>
              <p>HP</p>
            </div>
          </div>
          <div className="shmi">
            <img src={shm7} alt="" />
            <div className="itemdetails">
              <p style={{ color: "black", fontWeight: "500" }}> Printers</p>
              <p style={{ color: "green" }}>Price 5099 rs</p>
              <p>HP</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sporthelmo;
