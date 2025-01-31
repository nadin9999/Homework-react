import "./ThirdMain.css"
import ThirdMainCard from "./ThirdMainCard";


import Image1 from "../../image/Image1.png"
import Image2 from "../../image/Image2.png"
import Image3 from "../../image/Image3.png"
import Image4 from "../../image/Image4.png"

function ThirdMain(props) {
    return (
        <div className="ThirdMain">

            <div className="firstSection">
                <p id="P1">WOMEN’S FASHION</p>
                <p id="P2">Shop our new arrivals from established brands</p>
            </div>
            <div className="WomenCard" >
                <ThirdMainCard image={Image1} name="GREEN MUSCLE FIT POLO SHIRT" price="$129" />
                <ThirdMainCard image={Image2} name="GREEN MUSCLE FIT POLO SHIRT" price="$120" />
                <ThirdMainCard image={Image3} name="GREEN MUSCLE FIT POLO SHIRT" price="$128" />
                <ThirdMainCard image={Image4} name="GREEN MUSCLE FIT POLO SHIRT" price="$122" />
            </div>
        </div>
    )
}
export default ThirdMain;