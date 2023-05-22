import React from "react";
import Navbares from "../../components/es/Navbares";
import Bannerppal from "../../components/Bannerppal";
import Footer1es from "../../components/es/Footer1es";

const Marcoes = () => {
  return (
    <>
      <Navbares />
      <Bannerppal />
      <main class="content-wrapper">
        <div class="container">
          <div class="contenu">
            <h1>
              <span>Marco</span>
            </h1>
            <p> 
            Somos expertos en la instalación de ventanas, puertas y contraventanas, tanto en obra nueva como en rehabilitación. Ofrecemos una amplia gama de materiales en PVC, aluminio y madera, que ofrecen muchas ventajas, incluyendo facilidad de mantenimiento, excelente aislamiento térmico y acústico, durabilidad, así como muchos estilos, colores y formas.
            </p>
            <p>
            Todas nuestras instalaciones cuentan con herrajes antirrobo y nuestras puertas están equipadas con cerraduras multipunto para mayor seguridad. Utilizamos doble acristalamiento de alto rendimiento con una cara segura según sea necesario. También podemos fabricar rejillas a medida para todas las puertas y ventanas.
            </p>
          </div>
        </div>
      </main>
      <Footer1es />
    </>
  );
};

export default Marcoes;