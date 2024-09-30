import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer(){
    const iconWhatsapp = <FontAwesomeIcon icon={faWhatsapp} />
    const iconEmail = <FontAwesomeIcon icon={faEnvelope} />
    const iconGithub = <FontAwesomeIcon icon={faGithub} />

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
                        <a className="md:text-white md:hover:text-green-500 text-green-500" href="https://wa.me/+6281298208096" target="_blank">
                            {iconWhatsapp}
                        </a>

                        <a className="md:text-white md:hover:text-blue-500 text-blue-500" href="mailto:galihrizkyfahrezy@gmail.com" target="_blank">
                            {iconEmail}
                        </a>

                        <a className="md:text-white md:hover:text-pink-500 text-pink-500" href="https://github.com/GalihRizkyFahrezy" target="_blank">
                            {iconGithub}
                        </a>
                    </div>
                </div>
            </div>
        </div>
            
        </>
    );
}