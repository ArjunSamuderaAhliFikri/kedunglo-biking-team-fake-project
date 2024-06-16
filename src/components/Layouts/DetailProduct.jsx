import DescriptionDetailProduct from "../Elements/DescriptionDetailProduct";
import Header from "../Elements/Header";

const DetailProduct = ({ children, currentProduct }) => {
  return (
    <div className="flex flex-col justify-start xl:justify-center items-center xl:items-start gap-1 xl:ml-5">
      {/* price product */}
      <Header classname="text-slate-800 font-bold text-2xl font-inter mx-6 my-3 xl:my-1 xl:ml-2">
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
