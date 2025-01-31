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
import LoginModal from "./components/ModalWindow/LoginModal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    
    <div>
      <>
      <Header onOpenModal={() => setIsModalOpen(true)} />
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
       
    </>
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
