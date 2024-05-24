import Header from "../Elements/Header";

const ProductsCartUser = ({ addProductUser, setCurrentProduct }) => {
  return (
    <div className="grid grid-flow-col auto-cols-max gap-3 px-4 py-2 mt-1 overflow-y-hidden overflow-x-auto">
      {addProductUser.length > 0 ? (
        addProductUser.map((productUser) => (
          <ImageProduct
            key={productUser.id}
            setCurrentProduct={setCurrentProduct}
            productUser={productUser}
          />
        ))
      ) : (
        <Header classname="translate-x-[85%] text-center capitalize font-inter text-slate-700 my-5">
          anda belum menambahkan produk apapun!
        </Header>
      )}
    </div>
  );
};

function ImageProduct({ setCurrentProduct, productUser }) {
  return (
    <div
      onClick={() => setCurrentProduct(productUser)}
      className="w-[120px] h-[180px] bg-red-500 rounded-md overflow-hidden transition-all duration-300 cursor-pointer hover:opacity-75 hover:scale-95"
    >
      <img
        className="w-full h-full object-cover"
        src={productUser.source}
        alt="product user"
      />
    </div>
  );
}
export default ProductsCartUser;
