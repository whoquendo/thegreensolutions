import React from "react";
import Header from "@components/Header";
import Footer from "@components/Footer";

const Cuisine = () => {
  return (
    <>
      <Header />
      <main class="content-wrapper">
        <div class="container">
          <div class="contenu">
            <h1>
              <h1>
                <span>CUISINE</span>
              </h1>
            </h1>
            <p>
              Nous réalisons et installons sur mesure des cuisines équipées de
              qualité. Disponible dans un grand choix de coloris et matériaux.
              Au design contemporain et ancien, elles vous séduiront en
              apportant le confort et la fonctionnalité que vous recherchez.
              Votre satisfaction est notre premier objectif. Si vous désirez un
              devis c’est un service payant avec notre cuisiniste qui vient chez
              vous. En cas d’acceptation, le montant du devis sera déduit de
              votre facture globale.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Cuisine;
