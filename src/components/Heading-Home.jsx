import {useState} from 'react';
export default function HeadingHome() {
    const [status, setStatus] = useState(true);
    let classButtonSection;
    let classButton;
    if(status) {
        classButton = "transition-all text-white duration-300 absolute rounded-bl-lg rounded-br-lg px-3 w-20 -bottom-32 bg-slate-400 left-1/2 -translate-x-1/2 outline-none"
        classButtonSection = 'transition-all duration-500 w-full h-28 bg-yellow-500';
    } else {
        classButton = "transition-all text-white duration-300 absolute rounded-bl-lg rounded-br-lg px-3 w-20 -bottom-12 bg-emerald-500 left-1/2 -translate-x-1/2 outline-none"
        classButtonSection = 'transition-all duration-500 w-full h-9 bg-yellow-500';
    }
    return (
        <section className="w-full bg-yellow-500 flex flex-col mx-auto rounded-bl-[30px] rounded-br-[30px] overflow-hidden">
            {/* input section */}
            <div className="flex flex-row justify-center items-center w-full px-5 mt-5">
                <input maxLength={20} className="w-full outline-none rounded-tl-md rounded-bl-md py-[6px] px-3" type="text" placeholder="Cari..."/>
                <i className="fa-solid fa-magnifying-glass bg-slate-200 p-[10px] rounded-tr-md rounded-br-md"></i>
            </div>

            {/* fitur section */}
            <div className="relative flex flex-row justify-around items-center gap-10 font-poppins capitalize mt-9 px-5 font-semibold">
                <div className="flex flex-col justify-center items-center gap-2 text-white text-md">
                    <i className="fa-solid fa-bicycle bg-white px-3 py-2 text-xl rounded-md text-slate-800"></i>
                    bike
                </div>
                <div className="flex flex-col justify-center items-center gap-2 text-white text-md">
                    <i className="fa-solid fa-heart-pulse bg-white px-3 py-2 text-xl rounded-md text-red-500"></i>
                    health
                </div> 
                <div className="flex flex-col justify-center items-center gap-2 text-white text-md">
                    <i className="fa-solid fa-people-group bg-white px-3 py-2 text-xl rounded-md text-slate-800"></i>
                    team
                </div>
                <div className="flex flex-col justify-center items-center gap-2 text-white text-md">
                    <i className="fa-solid fa-location-dot bg-white px-3 py-2 text-xl rounded-md text-red-500"></i>
                    location
                </div>
            <button onClick={() => setStatus(!status)} className={classButton} type="button">V</button>
            </div>

            {/* bottom section */}
            <div className={classButtonSection}></div>
        </section>
    )
}