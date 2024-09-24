import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBootstrap, faCss3, faGitAlt, faJs, faLaravel, faPhp, faReact } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons/faHtml5';
import { faBrush, faCode, faDatabase, faSpinner, faTerminal } from '@fortawesome/free-solid-svg-icons';



export default function About()
{
    const arrow1 = {
        bottom: '20%',
    }

    /*
    const [buttonSelect, setButtonSelect] = useState(1);
    console.log(buttonSelect)
    */
    const buttonClass = "border-b-2 border-transparent hover:border-violet-500 duration-150"
    const buttonClass2 = 'text-violet-800 border-b-2 border-violet-500'

    const iconHTML = <FontAwesomeIcon icon={faHtml5} />
    const iconCSS = <FontAwesomeIcon icon={faCss3} />
    const iconJavascript = <FontAwesomeIcon icon={faJs} />
    const iconReact = <FontAwesomeIcon icon={faReact} style={{color: "#74C0FC",}} />
    const iconPHP = <FontAwesomeIcon icon={faPhp} />
    const iconLaravel = <FontAwesomeIcon icon={faLaravel} />
    const iconBootstrap = <FontAwesomeIcon icon={faBootstrap} />
    const iconCode = <FontAwesomeIcon icon={faCode} />
    const iconDatabase = <FontAwesomeIcon icon={faDatabase} />
    const iconGit = <FontAwesomeIcon icon={faGitAlt} />
    const iconBrush = <FontAwesomeIcon icon={faBrush} />
    const iconTerminal = <FontAwesomeIcon icon={faTerminal} />
    const iconLoading = <FontAwesomeIcon icon={faSpinner} spinPulse />

    return(
    <>
        <div className='bg-black my-5 font-serif text-slate-200 text-center py-2 italic'>
            <div>
                "Everything comes from idea and imagination"
            </div>
        </div>

        <div className='container mx-auto  my-3 font-serif '>
            <div className='md:grid md:grid-cols-2 gap-3 flex flex-col-reverse'>
                <p className='p-3 border-b-4 bg-slate-200 rounded-lg'>
                    Hello.
                    <br/>
                    <br/>
                    I am Galih, a web developer that enjoy coding since my school days. Below this you can find my sample and work of web development.
                    <br/>
                    Feel free to contact me at anytime, even if you just want to chit chat!
                    <br/>
                    <br/>
                    sincerely, Galih RF.
                </p>
            <div className='rounded-lg'>
                <img className='rounded-lg w-auto' src="/letter.jpg"></img>
            </div>

        </div>
        
        

                {/*}
            <div className="">
                <ul className=" container mx-auto flex space-x-5 font-bold p-3">
                    <li>
                        <button onClick={() => setButtonSelect(1)} className={buttonSelect == 1 ? buttonClass2 : buttonClass}>
                            About
                        </button>
                    </li>
                    <li>
                        <button onClick={() => setButtonSelect(2)} className={buttonSelect == 2 ? buttonClass2 : buttonClass}>
                            Resources
                        </button>
                    </li>
                </ul>
            </div>
            
            <div className={buttonSelect == 1 ? '' : 'hidden'}>
                <p className='p-3 border-b-4'>
                    Hello.
                    <br/>
                    <br/>
                    I am Galih, a web developer that enjoy coding since my school days. Below this you can find my sample and work of web development.
                    <br/>
                    Feel free to contact me at anytime, even if you just want to chit chat!
                    <br/>
                    <br/>
                    sincerely, Galih RF.
                </p>
            </div>
            <div className={buttonSelect == 2 ? '' : 'hidden'}>
            </div>
            {*/}
        


    {/*}
        <div className='line01'></div>
        <div className='flex space-x-8 bottom-5 right-10 fixed'>
            <div className='triangle-right'></div>
            <div className='triangle-right'></div>
        </div>
        <div className='fadeIn'>
            <Navbar/>
            <div className='md:grid grid-cols-2 space-x-3 mx-auto font-serif md:pl-5'>
                <div className='bg-violet-100 rounded-md'>
                    <div className="pl-3">
                            <h2 className="font-bold text-2xl text-center md:text-left my-3">
                                Galih Rizky Fahrezy
                            </h2>
                            <p>
                                Saya adalah seorang yang tertarik dengan komputer dan teknologi sejak kecil. Komputer selalu menjadi keseharian dan teman saya.
                            </p>
                            
                        <div className='flex place-content-center space-x-4'>
                            <div className='text-4xl hovering text-orange-500'>
                                {iconHTML}
                            </div>
                            <div className='text-4xl hovering text-blue-500'>
                                {iconCSS}
                            </div>
                            <div className='text-4xl hovering text-blue-500'>
                                {iconBootstrap}
                            </div>
                            <div className='text-4xl hovering text-yellow-400'>
                                {iconJavascript}
                            </div>
                            <div className='text-4xl hovering'>
                                {iconReact}
                            </div>
                            <div className='text-4xl hovering text-violet-800'>
                                {iconPHP}
                            </div>
                            <div className='text-4xl hovering text-red-500'>
                                {iconLaravel}
                            </div>
                        </div>
                        

                    </div>
                    <p className='border-t-2 border-b-2 border-black my-10 text-center font-bold font-mono md:p'>
                        Skills
                    </p>
                    
                    <div className='grid md:grid-cols-4 grid-cols-2 py-5 px-7'>
                            <div className='text-2xl hovering text-orange-500'>
                                {iconHTML} HTML
                            </div>
                            <div className='text-2xl hovering text-blue-500'>
                                {iconCSS} CSS
                            </div>
                            <div className='text-2xl hovering text-blue-500'>
                                {iconBootstrap} Bootstrap
                            </div>
                            <div className='text-2xl hovering text-blue-400'>
                                {iconCode} Tailwind
                            </div>
                            <div className='text-2xl hovering text-yellow-400'>
                                {iconJavascript} Javascript
                            </div>
                            <div className='text-2xl hovering'>
                                {iconReact} React JS
                            </div>
                            <div className='text-2xl hovering text-violet-800'>
                                {iconPHP} PHP
                            </div>
                            <div className='text-2xl hovering text-red-500'>
                                {iconLaravel} Laravel
                            </div><div className='text-2xl hovering'>
                                {iconDatabase} MySQL
                            </div>
                            <div className='text-2xl hovering text-red-700'>
                                {iconGit} Git
                            </div>
                            <div className='text-2xl hovering text-amber-800'>
                                {iconBrush} Frontend
                            </div>
                            <div className='text-2xl hovering text-green-500'>
                                {iconTerminal} Backend
                            </div>
                    </div>

                </div>

                <div>
                    second
                </div>
            </div>
                    {*/}
        </div>


    </>
    );
}
