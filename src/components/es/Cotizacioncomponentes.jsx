import React from "react";
import Formemail from "../Formemail";
import '../../styles/devis.css';

const Deviscomponentes = () => {
  return (
    <>
    <div className="container-general">
      <div className="container-rendez-vous">
        <button>
          <a
            href="https://calendly.com/thegreensolutionsconstruction/60min?"
            target="_blank"
            className="text-rendez-vous">
            Solicite una cotización ahora
          </a>
        </button>
      </div>
      <div className="container-email">
      <Formemail />
      </div>
    </div>
    </>
  );
};

export default Deviscomponentes;