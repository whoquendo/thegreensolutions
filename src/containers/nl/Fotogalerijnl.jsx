import React from "react";
import Navbarnl from "@components/nl/Navbarnl";
import Bannerppal from '@components/Bannerppal';
import Banner from "@components/Banner";
import Footer1nl from "@components/nl/footer1nl";
import "@styles/carousel.css";
import "@styles/home.css";

const Fotogalerijnl = () => {
  return (
    <>
<Navbarnl />
<Bannerppal />
<Banner />
<div className="divVacio"></div>
<Footer1nl />
    </>
  )
};

export default Fotogalerijnl;