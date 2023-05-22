import React from "react";
import Navbarnl from "@components/nl/Navbarnl";
import Bannerppal from "@components/Bannerppal";
import Footer1nl from "@components/nl/footer1nl";


const Schilderijnl = () => {
  return (
    <>
      <Navbarnl />
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
      <Footer1nl />
    </>
  );
};

export default Schilderijnl;