import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBootstrap, faCss3, faGitAlt, faJs, faLaravel, faPhp, faReact } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons/faHtml5';
import { faBrush, faCode, faDatabase, faSpinner, faTerminal } from '@fortawesome/free-solid-svg-icons';



export default function About()
{
    const arrow1 = {
        bottom: '20%',
    }

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
        <div className='bg-slate-200 my-5 font-serif'>
            <div className='container mx-auto'>
                <div>
                    Welcome to my portofolio! I might still an entry level programmer but i always try my best to be a better programmer.

                    Below you will find my previous sample and work.
                </div>
            </div>
        </div>


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
        </div>

        {*/}
    </>
    );
}