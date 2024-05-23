const ButtonCloseShoppingCart = ({ onClose }) => {
  return (
    <div
      onClick={onClose}
      className="grid place-items-center w-[30px] h-[30px] bg-red-500 text-white font-semibold font-inter cursor-pointer absolute -top-4 -right-3 hover:bg-red-700 rounded-full"
    >
      X
    </div>
  );
};

export default ButtonCloseShoppingCart;
