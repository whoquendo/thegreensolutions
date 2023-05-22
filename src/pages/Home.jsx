import React from "react";
import Navbar from "@components/Navbar";
import Bannerppal from "@components/Bannerppal";
import Banner from "@components/Banner";
import Services from "@components/Services";
import Footer1 from "@components/Footer1";
import Styles from "@styles/home.css";


const Home = () => {
  return (
    <>
      <Navbar />
      <Bannerppal />
      <h1 className="title-galerie-photos">GALERIE - PHOTOS</h1>
      <Banner />
      <div className="divVacio"></div>
      <Services />
      <Footer1 />
    </>
  );
};

export default Home;
