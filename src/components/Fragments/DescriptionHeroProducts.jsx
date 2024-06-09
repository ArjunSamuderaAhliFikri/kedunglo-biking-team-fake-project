import Header from "../Elements/Header";

const DescriptionHeroProducts = ({ currentPrice, children, description }) => {
  return (
    <div className="absolute left-[3%] bottom-[5%]">
      <Header classname="text-slate-200 font-poppins capitalize font-semibold text-2xl">
        {children}
      </Header>
      <p className="text-slate-300 text-sm capitalize line mt-1">
        {description}
      </p>
      <Header classname="bg-slate-700 w-fit px-2 py-1 mt-3 rounded-md shadow text-slate-200 font-semibold text-xl">
        {currentPrice.toLocaleString("id-ID", {
          style: "currency",
          currency: "IDR",
        })}
      </Header>
    </div>
  );
};

export default DescriptionHeroProducts;
