import React from "react";
import Navbar from "@components/Navbar";
import Bannerppal from "@components/Bannerppal";
import Banner from "@components/Banner";
import Footer1 from "@components/Footer1";

const Galerie = () => {
  return (
    <>
      <Navbar />
      <Bannerppal />
      <Banner />
      <div className="divVacio"></div>
      <Footer1 />
    </>
  );
};

export default Galerie;
