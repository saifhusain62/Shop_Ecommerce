import React from 'react'
import Navbar from './assets/components/Navbar/Navbar'
import Hero from './assets/components/Hero/Hero'
import Products from './assets/components/Products/Products'
import AOS from "aos"
import 'aos/dist/aos.css';
import TopProducts from './assets/components/TopProducts.jsx/TopProducts'
import Banner from './assets/components/Banner/Banner'


function App() {
 React.useEffect(() => {
    AOS.init({
      offset:100,
      duration: 800, // animation duration in ms
      easing:"ease-in-sine",    // whether animation should happen only once
      offset: 100,    // offset from the original trigger point
    });
    AOS.refresh();
  }, []);
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Products/>
      <TopProducts/>
      <Banner/>
    </div>
  )
}

export default App
