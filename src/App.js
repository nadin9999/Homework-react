import { Route, BrowserRouter, Routes } from "react-router-dom";
import { useState } from "react";
import FiveMain from "./components/FiveMain/FiveMain";
import FourMain from "./components/FourMain/FourMain";
import MainComponent from "./components/Main/Main"
import SecondMain from "./components/SecondMain/SecondMain";
import ThirdMain from "./components/ThirdMain/ThirdMain";
import Header from "./components/Header/Header"
import Modal from "./components/ModalWindow/Modal"
import Footer from "./components/Footer/Footer";
import FooterSecond from "./components/Footer/FooterSecond";
import { Home } from "./pages/Home/Home";
import { Shop } from "./pages/Shop/Shop";
import { LookBook } from "./pages/Lookbook/Lookbook";
import { Features } from "./pages/Features/Features";
import { Pages } from "./pages/Pages/Pages";
import { Blog } from "./pages/Blog/Blog";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    
    <div>
     <BrowserRouter>
        <Header onOpenModal={() => setIsModalOpen(true)} />
        {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/SHOP" element={<Shop />} />
          <Route path="/LOOKBOOK" element={<LookBook />} />
          <Route path="/FEATURES" element={<Features />} />
          <Route path="/PAGES" element={<Pages />} />
          <Route path="/Blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    
      <MainComponent />
      <SecondMain />
      <ThirdMain />
      <FourMain />
      <FiveMain/>
      <Footer/>
      <FooterSecond/>

    </div>
  );
}

export default App;
