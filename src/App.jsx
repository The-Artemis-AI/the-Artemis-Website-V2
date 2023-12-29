import {BrowserRouter as Router, Routes, Route, Outlet,  } from 'react-router-dom'
import { lazy, Suspense} from 'react'
import HomePage from './assets/components/pages/HomePage'
import ProductsPage from "./assets/components/pages/ProductsPage"
import ServicesPage from "./assets/components/pages/ServicesPage"
import SingleProductPage from"./assets/components/pages/SingleProductPage"
import SingleMediaPage from './assets/components/pages/SingleMediaPage'
import MediaPage from "./assets/components/pages/MediaPage"
import ErrorPage from "./assets/components/HomeSections/ErrorPage"
import AboutUsPage from "./assets/components/pages/AboutUsPage"
import TalentPage from "./assets/components/pages/TalentPage"
import Navbar from './assets/components/Navbar'
import { SiDotenv } from 'react-icons/si'


import "./App.css"

function App() {

  return (
    <Router base="/the-Artemis-Website-V2/">
    <Routes  >
    
    <Route index  path="/" element={<HomePage />}/>
    <Route  path="/the-Artemis-Website-V2/" element={<HomePage />}/>
    <Route path="/the-Artemis-Website-V2/products" element={<ProductsPage/>}/>
    <Route path="/the-Artemis-Website-V2/services" element={<ServicesPage/>}/>
    <Route path="/the-Artemis-Website-V2/products/#/:productId" element={<SingleProductPage />} />
    <Route path="/the-Artemis-Website-V2/products/:productId" element={<SingleProductPage />} />
    <Route path="/the-Artemis-Website-V2/media" element={<MediaPage/>}/>
    <Route path="/the-Artemis-Website-V2/media/#/:mediaId" element={<SingleMediaPage />} />
    <Route path="/the-Artemis-Website-V2/media/:mediaId" element={<SingleMediaPage />} />
    <Route path="/the-Artemis-Website-V2/about" element={<AboutUsPage/>}/>
    <Route path="/the-Artemis-Website-V2/talent" element={<TalentPage/>}/>
    <Route path="/the-Artemis-Website-V2/*" element={<ErrorPage/>}/>
    <Route path="/error" element={<ErrorPage/>}/>
    <Route path="*" element={<ErrorPage/>}/>
    </Routes>
    </Router>
  )
}

const Wrapper = () => {
  return (
    <>
      <Suspense
        fallback={
          <div className="w-full h-full bg-red-200 flex flex-col justify-center items-center">
            <p className="text-xs">Loading ...</p>
          </div>
        }
      >

          <Outlet />
       
      </Suspense>
   
    </>
  );
};
export default App

