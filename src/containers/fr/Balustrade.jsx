import React from "react";
import Navbar from "@components/Navbar";
import Bannerppal from "@components/Bannerppal";
import Footer1 from "@components/Footer1";


const Balustrade = () => {
  return (
    <>
    <Navbar />
    <Bannerppal />
      <main class="content-wrapper">
        <div class="container">
          <div class="contenu">
            <header>
              <h1>
                <span>BALUSTRADE</span>
              </h1>
            </header>
            <p>
            Creamos soluciones a medida para cada situación. Utilizamos fijaciones específicas para cada tipo de suelo e instalamos con sellados químicos para una resistencia óptima. Nuestros servicios se personalizan para satisfacer las necesidades únicas de cada proyecto.
            </p>
          </div>
        </div>
        {/* <section>
          <h1>Nos réalisations en Balustrade</h1>
          <div>
          </div>
        </section> */}
      </main>
      <Footer1 />
    </>
  );
};

export default Balustrade;
