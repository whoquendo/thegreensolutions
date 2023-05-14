import React from "react";
import Headernl from "@components/nl/Headernl";
import Bannerppal from "@components/Bannerppal";
import Footernl from "@components/nl/Footernl";

const Tilingnl = () => {
  return (
    <>
      <Headernl />
      <Bannerppal />
      <main class="content-wrapper">
        <div class="container">
          <div class="contenu">
            <h1>
              <span>TILING</span>
            </h1>
            <p>
            Onze tegelzetters werken in alle omstandigheden, niet alleen voor nieuwe installaties maar ook voor renovatie en herstel van gebouwen. Op basis van plannen of schetsen, mondelinge of schriftelijke instructies voeren wij oppervlaktebekledingen uit in harde materialen (aardewerk, steengoed, keramiek, natuursteen, enz.). Deze werkzaamheden kunnen zowel binnen als buiten worden uitgevoerd. Wij zijn altijd op de hoogte van nieuwe trends en technische innovaties. Onze tegelzetters evalueren samen met u uw project, geven u advies en stellen een gratis bestek op.
            </p>
          </div>
        </div>
      </main>
      <Footernl />
    </>
  );
};

export default Tilingnl;