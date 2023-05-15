import React from "react";
import Header from "@components/Header";
import Bannerppal from "@components/Bannerppal";
import Banner from "@components/Banner";
import Footer from "@components/Footer";
import "@styles/carousel.css";
import Carousel from "@components/Carousel";


const Galerie = () => {
  return (
    <>
<Header />
<Bannerppal />
<Banner />
<div className="divVacio"></div>
<Footer/>
    </>
  )
};

export default Galerie;
