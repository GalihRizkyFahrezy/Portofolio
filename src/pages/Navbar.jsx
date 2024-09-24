import { useState } from "react";

export default function Navbar(){



    const [buttonSelect, setButtonSelect] = useState(1);
    const buttonClass = "border-b-2 border-transparent hover:border-violet-500 duration-150"
    const buttonClass2 = 'text-violet-800 border-b-2 border-violet-500'
    console.log(buttonSelect)
    return(
        <>
            <div className="">
                <ul className=" container mx-auto flex space-x-5 font-bold py-3">
                    <li>
                        <button onClick={() => setButtonSelect(1)} className={buttonSelect == 1 ? buttonClass2 : buttonClass}>
                            Tentang Saya
                        </button>
                    </li>
                    <li>
                        <button onClick={() => setButtonSelect(2)} className={buttonSelect == 2 ? buttonClass2 : buttonClass}>
                            Portofolio
                        </button>
                    </li>
                    <li>
                        <button onClick={() => setButtonSelect(3)} className={buttonSelect == 3 ? buttonClass2 : buttonClass}>
                            asdf
                        </button>
                    </li>
                </ul>
            </div>
        </>
    );
}