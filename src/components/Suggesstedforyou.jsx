import React from "react";
import "./Suggeestionforyou.css";
import sfy1 from "../assets/sfy/pic1.jpg";
import sfy2 from "../assets/sfy/pic2.jpg";
import sfy3 from "../assets/sfy/pic3.jpg";
import sfy4 from "../assets/sfy/pic4.jpg";
import sfy5 from "../assets/sfy/pic5.jpg";
import sfy6 from "../assets/sfy/pic6.jpg";
import sfy7 from "../assets/sfy/pic7.jpg";
const Suggesstedforyou = () => {
  let leftslide = () => {
    let left = document.getElementById("sfyitem");
    left.scrollLeft = left.scrollLeft - 263;
  };

  let rightslide = () => {
    let right = document.getElementById("sfyitem");
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
        <div className="sfyitem" id="sfyitem">
          <div className="sfyi">
            <img src={sfy1} alt="" />
            <div className="itemdetails">
              <p style={{ color: "black", fontWeight: "500" }}> Printers</p>
              <p style={{ color: "green" }}>Price 5099 rs</p>
              <p>HP</p>
            </div>
          </div>
          <div className="sfyi">
            <img src={sfy2} alt="" />
            <div className="itemdetails">
              <p style={{ color: "black", fontWeight: "500" }}> Printers</p>
              <p style={{ color: "green" }}>Price 5099 rs</p>
              <p>HP</p>
            </div>
          </div>
          <div className="sfyi">
            <img src={sfy3} alt="" />
            <div className="itemdetails">
              <p style={{ color: "black", fontWeight: "500" }}> Printers</p>
              <p style={{ color: "green" }}>Price 5099 rs</p>
              <p>HP</p>
            </div>
          </div>
          <div className="sfyi">
            <img src={sfy4} alt="" />
            <div className="itemdetails">
              <p style={{ color: "black", fontWeight: "500" }}> Printers</p>
              <p style={{ color: "green" }}>Price 5099 rs</p>
              <p>HP</p>
            </div>
          </div>
          <div className="sfyi">
            <img src={sfy5} alt="" />
            <div className="itemdetails">
              <p style={{ color: "black", fontWeight: "500" }}> Printers</p>
              <p style={{ color: "green" }}>Price 5099 rs</p>
              <p>HP</p>
            </div>
          </div>
          <div className="sfyi">
            <img src={sfy6} alt="" />
            <div className="itemdetails">
              <p style={{ color: "black", fontWeight: "500" }}> Printers</p>
              <p style={{ color: "green" }}>Price 5099 rs</p>
              <p>HP</p>
            </div>
          </div>
          <div className="sfyi">
            <img src={sfy7} alt="" />
            <div className="itemdetails">
              <p style={{ color: "black", fontWeight: "500" }}> Printers</p>
              <p style={{ color: "green" }}>Price 5099 rs</p>
              <p>HP</p>
            </div>
          </div>
          <div className="sfyi">
            <img src={sfy7} alt="" />
            <div className="itemdetails">
              <p style={{ color: "black", fontWeight: "500" }}> Printers</p>
              <p style={{ color: "green" }}>Price 5099 rs</p>
              <p>HP</p>
            </div>
          </div>
          <div className="sfyi">
            <img src={sfy7} alt="" />
            <div className="itemdetails">
              <p style={{ color: "black", fontWeight: "500" }}> Printers</p>
              <p style={{ color: "green" }}>Price 5099 rs</p>
              <p>HP</p>
            </div>
          </div>
          <div className="sfyi">
            <img src={sfy7} alt="" />
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

export default Suggesstedforyou;
