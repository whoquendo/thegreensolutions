import React from "react";
import Navbar from "@components/Navbar";
import Bannerppal from "@components/Bannerppal";
import Footer1 from "@components/Footer1";



const Balustrade = () => {
  return (
    <>
    <Navbar />
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
            Nous créons des solutions sur mesure en fonction de chaque situation. Nous utilisons des fixations spécifiques adaptées à chaque type de sol et effectuons des poses avec scellement chimique pour une solidité optimale. Nos prestations sont personnalisées pour répondre aux besoins uniques de chaque projet.
            </p>
          </div>
        </div>
        <section>
          <h1>Nos réalisations en Balustrade</h1>
          <div>
          </div>
        </section>
      </main>
      <Footer1 />
    </>
  );
};

export default Balustrade;
