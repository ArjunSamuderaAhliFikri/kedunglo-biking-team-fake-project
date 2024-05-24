import DescriptionDetailProduct from "../Elements/DescriptionDetailProduct";
import Header from "../Elements/Header";

const DetailProduct = ({ children, currentProduct }) => {
  return (
    <div className="flex flex-col justify-center items-start gap-1 ml-5">
      {/* price product */}
      <Header classname="text-slate-800 font-bold text-2xl font-inter my-1 ml-2">
        Rp{" "}
        {currentProduct.price.toLocaleString("id-ID", {
          styles: "currency",
          currency: "IDR",
        })}
      </Header>

      {/* description product */}
      <DescriptionDetailProduct
        title={currentProduct.title}
        description={currentProduct.description}
      />
      {children}
    </div>
  );
};

export default DetailProduct;
