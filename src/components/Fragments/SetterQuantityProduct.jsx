import Button from "../Elements/Button";

const SetterQuantityProduct = ({
  handleCountQuantityProduct,
  id,
  quantity,
  handleDecrementQuantityProduct,
}) => {
  return (
    <div className="flex items-center justify-center mr-6">
      {/* increment product */}
      <Button
        onClick={() => handleCountQuantityProduct(id)}
        classname="bg-slate-300 w-[32px] h-[32px] border-2 border-slate-400 text-center font-inter font-semibold text-slate-700 hover:bg-slate-400 hover:text-slate-100"
      >
        +
      </Button>

      <div className="w-[32px] h-[32px] flex justify-center items-center font-semibold font-inter">
        {quantity}
      </div>

      {/* decrement product */}
      <Button
        onClick={() => handleDecrementQuantityProduct(id)}
        classname="bg-slate-300 w-[32px] h-[32px] border-2 border-slate-400 text-center font-inter font-semibold text-slate-700 hover:bg-slate-400 hover:text-slate-100"
      >
        -
      </Button>
    </div>
  );
};

export default SetterQuantityProduct;
