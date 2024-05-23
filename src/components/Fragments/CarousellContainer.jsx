import { useEffect, useRef, useState } from "react";
import ItemImageCarousell from "../Elements/ItemImageCarousell";
const CarousellContainer = () => {
  const [position, setPosition] = useState(0);
  const carousell = useRef(null);
  useEffect(() => {
    if (position > 75) {
      setPosition(0);
    }

    if (position <= 75) {
      setTimeout(() => {
        setPosition(position + 25);
      }, 3000);
    }
  }, [carousell.current, position]);
  return (
    <div className="bg-red-500 w-full max-w-[85%] h-[250px] my-5 mx-auto rounded-md overflow-hidden">
      <div
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
