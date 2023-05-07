import React from 'react'

const AvantServices = () => {
  return (
    <>
    <div class="banner">
        <div class="fluid_container">
            <div class="camera_wrap  camera_black_skin" id="slideshow">
                <div data-thumb="/images/allee_en_paver.jpeg" data-src="/images/allee_en_paver.jpeg">
                </div>
                <div data-thumb="/images/chemin.jpeg" data-src="/images/chemin.jpeg">
                </div>
                <div data-thumb="/images/escalier.jpeg" data-src="/images/escalier.jpeg">
                </div>
            </div>
        </div>
        <div class="container">
            <div class="slogon">
                <p>Entreprise <span class="titrp" >de renovation de bâtiments</span></p>
            </div>
            <div class="content-logo">

                <a href="/" class="logo"> <img src="/images/logo_temporale.png"
                        alt="the green solutions SRL - Entreprise de jardinage"/></a>
                <nav class="language">
                    <a href="/" class="selected"><span id="lang-fr">fr</span></a><a href="/nl/indexnl.html"
                        class=""><span id="lang-nl">nl</span></a>

                </nav>
            </div>
            <div class="cta">

                <div class="cta1">
                    <a href="/fr/jardinier">
                        <span class="titr">Contactez-nous au</span>
                        <span class="number">02 899 01 32</span></a>


                    <span class="number-responsive">
                        <span class="titrr">Contactez-nous au</span>

                        <a onclick="goog_report_conversion ('tel:28990132')" href="tel:02 899 01 32"> <span
                                class="tel-r">02 899 01 32</span></a> </span>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default AvantServices