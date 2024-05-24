const TotalPriceDescription = ({ totalPrice }) => {
  return (
    <div className="flex justify-between items-center">
      <h3 className="font-inter font-semibold text-2xl capitalize text-slate-800 ml-4">
        your products :
      </h3>
      <h4 className="font-inter font-normal text-lg capitalize text-slate-800 mr-4">
        total price :{" "}
        <strong className="font-inter">
          Rp.{" "}
          {totalPrice.toLocaleString("id-ID", {
            styles: "currency",
            currency: "IDR",
          })}
        </strong>
      </h4>
    </div>
  );
};
export default TotalPriceDescription;
