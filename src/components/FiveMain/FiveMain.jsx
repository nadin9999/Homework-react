import Image10 from "../../image/Image10.png"
import Image11 from "../../image/Image11.png"
import Image12 from "../../image/Image12.png"
import "./FiveMain.css"

function FiveMain() {
    return (
        <div className="FiveMain">
                <p className="AvoneParagraph">AVONE STYLES</p>
                <p className="ChooseParagraph">Choose Your Favorite Color</p>
          

            <div className="ImageCollection">
                <div><img src={Image10} /></div>
                <div className="ImageCollection__child">
                    <img src={Image11} className="Image11"/>
                    <img src={Image12} className="Image12" />
                </div>
            </div>
        </div>
    )
}
export default FiveMain