import Hero from './components/Hero';
import ProductDetails from './components/ProductDetails';
import Products from './components/Products';
import Navbar from './components/Navbar';
import ProductFeatures from './components/ProductFeature';
function App() {
  return (
    <>
      <Navbar/>
      <Hero />
      <ProductDetails />
      <ProductFeatures/>
      <Products/>
    </>
  );
}

export default App;
