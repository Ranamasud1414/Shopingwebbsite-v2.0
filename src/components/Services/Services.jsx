import React from "react";
import SerItems from "./SerItems";
import "./Services.css";
import ServiceItem from "./Services-items";

const Services = () => {
  return (
    <>
      <div className="card mb-3 mt-5 mx-5 watch" style={{ maxWidth: "100%", border: "none" }}>
        <div className="card22 g-0">
          {ServiceItem.map((item) => {
            return <SerItems item={item} key={item.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
