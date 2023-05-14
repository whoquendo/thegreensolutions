import React from 'react';
import imagebanner from '../assets/imagesConstruction/mur_de_briques2.jpeg';
import logo from '../assets/icons/the_greensolutionsv2.png'
import Styles from '../styles/banner-ppal.css'


const Bannerppal = () => {
  return (
    <div className='container-banner-ppal' style={{ backgroundImage: `url(${imagebanner})` }}>
        <div className="logo">
            <img src={logo} alt="Logo the green solutions" />
        </div>
        <div className="container-listLangues">
            <div className="langue">
                <a href="/"><h1>FR</h1></a>
            </div>
            <div className='langue'>
                <a href="/Homenl"><h1>NL</h1></a>
            </div>
        </div>
    </div>
  )
}

export default Bannerppal



