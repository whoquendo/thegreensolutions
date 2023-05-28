import React from 'react';
import collagebanner from '../assets/collages/collage_banner.png';
import imagebanner from '../assets/imagesConstruction/mur_de_briques2.jpeg';
import logo from '../assets/icons/the_greensolutionsv2.png';
import logohorizontal from  "../assets/icons/the_greensolutions_horizontal.png";
import Styles from '../styles/banner-ppal.css';


const Bannerppal = () => {
  return (
    <div className='container-banner-ppal' style={{ backgroundImage: `url(${collagebanner})`, width: '100%', objectFit: 'cover' }}>
        <div className="logo-bannerppal">
            <img src={logo} alt="Logo the green solutions" />
        </div>
    </div>
  )
}

export default Bannerppal



