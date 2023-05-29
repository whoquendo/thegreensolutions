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
                KEUKEN
            </h1>
            <p>
            Om aan uw behoefte en stijl te voldoen creëren en plaatsen wij op maat gemaakte ingerichte keukens van hoge kwaliteit.
            Met een ruime keuze aan kleuren en materialen bieden onze keukens comfort en functionaliteit en zijn esthetisch aangenaam.
            </p>
            <p>
            Onze prioriteit is uw tevredenheid en wij leveren u met plezier een gepersonaliseerde offerte.  Deze is gratis. <br/>
            Om u beter van dienst te kunnen zijn kan onze keuken ontwerper ter plaatse komen om u met raad bij te staan.
            </p>
          </div>
        </div>
      </main>
      <Footer1nl />
    </>
  );
};

export default Keuken;