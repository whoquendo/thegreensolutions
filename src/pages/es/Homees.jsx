import React from "react";
import Navbares from "../../components/es/Navbares";
import Bannerppal from "@components/Bannerppal";
import Banner from "@components/Banner";
import Serviceses from "../../components/es/Serviceses";
import Footer1es from "../../components/es/Footer1es";
import Styles from "@styles/home.css";


const Homees = () => {
  return (
    <>
      <Navbares />
      <Bannerppal />
      <h1 className="title-galerie-photos">GALERIA DE FOTOS</h1>
      <Banner />
      <div className="divVacio"></div>
      <Serviceses />
      <Footer1es />
    </>
  );
};

export default Homees;
