import { Link } from "react-router-dom";
import Main from "../components/Main";
import Portofolio from "../components/Portofolio";
import About from "../components/About";
import Footer from "../components/Footer";

export default function Home(){


    const style={
        backgroundImage:
                "url('/star.jpg')",
            height: "100vh",
            fontSize: "50px",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
    };

    
    function tes2(){
        window.location.href = '/about';
    }
    
    return(
        <>
            <Main/>
            <About/>

            <div className="container mx-auto grid md:grid-cols-4 grid-cols-2 gap-3">
                <Link to={'/'}>
                    <Portofolio name='Sample Website 002' img='/portofolioSampleWeb002.png' desc='Sample halaman utama'/>
                </Link>
                <Link to={'/'}>
                    <Portofolio name='Sample Website 001' img='/portofolioSampleWeb001.png' desc='Sample halaman utama'/>
                </Link>
                <Link to={'/'}>
                    <Portofolio name='Weather App' img='/portofolioWeatherApp.png' desc='Aplikasi cuaca berdasarkan kota'/>
                </Link>
                <Link to={'/'}>
                    <Portofolio name='To Do List' img='/portofolioToDoList.png' desc='Aplikasi to do list untuk daftar kegiatan'/>
                </Link>
                <Link to={'/'}>
                    <Portofolio name='Portal Game Sederhana' img='/portofolioPortalGame.png' desc='Website portal game sederhana'/>
                </Link>
                <Link to={'/'}>
                    <Portofolio name='Website Berita Sederhana' img='/portofolioSimpleCrud.png' desc='Website portal berita sederhana'/>
                </Link>
            </div>
            <Footer/>
        </>
    );
}