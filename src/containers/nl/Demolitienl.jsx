import React from "react";
import Navbarnl from "@components/nl/Navbarnl";
import Bannerppal from "@components/Bannerppal";
import Footer1nl from "@components/nl/footer1nl";

const Demolitienl = () => {
  return (
    <>
      <Navbarnl />
      <Bannerppal />
      <main class="content-wrapper">
        <div class="container">
          <div class="contenu">
            <header>
              <h1>
                AFBRAAKWERKEN
              </h1>
            </header>
            <p>
            Gedeeltelijke of volledige afbraak van alle soorten gebouwen, THE GREEN SOLUTIONS biedt u complete oplossingen voor alle stadia van het proces, van het eerste project tot de ontmanteling van het gebouw en de verwijdering van afval.
            </p>
            <p>
            Ons team van gekwalificeerde professionals beschikt over specifiek gereedschap en materiaal dat perfect is aangepast aan dit soort werk en profiteert van een schat aan ervaring op dit gebied.
            </p>
            <p>
            Dankzij onze ernst en ons professionalisme is THE GREEN SOLUTIONS de ideale partner voor al uw renovatie- of bouwprojecten die een voorafgaande afbraak vereisen.
            </p>
          </div>
        </div>
      </main>
      <Footer1nl />
    </>
  );
};

export default Demolitienl;
