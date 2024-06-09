import DescriptionHeroProducts from "./DescriptionHeroProducts";

const CartHero = ({ image, currentPrice, description, children }) => {
  return (
    <div
      className={`cursor-pointer hover:scale-[98%] hover:opacity-95 transition-all duration-150 relative rounded-md bg-center bg-no-repeat bg-cover overflow-hidden`}
    >
      <img
        className="absolute size-full object-cover"
        src={image}
        alt="product"
      />
      <DescriptionHeroProducts
        description={description}
        currentPrice={currentPrice}
      >
        {children}
      </DescriptionHeroProducts>
    </div>
  );
};

export default CartHero;
