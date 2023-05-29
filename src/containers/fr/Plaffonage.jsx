import React from "react";
import Navbar from "@components/Navbar";
import Bannerppal from "@components/Bannerppal";
import Footer1 from "@components/Footer1";

const Plaffonage = () => {
  return (
    <>
      <Navbar />
      <Bannerppal />
      <main class="content-wrapper">
        <div class="container">
          <div class="contenu">
            <h1>
                PLAFFONAGE ET CLOISON
            </h1>
            <p>
              Nous avons un service de plafonnage et de travaux de finitions
              pour embellir ou rénover votre maison, appartement ou local
              professionnel. On vous assure une qualité de finition optimale sur
              tout type de support :
              <ul>
                <li>Plafonds.</li>
                <li>Aménagements des combles.</li>
                <li>Isolation.</li>
                <li>Cheminées.</li>
                <li>Cloisons.</li>
                <li>Nouveaux murs</li>
                <li>Murs plus anciens.</li>
              </ul>
            </p>
          </div>
        </div>
      </main>
      <Footer1 />
    </>
  );
};

export default Plaffonage;
