import React from "react";
import Header from "@components/Header";
import Footer from "@components/Footer";

const Façade = () => {
  return (
    <>
      <Header />
      <main class="content-wrapper">
        <div class="container">
          <div class="contenu">
            <h1>
              <h1>
                <span>FAÇADE. NETTOYAGE</span>
              </h1>
            </h1>
            <p>
              Vous avez envie de redonner une vie, d’isoler, de moderniser votre
              façade ou d’assurer son maintien dans le temps : nous sommes à
              votre disposition pour concrétiser vos projets . Nous vous
              proposons différents procédés pour que votre bâtiment prenne de la
              valeur tout simplement:
              <ul>
                <li>Nettoyages de façades : tous procédés.</li>
                <li>Sablage et rejointoiement.</li>
                <li>Crépi : performant, isolant et esthétique.</li>
                <li>Hydrofugation : contre l’humidité et la mousse.</li>
                <li>Traitement des boiseries.</li>
                <li>Isolation des murs par l’extérieur.</li>
              </ul>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Façade;
