import React from "react";
import Header from "@components/Header";
import Bannerppal from "@components/Bannerppal";
import Footer from "@components/Footer";

const Cuisine = () => {
  return (
    <>
      <Header />
      <Bannerppal />
      <main class="content-wrapper">
        <div class="container">
          <div class="contenu">
            <h1>
              <h1>
                <span>CUISINE</span>
              </h1>
            </h1>
            <p>
            Nous créons et installons des cuisines équipées sur mesure de haute qualité pour répondre à vos besoins et à votre style. 
            </p>
            <p>
            Avec un large choix de couleurs et de matériaux, nos cuisines modernes et traditionnelles offrent confort et fonctionnalité tout en étant esthétiquement agréables. 
            <p>
            Notre priorité est votre satisfaction et nous sommes heureux de fournir des devis personnalisés. 
            <p>
            Veuillez noter que nos services de devis sont gratuit, notre cuisiniste peut se déplacer chez vous pour mieux comprendre vos besoins et vous fournir les meilleurs conseils.
            </p>

            </p>

            </p>

          
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Cuisine;
