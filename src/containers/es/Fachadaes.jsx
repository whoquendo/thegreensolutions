import React from "react";
import Navbares from "../../components/es/Navbares";
import Bannerppal from "../../components/Bannerppal";
import Footer1es from "../../components/es/Footer1es";

const Fachadaes = () => {
    return (
      <>
        <Navbares />
        <Bannerppal />
        <main class="content-wrapper">
          <div class="container">
            <div class="contenu">
              <h1>
                <h1>
                  <span>FACHADA. LIMPIEZA</span>
                </h1>
              </h1>
              <p>
              Como especialistas en rehabilitación de fachadas, podemos ayudarle en la realización de sus proyectos para devolver la vida a su edificio y mejorar su durabilidad. Ofrecemos diferentes procesos para satisfacer sus necesidades:
                <ul>
                  <li>Aislamiento y estética.</li>
                  <li>Tratamiento de maderas</li>
                  <li>Enlucidos de alto rendimiento.</li>
                  <li>Limpieza de fachadas.</li>
                  <li>Aislamiento de paredes por el exterior.</li>
                  <li>Impermeabilización contra la humedad y el musgo.</li>
                </ul>
              </p>
             <p>
             Estamos a su disposición para asesorarle y realizar los trabajos necesarios para poner en valor su vivienda.
             </p>
            </div>
          </div>
        </main>
        <Footer1es />
      </>
    );
  };
  
  export default Fachadaes;