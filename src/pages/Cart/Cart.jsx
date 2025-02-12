import "./Cart.css";

export const Cart = ({ cart, setCart }) => {
    const clearCart = () => setCart([]);

    return (
        <div className="Cart">
            <h1>Корзина</h1>
            {cart.length > 0 ? (
                <>
                    {cart.map((item) => (
                        <div key={item.id}>
                            <p>{item.title} - {item.quantity} шт. по {item.price}$</p>
                        </div>
                    ))}
                    <button onClick={clearCart} className="clearCart">Очистить корзину</button>
                </>
            ) : (
                <p>Корзина пуста</p>
            )}
        </div>
    );
};
