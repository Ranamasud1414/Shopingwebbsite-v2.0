import React from "react";
import "./Womencatsug.css";
import wcs1 from "../assets/sfyw/pic1.jpg";
import wcs2 from "../assets/sfyw/pic2.jpg";
import wcs3 from "../assets/sfyw/pic3.jpg";
import wcs4 from "../assets/sfyw/pic4.jpg";
import wcs5 from "../assets/sfyw/pic5.jpg";
import wcs6 from "../assets/sfyw/pic6.jpg";
import wcs7 from "../assets/sfyw/pic7.jpg";

const Womencatsug = () => {
  let leftslide = () => {
    let left = document.getElementById("sfyitemW");
    left.scrollLeft = left.scrollLeft - 263;
  };

  let rightslide = () => {
    let right = document.getElementById("sfyitemW");
    right.scrollLeft = right.scrollLeft + 263;
  };
  return (
    <div className="box">
      <div className="header">
        &nbsp;&nbsp;Suggention for you
        <p>Based on Your Activity</p>
      </div>
      <div className="lbtnr">
        <button className="btn  btnleft44 " type="button" onClick={() => leftslide()} id="lbtn">
          <i className="fa-solid fa-less-than"></i>
        </button>
      </div>
      <div className="rbtnr">
        <button className="btn  btnleft44 " type="button" onClick={() => rightslide()} id="lbtn">
          <i className="fa-sharp fa-solid fa-greater-than"></i>
        </button>
      </div>
      <div className="sfyitem" id="sfyitemW">
        <div className="sfyi">
          <img src={wcs1} alt="" />
          <div className="itemdetails">
            <p style={{ color: "black", fontWeight: "500" }}> Printers</p>
            <p style={{ color: "green" }}>Price 5099 rs</p>
            <p>HP</p>
          </div>
        </div>
        <div className="sfyi">
          <img src={wcs2} alt="" />
          <div className="itemdetails">
            <p style={{ color: "black", fontWeight: "500" }}> Printers</p>
            <p style={{ color: "green" }}>Price 5099 rs</p>
            <p>HP</p>
          </div>
        </div>
        <div className="sfyi">
          <img src={wcs3} alt="" />
          <div className="itemdetails">
            <p style={{ color: "black", fontWeight: "500" }}> Printers</p>
            <p style={{ color: "green" }}>Price 5099 rs</p>
            <p>HP</p>
          </div>
        </div>
        <div className="sfyi">
          <img src={wcs4} alt="" />
          <div className="itemdetails">
            <p style={{ color: "black", fontWeight: "500" }}> Printers</p>
            <p style={{ color: "green" }}>Price 5099 rs</p>
            <p>HP</p>
          </div>
        </div>
        <div className="sfyi">
          <img src={wcs5} alt="" />
          <div className="itemdetails">
            <p style={{ color: "black", fontWeight: "500" }}> Printers</p>
            <p style={{ color: "green" }}>Price 5099 rs</p>
            <p>HP</p>
          </div>
        </div>
        <div className="sfyi">
          <img src={wcs6} alt="" />
          <div className="itemdetails">
            <p style={{ color: "black", fontWeight: "500" }}> Printers</p>
            <p style={{ color: "green" }}>Price 5099 rs</p>
            <p>HP</p>
          </div>
        </div>
        <div className="sfyi">
          <img src={wcs7} alt="" />
          <div className="itemdetails">
            <p style={{ color: "black", fontWeight: "500" }}> Printers</p>
            <p style={{ color: "green" }}>Price 5099 rs</p>
            <p>HP</p>
          </div>
        </div>
        <div className="sfyi">
          <img src={wcs7} alt="" />
          <div className="itemdetails">
            <p style={{ color: "black", fontWeight: "500" }}> Printers</p>
            <p style={{ color: "green" }}>Price 5099 rs</p>
            <p>HP</p>
          </div>
        </div>
        <div className="sfyi">
          <img src={wcs7} alt="" />
          <div className="itemdetails">
            <p style={{ color: "black", fontWeight: "500" }}> Printers</p>
            <p style={{ color: "green" }}>Price 5099 rs</p>
            <p>HP</p>
          </div>
        </div>
        <div className="sfyi">
          <img src={wcs7} alt="" />
          <div className="itemdetails">
            <p style={{ color: "black", fontWeight: "500" }}> Printers</p>
            <p style={{ color: "green" }}>Price 5099 rs</p>
            <p>HP</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Womencatsug;
