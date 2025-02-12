import { useParams, useNavigate } from "react-router-dom";
import { ShopProductMock } from "../../mock/Shop.mock";
import "./ProductDetail.css";

export function ProductDetail({ cart, setCart }) {
    const { productId } = useParams();
    const navigate = useNavigate();

    const currentProduct = ShopProductMock.find(
        (item) => item.id === Number(productId)
    );

    const addToCart = () => {
        if (!currentProduct) return;
        const existingProduct = cart.find((item) => item.id === currentProduct.id);

        if (existingProduct) {
            setCart(cart.map((item) =>
                item.id === currentProduct.id ? { ...item, quantity: item.quantity + 1 } : item
            ));
        } else {
            setCart([...cart, { ...currentProduct, quantity: 1 }]);
        }

        navigate("/cart");
    };

    return (
        <main className="MainCard">
            <img src={currentProduct?.img} className="currentProduct" />
            <p id="P3">{currentProduct?.type}</p>
            <p id="P4">{currentProduct?.title}</p>
            <p id="P6">Цена: {currentProduct?.price}$</p>
            <button onClick={addToCart} className="AddtoCart">Добавить в корзину</button>
            <button onClick={() => navigate(-1)} className="buttonClose">←</button>
        </main>
    );
}
