import React from "react";
import Navbares from "../../components/es/Navbares";
import Bannerppal from "../../components/Bannerppal";
import Footer1es from "../../components/es/Footer1es";

const Demolitiones = () => {
    return (
      <>
        <Navbares />
        <Bannerppal />
        <main class="content-wrapper">
          <div class="container">
            <div class="contenu">
              <header>
                <h1>
                  DEMOLICIONES
                </h1>
              </header>
              <p>
              Demolición parcial o total para todo tipo de edificios, THE GREEN SOLUTIONS ofrece soluciones completas para todas las etapas del proceso, desde el proyecto inicial hasta la eliminación de los residuos.
              </p>
              <p>
              Nuestro equipo de profesionales cualificados cuenta con herramientas y equipos específicos perfectamente adaptados a este tipo de trabajo. THE GREEN SOLUTIONS es el socio ideal para todos sus proyectos de renovación o construcción que requieran una demolición previa, gracias a nuestra fiabilidad y profesionalismo.
              </p>
            </div>
          </div>
        </main>
        <Footer1es />
      </>
    );
  };
  
  export default Demolitiones;