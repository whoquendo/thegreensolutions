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
            Op maat gemaakt volgens de situatie (specifieke bevestigingen gebruikt specifieke bevestigingen gebruikt volgens de bodem, installatie met chemische voor stevigheid)
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