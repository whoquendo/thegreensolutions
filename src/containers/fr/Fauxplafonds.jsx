import React from "react";
import Navbar from "@components/Navbar";
import Bannerppal from "@components/Bannerppal";
import Footer1 from "@components/Footer1";

const Fauxplafonds = () => {
  return (
    <>
      <Navbar />
      <Bannerppal />
      <main class="content-wrapper">
        <div class="container">
          <div class="contenu">
            <h1>
              <h1>
                <span>FAUX PLAFONDS</span>
              </h1>
            </h1>
            <p>
              Nos équipes sont formées à utiliser différentes techniques pour
              garantir une isolation acoustique et thermique optimale.
            </p>
            <p>
              Que vous viviez dans un appartement ou une maison à étages, nous
              proposons des plafonds autoportants pour empêcher la propagation
              du bruit du niveau supérieur vers le niveau inférieur.
            </p>
            <p>
              Nous offrons également des faux plafonds suspendus pour une
              isolation thermique efficace, réduire la consommation de chauffage
              et masquer les conduits techniques.
            </p>
            <p>
              La qualité de notre visite préliminaire et de l'analyse qui suit
              est primordiale pour garantir la satisfaction de nos clients.
            </p>
          </div>
        </div>
      </main>
      <Footer1 />
    </>
  );
};

export default Fauxplafonds;
