import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Menuiserie = () => {
  return (
    <>
      <Header />
      <main class="content-wrapper">
        <div class="container">
          <div class="contenu">
            <h1>
              <h1>
                <span>MÉNUISERIE</span>
              </h1>
            </h1>
            <p>
              Nos compétences en menuiserie pour vos aménagements extérieurs et
              vos aménagements extérieurs, nous prenons en charge votre projet
              depuis sa conception jusqu’à la réalisation.
              <ul>
                <h3>Aménagement intérieur avec la fourniture et pose:</h3>
                <li>Escalier en bois, parquet.</li>
                <li>Bardage.</li>
                <li>
                  Placards, dressing, aménagement de votre grenier/combles.
                </li>
                <li>Portes intérieures bois, étagères, bibliothèques.</li>
              </ul>
              <ul>
                <h3>Aménagement extérieur avec la fourniture et pose:</h3>
                <li>Terrasse en bois.</li>
                <li>Escalier en bois.</li>
                <li>Châssis en bois.</li>
                <li>Bardage.</li>
              </ul>
              Vous avez le choix des matériaux et du style.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Menuiserie;
