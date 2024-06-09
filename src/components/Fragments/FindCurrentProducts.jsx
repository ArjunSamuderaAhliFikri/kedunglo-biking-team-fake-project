import { forwardRef, useEffect, useRef, useState } from "react";
import CardProduct from "./CardProduct";
import { handleSearchProducts } from "../../js/cartProducts";
const FindCurrentProducts = forwardRef((props, ref) => {
  const { query, cartProducts, handleAddCurrentProduct, loading } = props;
  const searchProducts = handleSearchProducts(cartProducts, query);

  useEffect(() => {
    const showEmptyProduct = () => {
      if (searchProducts == undefined) {
        ref.current.style.display = "none";
      } else if (searchProducts.length == 0) {
        ref.current.style.display = "block";
      } else {
        ref.current.style.display = "none";
      }
    };
    return () => showEmptyProduct();
  }, [loading]);

  const handleLoadingSearch = (response) => {
    return new Promise((resolve, reject) => {
      if (response.length > 0 && response !== undefined) {
        setTimeout(() => {
          resolve(response);
        }, 4000);
      } else {
        setTimeout(() => {
          reject(new Error("error"));
        }, 4000);
      }
    });
  };

  // useEffect(() => {
  //   const handleLoading = () => {
  //     try {
  //       loadingSearch(searchProducts);
  //       setLoading(true);
  //       alert("true");
  //     } catch (err) {
  //       setLoading(false);
  //       alert(new Error("product tidak ada"));
  //     } finally {
  //       setLoading(false);
  //       alert("searching product is done");
  //     }
  //   };

  //   return () => handleLoading();
  // }, [searchProducts]);

  return (
    <>
      {loading == true && (
        <div className="text-center text-slate-600 capitalize font-semibold text-xl">
          loading...
        </div>
      )}
      <div ref={ref}>{loading ? "" : "product tidak ada!"}</div>
      {!loading &&
        searchProducts !== undefined &&
        searchProducts.length > 0 && (
          <div className="flex flex-col justify-center items-start w-[90%] mx-auto">
            <h1 className="font-inter text-slate-800 font-semibold text-2xl capitalize p-2">
              mungkin yang anda cari :
            </h1>
            <div className="flex justify-center items-center gap-5">
              <Products
                searchProducts={searchProducts}
                handleAddCurrentProduct={handleAddCurrentProduct}
              />
            </div>
            <div className="grid grid-flow-col auto-cols-[270px] gap-3 overflow-x-auto w-full p-2 scale-95 place-items-start"></div>
          </div>
        )}
    </>
  );
});

function Products({ searchProducts, handleAddCurrentProduct }) {
  return searchProducts.map((product) => (
    <CardProduct
      handleAddCurrentProduct={handleAddCurrentProduct}
      product={product}
      key={product.id}
    />
  ));
}
export default FindCurrentProducts;
