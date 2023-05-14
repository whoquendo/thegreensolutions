import React from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Banner from '@components/Banner';
import Carousel from '@components/Carousel';
import Services from '@components/Services';
import AvantServices from '../components/AvantServices';
import Realisations from  '../components/Realisations';
import Styles from '../styles/home.css'
import Bannerppal from '@components/Bannerppal';

const Home = () => {
  return (
    <>
      <Header />
      <Bannerppal />
      <h1 className='title-galerie-photos'>GALERIE - PHOTOS</h1>
    <Banner />
     <div className='divVacio'></div>
      <Services />
    <Footer />
    </>
  );
};

export default Home;