import Header from "./Header";
const DescriptionDetailProduct = ({ title, description }) => {
  return (
    <div className="w-[70%] flex flex-col justify-center items-center xl:items-start">
      <Header classname="text-xl font-semibold text-center text-slate-800 font-inter xl:text-left">
        {title}
      </Header>
      <p className="font-normal text-center text-slate-700 xl:text-left">
        {description}
      </p>
    </div>
  );
};

export default DescriptionDetailProduct;
