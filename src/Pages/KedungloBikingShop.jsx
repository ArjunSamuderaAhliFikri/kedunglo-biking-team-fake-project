import { useEffect, useRef, useState } from "react";
import NavbarKedungloBikingShop from "../components/Fragments/NavbarKedungloBikingShop";
import CarousellContainer from "../components/Fragments/CarousellContainer";
import SearchSection from "../components/Layouts/SearchSection";
import ProductsBikeCard from "../components/Elements/ProductsBikeCard";
import AllProducts from "../components/Layouts/AllProducts";
import { cartProducts } from "../js/cartProducts";
const KedungloBikingShop = () => {
    const [manyProductInHamper, setManyProductInHamper] = useState(null);
    const manyProduct = useRef(null);
    const handleAddProduct = () => {
        setManyProductInHamper(manyProductInHamper + 1);
    }
    useEffect(() => {
        if(manyProductInHamper == null) {
            manyProduct.current.classList.add('hidden');
        } else {
            manyProduct.current.classList.replace('hidden', 'block');
        }
    }, [manyProductInHamper]);
    return (
        <>
        <NavbarKedungloBikingShop />
        <CarousellContainer />
            <section className="flex flex-col gap-5 w-full px-5 bg-slate-300 justify-center items-center">
                <SearchSection>
                    <div className="flex justify-center items-center relative">
                        <div ref={manyProduct} className="absolute -top-2 -right-3 w-5 h-5 scale-105 text-center rounded-full font-inter font-semibold bg-white z-10">{manyProductInHamper}</div>
                        <i onClick={() => alert(`banyak product yang anda beli : ${manyProductInHamper}`)} className="fa-solid fa-cart-shopping text-xl text-slate-700 hover:text-slate-900 cursor-pointer"></i>
                    </div>
                </SearchSection>
                <AllProducts>
                    <h1 className="font-inter p-2 ml-3 font-bold text-slate-900 capitalize text-2xl">sepeda balap shop</h1>
                    <ProductsBikeCard handleAddProduct={handleAddProduct} cartProducts={cartProducts}/>
                </AllProducts>
            </section>
            <div className="w-[75%] h-[550px] bg-slate-500/50 rounded-md shadow p-1 mx-auto my-10">
                <h3></h3>
            </div>
        </>
    )
}

export default KedungloBikingShop;