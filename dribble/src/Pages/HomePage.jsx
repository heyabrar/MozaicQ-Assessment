import HireUsVideo from "../Components/HireUsVideo";
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
        </>
    )
}