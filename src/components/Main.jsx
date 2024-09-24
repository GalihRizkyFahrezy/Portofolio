import { useEffect, useState } from "react";
import Portofolio from "./Portofolio";
import { Link } from "react-router-dom";

export default function Main(){


    const [character, setCharacter] = useState('abcs');

    const create = 'createa ';

    function tes(){
        
        if(character.length < create.length - 1)
        {
            

            
            setTimeout(() => 
                {   

                    setCharacter(c => c + create[c.length]);

                },200
            );
        }
        else{
            /*
                setTimeout(() => 
                    {   
                        setCharacter(character => character[character.length - 1 ] + '1')
                    },200
                );
                */
                setCharacter(character => character = '')

        }
    }

    function add(callback)
    {
        () => callback()
    }

    return(
        <>
        {tes()}
        <button onClick={() =>tes()}>asdf</button>
        <div className="w-screen h-screen flex">
            <div className="mx-auto my-auto font-serif">
                <div className="py-10">
                    <div className="text-slate-700 md:text-2xl text-lg pl-10 Animate-RightToLeft">
                        MY NAME IS
                    </div>
                    <div className="bg-gradient-to-r from-violet-500 to-pink-300 text-transparent bg-clip-text md:text-4xl text-2xl font-bold ">
                        GALIH RIZKY FAHREZY 
                    </div>
                    <div className="text-left text-lg bg-black text-green-600 px-5 rounded-full">
                        I will {character}
                    </div>
                </div>
            </div>
        </div>

        
        </>
    );
}