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
              <span>TEGELWERKEN</span>
            </h1>
            <p>
            Onze tegelzetters staan klaar om elke uitdaging aan te gaan, of het nu gaat om een nieuwe installatie, renovatie of herstelling van een gebouw.  
            </p>
            <p>
            Op basis van plannen, schetsen, mondelinge of schriftelijke instructies installeren wij strakke materialen zoals tegels, steengoed, keramiek of natuursteen, zowel binnen als buiten. 
              </p>
              <p>
              Wij zijn altijd op de hoogte van de nieuwste trends en innovatieve technologieën. 
Wij nemen de tijd om uw project te leren kennen, u te adviseren en u een gratis gedetailleerde offerte te bezorgen.

              </p>
          </div>
        </div>
      </main>
      <Footernl />
    </>
  );
};

export default Tilingnl;