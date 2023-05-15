import React from "react";
import styles from '@styles/footer.css';
import logoTheGreenSolutions from '.././assets/icons/the_greensolutions_horizontal.png';


const Footer = () => {
  return (
    <>
      <footer className="bottom">
        <div className="container">
          <div className="contact">
            <div className="bloc1">
              <h2>Contactez-nous</h2>
              <div className="bloc11">
                {" "}
                Voskapelstraat 8 <br /> B-1933 Sterrebeek <br />{" "}
                <span className="googlemaps_v2">
                  <label className="modal-label" for="modal_googlemaps_1">
                    Plan d’accès
                  </label>
                  <input
                    className="modal-state"
                    id="modal_googlemaps_1"
                    type="checkbox"
                  />
                  <span className="modal__container">
                    <label
                      className="modal__bg"
                      for="modal_googlemaps_1"
                    ></label>
                    <span className="modal__inner">
                      <label className="modal__close" for="modal_googlemaps_1">
                        <span className="fa-stack fa-lg">
                          <i className="fa fa-circle fa-stack-2x"></i>
                          <i className="fa fa-times fa-stack-1x fa-inverse"></i>
                        </span>
                      </label>
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2517.969802326124!2d4.5150603811574515!3d50.86875879456685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3de9bb9d77f8d%3A0x145744f32e466349!2sVoskapelstraat%2C%201933%20Zaventem!5e0!3m2!1sen!2sbe!4v1684148959452!5m2!1sen!2sbe" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </span>
                  </span>
                </span>
              </div>

              <div className="bloc12">
                Tél:. <span className="phone">0483 05 37 58</span>
                <span className="phone-responsive">
                  <a href="tel:0483053758">0483 05 37 58</a>
                </span>
              </div>
              <div className="bloc13">
                {" "}
                <a
                  href="mailto:thegreensolutionsconstruction@gmail.com"
                  className="adwconversion_email"
                  data-adwconversion="thegreensolutionsconstruction@gmail.com"
                >
                  thegreensolutionsconstruction@gmail.com
                </a>
                <br />
                N°TVA : BE 0647.635.544
              </div>
            </div>
            <div className="bloc2">
              {/* <h1 className="icono-footer">THE GREEN <img src={iconoCasa} />SOLUTIONS</h1> */}
              <img src={logoTheGreenSolutions} alt="THE GREEN SOLUTIONS" className="logo-thegreensolutions"/>
              <div className="fb">
                <div className="networks_linking">
                  <a
                    href="https://www.facebook.com/thegardensbruxelles"
                    target="_blank"
                    className="networks_facebook"
                  >
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/thegardensverts/"
                    target="_blank"
                    className="networks_instagram"
                  >
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="bloc3">
              <h2>Joignable</h2>
              <div id="openingTimesBlock" className="containerOpening">
                <div className="openingLine">
                  <span className="openingDay">Lu </span>
                  <span className="openingTime">08:00 - 19:00</span>
                </div>
                <div className="openingLine">
                  <span className="openingDay">Ma </span>
                  <span className="openingTime">08:00 - 19:00</span>
                </div>
                <div className="openingLine">
                  <span className="openingDay">Me </span>
                  <span className="openingTime">08:00 - 19:00</span>
                </div>
                <div className="openingLine">
                  <span className="openingDay">Je </span>
                  <span className="openingTime">08:00 - 19:00</span>
                </div>
                <div className="openingLine">
                  <span className="openingDay">Ve </span>
                  <span className="openingTime">08:00 - 19:00</span>
                </div>
                <div className="openingLine">
                  <span className="openingDay">Sa </span>
                  <span className="openingTime">09:00 - 14:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
