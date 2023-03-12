import React from "react";
import "./BestofElectronic.css";
import boe1 from "../assets/BOE/boe1.jpg";
import boe2 from "../assets/BOE/boe2.jpg";
import boe3 from "../assets/BOE/boe3.jpg";
import boe4 from "../assets/BOE/boe4.jpg";
import boe5 from "../assets/BOE/boe5.jpg";
import boe6 from "../assets/BOE/boe6.jpg";
import boe7 from "../assets/BOE/boe7.jpg";
const BestofElectronic = () => {
  let leftslide = () => {
    let left = document.getElementById("slideboe");
    left.scrollLeft = left.scrollLeft - 263;
  };

  let rightslide = () => {
    let right = document.getElementById("slideboe");
    right.scrollLeft = right.scrollLeft + 263;
  };

  return (
    <div>
      <div className="boe">
        <div className="tagboe">
          <p>
            Best of <br /> Electronics
          </p>
        </div>

        <div className="lbtn">
          <button className="btn  btnleft11 " type="button" onClick={() => leftslide()} id="lbtn">
            <i className="fa-solid fa-less-than"></i>
          </button>
        </div>
        <div className="rbtn">
          <button className="btn  btnleft11 " type="button" onClick={() => rightslide()} id="lbtn">
            <i className="fa-sharp fa-solid fa-greater-than"></i>
          </button>
        </div>

        <div className="boeitem" id="slideboe">
          <div className="boei">
            <img src={boe1} alt="" />
            <div className="itemdetails">
              <p style={{ color: "black", fontWeight: "500" }}> Printers</p>
              <p style={{ color: "green" }}>Price 5099 rs</p>
              <p>HP</p>
            </div>
          </div>
          <div className="boei">
            <img src={boe2} alt="" />
            <div className="itemdetails">
              <p style={{ color: "black", fontWeight: "500" }}> Printers</p>
              <p style={{ color: "green" }}>Price 5099 rs</p>
              <p>HP</p>
            </div>
          </div>
          <div className="boei">
            <img src={boe3} alt="" />
            <div className="itemdetails">
              <p style={{ color: "black", fontWeight: "500" }}> Printers</p>
              <p style={{ color: "green" }}>Price 5099 rs</p>
              <p>HP</p>
            </div>
          </div>
          <div className="boei">
            <img src={boe4} alt="" />
            <div className="itemdetails">
              <p style={{ color: "black", fontWeight: "500" }}> Printers</p>
              <p style={{ color: "green" }}>Price 5099 rs</p>
              <p>HP</p>
            </div>
          </div>
          <div className="boei">
            <img src={boe5} alt="" />
            <div className="itemdetails">
              <p style={{ color: "black", fontWeight: "500" }}> Printers</p>
              <p style={{ color: "green" }}>Price 5099 rs</p>
              <p>HP</p>
            </div>
          </div>
          <div className="boei">
            <img src={boe6} alt="" />
            <div className="itemdetails">
              <p style={{ color: "black", fontWeight: "500" }}> Printers</p>
              <p style={{ color: "green" }}>Price 5099 rs</p>
              <p>HP</p>
            </div>
          </div>
          <div className="boei">
            <img src={boe7} alt="" />
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

export default BestofElectronic;
