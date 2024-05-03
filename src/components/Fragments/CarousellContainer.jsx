import { useEffect, useRef, useState } from "react";
import ItemImageCarousell from "../Elements/ItemImageCarousell";
const CarousellContainer = () => {
    const [position, setPosition] = useState(0);
    const carousell = useRef(null);
    useEffect(() => {
        if(position <= 75) {
            const setMoveCarousell = setInterval(() => {
                setPosition(position => position + 25);
            }, 3500);
            setTimeout(() => {
                clearInterval(setMoveCarousell);
            }, 3500);
        } else {
            setPosition(0);
        }
    }, [position, carousell]);
    return (
        <div className="bg-red-500 w-full max-w-[85%] h-[250px] my-5 mx-auto rounded-md overflow-hidden">
                <div ref={carousell} className={`w-[400%] -translate-x-[${position}%] h-full flex flex-row justify-center items-center transition-all duration-1000`}>
                        <ItemImageCarousell source="../public/img/carousell-bike-1.jpg"/>
                        <ItemImageCarousell source="../public/img/carousell-bike-2.jpg"/>
                        <ItemImageCarousell source="../public/img/carousell-bike-3.jpg"/>
                        <ItemImageCarousell source="../public/img/carousell-bike-4.jpg"/>
                </div>
            </div>
    )
}
export default CarousellContainer;