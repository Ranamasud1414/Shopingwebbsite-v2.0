import React from "react";
import "./Essentialforyou.css";
import efy1 from "../assets/ecy/pic1.jpg";
import efy2 from "../assets/ecy/pic2.jpg";
import efy3 from "../assets/ecy/pic3.jpg";
import efy4 from "../assets/ecy/pic4.jpg";
import efy5 from "../assets/ecy/pic5.jpg";
import efy6 from "../assets/ecy/pic6.jpg";
import efy7 from "../assets/ecy/pic7.jpg";
const Essentialsforyou = () => {
  let leftslide = () => {
    let left = document.getElementById("slideefy");
    left.scrollLeft = left.scrollLeft - 263;
  };

  let rightslide = () => {
    let right = document.getElementById("slideefy");
    right.scrollLeft = right.scrollLeft + 263;
  };

  return (
    <div>
      <div className="efy">
        <div className="tagefy">
          <p>
            Essentials <br />
            For You
          </p>
        </div>{" "}
        <div className="lbtn">
          <button className="btn  btnleft55 " type="button" onClick={() => leftslide()} id="lbtn">
            <i className="fa-solid fa-less-than"></i>
          </button>
        </div>
        <div className="rbtn">
          <button className="btn  btnleft55 " type="button" onClick={() => rightslide()} id="lbtn">
            <i className="fa-sharp fa-solid fa-greater-than"></i>
          </button>
        </div>
        <div className="efyitem" id="slideefy">
          <div className="efyi">
            <img src={efy1} alt="" />
            <div className="itemdetails">
              <p style={{ color: "black", fontWeight: "500" }}> Printers</p>
              <p style={{ color: "green" }}>Price 5099 rs</p>
              <p>HP</p>
            </div>
          </div>
          <div className="efyi">
            <img src={efy2} alt="" />
            <div className="itemdetails">
              <p style={{ color: "black", fontWeight: "500" }}> Printers</p>
              <p style={{ color: "green" }}>Price 5099 rs</p>
              <p>HP</p>
            </div>
          </div>
          <div className="efyi">
            <img src={efy3} alt="" />
            <div className="itemdetails">
              <p style={{ color: "black", fontWeight: "500" }}> Printers</p>
              <p style={{ color: "green" }}>Price 5099 rs</p>
              <p>HP</p>
            </div>
          </div>
          <div className="efyi">
            <img src={efy4} alt="" />
            <div className="itemdetails">
              <p style={{ color: "black", fontWeight: "500" }}> Printers</p>
              <p style={{ color: "green" }}>Price 5099 rs</p>
              <p>HP</p>
            </div>
          </div>
          <div className="efyi">
            <img src={efy5} alt="" />
            <div className="itemdetails">
              <p style={{ color: "black", fontWeight: "500" }}> Printers</p>
              <p style={{ color: "green" }}>Price 5099 rs</p>
              <p>HP</p>
            </div>
          </div>
          <div className="efyi">
            <img src={efy6} alt="" />
            <div className="itemdetails">
              <p style={{ color: "black", fontWeight: "500" }}> Printers</p>
              <p style={{ color: "green" }}>Price 5099 rs</p>
              <p>HP</p>
            </div>
          </div>
          <div className="efyi">
            <img src={efy7} alt="" />
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

export default Essentialsforyou;
