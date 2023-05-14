import React from "react";
import Header from "@components/Header";
import Bannerppal from "@components/Bannerppal";
import Footer from "@components/Footer";

const Carrelage = () => {
  return (
    <>
      <Header />
      <Bannerppal />
      <main class="content-wrapper">
        <div class="container">
          <div class="contenu">
            <h1>
              <span>CARRELAGE </span>
            </h1>
            <p>
              Nos carreleurs pratiquent en toutes circonstances, de la pose à
              neuf mais également en rénovation et réparation de bâtiments.
              Réalisations, sur base de plans ou de croquis, d’instructions
              verbales ou écrites, des revêtements de surfaces en matériaux
              rigides (faïences, grès, céramiques, pierres naturelles …). Ces
              travaux peuvent être exécutés en intérieur et en extérieur.
              Toujours à l’écoute des nouvelles tendances et nouveautés
              techniques. Nos carreleurs évaluent votre projet avec vous, ils
              vous conseillent et élaborent un devis gratuit.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Carrelage;
