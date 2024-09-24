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
                <a href="https://galihrf-sample-website-002.vercel.app/" target="blank">
                    <Portofolio name='Sample Website 002' img='/portofolioSampleWeb002.png' desc='Sample halaman utama dengan HTMl, CSS, Tailwind, Javascript dan React JS'/>
                </a>
                <a href="https://galihrizkyfahrezy.github.io/Sample_Website_001/" target="blank">
                    <Portofolio name='Sample Website 001' img='/portofolioSampleWeb001.png' desc='Sample halaman utama dengan HTMl, CSS, Tailwind, Javascript dan React JS'/>
                </a>
                <a href="https://galihrizkyfahrezy.github.io/weather_app/" target="_blank">
                    <Portofolio name='Weather App' img='/portofolioWeatherApp.png' desc='Aplikasi cuaca berdasarkan kota dengan HTML, CSS dan Javascript'/>
                </a>
                <a href="https://galihrizkyfahrezy.github.io/To-Do_List/" target="_blank">
                    <Portofolio name='To Do List' img='/portofolioToDoList.png' desc='Aplikasi to do list untuk daftar kegiatan dengan HTML, CSS dan Javascript'/>
                </a>
                <Link to={'/'}>
                    <Portofolio name='Portal Game' img='/portofolioPortalGame.png' desc='Website portal game sederhana dengan HTML, CSS, Bootstrap, PHP dan Laravel'/>
                </Link>
                <Link to={'/'}>
                    <Portofolio name='Website Berita' img='/portofolioSimpleCrud.png' desc='Website portal berita sederhana dengan HTML, CSS, Bootstrap, PHP dan Laravel'/>
                </Link>
            </div>
            <Footer/>
        </>
    );
}