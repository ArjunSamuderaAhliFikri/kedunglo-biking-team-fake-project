import { useEffect, useState } from "react";

export default function useHeroImage(images) {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    const on = setInterval(() => {
      if (currentValue < 2) {
        setCurrentValue(currentValue + 1);
        setCurrentImage(images[currentValue]);
      } else {
        setCurrentValue(0);
        setCurrentImage(images[0]);
      }
    }, 3000);

    return () => clearInterval(on);
  }, [currentImage, currentValue]);

  return currentImage;
}
