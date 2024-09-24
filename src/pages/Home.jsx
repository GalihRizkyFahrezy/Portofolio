import { Link } from "react-router-dom";
import Main from "../components/Main";
import Portofolio from "../components/Portofolio";
import About from "../components/About";
import Footer from "../components/Footer";
import Navbar from "./Navbar";



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

            <div className="container mx-auto grid md:grid-cols-3 grid-cols-2 gap-3">
            <Link to={'/'}>
                <Portofolio name='assssd' img='/star.jpg'/>
            </Link>
            <Link to={'/'}>
                <Portofolio name='assssd' img='/star.jpg'/>
            </Link>
            <Link to={'/'}>
                <Portofolio name='assssd' img='/star.jpg'/>
            </Link>
        </div>
        <Footer/>
        </>
    );
}