import React from "react";
import Headernl from "../../components/nl/Headernl";
import Bannerppal from "@components/Bannerppal";
import Footernl from "@components/nl/Footernl";


const Terrassingnl = () => {
  return (
    <>
      <Headernl />
      <Bannerppal />
      <main class="content-wrapper">
        <div class="container">
          <div class="contenu">
            <h1>
              <h1>
                <span>TERRASWERKEN</span>
              </h1>
            </h1>
            <p>
            Diverse werken voor uw buitenruimtes: egaliseren - grondwerken - plaatsen van alle soorten omheiningen en palissades (hout en beton).
              <ul>
                <li>Aanleg van gazons</li>
                <li>Een muur bouwen</li>
                <li>Natuurlijke vijverinstallatie</li>
                <li>Gedeeltelijke of volledige afbraak van structuren</li>
                <li>
                Betonplaten leggen - Terrasconstructies - Bestrating
                </li>
                <li>Aansluiting op de riolering</li>
                <li>Tuinhuisjes.</li>
              </ul>
            </p>
          </div>
        </div>
      </main>
      <Footernl />
    </>
  );
};

export default Terrassingnl;