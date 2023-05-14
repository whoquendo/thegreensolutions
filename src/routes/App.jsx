import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../containers/Layout';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import '../styles/global.css';
import Balustrade from '../containers/fr/Balustrade';
import Carrelage from '../containers/fr/Carrelage';
import Chassis from '../containers/fr/Chassis';
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
import Devis from '../containers/fr/Devis';
import Homenl from '../pages/nl/Homenl'
import Balustradenl from '../containers/nl/Balustradenl';
import Tilingnl from '../containers/nl/Tilingnl';
import Chassisnl from '../containers/nl/Chassisnl';
import Keukennl from '../containers/nl/Keukennl';
import Demolitienl from '../containers/nl/Demolitienl';
import Prijsoffertenl from '../containers/nl/Prijsoffertenl';
import Façadenl from '../containers/nl/Façadenl';
import Valsespiegelsnl from '../containers/nl/Valsespiegelsnl';
import Fotogalerijnl from '../containers/nl/Fotogalerijnl';
import Menuiserienl from '../containers/nl/Menuiserienl';
import Schilderijnl from '../containers/nl/Schilderijnl';
import Plafondnl from '../containers/nl/Plafondnl';
import Terrassingnl from '../containers/nl/Terrassingnl';
import Daknl from '../containers/nl/Daknl';

const App = () => {
    return (
        <BrowserRouter>
        <Layout>
        <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/Balustrade" element={<Balustrade />} />
                <Route exact path='/Carrelage' element={<Carrelage />} />
                <Route exact path='/Chassis' element={<Chassis />} />
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
                <Route exact path='/Devis' element={<Devis />} />
                <Route exact path='/Homenl' element={<Homenl />} />
                <Route exact path='/Balustradenl' element={<Balustradenl />} />
                <Route exact path='/Tilingnl' element={<Tilingnl />} />
                <Route exact path='/Chassisnl' element={<Chassisnl />} />
                <Route exact path='/Keukennl' element={<Keukennl />} />
                <Route exact path='/Demolitienl' element={<Demolitienl />} />
                <Route exact path='/Prijsoffertenl' element={<Prijsoffertenl />} />
                <Route exact path='/Façadenl' element={<Façadenl />} />
                <Route exact path='/Valsespiegelsnl' element={<Valsespiegelsnl />} />
                <Route exact path='/Fotogalerijnl' element={<Fotogalerijnl />} />
                <Route exact path='/Menuiserienl' element={<Menuiserienl />} />
                <Route exact path='/Schilderijnl' element={<Schilderijnl />} />
                <Route exact path='/Plafondnl' element={<Plafondnl />} />
                <Route exact path='/Terrassingnl' element={<Terrassingnl />} />
                <Route exact path='/Daknl' element={<Daknl />} />
                <Route path= "*" element={<NotFound />} />
        </Routes>
        </Layout>
        </BrowserRouter>
    );
}


export default App;