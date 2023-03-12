import React from "react";
import "./RecomendedItem.css";
import ri1 from "../assets/ri/pic1.jpg";
import ri2 from "../assets/ri/pic2.jpg";
import ri3 from "../assets/ri/pic3.jpg";
import ri4 from "../assets/ri/pic4.jpg";
import ri5 from "../assets/ri/pic5.jpg";
import ri6 from "../assets/ri/pic6.jpg";
import ri7 from "../assets/ri/pic7.jpg";

const RecomendedItem = () => {
  let leftslide = () => {
    let left = document.getElementById("riitem");
    left.scrollLeft = left.scrollLeft - 263;
  };

  let rightslide = () => {
    let right = document.getElementById("riitem");
    right.scrollLeft = right.scrollLeft + 263;
  };
  return (
    <div>
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

        <div className="riitem" id="riitem">
          <div className="ri">
            <img src={ri1} alt="" />
            <div className="itemdetails">
              <p style={{ color: "black", fontWeight: "500" }}> Printers</p>
              <p style={{ color: "green" }}>Price 5099 rs</p>
              <p>HP</p>
            </div>
          </div>
          <div className="ri">
            <img src={ri2} alt="" />
            <div className="itemdetails">
              <p style={{ color: "black", fontWeight: "500" }}> Printers</p>
              <p style={{ color: "green" }}>Price 5099 rs</p>
              <p>HP</p>
            </div>
          </div>
          <div className="ri">
            <img src={ri3} alt="" />
            <div className="itemdetails">
              <p style={{ color: "black", fontWeight: "500" }}> Printers</p>
              <p style={{ color: "green" }}>Price 5099 rs</p>
              <p>HP</p>
            </div>
          </div>
          <div className="ri">
            <img src={ri4} alt="" />
            <div className="itemdetails">
              <p style={{ color: "black", fontWeight: "500" }}> Printers</p>
              <p style={{ color: "green" }}>Price 5099 rs</p>
              <p>HP</p>
            </div>
          </div>
          <div className="ri">
            <img src={ri5} alt="" />
            <div className="itemdetails">
              <p style={{ color: "black", fontWeight: "500" }}> Printers</p>
              <p style={{ color: "green" }}>Price 5099 rs</p>
              <p>HP</p>
            </div>
          </div>
          <div className="ri">
            <img src={ri6} alt="" />
            <div className="itemdetails">
              <p style={{ color: "black", fontWeight: "500" }}> Printers</p>
              <p style={{ color: "green" }}>Price 5099 rs</p>
              <p>HP</p>
            </div>
          </div>
          <div className="ri">
            <img src={ri7} alt="" />
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

export default RecomendedItem;
