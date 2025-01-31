import { useState } from "react"
import "./ThirdMainCard.css"
function ThirdMainCard(props) {
    const [count, setCounter] = useState(0)

    return (

        < div className="ImageSection" >

            <div className="secondSection">
                <div><img src={props.image} /></div>

                <div className="Description">
                    <p id="P3">IGURE</p>
                    <p id="P4">{props.name}</p>
                    <div className="PriceList">
                        <p id="P5">$229.00</p>
                        <p id="P6">{props.price}</p>
                    </div>

                    <div className="Counter">
                        <button onClick={()=>setCounter((prev)=>(prev > 0 ? prev -1 : 0))} className="buttonCard">-</button>
                        <p className="count">{count}</p>
                        <button onClick={()=>setCounter((prev)=>prev+1)} className="buttonCard">+</button>
                    </div>

                </div>

            </div>
        </div >

    )
}
export default ThirdMainCard