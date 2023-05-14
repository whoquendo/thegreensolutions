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
                <span>FAÇADE. SCHOONMAKEN</span>
              </h1>
            </h1>
            <p>
            Als u uw gevel wilt revitaliseren, isoleren, moderniseren of onderhouden, staan wij tot uw beschikking om uw plannen te verwezenlijken. Wij bieden u verschillende processen om uw gebouw waardevoller te maken:
              <ul>
                <li>gevelreiniging: alle processen.</li>
                <li>Zandstralen en opnieuw voegen.</li>
                <li>Gips: efficiënt, isolerend en esthetisch.</li>
                <li>Waterdichtheid: tegen vocht en mos.</li>
                <li>Behandeling van houtwerk.</li>
                <li>Isolatie van muren van buitenaf.</li>
              </ul>
            </p>
          </div>
        </div>
      </main>
      <Footernl />
    </>
  );
};

export default Façadenl;