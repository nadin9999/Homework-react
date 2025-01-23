import HeaderComponent from "./Header";
import MainComponent from "./Main"
import SecondMain from "./SecondMain";
import ThirdMain from "./ThirdMain";
import ThirdMainCard from "./ThirdMainCard";

import Image1 from "./image/Image1.png"
import Image2 from "./image/Image2.png"
import Image3 from "./image/Image3.png"
import Image4 from "./image/Image4.png"

function App() {
  return (
    <div>
    <HeaderComponent/>
    <MainComponent/>
    <SecondMain/>
    <ThirdMain/>
    <div className="Card" style={{display: "flex", gap: '22px', padding:'0px 228px 111px'}}>
    <ThirdMainCard image = {Image1} name = "GREEN MUSCLE FIT POLO SHIRT" price = "$129"/>
    <ThirdMainCard image = {Image2} name = "GREEN MUSCLE FIT POLO SHIRT" price = "$120"/>
    <ThirdMainCard image = {Image3} name = "GREEN MUSCLE FIT POLO SHIRT" price = "$128"/>
    <ThirdMainCard image = {Image4} name = "GREEN MUSCLE FIT POLO SHIRT" price = "$122"/>
    </div>
    </div>
  );
}

export default App;
