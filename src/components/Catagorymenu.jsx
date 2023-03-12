import React from "react";
import "./Catagory.css";
import grocory from "../assets/catagorymenuitem/grocery.jpg";
import mobile from "../assets/catagorymenuitem/mobiles.jpg";
import fasion from "../assets/catagorymenuitem/fasion.jpg";
import electronic from "../assets/catagorymenuitem/electronic.jpg";
import home from "../assets/catagorymenuitem/home.jpg";
import appliances from "../assets/catagorymenuitem/appliances.jpg";
import travel from "../assets/catagorymenuitem/travel.jpg";
import topoffer from "../assets/catagorymenuitem/topoffer.jpg";
import toys from "../assets/catagorymenuitem/toyes.jpg";
import twowhelles from "../assets/catagorymenuitem/twowheelers.jpg";
const Catagorymenu = () => {
  return (
    <div>
      <div className="catagorymenu1">
        <div className="item">
          <div>
            <img className="img1" src={grocory} alt="" />
            <p>Grocory</p>
          </div>
          <div>
            <img className="img1" src={mobile} alt="" />
            <p>mobile</p>
          </div>
          <div>
            <img className="img1" src={fasion} alt="" />
            <p>fasion</p>
          </div>
          <div>
            <img className="img1" src={electronic} alt="" />
            <p>electronic</p>
          </div>
          <div>
            <img className="img1" src={home} alt="" />
            <p>home</p>
          </div>
          <div>
            <img className="img1" src={appliances} alt="" />
            <p>appliances</p>
          </div>
          <div>
            <img className="img1" src={travel} alt="" />
            <p>travel</p>
          </div>
          <div>
            <img className="img1" src={topoffer} alt="" />
            <p>topoffer</p>
          </div>
          <div>
            <img className="img1" src={toys} alt="" />
            <p>toys</p>
          </div>
          <div>
            <img className="img1" src={twowhelles} alt="" />
            <p>twowhelles</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catagorymenu;
