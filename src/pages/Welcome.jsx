import { useState } from "react";
import { Link } from "react-router-dom";


export default function Welcome(){

    const [slide, setSlide] = useState(false);

    function tes2(callback){
        callback();
    }
    
    function tes(){

        setTimeout(() =>
            {
                setName(name + 'I')
            },500
        );
    }

    function redirect()
    {
        setTimeout(() =>
            {
                window.location.href = '/main';
            },1200
        );
    }
    
    

    return(
        <>
            <div className={slide ? 'fadeInLeft' : ''}>

            </div>
            <div className="container mx-auto">
                <div className=" m-10 py-10 rounded-xl bg-violet-300">

                        <div className=" text-center text-3xl font-bold font-serif">
                            HELLO THERE<br/>I AM GALIH
                        </div>
                        <div className="text-center font-bold">
                            Web Developer • Programmer
                        </div>

                        <div className="flex justify-center items-cente py-10 font-bold">
                            <div className={slide ? '' : 'animate-pulse'}>
                                <button className="bg-violet-500 p-3 rounded-md" onClick={() => setSlide(true)+redirect()}>
                                    Click here to continue
                                </button>
                            </div>
                        </div>

                    </div>
            </div>

        </>
    );
}