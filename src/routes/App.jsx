import React from 'react';
import { HashRouter as  Routes, Route } from 'react-router-dom'
import Layout from '../containers/Layout';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import '../styles/global.css';
import '../assets/imagesConstruction/logo_temporale.png'
import Balustrade from '../containers/fr/Balustrade';
import Carrelage from '../containers/fr/Carrelage';
import Chasis from '../containers/fr/Chasis';
import Cuisine  from '../containers/fr/Cuisine';
import Demolition from '../containers/fr/Demolition';
import Façade from '../containers/fr/Façade';
import Fauxplafonds from '../containers/fr/Fauxplafonds';
import Menuiserie from '../containers/fr/Menuiserie';
import Peinture from '../containers/fr/Peinture'
import Plaffonage from '../containers/fr/Plaffonage';
import Terrassement from '../containers/fr/Terrassement';
import Toiture from '../containers/fr/Toiture';
import Galerie from '../containers/fr/Galerie-photos';

const App = () => {
    return (
        <BrowserRouter>
        <Layout>
        <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/Balustrade" element={<Balustrade />} />
                <Route exact path='/Carrelage' element={<Carrelage />} />
                <Route exact path='/Chasis' element={<Chasis />} />
                <Route exact path='/Cuisine' element={<Cuisine />} />
                <Route exact path='/Demolition' element={<Demolition />} />
                <Route exact path='/Façade' element={<Façade />} />
                <Route exact path='/Fauxplafonds' element={<Fauxplafonds />} />
                <Route exact path='/Menuiserie' element={<Menuiserie />} />
                <Route exact path='/Peinture' element={<Peinture />} />
                <Route exact path='/Plaffonage' element={<Plaffonage />} />
                <Route exact path='/Terrassement' element={<Terrassement />} />
                <Route exact path='/Toiture' element={<Toiture />} />
                <Route exact path='/Galerie-photos' element={<Galerie />} />
                <Route path= "*" element={<NotFound />} />
        </Routes>
        </Layout>
        </BrowserRouter>
    );
}


export default App;