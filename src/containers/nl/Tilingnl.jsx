import React from "react";
import Navbarnl from "@components/nl/Navbarnl";
import Bannerppal from "@components/Bannerppal";
import Footer1nl from "@components/nl/footer1nl";

const Tilingnl = () => {
  return (
    <>
      <Navbarnl />
      <Bannerppal />
      <main class="content-wrapper">
        <div class="container">
          <div class="contenu">
            <h1>
              TEGELS
            </h1>
            <p>
              Onze tegel experts staan klaar om elke uitdaging aan te gaan, of
              het nu om een nieuwbouw, vernieuwing of renoveren van een
              gebouw gaat.
            </p>
            <p>
              Op basis van een plan, een schets of een mondelinge of
              schriftelijke instructie plaatsen wij bekleding van harde
              materialen zoals faience, zandsteen, keramiek of natuursteen,
              zowel voor binnen als voor buiten.
            </p>
            <p>
              Wij blijven altijd de laatste trends en innovatieve technologiën
              volgen. Wij nemen de tijd om kennis te nemen van uw project, u
              raad te geven en u een gratis gedetailleerde offerte voor te
              leggen.
            </p>
          </div>
        </div>
      </main>
      <Footer1nl />
    </>
  );
};

export default Tilingnl;
