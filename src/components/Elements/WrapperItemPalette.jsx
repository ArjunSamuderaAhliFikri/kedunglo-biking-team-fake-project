import ItemColorPalette from "./ItemColorPalette";
const WrapperItemPalette = () => {
  return (
    <div className="xl:w-fit w-1/2 flex justify-center items-center xl:mx-0 mr-7 gap-4 bg-slate-300 px-4 py-1 rounded-full">
      <ItemColorPalette backgroundColor="red" />
      <ItemColorPalette backgroundColor="green" />
      <ItemColorPalette backgroundColor="blue" />
      <ItemColorPalette backgroundColor="emerald" />
    </div>
  );
};

export default WrapperItemPalette;
