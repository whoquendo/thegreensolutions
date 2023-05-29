import React from "react";
import Navbarnl from "@components/nl/Navbarnl";
import Bannerppal from "@components/Bannerppal";
import Footer1nl from "@components/nl/footer1nl";

const Chassisnl = () => {
  return (
    <>
      <Navbarnl />
      <Bannerppal />
      <main class="content-wrapper">
        <div class="container">
          <div class="contenu">
            <h1>
              Ramen en Deuren
            </h1>
            <p> 
            Wij zijn experts in de installatie van ramen, deuren en luiken, zowel voor nieuwbouw als voor renovatie. Wij bieden een breed scala aan materialen in PVC, aluminium en hout, die vele voordelen bieden zoals onderhoudsgemak, uitstekende thermische en akoestische isolatie, duurzaamheid en een verscheidenheid aan stijlen, kleuren en vormen. 
            </p>
            <p>
            Al onze installaties zijn voorzien van inbraakwerend beslag en onze deuren zijn voorzien van meerpuntsloten voor extra veiligheid. Wij gebruiken hoogwaardige dubbele beglazing met een beveiligde voorzijde zoals vereist. Wij kunnen ook horren op maat maken voor alle deuren en ramen.
            </p>
          </div>
        </div>
      </main>
      <Footer1nl />
    </>
  );
};

export default Chassisnl;