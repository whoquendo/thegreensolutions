import React, { useState } from "react";
import logo from "../../assets/icons/the_greensolutions_horizontal.png"
import iconmenu from "../../assets/icons/icon-menu.png";
import iconclose from "../../assets/icons/icon_close.png";
import espana from "../../assets/icons/espana.png";
import belgica from "../../assets/icons/belgica.png";
import paisesbajos from "../../assets/icons/paises-bajos.png";
import "../../styles/navbar.css";

const Navbares = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleLangue(false);
    setToggleMenu(!toggleMenu);
  };

  const [toggleLangue, setToggleLangue] = useState(false);

  const handleToggleLangue = () => {
    setToggleMenu(false);
    setToggleLangue(!toggleLangue);
  };

  return (
    <>
      <header className="header">
        <nav>
          <img
            src={iconmenu}
            onClick={handleToggleMenu}
            alt="menu"
            className="menu"
          />
          <div class="navbar-left">
            <a href="/Homees">
              <img src={logo} alt="logo" className="logo" />
            </a>
            <ul>
              <li>
                <a href="/Homees">Home</a>
              </li>
              <li className="list" onClick={handleToggleMenu}>
                <a>Nuestros Servicios</a>
              </li>
              <li>
                <a href="/GaleriaFotos">Galeria de fotos</a>
              </li>
              <li>
                <a href="/Cotizaciones">Cotización - contacto</a>
              </li>
            </ul>
          </div>
          <div class="navbar-right">
            <ul>
              <li class="item-langue" onClick={handleToggleLangue}>
                <a>
                  <img src={espana} alt="langue-ES" />
                </a>
              </li>
            </ul>
            {toggleLangue && (
              <ul className="menu-languages">
                <li>
                  <a href="/Homenl">
                    <img src={paisesbajos} alt="langue-NL" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img src={belgica} alt="langue-BE" />
                  </a>
                </li>
              </ul>
            )}
          </div>
          {toggleMenu && (
            <ul className="menu-services">
              <span className="icon-close" onClick={handleToggleMenu}>
                <img src={iconclose} alt="Close" />
              </span>
              <li class="">
                <a href="Baldosaes">BALDOSA </a>
              </li>
              <li class="">
                <a href="Marcoes">MARCOS</a>
              </li>
              <li class="">
                <a href="Cocinaes">COCINAS</a>
              </li>
              <li class="">
                <a href="Demoliciones">DEMOLICIÓN </a>
              </li>
              <li class="">
                <a href="Carpinteriaes">CARPINTERIA </a>
              </li>
              <li class="">
                <a href="Pinturaes">PINTURA </a>
              </li>
              <li class="">
                <a href="Plaffonagees">PLAFONNAGE ET CLOISON </a>
              </li>
              <li class="">
                <a href="Fachadaes">FACHADA. LIMPIEZA </a>
              </li>
              <li class="">
                <a href="Cielorrasoes">CIELORRASO </a>
              </li>
              <li class="">
                <a href="Balustradaes">BALUSTRADA </a>
              </li>
              <li class="">
                <a href="Terrassementes">TERRASSEMENT </a>
              </li>
              <li class="">
                <a href="Techoses">TECHOS </a>
              </li>
                <li className="item-menu-mobil">
                    <a href="GaleriaFotos">
                        Galeria de fotos</a>
                </li>
                <li className="item-menu-mobil">
                    <a href="Cotizaciones">
                        Cotización - contacto</a>
                </li>
              
            </ul>
          )}
        </nav>
      </header>
    </>
  );
};

export default Navbares;