import React from "react";
import "./Discountforyou.css";
import toy1 from "../assets/dfy/pic1.jpg";
import toy2 from "../assets/dfy/pic2.jpg";
import toy3 from "../assets/dfy/pic3.jpg";
import toy4 from "../assets/dfy/toy4.jpg";
import toy5 from "../assets/dfy/toy5.jpg";
import toy6 from "../assets/dfy/toy6.jpg";
import toy7 from "../assets/dfy/toy7.jpg";
const Discountforyou = () => {
  let leftslide = () => {
    let left = document.getElementById("slidedfy");
    left.scrollLeft = left.scrollLeft - 263;
  };

  let rightslide = () => {
    let right = document.getElementById("slidedfy");
    right.scrollLeft = right.scrollLeft + 263;
  };
  return (
    <div>
      <div className="dfy">
        <div className="tagdfy">
          <p>
            Discount
            <br /> For You
          </p>
        </div>
        <div className="lbtn">
          <button className="btn  btnleft33 " type="button" onClick={() => leftslide()} id="lbtn">
            <i className="fa-solid fa-less-than"></i>
          </button>
        </div>
        <div className="rbtn">
          <button className="btn  btnleft33 " type="button" onClick={() => rightslide()} id="lbtn">
            <i className="fa-sharp fa-solid fa-greater-than"></i>
          </button>
        </div>
        <div className="dfyitem" id="slidedfy">
          <div className="dfyi">
            <img src={toy1} alt="" />
            <div className="itemdetails">
              <p style={{ color: "black", fontWeight: "500" }}> Printers</p>
              <p style={{ color: "green" }}>Price 5099 rs</p>
              <p>HP</p>
            </div>
          </div>
          <div className="dfyi">
            <img src={toy2} alt="" />
            <div className="itemdetails">
              <p style={{ color: "black", fontWeight: "500" }}> Printers</p>
              <p style={{ color: "green" }}>Price 5099 rs</p>
              <p>HP</p>
            </div>
          </div>
          <div className="dfyi">
            <img src={toy3} alt="" />
            <div className="itemdetails">
              <p style={{ color: "black", fontWeight: "500" }}> Printers</p>
              <p style={{ color: "green" }}>Price 5099 rs</p>
              <p>HP</p>
            </div>
          </div>
          <div className="dfyi">
            <img src={toy4} alt="" />
            <div className="itemdetails">
              <p style={{ color: "black", fontWeight: "500" }}> Printers</p>
              <p style={{ color: "green" }}>Price 5099 rs</p>
              <p>HP</p>
            </div>
          </div>
          <div className="dfyi">
            <img src={toy5} alt="" />
            <div className="itemdetails">
              <p style={{ color: "black", fontWeight: "500" }}> Printers</p>
              <p style={{ color: "green" }}>Price 5099 rs</p>
              <p>HP</p>
            </div>
          </div>
          <div className="dfyi">
            <img src={toy6} alt="" />
            <div className="itemdetails">
              <p style={{ color: "black", fontWeight: "500" }}> Printers</p>
              <p style={{ color: "green" }}>Price 5099 rs</p>
              <p>HP</p>
            </div>
          </div>
          <div className="dfyi">
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

export default Discountforyou;
