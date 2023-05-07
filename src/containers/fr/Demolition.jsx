import React from "react";

import Header from "@components/Header";
import Footer from "@components/Footer";

const Demolition = () => {
  return (
    <>
      <Header />
      <main class="content-wrapper">
        <div class="container">
          <div class="contenu">
            <header>
              <h1>
                <span>DÉMOLITION</span>
              </h1>
            </header>
            <p>
              Déconstruction partielle ou totale pour tous types de bâtiments,
              THE GREEN SOLUTIONS vous propose des solutions en passant par
              toutes les étapes indispensables : du projet jusqu’au
              démantèlement de la bâtisse ainsi que de l’évacuation des déchets.
              Notre équipe de professionnels dispose d’outils et engins
              spécifiques et parfaitement adaptés à ce genre de travaux avec le
              savoir-faire riche d’une longue expérience dans ce domaine. THE
              GREEN SOLUTIONS est le partenaire idéal par son sérieux et son
              professionnalisme pour tous vos projets de rénovation ou de
              construction nécessitants au préalable une démolition.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Demolition;
