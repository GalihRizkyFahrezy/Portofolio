import { useEffect, useState } from "react";
import Portofolio from "./Portofolio";
import { Link } from "react-router-dom";

export default function Main(){

    const style001={
        transform: 'rotateY(160deg)',
        position: 'absolute',
    };

    const style002 = {
        position: 'absolute',
        bottom: '0',
        right: '0',
    }

    const [character, setCharacter] = useState('');
    const [counter, setCounter] = useState(0); 


    function tes(){
        
        switch (counter) {
            case 0:
                add('code     ');
                break;
            case 1:
                add('create     ');
                break;
            case 2:
                add('make     ');
                break;
            case 3:
                add('fix it     ');
                break;
            case 4:
                add('find it     ');
                break;
            case 5:
                add('do it better     ');
                break;
            default:
                setCounter(counter => counter = 0);
        }
    }
    
    function add(word)
    {
        if(character.length < word.length - 1)
            {
                setTimeout(() => 
                    {   
                        setCharacter(c => c + word[c.length]);
                    },100
                );
            }
            else{
                    setCounter(counter => counter + 1)
                    setCharacter(character => character = '')
            }
    }

    return(
        <>
        <div className="flex text-violet-300" style={style001}>
            <div  className="triangle-right"></div>
            <div  className="triangle-right"></div>

        </div>

        <div className="flex text-pink-300" style={style002}>
            <div  className="triangle-right"></div>
            <div  className="triangle-right"></div>

        </div>
        
        {tes()}
        <div className="w-full h-screen flex">
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