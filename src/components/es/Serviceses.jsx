import React from "react";
import services from "../../styles/Services.css";
import balustrade from "../../assets/imagesTravails/balustrade.jpeg";

const Serviceses = () => {
  return (
    <>
      <div>
        <h1 className="title-services-general">Descubre nuestros servicios</h1>
      </div>
      <section className="services">
        <div className="items-services">
          <div class="div-imagen">
            <div className="container-title-service">
              <h1 className="title-service">BALDOSA</h1>
            </div>
            <a href="/Baldosaes">
              <img
                className="desvanecer"
                src="https://media.istockphoto.com/id/979340006/fr/photo/ouvrier-mise-en-c%C3%A9ramique-carreaux-de-sol.jpg?s=612x612&w=is&k=20&c=o6Sj-MAD0_FmZNZwRX3XKUMl7ayxw0WCmXPamy7fYpA="
              />
            </a>
          </div>

          <div class="div-imagen">
            <div className="container-title-service">
              <h1 className="title-service">PINTURA</h1>
            </div>
            <a href="/Pinturaes">
              <img
                className="desvanecer"
                src="https://images.pexels.com/photos/6474123/pexels-photo-6474123.jpeg?auto=compress&cs=tinysrgb&w=400"
              />
            </a>
          </div>

          <div class="div-imagen">
            <div className="container-title-service">
              <h1 className="title-service">FACHADA. LIMPIEZA</h1>
            </div>
            <a href="/Fachadaes">
              <img
                className="desvanecer"
                src="https://media.istockphoto.com/id/980986086/fr/photo/travailleur-avec-laveuse-haute-pression-nettoyage-fa%C3%A7ade-maison.jpg?s=2048x2048&w=is&k=20&c=XYSkgMC9w-KeBoHemuGg9ZTVgQ7nA8udroNE9fo3q74="
              />
            </a>
          </div>

          <div class="div-imagen">
            <div className="container-title-service">
              <h1 className="title-service">BALUSTRADA</h1>
            </div>
            <a href="/Balustradaes">
              <img className="desvanecer" src={balustrade} />
            </a>
          </div>

          <div class="div-imagen">
            <div className="container-title-service">
              <h1 className="title-service">COCINA</h1>
            </div>
            <a href="/Cocinaes">
              <img
                className="desvanecer"
                src="https://images.pexels.com/photos/3623785/pexels-photo-3623785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Serviceses;
