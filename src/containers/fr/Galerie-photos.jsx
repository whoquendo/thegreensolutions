import React from "react";
import Header from "@components/Header";
import Bannerppal from "@components/Bannerppal";
import Footer from "@components/Footer";
import "@styles/carousel.css";
import Carousel from "@components/Carousel";


const Galerie = () => {
  return (
    <>
<Header />
<Bannerppal />
<div className="divVacio"></div>
<Carousel />
<Footer/>
    </>
  )
};

export default Galerie;
