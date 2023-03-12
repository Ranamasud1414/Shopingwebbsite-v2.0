import React from "react";

import MoreItems from "./MoreItems/MoreItems";

import Services from "./Services/Services";
import Jumptron from "./Jumptron";
// import Video from "./Video";
import Carousel from "./Carousel/Carousel";
import Catagorymenu from "./Catagorymenu";
import Newcarousel from "./Newcarousel";
import BestofElectronic from "./BestofElectronic";
import Toyes from "./Toyes";

import Discountforyou from "./Discountforyou";
import Suggesstedforyou from "./Suggesstedforyou";
import RecomendedItem from "./RecomendedItem";
import Womencatsug from "./Womencatsug";
import Sporthelmo from "./Sporthelmo";
import Essentialsforyou from "./Essentialsforyou";
import Homekit from "./Homekit";

const Home = () => {
  return (
    <div>
      <Catagorymenu />
      <Newcarousel />
      <Services />
      <Carousel />
      <BestofElectronic />
      <Toyes />
      <Discountforyou />
      <Womencatsug />
      <Sporthelmo />
      <Essentialsforyou />
      <Homekit />
      <Suggesstedforyou />
      <RecomendedItem />
      {/* <MoreItems /> */}
      <Jumptron />
    </div>
  );
};

export default Home;
