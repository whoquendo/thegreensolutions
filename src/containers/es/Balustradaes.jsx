import React from "react";
import Navbares from "../../components/es/Navbares";
import Bannerppal from "../../components/Bannerppal";
import Footer1es from "../../components/es/Footer1es";

const Balustradaes = () => {
    return (
      <>
      <Navbares />
      <Bannerppal />
        <main class="content-wrapper">
          <div class="container">
            <div class="contenu">
              <header>
                <h1>
                  BALUSTRADA
                </h1>
              </header>
              <p>
              Creamos soluciones a medida. Utilizamos fijaciones específicas para cada tipo de suelo e instalamos con sellados químicos para una resistencia óptima. Nuestros servicios se personalizan para satisfacer las necesidades únicas de cada proyecto.
              </p>
            </div>
          </div>
          {/* <section>
            <h1>Nos réalisations en Balustrade</h1>
            <div>
            </div>
          </section> */}
        </main>
        <Footer1es />
      </>
    );
  };
  
  export default Balustradaes;