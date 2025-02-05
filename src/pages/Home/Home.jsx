import FiveMain from "../../components/FiveMain/FiveMain"
import Footer from "../../components/Footer/Footer"
import FooterSecond from "../../components/Footer/FooterSecond"
import FourMain from "../../components/FourMain/FourMain"
import MainComponent from "../../components/Main/Main"
import SecondMain from "../../components/SecondMain/SecondMain"
import ThirdMain from "../../components/ThirdMain/ThirdMain"

export const Home = ()=>{
    return(<div>

        <MainComponent />
        <SecondMain />
        <ThirdMain />
        <FourMain />
        <FiveMain/>
        <Footer/>
        <FooterSecond/>
    </div>
    )
}