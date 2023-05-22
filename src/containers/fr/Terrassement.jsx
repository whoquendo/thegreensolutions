import React from "react";
import Navbar from "@components/Navbar";
import Bannerppal from "@components/Bannerppal";
import Footer1 from "@components/Footer1";

const Terrassement = () => {
  return (
    <>
      <Navbar />
      <Bannerppal />
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
                <li>Installation de bassin naturel</li>
                <li>Raccordement à l’égout</li>
                <li>Abris de jardin.</li>
                <li>Démolition partielle ou intégrale de structures</li>
                <li>Création de pelouses</li>
                <li>
                  Poses de dalles en béton-Constructions terrasses-Pavages
                </li>
                <li>Confection d’un mur</li>
              </ul>
            </p>
          </div>
        </div>
      </main>
      <Footer1 />
    </>
  );
};

export default Terrassement;
