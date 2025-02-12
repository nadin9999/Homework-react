import { useNavigate } from "react-router-dom";
import { useState, useMemo } from "react";
import { ShopProductMock } from "../../mock/Shop.mock";

export const Shop = () => {
    const redirect = useNavigate();
    const [search, setSearch] = useState("");

    const filteredProducts = useMemo(() => {
        return ShopProductMock.filter((product) =>
            product.title.toLowerCase().includes(search.toLowerCase())
        );
    }, [search]);

    return (
        <main>
            <section className="FourMain" style={{ marginTop: 0 }}>
                <div className="firstSection">
                    <h1>Shop</h1>
                    <hr />
                    <p id="P1">MEN’S FASHION</p>
                    <p id="P2">Shop our new arrivals from established brands</p>
                </div>

                <input
                    type="text"
                    placeholder="Поиск товара..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{ padding: "10px", width: "300px" }}
                />

                <div className="ManCard" >
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <div
                                key={product.card}
                                onClick={() => redirect(`/product/${product.id}`)}
                            >
                                <img src={product.img} alt={product.title} />
                                <p>{product.type}</p>
                                <p>{product.title}</p>
                                <p>Цена: {product.price}$</p>
                            </div>
                        ))
                    ) : (
                        <p>Товары не найдены</p>
                    )}
                </div>
            </section>
        </main>
    );
};
