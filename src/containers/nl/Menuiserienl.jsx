import React from "react";
import Headernl from "@components/nl/Headernl";
import Bannerppal from "@components/Bannerppal";
import Footernl from "@components/nl/Footernl";


const Menuiserienl = () => {
  return (
    <>
      <Headernl />
      <Bannerppal />
      <main class="content-wrapper">
        <div class="container">
          <div class="contenu">
            <h1>
              <h1>
                <span>MENUISERIE</span>
              </h1>
            </h1>
            <p>
            Met onze vaardigheden op het gebied van timmerwerk voor uw buiteninrichting, nemen wij uw project vanaf het ontwerp tot de voltooiing voor onze rekening.
              <ul>
                <h3>Binnenhuisarchitectuur met levering en installatie:</h3>
                <li>Houten trap, parketvloer.</li>
                <li>Bekleding.</li>
                <li>
                Kasten, kleedkamers, het inrichten van uw zolder.
                </li>
                <li>Houten binnendeuren, planken, boekenkasten.</li>
              </ul>
              <ul>
                <h3>Buiteninrichting met levering en installatie:</h3>
                <li>Houten terras.</li>
                <li>Houten trap.</li>
                <li>Houten frame.</li>
                <li>Bekleding.</li>
              </ul>
              U kunt kiezen uit verschillende materialen en stijlen.
            </p>
          </div>
        </div>
      </main>
      <Footernl />
    </>
  );
};

export default Menuiserienl;