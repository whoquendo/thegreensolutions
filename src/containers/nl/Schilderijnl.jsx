import React from "react";
import Headernl from "@components/nl/Headernl";
import Bannerppal from "@components/Bannerppal";
import Footernl from "@components/nl/Footernl";


const Schilderijnl = () => {
  return (
    <>
      <Headernl />
      <Bannerppal />
      <main class="content-wrapper">
        <div class="container">
          <div class="contenu">
            <h1>
              <h1>
                <span>SCHILDERWERKEN</span>
              </h1>
            </h1>
            <p>
            Zowel voor binnen als buiten, is een optimale voorbereiding alsook aangepast materiaal voor alle schilderwerken noodzakelijk.
            </p>
            <p>
            Wij voeren schilderwerken uit in het hele huis, in uw appartement of in uw beroepsruimte.
            </p>
            <p>
            Interne en externe bekledingsverven, kleuren en verven.
            </p>
          </div>
        </div>
      </main>
      <Footernl />
    </>
  );
};

export default Schilderijnl;