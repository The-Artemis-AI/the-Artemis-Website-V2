import {HashRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './assets/components/pages/HomePage'
import ProductsPage from "./assets/components/pages/ProductsPage"
import ServicesPage from "./assets/components/pages/ServicesPage"
import SingleProductPage from"./assets/components/pages/SingleProductPage"
import SingleMediaPage from './assets/components/pages/SingleMediaPage'
import MediaPage from "./assets/components/pages/MediaPage"
import ErrorPage from "./assets/components/HomeSections/ErrorPage"
import AboutUsPage from "./assets/components/pages/AboutUsPage"
import TalentPage from "./assets/components/pages/TalentPage"
import FAQPage from './assets/components/pages/FAQPage'
import PrivacyPolicy from './assets/components/pages/PrivacyPolicy'
import "./App.css"
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


function ScrollToTopOnPageChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {

  return (
    <Router base="/the-Artemis-Website-V2/">
    <ScrollToTopOnPageChange />
    <Routes  >
    
    <Route index  path="/" element={<HomePage />}/>
    <Route  path="/the-Artemis-Website-V2/" element={<HomePage />}/>
    <Route exact path="/the-Artemis-Website-V2/services" element={<ServicesPage/>}/>
    <Route exact path="/the-Artemis-Website-V2/FAQ" element={<FAQPage/>}/>
    <Route exact path="/the-Artemis-Website-V2/servin" element={<SingleProductPage/>}/>
    <Route exact path="/the-Artemis-Website-V2/privacyPolicy" element={<PrivacyPolicy/>}/>
    
   <Route exact path="/the-Artemis-Website-V2/products" element={<ProductsPage/>}/>
   <Route exact path="/the-Artemis-Website-V2/products/:productId" element={<SingleProductPage />} /> 
   <Route exact path="/the-Artemis-Website-V2/products/#/:productId" element={<SingleProductPage />} />

    <Route exact path="/the-Artemis-Website-V2/media" element={<MediaPage/>}/>
    <Route exact path="/the-Artemis-Website-V2/media/article1" element={<SingleMediaPage />} />
    <Route exact path="/the-Artemis-Website-V2/media/#/article1" element={<SingleMediaPage />} />

{/*    
  <Route exact path="/the-Artemis-Website-V2/products/servin" element={<SingleProductPage />} /> 

    <Route exact path="/the-Artemis-Website-V2/products"  >
    <Route path='' element={<ProductsPage />}/>
    <Route path='servin' element={<SingleProductPage />}/>
    </Route>
*/ }
    <Route exact path="/the-Artemis-Website-V2/media/#/:mediaId" element={<SingleMediaPage />} />
    <Route exact path="/the-Artemis-Website-V2/media/:mediaId" element={<SingleMediaPage />} /> 

    <Route exact path="/the-Artemis-Website-V2/about" element={<AboutUsPage/>}/>
    <Route exact path="/the-Artemis-Website-V2/talent" element={<TalentPage/>}/>
    <Route exact path="/the-Artemis-Website-V2/*" element={<ErrorPage/>}/>
    <Route exact path="/*" element={<ErrorPage/>}/>
    <Route exact path="/error" element={<ErrorPage/>}/>
    </Routes>
    </Router>
  )
}

export default App

