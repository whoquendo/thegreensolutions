import React from "react";
import Navbarnl from "@components/nl/Navbarnl";
import Bannerppal from "@components/Bannerppal";
import Footer1nl from "@components/nl/footer1nl";

const Balustradenl = () => {
  return (
    <>
      <Navbarnl />
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
              Wij creëren oplossingen op maat voor elke situatie. Wij gebruiken
              specifieke fixatie aangepast aan elk soort bodem en voeren
              plaatsing uit van chemische afdichting voor een optimale
              stevigheid. Om tegemoet te komen aan de unieke behoeftes van ieder
              project zijn onze prestaties gepersonaliseerd.
            </p>
          </div>
        </div>
        {/* <section>
          <h1>Ons werk in Balustrade</h1>
        </section> */}
      </main>
      <Footer1nl />
    </>
  );
};

export default Balustradenl;
