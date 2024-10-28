import { useState } from "react";
import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop/Shop";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import Product from "./pages/Product/Product";
import Cart from "./pages/Cart/Cart";
import LoginSignup from "./pages/LoginSignup/LoginSignup";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/bikes" element={<CategoryPage category="bikes" />} />
          <Route path="/parts" element={<CategoryPage category="parts" />} />
          <Route
            path="/apparel"
            element={<CategoryPage category="apparel" />}
          />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
