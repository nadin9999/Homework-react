import image from './image/search HEART shopping-cart.png';
import './Header.css';

function HeaderComponent() {
  return (
    <div className="Header">

      <div className="FirstBlock"><h1>YOUR LOGO</h1></div>

      <div className="SecondBlock">
        <p>HOME</p>
        <p>SHOP</p>
        <p>LOOKBOOK</p>
        <p>FEATURES</p>
        <p>PAGES</p>
        <p>BLOG</p>
      </div>

      <div className="ThirdBlock">
        <img src={image} alt="" />

      </div>

    </div>


  )
}
export default HeaderComponent