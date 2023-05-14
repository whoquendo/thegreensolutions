import React from "react";
import Header from "@components/Header";
import Bannerppal from "@components/Bannerppal";
import Footer from "@components/Footer";

const Plaffonage = () => {
  return (
    <>
      <Header />
      <Bannerppal />
      <main class="content-wrapper">
        <div class="container">
          <div class="contenu">
            <h1>
              <h1>
                <span>PLAFFONAGE ET CLOISON</span>
              </h1>
            </h1>
            <p>
              Nous avons un service de plafonnage et de travaux de finitions
              pour embellir ou rénover votre maison, appartement ou local
              professionnel. On vous assure une qualité de finition optimale sur
              tout type de support :
              <ul>
                <li>Nouveaux murs</li>
                <li>Murs plus anciens.</li>
                <li>Cheminées.</li>
                <li>Cloisons.</li>
                <li>Plafonds.</li>
                <li>Aménagements des combles.</li>
                <li>Isolation.</li>
              </ul>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Plaffonage;
