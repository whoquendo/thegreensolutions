import React from "react";
import Headernl from "@components/nl/Headernl";
import Bannerppal from "@components/Bannerppal";
import Footernl from "@components/nl/Footernl";


const Plafondnl = () => {
  return (
    <>
      <Headernl />
      <Bannerppal />
      <main class="content-wrapper">
        <div class="container">
          <div class="contenu">
            <h1>
              <h1>
                <span>PLAFOND EN WANDEN</span>
              </h1>
            </h1>
            <p>
            Wij bieden een plafond- en afwerkingsservice om uw huis, flat of bedrijfspand te verfraaien of te renoveren. Wij garanderen een optimale kwaliteit van afwerking op elk type ondersteuning:
              <ul>
                <li>Nieuwe muren</li>
                <li>Oudere muren.</li>
                <li>Open haarden.</li>
                <li>Scheidingswanden.</li>
                <li>Plafonds.</li>
                <li>Zolderverbouwingen.</li>
                <li>Isolatie.</li>
              </ul>
            </p>
          </div>
        </div>
      </main>
      <Footernl />
    </>
  );
};

export default Plafondnl;