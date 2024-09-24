export default function Portofolio(props){
    return(
        <>
            <div className="border-2 border-black rounded-md md:w-full shadow-md shadow-black font-serif">
                <h3 className="font-bold text-xl overflow-hidden px-2">
                    {props.name}
                </h3>
                <div className="overflow-hidden md:h-36 h-20">
                    <img src={props.img} className=""></img>
                </div>
                <p className="overflow-hidden h-24 px-2">
                    {props.desc}
                </p>
            </div>
        </>
    );
}