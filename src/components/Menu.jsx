import { useState } from "react";
export default function Menu() {
    return (
        <section className="mx-auto">
            <ul className="flex flex-row justify-between items-center bg-slate-300/50 w-[85%] mx-auto my-7 capitalize font-poppins p-3 rounded-md font-semibold text-slate-700">
                <li className="hover:text-slate-900 relative after:content-[' '] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-[2.5px] after:bg-sky-500 after:mt-2 cursor-pointer">home</li>
                <li className="hover:text-slate-900 relative after:left-0 after:bottom-0 after:w-24 after:h-[2.5px] after:bg-sky-500 after:mt-2 cursor-pointer">biking shop</li> 
                <li className="hover:text-slate-900 relative after:left-0 after:bottom-0 after:w-16 after:h-[2.5px] after:bg-sky-500 after:mt-2 cursor-pointer">friends</li> 
                <li className="hover:text-slate-900 relative after:left-0 after:bottom-0 after:w-14 after:h-[2.5px] after:bg-sky-500 after:mt-2 cursor-pointer">history</li> 
            </ul>
            <div>


            <div className="w-full overflow-hidden pl-4">
                <h1 className="font-poppins capitalize text-slate-800 font-semibold text-lg pl-2 my-4">highlight's news :</h1>
                <ul className="grid grid-flow-col auto-cols-[36%] gap-4 overflow-x-auto mx-auto">
                    <li className="w-full rounded-md overflow-hidden transition-all duration-300 cursor-pointer group">
                        <img className="w-full h-full transition-all duration-300 group-hover:scale-95 group-hover:opacity-85" src="../public/img/bike-highlight.jpg" alt="" />
                    </li>
                    <li className="w-full rounded-md overflow-hidden transition-all duration-300 cursor-pointer group">
                        <img className="w-full h-full transition-all duration-300 group-hover:scale-95 group-hover:opacity-85" src="../public/img/kaos-kamar-kulon.jpg" alt="" />
                    </li>
                    <li className="w-full rounded-md overflow-hidden transition-all duration-300 cursor-pointer group">
                        <img className="w-full h-full transition-all duration-300 group-hover:scale-95 group-hover:opacity-85" src="../public/img/jersey-kedunglo-biking-team.jpg" alt="" />
                    </li>
                    <li className="w-full rounded-md overflow-hidden transition-all duration-300 cursor-pointer group">
                        <img className="w-full h-full transition-all duration-300 group-hover:scale-95 group-hover:opacity-85" src="../public/coffee mocca.jpg" alt="" />
                    </li>
                    <li className="w-full rounded-md overflow-hidden transition-all duration-300 cursor-pointer group">
                        <img className="w-full h-full transition-all duration-300 group-hover:scale-95 group-hover:opacity-85" src="../public/coffee mocca.jpg" alt="" />
                    </li>
                </ul>
            </div>
            </div>
        </section>
    )
}