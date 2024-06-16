const TotalPriceDescription = ({ totalPrice, addProductUser }) => {
  return (
    <div className="flex flex-col items-center justify-between">
      <h3 className="ml-4 font-semibold capitalize font-inter xl:text-2xl text-md text-slate-800">
        {addProductUser.length > 0 && "your products :"}
      </h3>
      <h4 className="mr-4 font-normal capitalize font-inter xl:text-lg text-md text-slate-800">
        {addProductUser.length > 0 && "total price :"}{" "}
        {addProductUser.length > 0 && (
          <strong className="font-inter">
            Rp.{" "}
            {totalPrice.toLocaleString("id-ID", {
              styles: "currency",
              currency: "IDR",
            })}
          </strong>
        )}
      </h4>
    </div>
  );
};
export default TotalPriceDescription;
