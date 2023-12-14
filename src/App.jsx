import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet, Link } from 'react-router-dom'
import { lazy, Suspense } from 'react'
// import Navbar from './assets/components/Navbar'
import "./App.css"
const HomePage = lazy(()=>import("./assets/components/pages/HomePage"))
const ProductsPage = lazy(()=>import("./assets/components/pages/ProductsPage"))
const ServicesPage = lazy(()=>import("./assets/components/pages/ServicesPage"))
const SingleProductPage = lazy(()=>import("./assets/components/pages/SingleProductPage"))
const MediaPage = lazy(()=>import("./assets/components/pages/MediaPage"))
const ErrorPage = lazy(()=>import("./assets/components/HomeSections/ErrorPage"))
const AboutUsPage = lazy(()=>import("./assets/components/pages/AboutUsPage"))
const TalentPage = lazy(()=>import("./assets/components/pages/TalentPage"))
const NavBar = lazy(()=>import("./assets/components/Navbar"))
function App() {

  return (
    <Router>
    <Routes>
    <Route element={<Wrapper/>}/>
    <Route index element={<HomePage />}/>
    <Route index path="/home" element={<HomePage />}/>
    <Route path="/products" element={<ProductsPage/>}/>
    <Route path="/services" element={<ServicesPage/>}/>
    <Route path="/products/:productId" element={<SingleProductPage/>}/>
    <Route path="/media" element={<MediaPage/>}/>
    <Route path="/about" element={<AboutUsPage/>}/>
    <Route path="/talent" element={<TalentPage/>}/>
    <Route path="*" element={<ErrorPage/>}/>
    </Routes>
    </Router>
  )
}

export default App


const Wrapper = () => {
  return (
    <>
      <NavBar/>
      <Suspense
        fallback={
          <div className="w-full h-full flex flex-col justify-center items-center">
            <p className="text-xs">Loading ...</p>
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};