const ItemColorPalette = ({ backgroundColor }) => {
  return (
    <div
      className={`w-[20px] h-[20px] bg-${backgroundColor}-500 rounded-full border transition-all duration-300 cursor-pointer hover:bg-${backgroundColor}-700`}
    ></div>
  );
};

export default ItemColorPalette;
