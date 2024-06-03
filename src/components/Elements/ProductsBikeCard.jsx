import CardProduct from "../Fragments/CardProduct";
const ProductsBikeCard = ({ cartProducts, handleAddProduct }) => {
  return (
    <div className="grid grid-flow-col auto-cols-[20%] 2xl:auto-cols-[15%] 2xl:gap-5 gap-2 overflow-x-scroll w-full p-2 scale-95">
      {cartProducts.map((product) => (
        <div key={product.id} className="group w-full overflow-hidden">
          <div className="flex flex-col justify-center items-center bg-slate-200 w-full max-w-[250px] rounded-md overflow-hidden transition-all duration-150 group-hover:cursor-pointer group-hover:scale-95 group-hover:opacity-80">
            <img
              className="w-full h-full object-cover"
              src={product.source}
              alt="bike"
            />
            <div className="w-full my-3 px-5 mx-auto">
              <h3 className="font-inter font-semibold capitalize text-slate-800 my-1 text-lg">
                {product.title.substring(0, 20)}...
              </h3>
              <p className="text-left font-inter text-md text-slate-700">
                {product.description}...
              </p>
            </div>
            <div className="flex justify-between items-center w-[100%]">
              <h3 className="font-inter text-slate-900 capitalize text-md ml-1 font-semibold">
                rp{" "}
                {product.price.toLocaleString("id-ID", {
                  styles: "currency",
                  currency: "IDR",
                })}
              </h3>
              <button
                onClick={() => handleAddProduct(product, product.id)}
                className="w-[50%] bg-sky-500 py-1 my-2 mx-auto rounded-md capitalize font-inter text-slate-100 font-semibold transition-all duration-150 hover:bg-sky-700"
                type="button"
              >
                add to cart
              </button>
            </div>
          </div>
        </div>
        // <CardProduct addProductUser={addProductUser} handleAddProductUser={handleAddProductUser} key={product.id} id={product.id} source={product.source} title={(product.title).substring(0, 20)} description={(product.description).substring(0, 95)} price={(product.price).toLocaleString('id-ID', {styles: 'currency', currency: 'IDR'})}/>
      ))}
    </div>
  );
};
export default ProductsBikeCard;
