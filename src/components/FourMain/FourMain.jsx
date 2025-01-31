import "./FourMain.css"
import FourMainCard from "./FourMainCard";


import Image5 from "../../image/Image5.png"
import Image6 from "../../image/Image6.png"
import Image7 from "../../image/Image7.png"
import Image8 from "../../image/Image8.png"
function FourMain() {
    return (
        <div className="FourMain">

            <div className="firstSection">
                <p id="P1">MEN’S FASHION</p>
                <p id="P2">Shop our new arrivals from established brands</p>
            </div>

            <div className="ManCard">
                <FourMainCard image={Image5} name="GREEN MUSCLE FIT POLO SHIRT" price="$129" />
                <FourMainCard image={Image6} name="GREEN MUSCLE FIT POLO SHIRT" price="$129" />
                <FourMainCard image={Image7} name="GREEN MUSCLE FIT POLO SHIRT" price="$129" />
                <FourMainCard image={Image8} name="GREEN MUSCLE FIT POLO SHIRT" price="$129" />
            </div>
        </div>
    )
}
export default FourMain;