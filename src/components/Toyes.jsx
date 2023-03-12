import React from "react";
import "./Toyes.css";
import toy1 from "../assets/toyes/toy1.jpg";
import toy2 from "../assets/toyes/toy2.jpg";
import toy3 from "../assets/toyes/toy3.jpg";
import toy4 from "../assets/toyes/toy4.jpg";
import toy5 from "../assets/toyes/toy5.jpg";
import toy6 from "../assets/toyes/toy6.jpg";
import toy7 from "../assets/toyes/toy7.jpg";

const Toyes = () => {
  let leftslide = () => {
    let left = document.getElementById("slidetoy");
    left.scrollLeft = left.scrollLeft - 263;
  };

  let rightslide = () => {
    let right = document.getElementById("slidetoy");
    right.scrollLeft = right.scrollLeft + 263;
  };

  return (
    <div>
      <div className="toy">
        <div className="tagtoy">
          <p>
            Beauty, Food,
            <br /> Toys & more
          </p>
        </div>
        <div className="lbtn">
          <button className="btn  btnleft22 " type="button" onClick={() => leftslide()} id="lbtn">
            <i className="fa-solid fa-less-than"></i>
          </button>
        </div>
        <div className="rbtn">
          <button className="btn  btnleft22 " type="button" onClick={() => rightslide()} id="lbtn">
            <i className="fa-sharp fa-solid fa-greater-than"></i>
          </button>
        </div>
        <div className="toyitem" id="slidetoy">
          <div className="toyi">
            <img src={toy1} alt="" />
            <div className="itemdetails">
              <p style={{ color: "black", fontWeight: "500" }}> Printers</p>
              <p style={{ color: "green" }}>Price 5099 rs</p>
              <p>HP</p>
            </div>
          </div>
          <div className="toyi">
            <img src={toy2} alt="" />
            <div className="itemdetails">
              <p style={{ color: "black", fontWeight: "500" }}> Printers</p>
              <p style={{ color: "green" }}>Price 5099 rs</p>
              <p>HP</p>
            </div>
          </div>
          <div className="toyi">
            <img src={toy3} alt="" />
            <div className="itemdetails">
              <p style={{ color: "black", fontWeight: "500" }}> Printers</p>
              <p style={{ color: "green" }}>Price 5099 rs</p>
              <p>HP</p>
            </div>
          </div>
          <div className="toyi">
            <img src={toy4} alt="" />
            <div className="itemdetails">
              <p style={{ color: "black", fontWeight: "500" }}> Printers</p>
              <p style={{ color: "green" }}>Price 5099 rs</p>
              <p>HP</p>
            </div>
          </div>
          <div className="toyi">
            <img src={toy5} alt="" />
            <div className="itemdetails">
              <p style={{ color: "black", fontWeight: "500" }}> Printers</p>
              <p style={{ color: "green" }}>Price 5099 rs</p>
              <p>HP</p>
            </div>
          </div>
          <div className="toyi">
            <img src={toy6} alt="" />
            <div className="itemdetails">
              <p style={{ color: "black", fontWeight: "500" }}> Printers</p>
              <p style={{ color: "green" }}>Price 5099 rs</p>
              <p>HP</p>
            </div>
          </div>
          <div className="toyi">
            <img src={toy7} alt="" />
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

export default Toyes;
