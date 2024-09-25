export default function Resources(){
    const skills = "border-2 w-28 rounded-full bg-slate-400 text-white font-bold";

    return(
        <>
            <div className="font-serif">
                <div className="container mx-auto">

                    <h2 className="text-center text-3xl font-bold py-5">
                        Resource
                    </h2>
                    <div className="flex flex-wrap gap-3 text-center justify-center ">
                        <div className={skills}>
                            HTML
                        </div>
                        <div className={skills}>
                            CSS
                        </div>
                        <div className={skills}>
                            Bootstrap
                        </div>
                        <div className={skills}>
                            Tailwind
                        </div>
                        <div className={skills}>
                            Javascript
                        </div>
                        <div className={skills}>
                            React JS
                        </div>
                        <div className={skills}>
                            PHP
                        </div>
                        <div className={skills}>
                            Laravel
                        </div>
                        <div className={skills}>
                            Git
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}