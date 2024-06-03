import ProductsCartUser from "./ProductsCartUser";
import TotalPriceDescription from "./TotalPriceDescription";

const DetailProductsUser = ({
  totalPrice,
  addProductUser,
  setCurrentProduct,
}) => {
  return (
    <div className="mt-5">
      <TotalPriceDescription totalPrice={totalPrice} />

      {/* card product user */}
      <ProductsCartUser
        addProductUser={addProductUser}
        setCurrentProduct={setCurrentProduct}
      />
    </div>
  );
};
export default DetailProductsUser;
