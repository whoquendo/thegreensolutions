import React from "react";
import Navbar from "@components/Navbar";
import Bannerppal from "@components/Bannerppal";
import Footer1 from "@components/Footer1";

const Peinture = () => {
  return (
    <>
      <Navbar />
      <Bannerppal />
      <main class="content-wrapper">
        <div class="container">
          <div class="contenu">
            <h1>
              <h1>
                <span>PEINTURE</span>
              </h1>
            </h1>
            <p>
              Pour l’intérieur comme pour l’extérieur, les travaux de peinture
              nécessitent une préparation optimale et un matériel adapté. Nous
              nous occupons de toute la maison, de votre appartement ou de votre
              local professionnel. Peinture intérieurs et extérieurs tous
              enduits, teintes et peintures.
            </p>
          </div>
        </div>
      </main>
      <Footer1 />
    </>
  );
};

export default Peinture;
