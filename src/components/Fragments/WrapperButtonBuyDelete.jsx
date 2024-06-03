import Button from "../Elements/Button";

const WrapperButtonBuyDelete = ({ handleDeleteClick, id }) => {
  return (
    <div className="w-full flex justify-between items-center gap-3 ml-2">
      <Button classname="w-1/2 bg-sky-500 px-2 py-1 font-inter capitalize text-slate-100 font-semibold text-md rounded-md transition-all duration-150 hover:bg-sky-700">
        buy
      </Button>
      <Button
        onClick={() => handleDeleteClick(id)}
        classname="w-1/2 bg-red-500 px-2 py-1 font-inter capitalize text-slate-100 font-semibold text-md rounded-md transition-all duration-150 hover:bg-red-700"
      >
        delete product
      </Button>
    </div>
  );
};
export default WrapperButtonBuyDelete;
