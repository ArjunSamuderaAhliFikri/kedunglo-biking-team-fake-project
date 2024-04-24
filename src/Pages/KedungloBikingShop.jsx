import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const KedungloBikingShop = () => {
    const [position, setPosition] = useState(0);

    useEffect(() => {
        if(position <= 75) {
            const setMoveCarousell = setInterval(() => {
                setPosition(position + 25);
            }, 3500);
            setTimeout(() => {
                clearInterval(setMoveCarousell);
            }, 5000);
        } else {
            setPosition(0);
        }
    }, [position]);
    return (
        <>
            <nav className="min-w-full min-h-[65px] bg-gradient-to-bl from-yellow-400 via-yellow-500 to-orange-400 flex justify-between items-center px-[60px]">
                <h1
                className="capitalize font-semibold text-slate-100 text-xl font-inter">kedunglo biking shop</h1>
                <ul
                className="flex justify-evenly items-center gap-12 font-inter capitalize text-slate-100 font-normal">
                    <li>
                        <Link>home</Link>
                    </li>
                    <li>
                        <Link>last rute</Link>
                    </li>
                    <li>
                        <Link>history</Link>
                    </li>
                    <li>
                        <Link>rating us</Link>
                    </li>
                </ul>
            </nav>

            <div className="relative bg-red-500 w-full max-w-[85%] h-[250px] my-5 mx-auto rounded-md overflow-hidden">
                    <div className={`absolute top-0 left-0 -translate-x-[${position}%] w-[400%] h-full flex flex-row justify-center items-center transition-all duration-1000`}>
                        <div className="w-full h-full">
                            <img className="w-full h-full object-cover" src="../public/img/carousell-bike-1.jpg" alt="bike" />
                        </div>
                        <div className="w-full h-full">
                            <img className="w-full h-full object-cover" src="../public/img/carousell-bike-2.jpg" alt="bike" />
                        </div>
                        <div className="w-full h-full">
                            <img className="w-full h-full object-cover" src="../public/img/carousell-bike-3.jpg" alt="bike" />
                        </div>
                        <div className="w-full h-full">
                            <img className="w-full h-full object-cover" src="../public/img/carousell-bike-4.jpg" alt="bike" />
                        </div>
                    </div>
            </div>
            
            <section className="flex flex-col gap-5 w-full px-5 bg-slate-300 justify-center items-center">
                <form className="flex justify-center items-center mt-5 p-2">
                    <input className="w-[400px] px-3 py-[4px] rounded-tl-md rounded-bl-md outline-none placeholder:font-inter placeholder:text-sm placeholder:opacity-60" type="text" placeholder="Search Product..."/>
                    <i className="fa-solid fa-magnifying-glass bg-white p-[8px] rounded-tr-md rounded-br-md"></i>
                </form>
                    <div className="flex justify-between items-center bg-emerald-500">
                        {/* card section */}
                        <div className="grid grid-flow-col auto-cols-[40%] gap-2 overflow-x-auto w-1/2 p-2">
                            <div className="group w-full overflow-hidden">
                                <div className="flex flex-col justify-center items-center bg-slate-200 w-full max-w-[250px] rounded-md overflow-hidden transition-all duration-150 group-hover:cursor-pointer group-hover:scale-95 group-hover:opacity-80">
                                    <img className="w-full h-full object-cover" src="../public/img/sepeda-balap-1.jpg" alt="bike" />
                                    <div className="w-full my-3 px-5 mx-auto"> 
                                        <h3 className="font-inter font-semibold capitalize text-slate-800 my-1 text-lg">polygon series 3</h3>
                                        <p className="text-left font-inter text-md text-slate-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio adipisci repudiandae.</p>
                                    </div>
                                    <button className="w-[90%] bg-sky-500 py-1 my-2 mx-auto rounded-md capitalize font-inter text-slate-100 font-semibold transition-all duration-150 hover:bg-sky-700" type="button">add to cart</button>
                                </div>
                            </div>
                            <div className="group w-full overflow-hidden">
                                <div className="flex flex-col justify-center items-center bg-slate-200 w-full max-w-[250px] rounded-md overflow-hidden transition-all duration-150 group-hover:cursor-pointer group-hover:scale-95 group-hover:opacity-80">
                                    <img className="w-full h-full object-cover" src="../public/img/sepeda-balap-2.jpg" alt="bike" />
                                    <div className="w-full my-3 px-5 mx-auto"> 
                                        <h3 className="font-inter font-semibold capitalize text-slate-800 my-1 text-lg">polygon series 3</h3>
                                        <p className="text-left font-inter text-md text-slate-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio adipisci repudiandae.</p>
                                    </div>
                                    <button className="w-[90%] bg-sky-500 py-1 my-2 mx-auto rounded-md capitalize font-inter text-slate-100 font-semibold transition-all duration-150 hover:bg-sky-700" type="button">add to cart</button>
                                </div>
                            </div>
                            <div className="group w-full overflow-hidden">
                                <div className="flex flex-col justify-center items-center bg-slate-200 w-full max-w-[250px] rounded-md overflow-hidden transition-all duration-150 group-hover:cursor-pointer group-hover:scale-95 group-hover:opacity-80">
                                    <img className="w-full h-full object-cover" src="../public/img/sepeda-balap-3.jpg" alt="bike" />
                                    <div className="w-full my-3 px-5 mx-auto"> 
                                        <h3 className="font-inter font-semibold capitalize text-slate-800 my-1 text-lg">polygon series 3</h3>
                                        <p className="text-left font-inter text-md text-slate-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio adipisci repudiandae.</p>
                                    </div>
                                    <button className="w-[90%] bg-sky-500 py-1 my-2 mx-auto rounded-md capitalize font-inter text-slate-100 font-semibold transition-all duration-150 hover:bg-sky-700" type="button">add to cart</button>
                                </div>
                            </div>
                            <div className="group w-full overflow-hidden">
                                <div className="flex flex-col justify-center items-center bg-slate-200 w-full max-w-[250px] rounded-md overflow-hidden transition-all duration-150 group-hover:cursor-pointer group-hover:scale-95 group-hover:opacity-80">
                                    <img className="w-full h-full object-cover" src="../public/img/sepeda-balap-2.jpg" alt="bike" />
                                    <div className="w-full my-3 px-5 mx-auto"> 
                                        <h3 className="font-inter font-semibold capitalize text-slate-800 my-1 text-lg">polygon series 3</h3>
                                        <p className="text-left font-inter text-md text-slate-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio adipisci repudiandae.</p>
                                    </div>
                                    <button className="w-[90%] bg-sky-500 py-1 my-2 mx-auto rounded-md capitalize font-inter text-slate-100 font-semibold transition-all duration-150 hover:bg-sky-700" type="button">add to cart</button>
                                </div>
                            </div>
                            <div className="group w-full overflow-hidden">
                                <div className="flex flex-col justify-center items-center bg-slate-200 w-full max-w-[250px] rounded-md overflow-hidden transition-all duration-150 group-hover:cursor-pointer group-hover:scale-95 group-hover:opacity-80">
                                    <img className="w-full h-full object-cover" src="../public/img/sepeda-balap-2.jpg" alt="bike" />
                                    <div className="w-full my-3 px-5 mx-auto"> 
                                        <h3 className="font-inter font-semibold capitalize text-slate-800 my-1 text-lg">polygon series 3</h3>
                                        <p className="text-left font-inter text-md text-slate-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio adipisci repudiandae.</p>
                                    </div>
                                    <button className="w-[90%] bg-sky-500 py-1 my-2 mx-auto rounded-md capitalize font-inter text-slate-100 font-semibold transition-all duration-150 hover:bg-sky-700" type="button">add to cart</button>
                                </div>
                            </div>
                            <div className="group w-full overflow-hidden">
                                <div className="flex flex-col justify-center items-center bg-slate-200 w-full max-w-[250px] rounded-md overflow-hidden transition-all duration-150 group-hover:cursor-pointer group-hover:scale-95 group-hover:opacity-80">
                                    <img className="w-full h-full object-cover" src="../public/img/sepeda-balap-2.jpg" alt="bike" />
                                    <div className="w-full my-3 px-5 mx-auto"> 
                                        <h3 className="font-inter font-semibold capitalize text-slate-800 my-1 text-lg">polygon series 3</h3>
                                        <p className="text-left font-inter text-md text-slate-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio adipisci repudiandae.</p>
                                    </div>
                                    <button className="w-[90%] bg-sky-500 py-1 my-2 mx-auto rounded-md capitalize font-inter text-slate-100 font-semibold transition-all duration-150 hover:bg-sky-700" type="button">add to cart</button>
                                </div>
                            </div>
                        </div>

                        {/* prize section */}
                        <div className="bg-red-500 w-[45%] h-[345px]">
                            <h1>total prize</h1>
                        </div>
                    </div>
            </section>
        </>
    )
}

export default KedungloBikingShop;