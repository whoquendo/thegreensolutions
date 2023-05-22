import React, { useState } from "react";
import logo from "../assets/icons/the_greensolutions_horizontal.png";
import iconmenu from "../assets/icons/icon-menu.png";
import iconclose from "../assets/icons/icon_close.png";
import espana from "../assets/icons/espana.png";
import belgica from "../assets/icons/belgica.png";
import paisesbajos from "../assets/icons/paises-bajos.png";
import "../styles/navbar.css";

const Navbar = () => {
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
            <a href="/">
              <img src={logo} alt="logo" className="logo" />
            </a>
            <ul>
              <li>
                <a href="/">Accueil</a>
              </li>
              <li className="list" onClick={handleToggleMenu}>
                <a>Nos Services</a>
              </li>
              <li>
                <a href="/Galerie-photos">Galerie photos</a>
              </li>
              <li>
                <a href="/Devis">Devis - contact</a>
              </li>
            </ul>
          </div>
          <div class="navbar-right">
            <ul>
              <li class="item-langue" onClick={handleToggleLangue}>
                <a>
                  <img src={belgica} alt="" />
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
                  <a href="/Homees">
                    <img src={espana} alt="langue-ES" />
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
                <a href="Carrelage">CARRELAGE </a>
              </li>
              <li class="">
                <a href="Chassis">CHÂSSIS </a>
              </li>
              <li class="">
                <a href="Cuisine">CUISINE</a>
              </li>
              <li class="">
                <a href="Demolition">DÉMOLITION </a>
              </li>
              <li class="">
                <a href="Menuiserie">MENUISERIE </a>
              </li>
              <li class="">
                <a href="Peinture">PEINTURE </a>
              </li>
              <li class="">
                <a href="Plaffonage">PLAFONNAGE ET CLOISON </a>
              </li>
              <li class="">
                <a href="Façade">FAÇADE. NETTOYAGE </a>
              </li>
              <li class="">
                <a href="Fauxplafonds">FAUX PLAFONDS </a>
              </li>
              <li class="">
                <a href="Balustrade">BALUSTRADE </a>
              </li>
              <li class="">
                <a href="Terrassement">TERRASSEMENT </a>
              </li>
              <li class="">
                <a href="Toiture">TOITURE </a>
              </li>
                <li className="item-menu-mobil">
                    <a href="Galerie-photos">
                        Galerie photos</a>
                </li>
                <li className="item-menu-mobil">
                    <a href="Devis">
                        Devis - contact</a>
                </li>
              
            </ul>
          )}
        </nav>
      </header>
    </>
  );
};

export default Navbar;
