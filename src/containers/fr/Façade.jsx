import React from "react";
import Navbar from "@components/Navbar";
import Bannerppal from "@components/Bannerppal";
import Footer1 from "@components/Footer1";

const Façade = () => {
  return (
    <>
      <Navbar />
      <Bannerppal />
      <main class="content-wrapper">
        <div class="container">
          <div class="contenu">
            <h1>
                FAÇADE - NETTOYAGE
            </h1>
            <p>
            En tant que spécialistes de la rénovation de façades, nous vous accompagnons dans la réalisation de vos projets pour redonner vie à votre bâtiment et améliorer sa durabilité. Nous proposons différents procédés pour répondre à vos besoins: 
              <ul>
                <li>Isolant et esthétique.</li>
                <li>Traitement des boiseries.</li>
                <li>Crépi performant.</li>
                <li>Nettoyage de façades.</li>
                <li>Isolation des murs par l'extérieur.</li>
                <li>Hydrofugation contre l'humidité et la mousse.</li>
              </ul>
            </p>
           <p>
           Nous sommes à votre disposition pour vous conseiller et réaliser les travaux nécessaires pour valoriser votre patrimoine immobilier.
           </p>
          </div>
        </div>
      </main>
      <Footer1 />
    </>
  );
};

export default Façade;
