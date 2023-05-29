import React from "react";
import Navbares from "../../components/es/Navbares";
import Bannerppal from "../../components/Bannerppal";
import Footer1es from "../../components/es/Footer1es";

const Terrassementes = () => {
  return (
    <>
      <Navbares />
      <Bannerppal />
      <main class="content-wrapper">
        <div class="container">
          <div class="contenu">
            <h1>
                TERRASSEMENT
            </h1>
            <p>
            Trabajos varios para sus espacios exteriores: Nivelación - movimiento de tierras - instalación de todo tipo de vallas y empalizadas (madera y hormigón).
              <ul>
                <li>Instalación de piscinas naturales</li>
                <li>Conexión a la red de alcantarillado</li>
                <li>Refugios de jardín.</li>
                <li>Demolición parcial o total de estructuras</li>
                <li>Creación de césped</li>
                <li>
                Colocación de losas de hormigón - Construcción de terrazas - Pavimentación
                </li>
                <li>Construcción de muros</li>
              </ul>
            </p>
          </div>
        </div>
      </main>
      <Footer1es />
    </>
  );
};

export default Terrassementes;