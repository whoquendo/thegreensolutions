import React from "react";
import Navbares from "../../components/es/Navbares";
import Bannerppal from "../../components/Bannerppal";
import Footer1es from "../../components/es/Footer1es";



const Baldosaes = () => {
  return (
    <>
      <Navbares />
      <Bannerppal />
      <main class="content-wrapper">
        <div class="container">
          <div class="contenu">
            <h1>
              <span>BALDOSA</span>
            </h1>
            <p>
           Estamos preparados para afrontar cualquier reto, ya sea una nueva instalación, la renovación o la reparación de un edificio. 
            </p>
            <p>
            Basándonos en planos, bocetos, instrucciones orales o escritas, instalamos materiales elegantes como azulejos, gres, cerámica o piedra natural, tanto en interiores como en exteriores.
              </p>
              <p>
              Siempre estamos al día de las últimas tendencias y tecnologías más innovadoras Nos tomamos el tiempo necesario para conocer su proyecto, asesorarle y proporcionarle un presupuesto detallado gratuito.
              </p>
          </div>
        </div>
      </main>
      <Footer1es />
    </>
  );
};

export default Baldosaes;