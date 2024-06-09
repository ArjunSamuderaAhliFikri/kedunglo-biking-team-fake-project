import { useEffect, useRef, useState } from "react";
import NavbarKedungloBikingShop from "../components/Layouts/NavbarKedungloBikingShop";
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
import WrapperItemPalette from "../components/Elements/WrapperItemPalette";
import SetterQuantityProduct from "../components/Fragments/SetterQuantityProduct";
import WrapperButtonBuyDelete from "../components/Fragments/WrapperButtonBuyDelete";
import ShopSection from "../components/Layouts/ShopSection";
import DetailProduct from "../components/Layouts/DetailProduct";
import DetailProductsUser from "../components/Fragments/DetailProductsUser";
import HeroMenu from "../components/Layouts/HeroMenu";
import { handleSearchProducts } from "../js/cartProducts";
const KedungloBikingShop = () => {
  const [addProductUser, setAddProductUser] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const inputElement = useRef();
  const keranjang = useRef(null);
  const emptyProduct = useRef(null);
  const total = useTotalPrice();
  const dispatch = useTotalPriceDispatch;
  const searchProducts = handleSearchProducts(cartProducts, query);
  console.log(searchProducts);

  const handleChangeQuery = (inputText) => {
    if (!inputText) {
      return;
    } else {
      setLoading(true);
      setQuery(inputText);
      emptyProduct.current.style.display = "none";
    }

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  const handleOnChangeQuery = (setInput, event) => {
    setInput(event);
    if (loading == false || searchProducts == [] || loading == true) {
      emptyProduct.current.style.display = "none";
    }
  };

  const handleCloseKeranjang = (e) => {
    e.stopPropagation();
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

  useEffect(() => {
    const handleCloseWindowCart = () => {
      document.addEventListener("click", function (event) {
        if (event.target.id) {
          keranjang.current.classList.replace("block", "hidden");
        }
      });
    };
    return () => handleCloseWindowCart();
  }, []);

  return (
    <main className="relative overflow-x-hidden">
      <NavbarKedungloBikingShop />
      <HeroMenu />
      <ShopSection>
        <SearchSection
          handleOnChangeQuery={handleOnChangeQuery}
          loading={loading}
          handleChangeQuery={handleChangeQuery}
          isPlaceholder="apa yang anda cari?"
          ref={inputElement}
        >
          <ShoppingCart
            addProductUser={addProductUser}
            handleOpenShopping={handleOpenShopping}
          />
        </SearchSection>
        <AllProducts
          ref={emptyProduct}
          loading={loading}
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
      {/* TODO */}
      {/* TODO */}
      <div
        id={1}
        ref={keranjang}
        className="top-0 left-0 w-full h-full bg-slate-900/50 shadow hidden fixed"
      >
        <div className="w-[75%] max-w-[900px] border-2 border-slate-500/25 rounded-md shadow p-1 mx-auto my-10 scale-95 z-50 bg-slate-100">
          <ButtonCloseShoppingCart
            keranjang={keranjang}
            onClose={handleCloseKeranjang}
          />
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

            <DetailProductsUser
              totalPrice={totalPrice}
              addProductUser={addProductUser}
              setCurrentProduct={setCurrentProduct}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default KedungloBikingShop;
