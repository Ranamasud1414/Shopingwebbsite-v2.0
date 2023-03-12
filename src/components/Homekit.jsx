import React from "react";
import "./Homekit.css";
import hkm1 from "../assets/hk/pic1.jpg";
import hkm2 from "../assets/hk/pic2.jpg";
import hkm3 from "../assets/hk/pic3.jpg";
import hkm4 from "../assets/hk/pic4.jpg";
import hkm5 from "../assets/hk/pic5.jpg";
import hkm6 from "../assets/hk/pic6.jpg";
import hkm7 from "../assets/hk/pic7.jpg";
const Homekit = () => {
  let leftslide = () => {
    let left = document.getElementById("slidehk");
    left.scrollLeft = left.scrollLeft - 263;
  };

  let rightslide = () => {
    let right = document.getElementById("slidehk");
    right.scrollLeft = right.scrollLeft + 263;
  };
  return (
    <div>
      <div className="hk">
        <div className="taghk">
          <p>
            Home & Kitchen <br />
            Essentials
          </p>
        </div>
        <div className="lbtn">
          <button className="btn  btnleft " type="button" onClick={() => leftslide()} id="lbtn">
            <i className="fa-solid fa-less-than"></i>
          </button>
        </div>
        <div className="rbtn">
          <button className="btn  btnleft " type="button" onClick={() => rightslide()} id="lbtn">
            <i className="fa-sharp fa-solid fa-greater-than"></i>
          </button>
        </div>
        <div className="hkitem" id="slidehk">
          <div className="hki">
            <img src={hkm1} alt="" />
            <div className="itemdetails">
              <p style={{ color: "black", fontWeight: "500" }}> Printers</p>
              <p style={{ color: "green" }}>Price 5099 rs</p>
              <p>HP</p>
            </div>
          </div>
          <div className="hki">
            <img src={hkm2} alt="" />
            <div className="itemdetails">
              <p style={{ color: "black", fontWeight: "500" }}> Printers</p>
              <p style={{ color: "green" }}>Price 5099 rs</p>
              <p>HP</p>
            </div>
          </div>
          <div className="hki">
            <img src={hkm3} alt="" />
            <div className="itemdetails">
              <p style={{ color: "black", fontWeight: "500" }}> Printers</p>
              <p style={{ color: "green" }}>Price 5099 rs</p>
              <p>HP</p>
            </div>
          </div>
          <div className="hki">
            <img src={hkm4} alt="" />
            <div className="itemdetails">
              <p style={{ color: "black", fontWeight: "500" }}> Printers</p>
              <p style={{ color: "green" }}>Price 5099 rs</p>
              <p>HP</p>
            </div>
          </div>
          <div className="hki">
            <img src={hkm5} alt="" />
            <div className="itemdetails">
              <p style={{ color: "black", fontWeight: "500" }}> Printers</p>
              <p style={{ color: "green" }}>Price 5099 rs</p>
              <p>HP</p>
            </div>
          </div>
          <div className="hki">
            <img src={hkm6} alt="" />
            <div className="itemdetails">
              <p style={{ color: "black", fontWeight: "500" }}> Printers</p>
              <p style={{ color: "green" }}>Price 5099 rs</p>
              <p>HP</p>
            </div>
          </div>
          <div className="hki">
            <img src={hkm7} alt="" />
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

export default Homekit;
