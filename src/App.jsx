import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductDetails from './components/ProductDetails';
import Products from './components/Products';
import ProductFeatures from './components/ProductFeature';
import Contact from './components/Contact';

function App() {
  const productsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const scrollToProducts = () => {
    productsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <Navbar scrollToProducts={scrollToProducts} 
      scrollToAbout={scrollToAbout} scrollToContact={scrollToContact}/>
      <Hero />
      <ProductDetails />
      <ProductFeatures ref={aboutRef} />
      <Products ref={productsRef} />
      <Contact ref={contactRef} />
    </>
  );
}

export default App;
