import React from "react";
import Formemail from "./Formemail";

const Deviscomponent = () => {
  return (
    <>
    <div className="container-general">
      <div className="container-rendez-vous">
        <button>
          <a
            href="https://calendly.com/thegreensolutionsconstruction/60min?"
            target="_blank"
            className="text-rendez-vous"
          >
            Demandez votre devis maintenant
          </a>
        </button>
      </div>
      <Formemail />
    </div>
    </>
  );
};

export default Deviscomponent;
