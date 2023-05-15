import React from "react";
import Styles from '../../styles/Header.css'
import logo from '../../assets/icons/the_greensolutionsv2.png'


const Headernl = () => {
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
                  <a href="../../Homenl">Home</a>
                </li>
                {/* <li class="" id="menu_4">
                  <a href="/fr/apropos">Over ons</a>
                </li> */}
                <li class="" id="menu_19">
                  <a href="/">Onze diensten</a>
                  <ul>
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
                  </ul>
                </li>
                <li class="" id="menu_5">
                  <a href="../../Fotogalerijnl">Fotogalerij</a>
                </li>
                <li class="" id="menu_6">
                  <a href="../../Prijsoffertenl">PRIJSOFFERTE - CONTACT</a>
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
                    <a href="../../Homenl">
                    Home</a>
                </li>
                <li class="">
                    <a href="/fr/apropos.html">
                    Over ons</a>
                </li>
                <li class="">
                    <a href="/">
                    Onze diensten</a>
                    <ul>
                        <li class="">
                            <a href="../../Tilingnl">
                            TEGELWERKEN</a> 
                        </li>
                        <li class="">
                            <a href="../../Chassisnl">
                            RAMEN EN DEUREN</a>
                        </li>
                        <li class="">
                            <a href="../../Keukennl">
                            KEUKEN</a>
                        </li>
                        <li class="">
                            <a href="../../Demolitienl">
                            DEMOLITIE </a>
                        </li>
                        <li class="">
                            <a href="../../Menuiserienl">
                            SCHRIJNWERKEN</a>
                        </li>
                        <li class="">
                            <a href="../../Schilderijnl">
                            SCHILDERWERKEN</a>
                        </li>
                        <li class="">
                            <a href="../../Plafondnl">
                            PLEISTERWERKEN EN SCHEIDINGSWANDEN</a>
                        </li>
                        <li class="">
                            <a href="../../Façadenl">
                            GEVELWERKEN</a>
                        </li>
                        <li class="">
                            <a href="../../Valsespiegelsnl">
                            SYSTEEMPLAFOND</a>
                        </li>
                        <li class="">
                            <a href="../../Balustradenl">
                            BALUSTRADE </a>
                        </li>
                        <li class="">
                            <a href="../../Terrassingnl">
                            TERRASWERKEN</a>
                        </li>
                        <li class="">
                            <a href="../../Daknl">
                            DAK </a>
                        </li>
                    </ul>

                </li>
                <li class="">
                    <a href="../../Fotogalerijnl">
                    Fotogalerij</a>
                </li>
                <li class="">
                    <a href="../../Prijsoffertenl">
                    PRIJSOFFERTE - CONTACT</a>
                </li>
            </ul>

        </nav>
        <button class="close-button" id="close-button">Close Menu</button>
    </div>
    </div>

    </>
  );
};

export default Headernl;
