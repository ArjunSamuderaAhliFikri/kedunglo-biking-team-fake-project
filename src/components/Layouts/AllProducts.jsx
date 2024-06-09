import { forwardRef } from "react";
import FindCurrentProducts from "../Fragments/FindCurrentProducts";

const AllProducts = forwardRef((props, ref) => {
  const { children, query, cartProducts, setAddProductUser, loading } = props;
  const handleAddCurrentProduct = (product) =>
    setAddProductUser((products) => [...products, product]);
  return (
    <div className="flex flex-col justify-between items-start p-2 rounded-md">
      <FindCurrentProducts
        ref={ref}
        query={query}
        cartProducts={cartProducts}
        loading={loading}
        handleAddCurrentProduct={handleAddCurrentProduct}
      />
      {children}
    </div>
  );
});
export default AllProducts;
