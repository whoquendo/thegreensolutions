import React from "react";
import Headernl from "@components/nl/Headernl";
import Bannerppal from "@components/Bannerppal";
import Footernl from "@components/nl/Footernl";


const Keuken = () => {
  return (
    <>
      <Headernl />
      <Bannerppal />
      <main class="content-wrapper">
        <div class="container">
          <div class="contenu">
            <h1>
              <h1>
                <span>KEUKEN</span>
              </h1>
            </h1>
            <p>
            Sur mesure en fonction de la situation (fixations spécifiques utilisées fixations spécifiques utilisées en fonction du sol, installation avec produit chimique pour la solidité)
            </p>
          </div>
        </div>
      </main>
      <Footernl />
    </>
  );
};

export default Keuken;