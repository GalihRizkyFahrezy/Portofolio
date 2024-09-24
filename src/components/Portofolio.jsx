export default function Portofolio(props){
    return(
        <>
            <div className="border-2 border-black rounded-md md:w-full shadow-md shadow-black">
                <h3 className="font-bold text-xl overflow-hidden">
                    {props.name}
                </h3>
                <img src={props.img} className="md:h-80 h-36 w-auto mx-auto"></img>
                <p className="overflow-hidden h-32">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos natus quia quasi distinctio fuga ad eos commodi praesentium temporibus. Ea architecto excepturi cum sequi illo beatae iusto vero voluptatem? Facilis?
                </p>
            </div>
        </>
    );
}