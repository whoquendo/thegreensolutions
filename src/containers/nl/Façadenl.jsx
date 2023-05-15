import React from "react";
import Headernl from "@components/nl/Headernl";
import Bannerppal from '@components/Bannerppal';
import Footernl from "@components/nl/Footernl";

const Façadenl = () => {
  return (
    <>
      <Headernl />
      <Bannerppal />
      <main class="content-wrapper">
        <div class="container">
          <div class="contenu">
            <h1>
              <h1>
                <span>GEVELWERKEN</span>
              </h1>
            </h1>
            <p>
            Als specialisten op het gebied van gevelrenovatie ondersteunen wij u bij het uitvoeren van uw projecten om uw gebouw weer tot leven te wekken en te verduurzamen. We bieden verschillende processen om aan uw behoeften te voldoen:
              <ul>
                <li>Isolerend en esthetisch.</li>
                <li>Houtbewerking.</li>
                <li>Hoogwaardig gips.</li>
                <li>gevelreiniging.</li>
                <li>Isolatie van buitenmuren.</li>
                <li>Waterafstotend tegen vocht en schuim.</li>
              </ul>
            </p>
            <p>
            Wij staan ​​tot uw beschikking om u te adviseren en de werkzaamheden uit te voeren die nodig zijn om uw vastgoedactiva te verbeteren.
            </p>
          </div>
        </div>
      </main>
      <Footernl />
    </>
  );
};

export default Façadenl;