import ItemColorPalette from "./ItemColorPalette";
const WrapperItemPalette = () => {
  return (
    <div className="w-fit flex justify-center items-center gap-4 bg-slate-300 px-4 py-1 rounded-full">
      <ItemColorPalette backgroundColor="red" />
      <ItemColorPalette backgroundColor="green" />
      <ItemColorPalette backgroundColor="blue" />
      <ItemColorPalette backgroundColor="emerald" />
    </div>
  );
};

export default WrapperItemPalette;
