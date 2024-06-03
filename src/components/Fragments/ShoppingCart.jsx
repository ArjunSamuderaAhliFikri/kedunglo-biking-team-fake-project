import { forwardRef, useEffect, useRef } from "react";

const ShoppingCart = ({ addProductUser, handleOpenShopping }) => {
  const manyProduct = useRef(null);
  useEffect(() => {
    if (addProductUser.length == 0) {
      manyProduct.current.classList.add("hidden");
    } else {
      manyProduct.current.classList.replace("hidden", "block");
    }
  }, [addProductUser]);
  return (
    <div className="flex justify-center items-center relative">
      <div
        ref={manyProduct}
        className="absolute -top-2 -right-3 w-5 h-5 scale-105 text-center rounded-full font-inter font-semibold bg-white z-8"
      >
        {addProductUser.length}
      </div>
      <i
        onClick={() => handleOpenShopping()}
        className="fa-solid fa-cart-shopping text-xl text-slate-700 hover:text-slate-900 cursor-pointer"
      ></i>
    </div>
  );
};

export default ShoppingCart;
