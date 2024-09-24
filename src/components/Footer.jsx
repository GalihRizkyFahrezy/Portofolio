import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer(){
    const iconWhatsapp = <FontAwesomeIcon icon={faWhatsapp} />
    const iconEmail = <FontAwesomeIcon icon={faEnvelope} />
    const iconInstagram = <FontAwesomeIcon icon={faInstagram} />

    return(
        <>
        <div className="bg-black text-white mt-5 py-3">
            <div className="container mx-auto md:grid md:grid-cols-2">
                <div>
                    <h2 className="font-bold text-2xl">
                        Contact :
                    </h2>
                    <p>
                        Email : galihrizkyfahrezy@gmail.com
                        <br/>
                        Phone : +6281298208096
                    </p>
                </div>
                <div>
                    <h2 className="font-bold text-2xl mt-5 md:mt-0">
                        Find me at : 
                    </h2>
                    <div className="flex gap-3 text-5xl">
                        <a className="md:text-white md:hover:text-green-400 text-green-400" href="https://wa.me/+6281298208096" target="_blank">
                            {iconWhatsapp}
                        </a>

                        <a className="md:text-white md:hover:text-blue-300 text-blue-300" href="mailto:galihrizkyfahrezy@gmail.com" target="_blank">
                            {iconEmail}
                        </a>

                        <a className="md:text-white md:hover:text-pink-300 text-pink-300" href="https://www.instagram.com/galihhomina/" target="_blank">
                            {iconInstagram}
                        </a>
                    </div>
                </div>
            </div>
        </div>
            
        </>
    );
}