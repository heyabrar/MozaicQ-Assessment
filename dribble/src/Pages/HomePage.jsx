import DesignAgency from "../Components/DesignAgency";
import Footer from "../Components/Footer";
import HireUsVideo from "../Components/HireUsVideo";
import Information from "../Components/Information";
import MainBodyImages from "../Components/MainBodyImages";
import Navbar from "../Components/Navbar";
import VideoComponent from "../Components/VideoComponent";

export default function HomePage ( ){
    return (
        <>
        <Navbar/>
        <VideoComponent/>
        <MainBodyImages/>
        <HireUsVideo/>
        <Information/>
        <DesignAgency/>
        <Footer/>
        </>
    )
}