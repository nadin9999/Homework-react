import image from "../../image/search HEART shopping-cart.png";
import "./Header.css"

function HeaderComponent({onOpenModal}) {

  return (
    <div className="Header">

      <h1>YOUR LOGO</h1>

      <div className="SecondBlock">
        <p>HOME</p>
        <p>SHOP</p>
        <p>LOOKBOOK</p>
        <p>FEATURES</p>
        <p>PAGES</p>
        <p>BLOG</p>
      </div>
      
        <img src={image} alt="" />

      
      <button onClick={onOpenModal} className="login-button">Войти</button>

    </div>


  )
}
export default HeaderComponent