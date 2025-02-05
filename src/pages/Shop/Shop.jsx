import { useNavigate } from "react-router-dom"
import { ShopProductMock } from "../../mock/Shop.mock"
export const Shop = () => {
    const redirect = useNavigate()
    return (
        <main>

            <section className="FourMain" style={{marginTop:0}}>
                <div className="firstSection">
            <h1>Shop</h1>
            <hr />
                    <p id="P1">MEN’S FASHION</p>
                    <p id="P2">Shop our new arrivals from established brands</p>
                </div>
                <div  className="ManCard">
            {ShopProductMock.map(product => (
                <div key={product.card} onClick={ ()=>redirect (`/product/${product.id}`)}>
                    <img src={product.img} />
                    <p>{product.type}</p>
                    <p>{product.title}</p>
                    <p>Цена:{product.price}$</p>

                </div>
            ))}
                </div>
            </section>
        </main>
    )
}