import BigFooter from "../../components/BigFooter/BigFooter";
import About from "../../components/Club/About/About";
import Coach from "../../components/Club/Coach/Coach";
import EmailForm from "../../components/Club/EmailForm/EmailForm";
import Schedule from "../../components/Club/Schedule/Schedule";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/header/Header";
import NewsSlider from "../../components/MainPage/NewsSlider/NewsSlider";
import SecondHeader from "../../components/second_header/SecondHeader";

export default function Club() {
    return (
        <>
        <Header/>
        <SecondHeader/>
        <NewsSlider/>
        <About/>
        <Coach/>
        <Schedule/>
        <EmailForm/>
        <BigFooter/>
        <Footer/>
        </>
    )
};
