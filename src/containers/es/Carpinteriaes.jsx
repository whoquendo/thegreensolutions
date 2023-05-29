import React from "react";
import Navbares from "../../components/es/Navbares";
import Bannerppal from "../../components/Bannerppal";
import Footer1es from "../../components/es/Footer1es";

const Carpinteriaes = () => {
    return (
      <>
        <Navbares />
        <Bannerppal />
        <main class="content-wrapper">
          <div class="container">
            <div class="contenu">
              <h1>
                 CARPINTERIA
                </h1>
              <p>
              Nuestras competencias en carpintería para sus acondicionamientos exteriores y sus herrajes exteriores, nos encargamos de su proyecto desde su concepción hasta su realización.
                <ul>
                  <h3>EQUIPAMIENTOS INTERIORES CON SUMINISTRO E INSTALACIÓN:</h3>
                  <li>Escaleras de madera.</li>
                  <li>Revestimientos.</li>
                  <li>
                  Armarios, vestidores, acondicionamiento de su ático.
                  </li>
                  <li>Puertas interiores de madera, estanterías, bibliotecas.</li>
                </ul>
                <ul>
                  <h3>ACONDICIONAMIENTO EXTERIOR CON SUMINISTRO E INSTALACIÓN:</h3>
                  <li>Terraza de madera.</li>
                  <li>Marcos de madera.</li>
                  <li>Revestimiento.</li>
                </ul>
                Puede elegir los materiales y el estilo.
              </p>
            </div>
          </div>
        </main>
        <Footer1es />
      </>
    );
  };
  
  export default Carpinteriaes;
  