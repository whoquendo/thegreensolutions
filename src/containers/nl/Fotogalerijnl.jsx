import React from "react";
import Headernl from "@components/nl/Headernl";
import Bannerppal from '@components/Bannerppal';
import Footernl from "@components/nl/Footernl";
import "@styles/carousel.css";
import "@styles/home.css";
import Carousel from "@components/Carousel";


const Fotogalerijnl = () => {
  return (
    <>
<Headernl />
<Bannerppal />
<div className="divVacio"></div>
<Carousel />
<Footernl />
    </>
  )
};

export default Fotogalerijnl;