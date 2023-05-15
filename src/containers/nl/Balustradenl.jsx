import React from "react";
import Header from "@components/Header";
import Bannerppal from '@components/Bannerppal';
import Footernl from "@components/nl/Footernl";
import CarouselMultiple from "@components/CarouselMultiple";
import Headernl from "../../components/nl/Headernl";


const Balustradenl = () => {
  return (
    <>
    <Headernl />
    <Bannerppal />
      <main class="content-wrapper">
        <div class="container">
          <div class="contenu">
            <header>
              <h1>
                <span>BALUSTRADE</span>
              </h1>
            </header>
            <p>
            Wij creëren oplossingen op maat voor elke situatie. Wij gebruiken specifieke bevestigingen voor elk type vloer en installeren met chemische afdichtingen voor een optimale sterkte. Onze diensten worden aangepast aan de unieke behoeften van elk project.
            </p>
          </div>
        </div>
        <section>
          <h1>Ons werk in Balustrade</h1>
          <div>
          {/* <CarouselMultiple /> */}
          </div>
        </section>
      </main>
      <Footernl />
    </>
  );
};

export default Balustradenl;