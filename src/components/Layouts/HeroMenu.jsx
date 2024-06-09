import { useEffect, useState } from "react";
import useTransitionHero from "../../hooks/useTransitionHero";
import { currentImage, handleChangeImage } from "../../js/transitionHeroImage";
import CartHero from "../Fragments/CartHero";
import DescriptionHeroProducts from "../Fragments/DescriptionHeroProducts";
import useHeroImage from "../../hooks/useHeroImage";

const HeroMenu = () => {
  const images = [
    {
      id: 1,
      img: "../public/img/sepeda-balap-6.jpg",
      title: "Aviator Mountain Version",
      description: "lorem ipsum sit amet dolor hello world helloo",
    },
    {
      id: 2,
      img: "../public/img/example-shirt.jpg",
      title: "Kaos Kamar Kulon",
      description: "kamar kulon limited edition first generation",
    },
  ];

  const imagesTwo = [
    {
      id: 3,
      img: "../public/img/laptop-coding.jpg",
      title: "Macbook M1",
      description: "lorem ipsum sit amet dolor hello world helloo",
    },
    {
      id: 4,
      img: "./public/img/example-shirt.jpg",
      title: "Kaos Kamar Kulon",
      description: "kamar kulon limited edition first generation",
    },
  ];
  const imagesThree = [
    {
      id: 3,
      img: "../public/img/laptop-coding.jpg",
      title: "Macbook M1",
      description: "lorem ipsum sit amet dolor hello world helloo",
    },
    {
      id: 4,
      img: "./public/img/example-shirt.jpg",
      title: "Kaos Kamar Kulon",
      description: "kamar kulon limited edition first generation",
    },
  ];
  const isPrimarySection = useHeroImage(images);
  const isSecondarySection = useHeroImage(imagesTwo);
  const isLastSection = useHeroImage(imagesThree);
  useEffect(() => {
    isPrimarySection;
  }, []);
  return (
    <div className="grid grid-rows-2 grid-flow-col gap-2 bg-slate-300 h-[500px] p-3">
      <CartHero
        currentPrice={150000}
        description={isSecondarySection.description}
        image={isSecondarySection.img}
      >
        {isSecondarySection.title}
      </CartHero>
      <CartHero
        currentPrice={12000}
        description={isLastSection.description}
        image={isLastSection.img}
      >
        {isLastSection.title}
      </CartHero>
      <div
        className={`relative cursor-pointer hover:scale-[98%] hover:opacity-95 transition-all duration-150 row-start-1 row-end-4 col-start-2 col-end-4 rounded-md overflow-hidden bg-no-repeat bg-center bg-cover`}
      >
        <img
          className="absolute size-full object-cover"
          src={isPrimarySection.img}
          alt="product"
        />
        <DescriptionHeroProducts
          description={isPrimarySection.description}
          currentPrice={10000000}
        >
          {isPrimarySection.title}
        </DescriptionHeroProducts>
      </div>
    </div>
  );
};
export default HeroMenu;
