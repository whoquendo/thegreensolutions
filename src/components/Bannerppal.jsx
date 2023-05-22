import React from 'react';
import imagebanner from '../assets/imagesConstruction/mur_de_briques2.jpeg';
import logo from '../assets/icons/the_greensolutionsv2.png';
import logohorizontal from  "../assets/icons/the_greensolutions_horizontal.png";
import Styles from '../styles/banner-ppal.css';


const Bannerppal = () => {
  return (
    <div className='container-banner-ppal' style={{ backgroundImage: `url(${imagebanner})` }}>
        <div className="logo-bannerppal">
            <img src={logo} alt="Logo the green solutions" />
        </div>
    </div>
  )
}

export default Bannerppal



