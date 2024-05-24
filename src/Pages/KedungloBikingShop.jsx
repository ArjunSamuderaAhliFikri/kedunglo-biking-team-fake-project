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
import WrapperItemPalette from "../components/Elements/WrapperItemPalette";
import SetterQuantityProduct from "../components/Fragments/SetterQuantityProduct";
import WrapperButtonBuyDelete from "../components/Fragments/WrapperButtonBuyDelete";
import TotalPriceDescription from "../components/Fragments/TotalPriceDescription";
import ProductsCartUser from "../components/Fragments/ProductsCartUser";
import ShopSection from "../components/Layouts/ShopSection";
import DetailProduct from "../components/Layouts/DetailProduct";
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
      <ShopSection>
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
      </ShopSection>

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

                {/* detail some product */}
                <DetailProduct currentProduct={currentProduct}>
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
                      <WrapperButtonBuyDelete
                        handleDeleteClick={handleDeleteClick}
                        id={currentProduct.id}
                      />
                    </div>
                  </div>
                </DetailProduct>
              </div>
            ) : (
              <Header classname="font-inter font-semibold text-slate-700 capitalize text-xl text-center my-7">
                tidak ada product !
              </Header>
            )}

            <div className="mt-5">
              <TotalPriceDescription totalPrice={totalPrice} />

              {/* card product user */}
              <ProductsCartUser
                addProductUser={addProductUser}
                setCurrentProduct={setCurrentProduct}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default KedungloBikingShop;
