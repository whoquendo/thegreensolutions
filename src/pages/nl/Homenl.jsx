import React from 'react';
import Navbarnl from '@components/nl/Navbarnl';
import Footer1nl from '../../components/nl/footer1nl';
import Banner from '@components/Banner';
import Bannerppal from '@components/Bannerppal';
import Servicesnl from '../../components/nl/Servicesnl';
import Styles from '../../styles/home.css'

const Home = () => {
  return (
    <>
      <Navbarnl />
      <Bannerppal />
      <h1 className='title-galerie-photos'>FOTO GALERIJ</h1>
     <Banner />
     <div className='divVacio'></div>
      <Servicesnl />
    <Footer1nl />
    </>
  );
};

export default Home;