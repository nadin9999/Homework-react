import FirstImage from "./image/firstimage.png"
import SecondImage from "./image/SecondImage.png"
import ThirdImage from "./image/ThirdImage.png"
import "./SecondMain.css"

function SecondMain(){
    return(
            <div className="SecondMain">

          <div className="FirstSection">
            <img src={FirstImage} alt="" />
            <img src={SecondImage} alt="" />
          </div>

          <div className="SecondSection">
            <img src={ThirdImage} alt="" id="SecondSectionImage"/>
          </div>
            </div>
    )
}

export default SecondMain