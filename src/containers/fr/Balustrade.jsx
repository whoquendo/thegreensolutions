import React from "react";
import Header from "@components/Header";
import Footer from "@components/Footer";


const Balustrade = () => {
  return (
    <>
    <Header />
      <main class="content-wrapper">
        <div class="container">
          <div class="contenu">
            <header>
              <h1>
                <span>BALUSTRADE</span>
              </h1>
            </header>
            <p>
              Fabriqués sur mesures en fonction de la situation (fixations
              spécifiques utilisées en fonction du sol, pose avec scellement
              chimique pour la solidité).
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Balustrade;
