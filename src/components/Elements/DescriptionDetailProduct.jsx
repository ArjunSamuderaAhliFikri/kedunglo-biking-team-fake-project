import Header from "./Header";
const DescriptionDetailProduct = ({ title, description }) => {
  return (
    <div className="w-[70%] flex flex-col justify-center items-start ml-7">
      <Header classname="text-slate-800 font-semibold text-xl font-inter">
        {title}
      </Header>
      <p className="font-normal text-slate-700">{description}</p>
    </div>
  );
};

export default DescriptionDetailProduct;
