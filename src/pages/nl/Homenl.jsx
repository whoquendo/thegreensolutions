import React from 'react';
import Headernl from '@components/nl/Headernl';
import Footernl from '@components/nl/Footernl';
import Banner from '@components/Banner';
import Bannerppal from '@components/Bannerppal';
import Carousel from '@components/Carousel';
import Services from '../../components/Services';
import AvantServices from '../../components/AvantServices';
import Realisations from  '../../components/Realisations';
import Styles from '../../styles/home.css'

const Home = () => {
  return (
    <>
      <Headernl />
      <Bannerppal />
      <h1 className='title-galerie-photos'>FOTOGALERIJ</h1>
     <Banner />
     <div className='divVacio'></div>
      <Services />
    <Footernl />
    </>
  );
};

export default Home;