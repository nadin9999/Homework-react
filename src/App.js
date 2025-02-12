import { Route, BrowserRouter, Routes } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header/Header";
import Modal from "./components/ModalWindow/Modal";
import { Home } from "./pages/Home/Home";
import { Shop } from "./pages/Shop/Shop";
import { LookBook } from "./pages/Lookbook/Lookbook";
import { Features } from "./pages/Features/Features";
import { Pages } from "./pages/Pages/Pages";
import { Cart } from "./pages/Cart/Cart";
import { ProductDetail } from "./pages/ProductDetail/ProductDetail";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cart, setCart] = useState([]);
  return (
    <div>
      <BrowserRouter>
        <Header onOpenModal={() => setIsModalOpen(true)} />
        {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
        <Routes>
          <Route path="/HOME" element={<Home />} />
          <Route path="/SHOP" element={<Shop />} />
          <Route path="/LOOKBOOK" element={<LookBook />} />
          <Route path="/FEATURES" element={<Features />} />
          <Route path="/PAGES" element={<Pages />} />
          <Route path="/Cart" element={<Cart cart={cart} setCart={setCart} />} />
          <Route path="/product/:productId" element={<ProductDetail cart={cart} setCart={setCart} />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
