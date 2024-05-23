import { useEffect, useRef, useState } from "react";
import NavbarKedungloBikingShop from "../components/Fragments/NavbarKedungloBikingShop";
import CarousellContainer from "../components/Fragments/CarousellContainer";
import SearchSection from "../components/Layouts/SearchSection";
import ProductsBikeCard from "../components/Elements/ProductsBikeCard";
import AllProducts from "../components/Layouts/AllProducts";
import { cartProducts } from "../js/cartProducts";
import {
  useTotalPrice,
  useTotalPriceDispatch,
} from "../Context/TotalPriceContext";
import ShoppingCart from "../components/Fragments/ShoppingCart";
import Header from "../components/Elements/Header";
import ButtonCloseShoppingCart from "../components/Elements/ButtonCloseShoppingCart";
import ImageCurrentProduct from "../components/Fragments/ImageCurrentProduct";
import DescriptionDetailProduct from "../components/Elements/DescriptionDetailProduct";
import Button from "../components/Elements/Button";
import WrapperItemPalette from "../components/Elements/WrapperItemPalette";
import SetterQuantityProduct from "../components/Fragments/SetterQuantityProduct";
const KedungloBikingShop = () => {
  const [addProductUser, setAddProductUser] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [query, setQuery] = useState("");

  const keranjang = useRef(null);
  const total = useTotalPrice();
  const dispatch = useTotalPriceDispatch;
  const handleCloseKeranjang = () => {
    keranjang.current.classList.add("hidden");
  };

  const handleOpenShopping = () => {
    keranjang.current.classList.replace("hidden", "block");
  };

  const handleAddProduct = (item, id) => {
    if (addProductUser.length >= 0) {
      if (addProductUser.find((product) => product.id === id)) {
        const nextAddProductUser = addProductUser.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
        setAddProductUser(nextAddProductUser);
      } else {
        setAddProductUser([...addProductUser, item]);
      }
    }
  };

  const handleDeleteClick = (id) => {
    if (addProductUser.find((product) => product.id === id)) {
      const findItem = addProductUser.find((product) => product.id === id);
      setTotalPrice(totalPrice - findItem.price * findItem.quantity);
      setAddProductUser(addProductUser.filter((product) => product.id != id));
      setCurrentProduct(addProductUser[1]);
    } else {
      setAddProductUser([...addProductUser.slice(1, addProductUser.length)]);
      setCurrentProduct(addProductUser[0]);
      const findFirstItem = addProductUser[0].price;
      setTotalPrice(totalPrice - findFirstItem);
    }
    if (addProductUser.length == 1) {
      setCurrentProduct(null);
    }
  };

  const handleCountQuantityProduct = (id) => {
    if (addProductUser.find((product) => product.id === id)) {
      const nextAddProductUser = addProductUser.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
      setAddProductUser(nextAddProductUser);
      setCurrentProduct(
        nextAddProductUser.find((product) => product.id === id)
      );
    }
  };

  const handleDecrementQuantityProduct = (id) => {
    const findSameItem = addProductUser.find((product) => product.id === id);
    if (findSameItem.quantity <= 1) return;
    if (findSameItem) {
      const nextAddProductUser = addProductUser.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity - 1 }
          : product
      );
      setAddProductUser(nextAddProductUser);
      setCurrentProduct(
        nextAddProductUser.find((product) => product.id === id)
      );
    }
  };

  useEffect(() => {
    if (addProductUser.length > 0) {
      const sum = addProductUser.reduce((acc, items) => {
        const findCurrentItem = cartProducts.find(
          (product) => product.id === items.id
        );
        return acc + items.quantity * findCurrentItem.price;
      }, 0);
      setTotalPrice(sum);
    }
  }, [addProductUser, currentProduct]);
  return (
    <main className="relative overflow-x-hidden">
      <NavbarKedungloBikingShop />
      <CarousellContainer />
      <section className="flex flex-col gap-5 w-full px-5 bg-slate-300 justify-center items-center">
        <SearchSection
          query={query}
          setQuery={setQuery}
          isPlaceholder="apa yang anda cari?"
        >
          <ShoppingCart
            addProductUser={addProductUser}
            handleOpenShopping={handleOpenShopping}
          />
        </SearchSection>
        <AllProducts
          setAddProductUser={setAddProductUser}
          query={query}
          cartProducts={cartProducts}
        >
          <Header>sepeda balap shop</Header>
          <ProductsBikeCard
            handleAddProduct={handleAddProduct}
            cartProducts={cartProducts}
          />
        </AllProducts>
      </section>

      <div
        ref={keranjang}
        className="transition-all duration-500 w-full h-full bg-slate-900/60 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden hidden"
      >
        <div className="w-[75%] max-w-[900px] bg-white border-2 border-slate-500/25 rounded-md shadow p-1 mx-auto my-10 scale-95 z-50">
          <div className="w-full h-[5px] relative">
            <ButtonCloseShoppingCart
              keranjang={keranjang}
              onClose={handleCloseKeranjang}
            />
          </div>
          <Header classname="font-inter font-bold capitalize text-slate-900 text-2xl p-5">
            keranjang saya
          </Header>
          <div className="flex flex-col">
            {currentProduct != null ? (
              <div className="flex justify-center items-center">
                {/* image some product */}
                <ImageCurrentProduct
                  alternative="product user"
                  source={currentProduct.source}
                />

                {/* TODO */}

                {/* detail some product */}
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

                  {/* color palette product */}

                  <div className="w-[90%] flex flex-col justify-between items-start gap-5 mt-2 ml-7">
                    <WrapperItemPalette />
                    <div className="flex w-full">
                      {/* count wrapper */}
                      <SetterQuantityProduct
                        handleCountQuantityProduct={handleCountQuantityProduct}
                        id={currentProduct.id}
                        quantity={currentProduct.quantity}
                        handleDecrementQuantityProduct={
                          handleDecrementQuantityProduct
                        }
                      />

                      {/* button buy and delete product wrapper */}
                      <div className="w-full flex justify-between items-center gap-3 ml-2">
                        <Button classname="w-1/2 bg-sky-500 px-2 py-1 font-inter capitalize text-slate-100 font-semibold text-md rounded-md transition-all duration-150 hover:bg-sky-700">
                          buy
                        </Button>
                        <Button
                          onClick={() => handleDeleteClick(currentProduct.id)}
                          classname="w-1/2 bg-red-500 px-2 py-1 font-inter capitalize text-slate-100 font-semibold text-md rounded-md transition-all duration-150 hover:bg-red-700"
                        >
                          delete product
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Header classname="font-inter font-semibold text-slate-700 capitalize text-xl text-center my-7">
                tidak ada product !
              </Header>
            )}

            <div className="mt-5">
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

              {/* card product user */}
              <div className="grid grid-flow-col auto-cols-max gap-3 px-4 py-2 mt-1 overflow-y-hidden overflow-x-auto">
                {addProductUser.length > 0 ? (
                  addProductUser.map((productUser) => (
                    <div
                      key={productUser.id}
                      onClick={() => setCurrentProduct(productUser)}
                      className="w-[120px] h-[180px] bg-red-500 rounded-md overflow-hidden transition-all duration-300 cursor-pointer hover:opacity-75 hover:scale-95"
                    >
                      <img
                        className="w-full h-full object-cover"
                        src={productUser.source}
                        alt="product user"
                      />
                    </div>
                  ))
                ) : (
                  <h3 className="translate-x-[85%] text-center capitalize font-inter text-slate-700 my-5">
                    anda belum menambahkan produk apapun!
                  </h3>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default KedungloBikingShop;
