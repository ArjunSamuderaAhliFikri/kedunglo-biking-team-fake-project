import Button from "../Elements/Button";

const WrapperButtonBuyDelete = ({ handleDeleteClick, id }) => {
  return (
    <div className="w-full flex xl:flex-row flex-col xl:mt-0 mt-5 justify-between items-center gap-3 xl:mr-0 ml-0 xl:ml-2">
      <Button classname="xl:mr-0 mr-6 xl:w-1/2 w-3/4 bg-sky-500 px-2 py-1 font-inter capitalize text-slate-100 font-semibold text-md rounded-md transition-all duration-150 hover:bg-sky-700">
        buy
      </Button>
      <Button
        onClick={() => handleDeleteClick(id)}
        classname="xl:mr-0 mr-6 xl:w-1/2 w-3/4 bg-red-500 px-2 py-1 font-inter capitalize text-slate-100 font-semibold text-md rounded-md transition-all duration-150 hover:bg-red-700"
      >
        delete product
      </Button>
    </div>
  );
};
export default WrapperButtonBuyDelete;
