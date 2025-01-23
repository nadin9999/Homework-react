import "./FourMainCard.css"
function FourMainCard(props){
    return(
        <div className="ImageSection">

        <div  className="secondSection">
            <div><img src={props.image}/></div>

            <div className="Description">
            <p id="P3">IGURE</p>
            <p id="P4">{props.name}</p>
            <div className="PriceList">
            <p id="P5">$229.00</p>
            <p id="P6">{props.price}</p>
            </div>
            </div>

        </div>
        </div>
    )
}
export default FourMainCard