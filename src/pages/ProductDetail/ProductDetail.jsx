import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ShopProductMock } from "../../mock/Shop.mock";


import "./ProductDetail.css"

export function ProductDetail() {
    const { productId } = useParams();
    const [currentProduct, setCurrentProduct] = useState({})
   const redirect = useNavigate()
    useEffect(() => {
        if (productId) {
            const product = ShopProductMock.find(
                (item) => item.id === Number(productId)
            );
            if (product) setCurrentProduct(product)
        }
    }, []);

    const AddToCart = ()=>{
  redirect("/cart", {
    state:{product_ID: productId}
  })
    }

    return (
        <main className="MainCard">
            <img src={currentProduct.img} className="currentProduct"/>
            <p id="P3">{currentProduct.type}</p>
            <p id="P4">{currentProduct.title}</p>
            <p id="P6">price:{currentProduct.price}$</p>
            <button onClick={AddToCart} className="AddtoCart">Добавить в корзину</button>
            <button onClick={()=>redirect(-1)} className="buttonClose">←</button>
        </main>
    )
}