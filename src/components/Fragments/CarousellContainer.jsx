import { useEffect, useRef, useState } from "react";
import ItemImageCarousell from "../Elements/ItemImageCarousell";
const CarousellContainer = () => {
  const [position, setPosition] = useState(0);
  const carousell = useRef(null);
  const moveCarousell = () => {
    setInterval(() => {
      setPosition(position + 25);
      carousell.current.style.transform = `translateX(-${position}%)`;
    }, 1000);
  };
  useEffect(() => {
    moveCarousell();
  }, []);
  return (
    <div className="bg-red-500 w-full max-w-[85%] h-[250px] my-5 mx-auto rounded-md overflow-hidden">
      <div
        ref={carousell}
        className={`-translate-x-[${position}%] w-[400%] h-full flex flex-row justify-center items-center transition-all duration-1000`}
      >
        <ItemImageCarousell source="../public/img/carousell-bike-1.jpg" />
        <ItemImageCarousell source="../public/img/carousell-bike-2.jpg" />
        <ItemImageCarousell source="../public/img/carousell-bike-3.jpg" />
        <ItemImageCarousell source="../public/img/carousell-bike-4.jpg" />
      </div>
    </div>
  );
};
export default CarousellContainer;
