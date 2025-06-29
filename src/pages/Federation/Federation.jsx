import Header from "../../components/header/Header";
import SecondHeader from "../../components/second_header/SecondHeader";
import About from "../../components/Federation/About/About";
import Leadership from "../../components/Federation/Leadership/Leadership";
import ReglamentDocuments from "../../components/Federation/ReglamentDocuments/ReglamentDocuments";
import Rules from "../../components/Federation/Rules/Rules";
import BigFooter from "../../components/BigFooter/BigFooter";
import Footer from "../../components/Footer/Footer";
import Classification from "../../components/Federation/Classification/Classification";

export default function Federation() {
    return (
        <>
        <Header/>
        <SecondHeader/>
        <About/>
        <Leadership/>
        <ReglamentDocuments/>
        <Rules/>
        <Classification/>
        <BigFooter/>
        <Footer/>
        </>
    )
};
