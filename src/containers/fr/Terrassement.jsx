import React from "react";
import Header from "@components/Header";
import Footer from "@components/Footer";

const Terrassement = () => {
  return (
    <>
      <Header />
      <main class="content-wrapper">
        <div class="container">
          <div class="contenu">
            <h1>
              <h1>
                <span>TERRASSEMENT</span>
              </h1>
            </h1>
            <p>
              Différents travaux pour vos espaces extérieurs : Nivellement –
              terrassement – installations de clôtures tous types et de
              palissades (bois et béton).
              <ul>
                <li>Création de pelouses</li>
                <li>Confection d’un mur</li>
                <li>Installation de bassin naturel</li>
                <li>Démolition partielle ou intégrale de structures</li>
                <li>
                  Poses de dalles en béton-Constructions terrasses-Pavages
                </li>
                <li>Raccordement à l’égout</li>
                <li>Abris de jardin.</li>
              </ul>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Terrassement;
