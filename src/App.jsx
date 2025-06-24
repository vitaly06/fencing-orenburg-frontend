import BigFooter from "./components/BigFooter/BigFooter";
import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header";
import Announcement from "./components/MainPage/Announcement/Announcement";
import EmailForm from "./components/MainPage/EmailForm/EmailForm";
import NewsSlider from "./components/MainPage/NewsSlider/NewsSlider";
import Welcome from "./components/MainPage/Welcome/Welcome";
import SecondHeader from "./components/second_header/SecondHeader";

export default function App() {

  return (
    <>
      <Header/>
      <SecondHeader/>
      <NewsSlider/>
      <Announcement/>
      <Welcome/>
      <EmailForm/>
      <BigFooter/>
      <Footer/>
    </>
  )
}

