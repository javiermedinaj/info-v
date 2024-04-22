import Hero from './components/Hero';
import ProductDetails from './components/ProductDetails';
import Products from './components/Products';
import Navbar from './components/Navbar';
import ProductFeatures from './components/ProductFeature';
import Contact from './components/Contact';
function App() {
  return (
    <>
      <Navbar/>
      <Hero />
      <ProductDetails />
      <ProductFeatures/>
      <Products/>
      <Contact/>
    </>
  );
}

export default App;
