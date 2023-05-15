import React from "react";
import Headernl from "@components/nl/Headernl";
import Bannerppal from "@components/Bannerppal";
import Footernl from "@components/nl/Footernl";


const Menuiserienl = () => {
  return (
    <>
      <Headernl />
      <Bannerppal />
      <main class="content-wrapper">
        <div class="container">
          <div class="contenu">
            <h1>
              <h1>
                <span>SCHRIJNWERKEN</span>
              </h1>
            </h1>
            <p>
            Onze vaardigheden als timmerman voor uw buiten- en buitenbeplanting, wij zorgen voor uw project van ontwerp tot voltooiing.
              <ul>
                <h3>Buitenbeplanting met levering en installatie:</h3>
                <li>Houten chassis.</li>
                <li>Houten terras.</li>
                <li>
                Houten trap.
                </li>
                <li>Bekleding.</li>
              </ul>
              <ul>
                <h3>Interieurindeling met levering en installatie:</h3>
                <li>Houten binnendeuren, planken, boekenkasten.</li>
                <li>Houten trap, parket.</li>
                <li>Bekleding, frame.</li>
                <li>BKasten, dressing, indeling van uw zolder / zolder.</li>
              </ul>
              Je hebt de keuze uit materialen en stijl.
            </p>
          </div>
        </div>
      </main>
      <Footernl />
    </>
  );
};

export default Menuiserienl;