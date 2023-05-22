import React from "react";
import Navbarnl from "@components/nl/Navbarnl";
import Bannerppal from "@components/Bannerppal";
import Footer1nl from "@components/nl/footer1nl";

const Plafondnl = () => {
  return (
    <>
      <Navbarnl />
      <Bannerppal />
      <main class="content-wrapper">
        <div class="container">
          <div class="contenu">
            <h1>
              <h1>
                <span>PLEISTERWERKEN EN SCHEIDINGSWANDEN</span>
              </h1>
            </h1>
            <p>
              Wij beschikken over een dienst stukadoor en afwerking om uw huis,
              appartement of beroepsruimte te verfraaien of te vernieuwen.
              <ul>
                <li>Plafonds.</li>
                <li>Inrichting van zolders.</li>
                <li>Isolatie.</li>
                <li>Schoorstenen.</li>
                <li>Scheidingswanden.</li>
                <li>Nieuwe muren</li>
                <li>Oudere muren.</li>
              </ul>
            </p>
          </div>
        </div>
      </main>
      <Footer1nl />
    </>
  );
};

export default Plafondnl;
