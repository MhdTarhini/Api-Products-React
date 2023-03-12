import Navbar from "./components/navbar.js"
import ProductsList from "./components/productsList.js";
import Slider from "./components/slider.js";
import { Routes,Route } from "react-router-dom";
import About from "./components/About.js";
import ProductDetails from "./components/productDetails.js";
import Category from "./components/categorys.js";
import SpesCategory from "./components/spesCategory.js";

function App() {
  return (
    <>
      <Navbar />
      <Slider />
      <Category />
      <ProductsList />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <Category />
              <ProductsList />
            </>
          }
        />
        <Route path="about" element={<About />} />
        <Route path="product/:productId" element={<ProductDetails />} />
        <Route
          path="category/:categoryName"
          element={
            <>
              <Slider />
              <SpesCategory />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
