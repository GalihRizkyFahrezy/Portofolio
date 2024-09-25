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
                    <Portofolio name='Sample Website 002' img='/portofolioSampleWeb002.png' desc='Sample home page with CSS, Tailwind, Javascript and React JS'/>
                </a>
                <a href="https://galihrizkyfahrezy.github.io/Sample_Website_001/" target="blank">
                    <Portofolio name='Sample Website 001' img='/portofolioSampleWeb001.png' desc='Sample home page with CSS, Tailwind, Javascript and React JS'/>
                </a>
                <a href="https://galihrizkyfahrezy.github.io/weather_app/" target="_blank">
                    <Portofolio name='Weather App' img='/portofolioWeatherApp.png' desc='Weather application with HTML, CSS and Javascript'/>
                </a>
                <a href="https://galihrizkyfahrezy.github.io/To-Do_List/" target="_blank">
                    <Portofolio name='To Do List' img='/portofolioToDoList.png' desc='To do list for your own list with HTML, CSS, Javascript'/>
                </a>
                <Link to={'/'}>
                    <Portofolio name='Game Review' img='/portofolioPortalGame.png' desc='Website Game Reviewer with CSS, Bootstrap, PHP and Laravel.'/>
                </Link>
                <Link to={'/'}>
                    <Portofolio name='Portal Web' img='/portofolioSimpleCrud.png' desc='News Portal with PHP, Laravel and Bootstrap.'/>
                </Link>
            </div>
            <Footer/>
        </>
    );
}