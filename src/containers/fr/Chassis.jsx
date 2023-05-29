import React from "react";
import Navbar from "@components/Navbar";
import Bannerppal from "@components/Bannerppal";
import Footer1 from "@components/Footer1";


const Chassis = () => {
  return (
    <>
      <Navbar />
      <Bannerppal />
      <main class="content-wrapper">
        <div class="container">
          <div class="contenu">
            <h1>
              CHÂSIS
            </h1>
            <p>
            Nous sommes des experts en installation de châssis, portes et volets, que ce soit pour une nouvelle construction ou une rénovation. Nous proposons une large gamme de matériaux en PVC, aluminium et bois, qui offrent de nombreux avantages, notamment une facilité d'entretien, une excellente isolation thermique et acoustique, une grande durabilité, ainsi que de nombreux styles, couleurs et formes. 
            </p>
            <p>
            Toutes nos installations sont équipées d'une quincaillerie antieffraction et nos portes sont dotées de serrures multipoints pour une sécurité accrue. Nous utilisons des doubles vitrages à haut rendement avec une face sécurisée selon les besoins. Nous pouvons également fabriquer sur mesure des moustiquaires pour toutes les portes et fenêtres.
            </p>
          </div>
        </div>
      </main>
      <Footer1 />
    </>
  );
};

export default Chassis;
