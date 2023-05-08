import React from "react";
import "@styles/bannerLangue.css";
import logo from "../assets/imagesConstruction/logo_thegreensolutions.png";

const ListLangue = () => {
  return (
    <>
      <section className="container-langue">
        <div className="content-logo">
          <a href="/" class="logo">
            {" "}
            <img
              className="logo-devis"
              src={logo}
              alt="The Green Solutions SRL - Entreprise de construction"
            />
          </a>{" "}

        </div>
      </section>
    </>
  );
};

export default ListLangue;
