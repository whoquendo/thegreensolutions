import React from "react";
import Navbar from "@components/Navbar";
import Bannerppal from "@components/Bannerppal";
import Footer1 from "@components/Footer1";

const Demolition = () => {
  return (
    <>
      <Navbar />
      <Bannerppal />
      <main class="content-wrapper">
        <div class="container">
          <div class="contenu">
            <header>
              <h1>
                DÉMOLITION
              </h1>
            </header>
            <p>
              Déconstruction partielle ou totale pour tous types de bâtiments,
              THE GREEN SOLUTIONS vous propose des solutions complètes pour
              toutes les étapes du processus, du projet initial au démantèlement
              du bâtiment et à l'évacuation des déchets.
            </p>
            <p>
              Notre équipe de professionnels qualifiés dispose d'outils et
              d'équipements spécifiques parfaitement adaptés à ce type de
              travaux, et bénéficie d'une expérience riche dans ce domaine. THE
              GREEN SOLUTIONS est le partenaire idéal pour tous vos projets de
              rénovation ou de construction qui nécessitent une démolition
              préalable, grâce à notre sérieux et à notre professionnalisme
            </p>
          </div>
        </div>
      </main>
      <Footer1 />
    </>
  );
};

export default Demolition;
