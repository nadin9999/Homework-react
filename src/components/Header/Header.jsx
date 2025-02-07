import { NavLink } from "react-router-dom";
import image from "../../image/search HEART shopping-cart.png";
import "./Header.css"

const routes = [
  { path: "/Home", title: "HOME" },
  { path: "/Shop", title: "SHOP" },
  { path: "/Lookbook", title: "LOOKBOOK" },
  { path: "/features", title: "FEATURES" },
  { path: "/pages", title: "PAGES" },
  { path: "/cart", title: "CART" }
];

function HeaderComponent({ onOpenModal }) {

  return (
    <div className="Header">

      <h1>YOUR LOGO</h1>

     <ul>
      {routes.map((item, index) => (
        <NavLink key={index} to={item.path} className={({ isActive }) => (isActive ? "active-link link" : "link")}>
          {item.title}
        </NavLink>
      ))}
      </ul>
      <img src={image} alt="" />


      <button onClick={onOpenModal} className="login-button">Войти</button>

    </div>


  )
}
export default HeaderComponent