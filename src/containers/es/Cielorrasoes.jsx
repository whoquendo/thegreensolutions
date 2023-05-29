import React from "react";
import Navbares from "../../components/es/Navbares";
import Bannerppal from "../../components/Bannerppal";
import Footer1es from "../../components/es/Footer1es";

const Cielorrasoes = () => {
    return (
      <>
        <Navbares />
        <Bannerppal />
        <main class="content-wrapper">
          <div class="container">
            <div class="contenu">
              <h1>
                  CIELORRASOS
                </h1>
              <p>
                Nuestro equipo está formado para utilizar diversas técnicas que garanticen un óptimo aislamiento acústico y térmico.
              </p>
              <p>
              Tanto si vive en un piso como en una casa de varias plantas, le ofrecemos techos autoportantes para evitar la propagación del ruido del nivel superior al inferior.
              </p>
              <p>
              También ofrecemos cielorrasos para conseguir un aislamiento térmico eficaz, reducir el consumo de calefacción y ocultar los conductos técnicos.
              </p>
              <p>
              La calidad de nuestra visita preliminar y del análisis posterior es primordial para garantizar la satisfacción del cliente.
              </p>
            </div>
          </div>
        </main>
        <Footer1es />
      </>
    );
  };
  
  export default Cielorrasoes;