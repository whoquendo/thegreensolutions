import React from "react";
import Navbarnl from "@components/nl/Navbarnl";
import Bannerppal from "@components/Bannerppal";
import Footer1nl from "@components/nl/footer1nl";


const Keuken = () => {
  return (
    <>
      <Navbarnl />
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
            Wij ontwerpen en installeren hoogwaardige, op maat gemaakte inbouwkeukens die voldoen aan uw wensen en stijl. Met een ruime keuze aan kleuren en materialen bieden onze moderne en traditionele keukens comfort en functionaliteit en zijn ze tegelijkertijd esthetisch aantrekkelijk.
            </p>
            <p>
            Onze prioriteit is uw tevredenheid en wij maken graag persoonlijke offertes. Er zijn kosten verbonden aan onze offertediensten, maar als u ons voorstel aanvaardt, wordt het bedrag in mindering gebracht op uw eindrekening. Bovendien kan onze keukenontwerper uw huis bezoeken om uw behoeften beter te begrijpen en u het beste advies te geven.
            </p>
          </div>
        </div>
      </main>
      <Footer1nl />
    </>
  );
};

export default Keuken;