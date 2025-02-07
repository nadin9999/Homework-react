import { useLocation } from "react-router-dom";
import "./Cart.css"
export const Cart = () => {
    const location = useLocation();
    const productId = location.state?.product_ID;
    return (

        <div className="Cart">
            <h1>Cart</h1>
            {productId ? (
                <p>Товар под номером: <span className="productId">{productId}</span> добавлен в корзину</p>
            ) : (
                <p>Корзина пуста</p>
            )}
        </div>
    )
}
