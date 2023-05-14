import React from "react";
import Header from "@components/Header";
import Bannerppal from "@components/Bannerppal";
import Footer from "@components/Footer";

const Chassis = () => {
  return (
    <>
      <Header />
      <Bannerppal />
      <main class="content-wrapper">
        <div class="container">
          <div class="contenu">
            <h1>
              <span>CHÂSIS</span>
            </h1>
            <p>
              Nous sommes des spécialistes dans la pose de châssis, portes et
              volets. Que ce soit dans une nouvelle construction ou la
              rénovation, nous vous proposons une large gamme en pvc – aluminium
              – bois : Entretien facile. Excellente isolation thermique et
              acoustique. Une très bonne tenue dans le temps. Nombreux styles,
              coloris et formes. Munis de quincaillerie antieffraction. Portes
              équipées de serrures de sécurités multipoints. Nos réalisations
              pourvues de doubles vitrages à haut rendement avec une face
              sécurisée dès que nécessaire. Nous fabriquons sur mesure les
              moustiquaires qui s’appliquent à toutes portes et fenêtres.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Chassis;
