import React, { useState } from "react";
import closeicon from "@assets/icons/icon_close.png";
import ubicacionicon from "@assets/icons/icon_ubicacion.png";
import mobilicon from "@assets/icons/icon_movil.png";
import emailicon from "@assets/icons/icon_email.png";
import logo from "@assets/icons/the_greensolutions_horizontal.png";
import facebookicon from "@assets/icons/icon-facebook.png";
import instagramicon from "@assets/icons/icon-instagram.png";
import "../styles/footer1.css";

const Footer1 = () => {
  const [modalMaps, setModalMaps] = useState(false);

  const openModalMaps = () => {
    setModalMaps(!modalMaps);
  };

  return (
    <footer className="et-footer">
      <div className="item1">
        <h2>Contactez-nous</h2>
        <div className="cotainer-adresse">
          <div>
            <img src={ubicacionicon} alt="" />
          </div>
          <div className="adresse">
            <h6>
              Voskapelstraat 8 <br /> B-1933 Sterrebeek <br />{" "}
            </h6>
            <span>
              <a onClick={openModalMaps}>Plan d'accès</a>
            </span>
          </div>
        </div>
        <div className="container-gsm">
          <div>
            <img src={mobilicon} alt="GSM" />
          </div>
          <div className="div-phone">
            <h6>
              Tél: <span className="phone">0483 05 37 58</span>
              <span className="phone-responsive">
                <a href="tel:0483053758">0483 05 37 58</a>
              </span>
            </h6>
          </div>
        </div>
        <div className="container-del-email">
          <div>
            <img src={emailicon} alt="Email" />
          </div>
          <div className="div-email">
            <a
              href="mailto:thegreensolutionsconstruction@gmail.com"
              data-adwconversion="thegreensolutionsconstruction@gmail.com"
            >
              
            </a>
          </div>
        </div>
      </div>

      <div className="item2">
        <div className="img-logo">
          <img src={logo} alt="The green solutions" />
        </div>
        <div className="container-reseaux">
          <div className="div-facebook">
            <a
              href="https://www.facebook.com/thegreensolutionsconstruction"
              target="_blank"
            >
              <img src={facebookicon} alt="Facebook" />
            </a>
          </div>
          <div className="div-instagram">
            <a
              href="https://www.instagram.com/thegreensolutions/"
              target="_blank"
            >
              <img src={instagramicon} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
      <div className="item3">
        <h2>Joignable</h2>
        <div className="jour">
          <h6>
            Lu <span> ------- </span>
          </h6>
          <h6> &nbsp; Entre 08:00 - 19:00</h6>
        </div>
        <div className="jour">
          <h6>
            Ma <span> ------- </span>
          </h6>
          <h6> &nbsp; Entre 08:00 - 19:00</h6>
        </div>
        <div className="jour">
          <h6>
            Me <span> ------- </span>
          </h6>
          <h6> &nbsp; Entre 08:00 - 19:00</h6>
        </div>
        <div className="jour">
          <h6>
            Je <span> ------- </span>
          </h6>
          <h6> &nbsp; Entre 08:00 - 19:00</h6>
        </div>
        <div className="jour">
          <h6>
            Ve <span> ------- </span>
          </h6>
          <h6> &nbsp; Entre 08:00 - 19:00</h6>
        </div>
        <div className="jour">
          <h6>
            Sa <span> ------- </span>
          </h6>
          <h6> &nbsp; Entre 09:00 - 14:00</h6>
        </div>
      </div>

      {modalMaps && (
        <div className="modal-adresse" onClick={openModalMaps}>
          <span className="close-modal">
            <img src={closeicon} alt="close-icon" onClick={openModalMaps} />
          </span>
          <div className="google-maps">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d135566.81119318906!2d4.353035313531641!3d50.849390171474646!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3de9bb9d77f8d%3A0x145744f32e466349!2sVoskapelstraat%2C%201933%20Zaventem!5e0!3m2!1sen!2sbe!4v1684703961095!5m2!1sen!2sbe"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer1;
