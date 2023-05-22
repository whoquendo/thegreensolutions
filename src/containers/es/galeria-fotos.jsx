import React from "react";
import Navbares from "../es/galeria-fotos";
import Bannerppal from "@components/Bannerppal";
import Banner from "@components/Banner";
import Footer1 from "@components/Footer1";

const Galerie = () => {
  return (
    <>
      <Navbares />
      <Bannerppal />
      <Banner />
      <div className="divVacio"></div>
      <Footer1 />
    </>
  );
};

export default Galerie;