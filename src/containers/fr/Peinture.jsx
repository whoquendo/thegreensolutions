import React from "react";
import Header from "@components/Header";
import Bannerppal from "@components/Bannerppal";
import Footer from "@components/Footer";

const Peinture = () => {
  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
};

export default Peinture;
