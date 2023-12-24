import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import { lazy, Suspense } from 'react'

import "./App.css"
const HomePage = lazy(()=>import("./assets/components/pages/HomePage"))
const ProductsPage = lazy(()=>import("./assets/components/pages/ProductsPage"))
const ServicesPage = lazy(()=>import("./assets/components/pages/ServicesPage"))
const SingleProductPage = lazy(()=>import("./assets/components/pages/SingleProductPage"))
const SingleMediaPage = lazy(()=>import("./assets/components/pages/SingleMediaPage"))
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
    <Route index element={<HomePage />} />
    <Route index path="/the-Artemis-Website-V2/" element={<HomePage />}/>
    <Route index path="/the-Artemis-Website-V2/home" element={<HomePage />}/>
    <Route path="/the-Artemis-Website-V2/products" element={<ProductsPage/>}/>
    <Route path="/the-Artemis-Website-V2/services" element={<ServicesPage/>}/>
    <Route path="/the-Artemis-Website-V2/products/:productId" element={<SingleProductPage/>}/>
    <Route path="/the-Artemis-Website-V2/media" element={<MediaPage/>}/>
    <Route path="/the-Artemis-Website-V2/media/:mediaId" element={<SingleMediaPage/>}/>
    <Route path="/the-Artemis-Website-V2/about" element={<AboutUsPage/>}/>
    <Route path="/the-Artemis-Website-V2/talent" element={<TalentPage/>}/>
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