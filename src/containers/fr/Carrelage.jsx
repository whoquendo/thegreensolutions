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
              Nos experts en carrelage sont prêts à relever n'importe quel défi,
              qu'il s'agisse d'une nouvelle installation, d'une rénovation ou
              d'une réparation de bâtiment.
            </p>
            <p>
              Sur la base de plans, de croquis ou d'instructions verbales ou
              écrites, nous installons des revêtements en matériaux rigides tels
              que la faïence, le grès, la céramique ou la pierre naturelle, tant
              à l'intérieur qu'à l'extérieur.
            </p>
            <p>
              Nous sommes toujours à la pointe des dernières tendances et
              technologies innovantes. Nous prenons le temps de connaître votre
              projet, de vous conseiller et de vous fournir un devis détaillé
              gratuit.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Carrelage;
