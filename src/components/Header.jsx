import React from "react";
import Styles from '../styles/Header.css'
import logo from '../assets/icons/the_greensolutionsv2.png'


const Header = () => {
  return (
    <>
    <div className="container-navbar">
    <header class="top sticky-top">
        <div class="container">
          <div class="header-grid">
            <nav class="main-nav">
              <ul class="sf-menu">
              <li>
              <span>
                <img src={logo} className="logo-navbar"/>
                </span>
              </li>
                <li class="selected" id="menu_1">
                  <a href="/">Accueil</a>
                </li>
                {/* <li class="" id="menu_4">
                  <a href="/fr/apropos">À Propos</a>
                </li> */}
                <li class="" id="menu_19">
                  <a href="/">Nos services</a>
                  <ul>
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
                  </ul>
                </li>
                <li class="" id="menu_5">
                  <a href="/Galerie-photos">Galerie photos</a>
                </li>
                <li class="" id="menu_6">
                  <a href="Devis">Devis - contact</a>
                </li>
              </ul>
            </nav>
            {/* navbar mobil */}
            <nav class="mobile-nav">
            <div>
            <img src={logo} className="logo-navbar" alt="" />
          </div>
              <a href="#navigation">
                <i class="fas fa-bars"></i>
              </a>
            </nav>
          </div>
        </div>
      </header>

      <div class="menu-wrap">
            
        <nav class="mobile-menu">
            <ul>
                <li class="selected">
                    <a href="/">
                        Accueil</a>
                </li>
                <li class="">
                    <a href="/fr/apropos.html">
                        À Propos</a>
                </li>
                <li class="">
                    <a href="/">
                        Nos services</a>
                    <ul>
                        <li class="">
                            <a href="Carrelage">
                                CARRELAGE </a>
                        </li>
                        <li class="">
                            <a href="Chassis">
                                CHÂSSIS </a>
                        </li>
                        <li class="">
                            <a href="Cuisine">
                                CUISINE</a>
                        </li>
                        <li class="">
                            <a href="Demolition">
                                DÉMOLITION </a>
                        </li>
                        <li class="">
                            <a href="Menuiserie">
                                MENUISERIE </a>
                        </li>
                        <li class="">
                            <a href="Peinture">
                                PEINTURE </a>
                        </li>
                        <li class="">
                            <a href="Plaffonage">
                                PLAFONNAGE ET CLOISON </a>
                        </li>
                        <li class="">
                            <a href="Façade">
                                FAÇADE. NETTOYAGE </a>
                        </li>
                        <li class="">
                            <a href="Fauxplafonds">
                                FAUX PLAFONDS </a>
                        </li>
                        <li class="">
                            <a href="Balustrade">
                                BALUSTRADE </a>
                        </li>
                        <li class="">
                            <a href="Terrassement">
                                TERRASSEMENT </a>
                        </li>
                        <li class="">
                            <a href="Toiture">
                                TOITURE </a>
                        </li>
                    </ul>

                </li>
                <li class="">
                    <a href="Galerie-photos">
                        Galerie photos</a>
                </li>
                <li class="">
                    <a href="Devis">
                        Devis - contact</a>
                </li>
            </ul>

        </nav>
        <button class="close-button" id="close-button">Close Menu</button>
    </div>
    </div>

    </>
  );
};

export default Header;
