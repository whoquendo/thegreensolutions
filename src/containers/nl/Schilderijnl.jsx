import React from "react";
import Navbarnl from "@components/nl/Navbarnl";
import Bannerppal from "@components/Bannerppal";
import Footer1nl from "@components/nl/footer1nl";

const Schilderijnl = () => {
  return (
    <>
      <Navbarnl />
      <Bannerppal />
      <main class="content-wrapper">
        <div class="container">
          <div class="contenu">
            <h1>
                SCHILDERWERKEN
            </h1>
            <p>
              Zowel voor binnen als buiten vragen schilderwerken om een optimale
              voorbereiding en aangepast materiaal.
            </p>
            <p>
              Wij zorgen voor uw woning, appartement of professioneel lokaal.
            </p>
            <p>
              Binnen- en buitenschilderwerk. Alle coatings, tinten en verven. 
            </p>
          </div>
        </div>
      </main>
      <Footer1nl />
    </>
  );
};

export default Schilderijnl;
