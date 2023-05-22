import React, { useState } from "react";
import logo from "../../assets/icons/the_greensolutions_horizontal.png";
import iconmenu from "../../assets/icons/icon-menu.png";
import iconclose from "../../assets/icons/icon_close.png";
import espana from "../../assets/icons/espana.png";
import belgica from "../../assets/icons/belgica.png";
import paisesbajos from "../../assets/icons/paises-bajos.png";
import "../../styles/navbar.css";

const Navbarnl = () => {
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
                <a href="/Homenl">Home</a>
              </li>
              <li className="list" onClick={handleToggleMenu}>
                <a>Onze diensten</a>
              </li>
              <li>
                <a href="/Fotogalerijnl">Fotogalerij</a>
              </li>
              <li>
                <a href="/Prijsoffertenl">Prijsofferte - Contact</a>
              </li>
            </ul>
          </div>
          <div class="navbar-right">
            <ul>
              <li class="item-langue" onClick={handleToggleLangue}>
                <a>
                  <img src={paisesbajos} alt="" />
                </a>
              </li>
            </ul>
            {toggleLangue && (
              <ul className="menu-languages">
                <li>
                  <a href="/">
                    <img src={belgica} alt="langue-NL" />
                  </a>
                </li>
                <li>
                  <a href="">
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
                <a href="../../Tilingnl">TEGELWERKEN</a>
              </li>
              <li class="">
                <a href="../../Chassisnl">RAMEN EN DEUREN </a>
              </li>
              <li class="">
                <a href="../../Keukennl">KEUKEN</a>
              </li>
              <li class="">
                <a href="../../Demolitienl">AFBRAAKWERKEN</a>
              </li>
              <li class="">
                <a href="../../Menuiserienl">SCHRIJNWERKEN</a>
              </li>
              <li class="">
                <a href="../../Schilderijnl">SCHILDERWERKEN</a>
              </li>
              <li class="">
                <a href="../../Plafondnl">PLEISTERWERKEN EN SCHEIDINGSWANDEN</a>
              </li>
              <li class="">
                <a href="../../Façadenl">GEVELWERKEN</a>
              </li>
              <li class="">
                <a href="../../Valsespiegelsnl">SYSTEEMPLAFOND</a>
              </li>
              <li class="">
                <a href="../../Balustradenl">BALUSTRADE </a>
              </li>
              <li class="">
                <a href="../../Terrassingnl">TERRASWERKEN</a>
              </li>
              <li class="">
                <a href="../../Daknl">DAK</a>
              </li>
              <li class="item-menu-mobil">
                <a href="../../Fotogalerijnl">Fotogalerij</a>
              </li>
              <li class="item-menu-mobil">
                <a href="../../Prijsoffertenl">PRIJSOFFERTE - CONTACT</a>
              </li>
            </ul>
          )}
        </nav>
      </header>
    </>
  );
};

export default Navbarnl;
